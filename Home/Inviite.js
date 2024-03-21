import React, { useState } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export const Inviite = () => {
  const [History, setHistory] =useState(false)
  return (
    <SafeAreaView style={{width: "100%", height: 140,  justifyContent: "center", alignItems: "center"}}>
        <View style={{width: "100%", height: "80%", backgroundColor: "#1A1A1A", borderRadius: 20, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 15}}>


            <FontAwesome name="user-plus" size={24} color="white" />
            <View>
                <Text style={{color: "white", fontSize: 12}}>Earn More Swift by inviting your friends </Text>
                <Text style={{color: "white", fontSize: 12}}>more friends more bonus. </Text>
                <Text style={{color: "#E45E13", fontSize: 12}}>Start inviting! </Text>
            </View>

            <View >
                <Text style={{color: "#E45E13", width: 80,backgroundColor: "black", height: 40 ,paddingTop: 10, textAlign: "center", justifyContent: "center", borderRadius: 6, borderWidth: 1, borderColor: "#E45E13", }}>Invite Now</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}
