import React from 'react'
import { SafeAreaView, View, StatusBar, Platform, Text, TextInput, TouchableOpacity } from 'react-native'

export const OTP = () => {
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, width: "100%", height: 800, justifyContent: "center", alignItems: "center"}}>
        <View style={{width: "75%", height: "45%", borderWidth: 1, borderColor: "#E45E13", borderRadius: 20, justifyContent: "center", alignItems: "center", gap: 20}}>
            <View style={{width: "100%", alignItems: "center"}}>
            <Text style={{color: "white", fontSize: 17, fontWeight: "700"}}>OTP  verification</Text>
            <Text style={{color: 'white'}}>Enter the OTP sent  to dika****@gmail.com</Text>
            </View>

            <View style={{width: "100%", height: 70,  flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10}}>
                <TextInput style={{width: 40, height: 40, borderColor: "#F45B2B", borderWidth: 1, color: "white", borderRadius: 7}} />
                <TextInput style={{width: 40, height: 40, borderColor: "#E45E13", borderWidth: 1, color: "white", borderRadius: 7}} />
                <TextInput style={{width: 40, height: 40, borderColor: "#E45E13", borderWidth: 1, color: "white", borderRadius: 7}} />
                <TextInput style={{width: 40, height: 40, borderColor: "#E45E13", borderWidth: 1, color: "white", borderRadius: 7}} />
                <TextInput style={{width: 40, height: 40, borderColor: "#E45E13", borderWidth: 1, color: "white", borderRadius: 7}} />
            </View>

            <View>
            <Text style={{color:"white"}}>Resend OTP</Text>
            </View>

            <TouchableOpacity
                style={{width: '80%',  height: 50,backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 30,}}>
                <Text style={{color: "white", fontWeight: "600", fontSize: 17}}>Verify</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
