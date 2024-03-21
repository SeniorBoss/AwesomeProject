import React, { useState } from 'react'
import { SafeAreaView, Platform, StatusBar, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export const Withdraw = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggleItem =() =>{
    setToggle(!toggle)
  }
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1, width: "100%", height: "max-content",  alignItems: "center"}}>
       <View style={{width: "100%", height: 250,  backgroundColor: "#1A1A1A", borderRadius: 10, padding: 15, justifyContent: "space-between"}}>
        <View style={{width: "100%", height: "max-content", flexDirection: "row", justifyContent: "space-between", }}>
            <Text style={{color: "white"}}>Account</Text>
            <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
            <Image source={require('../assets/APE.png')}/>
                <Text style={{color: "white"}}>APE</Text>
            </View>
        </View>

        <View style={{gap: 15}}>
            <Text style={{color: "white", fontSize: 30, fontWeight: "700"}}>$0.00</Text>
            <View style={{flexDirection: "row", gap: 10}}>
            <Text style={{color: "white"}}>0x2acd3df5d28325dcd6f90bbe1b2bdc379eb83f2d</Text>
            <FontAwesome5 name="copy" size={20} color="white" />
            </View>
        </View>


        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <TouchableOpacity
                style={{width: '40%',  height: 40,backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: "white"}}>
                <Text style={{color: "white", fontWeight: "700", fontSize: 14, }}>Deposite</Text>
        </TouchableOpacity>

        <TouchableOpacity
                style={{width: '40%',  height: 40,backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: "white"}}>
                <Text style={{color: "white", fontWeight: "700", fontSize: 14, }}>Withdraw</Text>
            </TouchableOpacity>
        </View>
       </View> 

       <View style={{width: "100%", height: "max-content", alignItems: "center",justifyContent: "flex-end", padding: 10, flexDirection: "row"}}>
        <Text style={{color: "white"}}>History</Text>
        <Entypo name="chevron-down" size={24} color="white" onPress={handleToggleItem}/>
       </View>


    {toggle ? (
      <View style={{width: "100%", height: 400, alignItems: "center", gap: 10, justifyContent: 'space-between',}}>
        {/* <Image source={require('../assets/Qrcode.jpg')}/> */}
      <ScrollView>
        <View style={{width: "100%", height: 80, backgroundColor: "#1A1A1A", borderRadius: 10, flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center", marginBottom: 10}}>
          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 20}}>APE</Text>
            <Text style={{color: "#A8A4A4", fontSize: 12}}>Deposite</Text>
            <Text style={{color: "#A8A4A4", fontSize: 10}}>2024-12-08-01:58</Text>
          </View>

          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 16}}>55 APE</Text>
            <Text style={{color: "yellowgreen"}}>Completed</Text>
          </View>
        </View>

        
        <View style={{width: "100%", height: 80, backgroundColor: "#1A1A1A", borderRadius: 10, flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center", marginBottom: 10}}>
          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 20}}>APE</Text>
            <Text style={{color: "#A8A4A4", fontSize: 12}}>Deposite</Text>
            <Text style={{color: "#A8A4A4", fontSize: 10}}>2024-12-08-01:58</Text>
          </View>

          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 16}}>55 APE</Text>
            <Text style={{color: "yellowgreen"}}>Completed</Text>
          </View>
        </View>
        
        <View style={{width: "100%", height: 80, backgroundColor: "#1A1A1A", borderRadius: 10, flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center", marginBottom: 10}}>
          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 20}}>APE</Text>
            <Text style={{color: "#A8A4A4", fontSize: 12}}>Deposite</Text>
            <Text style={{color: "#A8A4A4", fontSize: 10}}>2024-12-08-01:58</Text>
          </View>

          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 16}}>55 APE</Text>
            <Text style={{color: "yellowgreen"}}>Completed</Text>
          </View>
        </View>
        
        <View style={{width: "100%", height: 80, backgroundColor: "#1A1A1A", borderRadius: 10, flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center", marginBottom: 10}}>
          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 20}}>APE</Text>
            <Text style={{color: "#A8A4A4", fontSize: 12}}>Deposite</Text>
            <Text style={{color: "#A8A4A4", fontSize: 10}}>2024-12-08-01:58</Text>
          </View>

          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 16}}>55 APE</Text>
            <Text style={{color: "yellowgreen"}}>Completed</Text>
          </View>
        </View>
        <View style={{width: "100%", height: 80, backgroundColor: "#1A1A1A", borderRadius: 10, flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center", marginBottom: 10}}>
          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 20}}>APE</Text>
            <Text style={{color: "#A8A4A4", fontSize: 12}}>Deposite</Text>
            <Text style={{color: "#A8A4A4", fontSize: 10}}>2024-12-08-01:58</Text>
          </View>

          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 16}}>55 APE</Text>
            <Text style={{color: "yellowgreen"}}>Completed</Text>
          </View>
        </View>

        <View style={{width: "100%", height: 80, backgroundColor: "#1A1A1A", borderRadius: 10, flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center", marginBottom: 10}}>
          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 20}}>APE</Text>
            <Text style={{color: "#A8A4A4", fontSize: 12}}>Deposite</Text>
            <Text style={{color: "#A8A4A4", fontSize: 10}}>2024-12-08-01:58</Text>
          </View>

          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 16}}>55 APE</Text>
            <Text style={{color: "yellowgreen"}}>Completed</Text>
          </View>
        </View>

        <View style={{width: "100%", height: 80, backgroundColor: "#1A1A1A", borderRadius: 10, flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center", marginBottom: 10}}>
          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 20}}>APE</Text>
            <Text style={{color: "#A8A4A4", fontSize: 12}}>Deposite</Text>
            <Text style={{color: "#A8A4A4", fontSize: 10}}>2024-12-08-01:58</Text>
          </View>

          <View style={{gap:5}}>
            <Text style={{color: "white", fontSize: 16}}>55 APE</Text>
            <Text style={{color: "yellowgreen"}}>Completed</Text>
          </View>
        </View>
        </ScrollView>
       </View>
    ):  <Image source={require('../assets/Qrcode.jpg')}/> }
    </SafeAreaView>
  )
}
