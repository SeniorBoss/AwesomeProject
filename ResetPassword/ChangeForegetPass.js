import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, Platform, StatusBar, Text, ToastAndroid } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export const ChangeForegetPass = () => {
  const navigation= useNavigation()
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError('Password is required');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSavePassword = async () => {
    if (!validatePassword()) {
      return;
    }

    try {
      const response = await axios.post(`https://swift-coin-pi.vercel.app/api/reset-password`, { password });
      if (response.status === 200) {
        ToastAndroid.show('Password saved successfully', ToastAndroid.SHORT);
        navigation.navigate('Login');
      } else {
        
        ToastAndroid.show('Failed to save password. Please try again later.', ToastAndroid.SHORT);
      }
    }catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        ToastAndroid.show(`Error: ${errorMessage}`, ToastAndroid.SHORT);
      } else {
        console.error('Error saving password:', error.message);
        ToastAndroid.show('Failed to save password. Please try again later.', ToastAndroid.SHORT);
      }
    }
  };

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1, backgroundColor: "black" }}>
      <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", gap: 50 }}>
        <View style={{ width: "90%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white" }}>Change your password</Text>
        </View>

        <View style={{ width: "80%", justifyContent: "center", alignItems: "center", gap: 30 }}>
        <View  style={{ color: "white", width: "100%", height: 60, borderWidth: 1, borderColor: "white", borderRadius: 10, }}>
        <TextInput
            placeholder='Password'
            placeholderTextColor="white"
            style={{ color: "white", width: "100%", height: "100%", borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 20 }}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={!showPassword}
          />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "4%", top: "22%" }}>
                    <Feather name={showPassword ? "eye" : "eye-off"} size={24} color="white" />
                    </TouchableOpacity>
        </View>
      
          {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}

          <TouchableOpacity
            style={{ width: '100%', height: 60, backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}
            onPress={handleSavePassword}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
