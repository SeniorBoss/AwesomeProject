import React from 'react'
import { SafeAreaView, View, Image, Text } from 'react-native'

export const Bonus = () => {
  return (
    <SafeAreaView style={{width: "100%", height: 235, flexDirection: "row", justifyContent: "space-between", gap: 20, justifyContent: "center", alignItems: "center"}}>
     <View style={{width: "49%", height: "50%", backgroundColor: "#AA470F", borderRadius: 20, flexDirection: "row", alignItems: "center"}}>
        <View style={{width: "54%", height: "100%", justifyContent: "center", paddingLeft: 10, gap: 15}}>
            <Text style={{color: "white", fontSize: 14, fontWeight: "800"}}>Daily Bonus</Text>
            <Text  style={{color: "white", fontSize: 14, fontWeight: "800"}}>3/3</Text>
            <Text style={{width: "90%", height :"20%", backgroundColor: 'rgba(151, 149, 149, 0.5)', color: "white", justifyContent: "center", textAlign: "center", borderRadius: 6, alignItems: 'center', paddingTop: 2, fontSize: 14}}>Claim</Text>
        </View>
        <Image source={require('../assets/CoinSwiftBag.png')}/>
     </View>

     <View style={{width: "48%", height: "50%", backgroundColor: "#1A1A1A", borderRadius: 20}}>
     <Image source={require('../assets/CoinSwiftBook.png')}/>
     <View style={{width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.4)", position: "absolute", borderRadius: 20, flexDirection: "row", alignItems: "center"}}>
        <View style={{width: "60%", height: "80%", justifyContent: "space-between", paddingLeft: 10 }}>
            <Text style={{color: "white", fontSize: 14, fontWeight: "700"}}>Whitepaper</Text>
            <Text style={{color: "white"}}>SEE MORE</Text>
        </View>
        <Image source={require('../assets/CoinSwiftBook2.png')}/>
     </View>
     </View>
       
    
    </SafeAreaView>
  )
}
