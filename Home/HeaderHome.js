import React from 'react'
import { Image, View,  } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
export const HeaderHome = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", height: 70, width: "100%", alignItems: "flex-end" }}>
    <Image source={require('../assets/CoinSwift5.png')} />
    <View style={{ flexDirection: "row", alignItems: "center", gap: 20,
    marginBottom: 20}}>
      <Ionicons name="notifications" size={20} color="#E45E13" />
      <FontAwesome5 name="user-alt" size={20} color="#E45E13" />
    </View>
  </View>
  )
}

