import React from 'react'
import { SafeAreaView, View, Platform, StatusBar, Image,Text, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export const SignUp = () => {
  return (
        <SafeAreaView style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, width: "100%", height: "100%",}}>
            <View style={{width: "100%", height: "100%"}}>
                <Image source={require('../assets/CoinSwift4.png')} style={{position: "absolute", top: 0, right: 0}} />
                <Image source={require('../assets/CoinSwift4.png')} style={{position: "absolute", bottom: 0, right: 0}} />

                
            <View style={{width: "100%", height: "100%", alignItems: "center"}} >
                <View style={{width: "100%", height: 60, paddingLeft: 10}}>
                    <Image source={require('../assets/CoinSwift5.png')}/>
                </View>

                <View style={{width: "100%", height: "10%", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "white", fontSize: 20, fontWeight : "700"}}>Create Account</Text>
                </View>

                <View style={{width: "85%", height: "max-content", gap: 30, justifyContent: "center"}}>
                    <TextInput
                        placeholder='Full Name'
                        placeholderTextColor="white"
                        style={{color: "white", width: "100", height: 60, borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10}}
                    />

                    <TextInput
                        placeholder='Email Address'
                        placeholderTextColor="white"
                        style={{color: "white", width: "100", height: 60, borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10}}
                    />

                    <View style={{flexDirection: "row", width: "100%", height: 60, position: "relative",}}>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="white"
                        style={{color: "white", width: "100%", height: "100%", borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10}}
                    />
                    <Feather name="eye" size={24} color="white" 
                        style={{objectFit: "contain",position: "absolute", right: "4%", top: "22%"}}
                    />
                      
                    </View>

                    <TextInput
                        placeholder='Referral Code'
                        placeholderTextColor="white"
                        style={{color: "white", width: "100", height: 60, borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10}}
                    />
                    <View style={{flexDirection: "row", gap: 10}}>
                    <AntDesign name="checkcircleo" size={24} color="#E45E13" />
                        <Text style={{color: "white"}}>Accept our terms and condition</Text>
                    </View>
                </View>

                {/* <View style={{width: "85%", height: "20%", justifyContent: "center", alignItems: "center"}}>
            <TouchableOpacity
                style={{width: '100%',  height: 60,backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 30,}}>
                <Text style={{color: "white", }}>Sign Up</Text>
            </TouchableOpacity>
            <Text>Already have an account?</Text>
                </View> */}
            </View>

            </View>

        </SafeAreaView>
  )
}
