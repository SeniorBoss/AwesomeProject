import React from 'react'
import { View, Platform, StatusBar,Image, Text, SafeAreaView, TouchableOpacity} from 'react-native'

export const WelcomeSec = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, width: "100%", height: "100%", display : "flex", alignItems: "center", gap: 120}} >
        <View style={{width: 250, height: 250, objectFit: "contain"}}>
            <Image source={require("../assets/CoinSwift2.png")} style={{flex: 1, resizeMode: "contain"}}/>
        </View>

        <View style={{gap: 10, alignItems: "center"}}>
            <Text style={{color: "white", fontSize: 19, fontWeight: "700"}}>Easy and secure</Text>
            <Text style={{color: "white", fontSize: 13}}>Get 5% Reward Swift</Text>
        </View>

        <View style={{width: "100%", height: "max-content", justifyContent: "center", alignItems: "center", gap:30}}>
            <View style={{flexDirection: "row", gap: 6}}>
                <View style={{width: 13, height: 13, backgroundColor: "#333333", borderRadius: 40}}></View>
                <View style={{width: 13, height: 13, backgroundColor: "#E45E13", borderRadius: 40}}></View>
                <View style={{width: 13, height: 13, backgroundColor: "#333333", borderRadius: 40}}></View>
            </View>

            <View style={{width: 250, height: 100,}}>
            <TouchableOpacity
                style={{width: '100%',  height: 50,backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 30,}}>
                <Text style={{color: "white"}}>GET STARTED</Text>
            </TouchableOpacity>
                
            </View>
        </View>
    </SafeAreaView>
  )
}

