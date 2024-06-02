import React from 'react'
import { SafeAreaView, View, Text, Platform, StatusBar, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useNavigation, } from '@react-navigation/native'


export const Success = () => {

  const navigation= useNavigation();
  
  const route = useRoute();
  
  const { userEmail } = route.params || { userEmail: '' }; 

  const handleOTP = () =>{
    navigation.navigate('OTP', { userEmail: userEmail });
    }

  return (
 <SafeAreaView style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>
    <View style={{width: "75%", height: 300, borderWidth: 1, borderColor: "#E45E13", borderRadius: 20, justifyContent: "center", alignItems: "center", gap: 30}}>
        <Text style={{color: "white", fontSize: 16, fontWeight: "700"}}>Your Email Sent Successfully!</Text>
        <Text style={{color: 'white', width: "90%", textAlign: "center"}}>a verification Email OTP has been sent to this Email: {userEmail}  </Text>
        <TouchableOpacity
                style={{width: '80%',  height: 50,backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 30,}}
                onPress={handleOTP}
                >
                <Text style={{color: "white", fontWeight: "600", fontSize: 17}}>Continue</Text>
            </TouchableOpacity>
    </View>
 </SafeAreaView>
  )
}
