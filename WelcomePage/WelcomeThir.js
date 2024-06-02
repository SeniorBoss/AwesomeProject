import React from 'react'
import { SafeAreaView, View, Image, Text,Platform, StatusBar,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
export const WelcomeThir = () => {
  const navigation =useNavigation()

  const handleLogin = () =>{
    navigation.navigate('Login')
  }

  const handleSignUp = () =>{
    navigation.navigate('SignUp')
  }

  return (
    <SafeAreaView style={{ paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0, width: "100%", height: "100%", alignItems: "center", justifyContent: "space-between", backgroundColor: "black"}}>
        <View style={{width: "90%", height: "100%", alignItems: "center", justifyContent: "center", gap: 230}}>
            <View style={{width: "100%",height: "max-content", alignItems: "center", justifyContent: "center", gap: 40}}>
                <Image source={require('../assets/CoinSwift3.png')}/>
                    <Text style={{color: "white", fontSize: 18, fontWeight: "700"}}>Enjoy Best Mining  Coin</Text>
            </View>

            <View style={{width: "100%", height: "max-comtent", justifyContent: "center", alignItems: "center", gap: 30}}>
            <View style={{flexDirection: "row", gap: 6}}>
                <View style={{width: 13, height: 13, backgroundColor: "#333333", borderRadius: 40}}></View>
                <View style={{width: 13, height: 13, backgroundColor: "#333333", borderRadius: 40}}></View>
                <View style={{width: 13, height: 13, backgroundColor: "#E45E13", borderRadius: 40}}></View>
            </View>

              <View style={{flexDirection: "row", gap: 30}}>
            <TouchableOpacity
                style={{width: 120,  height: 45,backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderColor: "white", borderWidth: 1}}
                onPress={handleLogin}
                >
                <Text style={{color: "white"}}>Login</Text>
              </TouchableOpacity>

            <TouchableOpacity
                style={{width: 200,  height: 45,backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 30,}}
                onPress={handleSignUp}
                >
                <Text style={{color: "white"}}>Sign up</Text>
            </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}
