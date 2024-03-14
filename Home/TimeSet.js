import React from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const TimeSet = () => {
  return (
        <View style={{width: "100%", height: 400, alignItems: "center", paddingTop: 30}}>
            <View style={{width: 230, height: 230, backgroundColor: "#26EA2E", borderRadius: 130, justifyContent: "center", alignItems: "center", }}>
                <View style={{width: 190, height: 190, backgroundColor: "black", borderRadius: 100, alignItems: "center", justifyContent: "center", gap: 7}}>
                <Text style={{color: "white", fontSize: 15}}>12:00</Text> 
                <Text style={{color: "white", fontSize: 15}}>Stake Reward</Text> 
                <FontAwesome5 name="money-bill" size={20} color="white" />
                <Text style={{color: "white", fontSize: 30}}>78.4550</Text> 
                </View>
            </View>

            <View style={{width: 12, height: 100, backgroundColor: "#1E1C1C"}}></View>

            <Image source={require ('../assets/CoinSwift6.png')}
                style={{width: 70, height: 70}}
            />
        </View>
  )
}

