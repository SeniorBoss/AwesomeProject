import React from 'react';
import { Text, View, Image } from 'react-native';

export const Welcome = () => {
  return (
    <View style={{ width: 250, height: 250, backgroundColor: "black" }}>
      <Image source={require('../assets/CoinSwift.png')} />
    </View>
  );
};
