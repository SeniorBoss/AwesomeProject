import React from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'

export const Community = () => {
  return (
    <SafeAreaView style={{width: "100%", height: 150,  justifyContent: "center", alignItems: "center"}}>
        <View style={{width: "100%", height: "80%", backgroundColor: "white", borderRadius: 20, justifyContent: 'space-around', alignItems: "center"}}>
            <Text style={{fontSize: 19}}>Join our community on this App</Text>
            <View style={{width: "100%", height: "60%", flexDirection: "row", alignItems: "center", justifyContent: "center", gap : 40}}>
                <Image source={require('../assets/Vector4.png')}/>
                <Image source={require('../assets/Vector3.png')}/>
                <Image source={require('../assets/Vector2.png')}/>
                <Image source={require('../assets/Vector1.png')}/>
            </View>
        </View>
    </SafeAreaView>
  )
}
