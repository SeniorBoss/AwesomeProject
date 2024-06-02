import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import LottieView from 'lottie-react-native';

// Ensure the correct path to your Lottie JSON file
// import loadingAnimation from '../assets/loading-animation.json';

export const TimeSet = () => {
  const [mining, setMining] = useState(false);
  const [minedAmount, setMinedAmount] = useState(0.00001); 
  const [timeLeft, setTimeLeft] = useState(7 * 60 * 60);
  const animation = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadState = async () => {
      try {
        const savedMiningState = await AsyncStorage.getItem('miningState');
        if (savedMiningState) {
          const { savedMinedAmount, savedTimeLeft, savedMining } = JSON.parse(savedMiningState);
          setMinedAmount(savedMinedAmount);
          setTimeLeft(savedTimeLeft);
          setMining(savedMining);
        }
      } catch (error) {
        console.error('Error loading mining state:', error);
      }
    };

    loadState();
  }, []);

  useEffect(() => {
    const saveState = async () => {
      try {
        const miningState = {
          savedMinedAmount: minedAmount,
          savedTimeLeft: timeLeft,
          savedMining: mining
        };
        await AsyncStorage.setItem('miningState', JSON.stringify(miningState));
      } catch (error) {
        console.error('Error saving mining state:', error);
      }
    };

    saveState();
  }, [minedAmount, timeLeft, mining]);

  useEffect(() => {
    let interval;

    if (mining && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            setMining(false);
          }
          return newTime;
        });
        setMinedAmount(prevAmount => {
          const miningRatePerSecond = 0.00500 / (7 * 60 * 60);
          const newMinedAmount = prevAmount + miningRatePerSecond;
          return Math.min(newMinedAmount, 0.00500);
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [mining, timeLeft]);

  const handleImageClick = async () => {
    if (!mining) {
      setMining(true);
      setTimeLeft(7 * 60 * 60);
      setLoading(true);
      Alert.alert("Mining started", "Mining has started. Check back in 7 hours!");

      try {
        const authToken = await AsyncStorage.getItem('swiftcoin');
        if (!authToken) {
          throw new Error('No auth token found');
        }

        const response = await axios.post('https://swift-coin-pi.vercel.app/api/mine', {}, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });

        console.log(response.data.message);
      } catch (error) {
        console.error('Error mining coin:', error);
        if (error.response && error.response.status === 401) {
          Alert.alert("Unauthorized", "You are not authorized to mine. Please log in.");
        } else {
          let errorMessage = "Failed to mine coin. Please try again later.";
          if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
          }
          Alert.alert("Error", errorMessage);
        }
        setMining(false);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Mining already started", "Mining is already in progress. Please check back later.");
    }
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <View style={{ width: "100%", height: 400, alignItems: "center", paddingTop: 30 }}>
      <View style={{ width: 230, height: 230, backgroundColor: "#26EA2E", borderRadius: 130, justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: 190, height: 190, backgroundColor: "black", borderRadius: 100, alignItems: "center", justifyContent: "center", gap: 7 }}>
      
   
              <Text style={{ color: "white", fontSize: 15 }}>{formatTime(timeLeft)}</Text>
              <Text style={{ color: "white", fontSize: 15 }}>Stake Reward</Text>
              <FontAwesome5 name="money-bill" size={20} color="white" />
              <Text style={{ color: "white", fontSize: 30 }}>{minedAmount.toFixed(5)}</Text>
          
        
        </View>
      </View>

      <View style={{ width: 12, height: 100, backgroundColor: "#1E1C1C" }}></View>

      <TouchableOpacity onPress={handleImageClick}>
        <Image 
          source={require('../assets/CoinSwift6.png')}
          style={{ width: 70, height: 70 }} 
        />
      </TouchableOpacity>
    </View>
  );
};
