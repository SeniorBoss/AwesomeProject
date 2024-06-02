import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Welcome = () => {

  const navigation = useNavigation()

  useEffect(() =>{
    const navigateToNextScreen = () =>{
      navigation.navigate('WelcomeSec')
    }
    const timeoutId = setTimeout(navigateToNextScreen, 5000)
    return () => clearTimeout(timeoutId);
  },[navigation]);

  return (
    <View style={{flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center"}}>
      <Image source={require('../assets/CoinSwift.png')} />
    </View>
  );
};
