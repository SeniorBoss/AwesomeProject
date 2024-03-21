import React from 'react'
import { SafeAreaView, Image, View, Text, Platform, StatusBar, TouchableOpacity } from 'react-native'
import { HeaderHome } from '../Home/HeaderHome'
import { Navigate } from '../Home/Navigate'


export const SwiftAmount = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1, width: "100%", height: "max-content",  alignItems: "center" }}>
        <View style={{width: "90%", height: "100%"}}>
            <HeaderHome/>
            
            <View style={{width: "100%", height: 280, justifyContent: "center"}}>
                <View style={{width: "100%", height: "65%", backgroundColor: "#1A1A1A", borderRadius: 10, flexDirection: "row", alignItems: "flex-end", paddingBottom: 20}}>
                    <Image source={require('../assets/CoinSwift4c.png')}
                        style={{position: 'absolute', right: 0, top: 0, }}
                    />

                    <View style={{width: "60%", height: "100%", justifyContent: "center", gap: 10}}>
                        <View style={{flexDirection: "row", height: "30%", alignItems: "center",}}>
                            <Image source={require('../assets/CoinSwift8.png')}/>

                            <Text style={{color: "white", fontSize: 26, }}>50000</Text>
                        </View>

                        <View style={{width: "100%", height: '20%', paddingLeft:20, gap: 10}}>
                            <Text style={{fontSize: 23, color: "white"}}>$53,44430</Text>
                        </View>
                     </View>
                <TouchableOpacity
                style={{width: '33%',  height: 40,backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 10,}}>
                <Text style={{color: "white", fontWeight: "700", fontSize: 16, }}>Buy</Text>
            </TouchableOpacity>
                </View>
            </View>

            <View style={{width: "100%", height: 270, backgroundColor: "#1A1A1A", borderRadius: 10,paddingBottom: 10, justifyContent: "space-between" }}>

                <View style={{width: '100%', height: "70%", backgroundColor: "#242121", borderRadius: 10, gap: 20, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "white"}}>Increase Your mining Rate And Get 10% Cash Back</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{color: "white", fontSize: 17}}>Buy Hammer</Text>
                        <Image source={require('../assets/Hammer.png')}/>
                    </View>

                    
                    <View style={{width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 70}}>
                <TouchableOpacity
                    style={{width: '33%',  height: 40,backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 10,}}>
                    <Text style={{color: "white", fontWeight: "700", fontSize: 16, }}>Buy</Text>
                </TouchableOpacity>

     <TouchableOpacity
            style={{
                width: '33%',
                height: 40,
                backgroundColor: '#242121',
                borderColor: '#E45E13',
                borderWidth: 1, 
                borderStyle: 'solid',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10
            }}>
            <Text style={{color: "#F45B2B", fontWeight: "700", fontSize: 16}}>Details</Text>
</TouchableOpacity>

                    </View>

                </View>

                <View style={{width: "100%", height: "15%", justifyContent: "center", alignItems: "center", gap: 10}}>
                <Text style={{color: "white"}}>Total Reward</Text>
                <Text style={{color: "white"}}>10%</Text>
                </View>
            </View>
            <Navigate/>
        </View>

    </SafeAreaView>
  )
}
