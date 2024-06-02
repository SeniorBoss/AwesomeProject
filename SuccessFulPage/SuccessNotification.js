import React, { useEffect } from 'react'
import { SafeAreaView, Platform, StatusBar, View, Image,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SuccessNotification = () => {
  const navigation = useNavigation()


  useEffect(() =>{
    const navigateToNextScreen = () =>{
      navigation.navigate('Login')
    }
    const timeoutId = setTimeout(navigateToNextScreen, 5000)
    return () => clearTimeout(timeoutId)
  }), [navigation]
  return (
    <SafeAreaView  style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>
        <View style={{width: "90%", height: "60%", gap: 20, justifyContent: "center", alignItems: "center"}}>
            <Image source={require('../assets/Success.png')}/>
            <Text style={{color: "white"}}>You have sucessfully create Account on  Coin swift</Text>
        </View>
    </SafeAreaView>
  )
}
