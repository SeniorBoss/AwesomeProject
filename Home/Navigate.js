import React from 'react'
import { SafeAreaView, Image , View} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
export const Navigate = () => {
  return (
    <SafeAreaView style={{width: "100%", height: "max-content", position: "absolute", bottom: 0,}}>
    <Image source={require('../assets/Navbar.png')}/>
    <Image source={require('../assets/Circle.png')} style={{position: "absolute", left: 150, top: 20}} />
    <View style={{width: "100%", flexDirection: "row", position: "absolute", justifyContent: "space-between", top: 40, paddingLeft: 10, paddingRight: 10 }}>
    <Entypo name="home" size={28} color="#E45E13" />
    <FontAwesome name="diamond" size={28} color="#E45E13" />
    <Entypo name="wallet" size={28} color="#E45E13" />
    </View>
    </SafeAreaView>
  )
}

