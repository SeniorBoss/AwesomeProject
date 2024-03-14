import React from 'react'
import { SafeAreaView, Platform, StatusBar, View, Image,Text } from 'react-native'

export const SuccessNotification = () => {
  return (
    <SafeAreaView  style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
        <View style={{width: "90%", height: "60%", gap: 20, justifyContent: "center", alignItems: "center"}}>
            <Image source={require('../assets/Success.png')}/>
            <Text style={{color: "white"}}>You have sucessfully create Account on  Coin swift</Text>
        </View>
    </SafeAreaView>
  )
}
