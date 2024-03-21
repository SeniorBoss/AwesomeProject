import React from 'react'
import { SafeAreaView, View, Image, Text, Platform, StatusBar, TouchableOpacity, ScrollView} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Navigate } from '../Home/Navigate';
import { Ionicons } from '@expo/vector-icons';

export const Referral = () => {
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1, width: "100%", height: "max-content",  alignItems: "center" }}>
    <Ionicons name="arrow-back-sharp" size={24} color="white" style={{position: "absolute", top: 0, left: 3}} />
        <View style={{width: "100%", height: 300,backgroundColor: '#E45E13', borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 10}}>
        
            <View style={{width: "30%", height: "60%", backgroundColor: "black",  elevation: 5, borderRadius: 7, alignItems: "center", gap: 20, shadowColor: "#000", shadowOffset:{width: 50, height: 90}, shadowOpacity: 0.55, shadowRadius: 15, elevation: 5, }}>
                <Image source={require('../assets/User.png')}/>
                <Text style={{color: "white"}}>SeniorBoss</Text>
                <View style={{flexDirection: "row", gap: 7}}>
                <FontAwesome name="user" size={20} color="white" />
                    <Text style={{color: "white"}}>5000</Text>
                </View>
            </View>

            <View style={{width: "32%", height: "70%", backgroundColor: "black", borderRadius: 7, alignItems: "center", gap: 20}}>
                <Image source={require('../assets/User.png')}/>
                <Text style={{color: "white"}}>SeniorBoss</Text>
                <View style={{flexDirection: "row", gap: 7}}>
                <FontAwesome name="user" size={20} color="white" />
                    <Text style={{color: "white"}}>5000</Text>
                </View>
            </View>

            <View style={{width: "30%", height: "60%", backgroundColor: "black", borderRadius: 7, alignItems: "center", gap: 20}}>
                <Image source={require('../assets/User.png')}/>
                <Text style={{color: "white"}}>SeniorBoss</Text>
                <View style={{flexDirection: "row", gap: 7}}>
                <FontAwesome name="user" size={20} color="white" />
                    <Text style={{color: "white"}}>5000</Text>
                </View>
            </View>
        </View>

        <View style={{width: "100%", height: 180, flexDirection: "row", justifyContent: 'center', alignItems: "center"}}>
            <View style={{width: "50%", height: "100%", gap: 7, justifyContent: "center", paddingLeft: 10}}>
                <View style={{width: "75%",height: '35%', backgroundColor: "#1A1A1A", justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: 7, gap: 7}}>
                    <Image source={require('../assets/Hammer.png')}/>
                    <Text style={{color: "white", fontSize: 20}}>0.5</Text>
                </View>
                <Text style={{color: "white"}}>Total Reward</Text>
            </View>

            <View style={{width: "50%", height: "100%", alignItems: "flex-end", paddingRight: 10, gap: 10,  justifyContent: "center"}}>
                
            <TouchableOpacity
                style={{width: '63%',  height: 40,backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 10,}}>
                <Text style={{color: "white", fontWeight: "700", fontSize: 16, }}>Claim</Text>
            </TouchableOpacity>
            <View style={{width: "40%", flexDirection: "row", gap: 10}}>
                <FontAwesome name="user" size={20} color="white" />
                <Text style={{color: "white"}}>244</Text>
            </View>
            </View>
        </View>


        <View style={{width: "100%", height: 400, gap: 10}}>
        <ScrollView>
            <View style={{width: "100%", height: 90, backgroundColor : "#1A1A1A", borderRadius: 7, marginBottom: 7, flexDirection: "row", justifyContent: "space-between"}}>

                <View style={{width: "40%", height: "100%", alignItems: "center", paddingLeft: 10, flexDirection: "row", gap: 10}}>
                    <View style={{width: 50, height: 50, backgroundColor: "black", borderRadius: 30, justifyContent: "center", alignItems: "center"}}>
                        <Image source={require('../assets/Person.png')}/>
                    </View>
                    <Text style={{color: 'white'}}>Daniel</Text>
                </View>

                <View style={{width: "50%", height: "100%",justifyContent: "flex-end", alignItems: "center", flexDirection: "row", gap: 10, paddingRight: 40}}>
                <FontAwesome name="user" size={20} color="white" />
                <Text style={{color: "white"}}>66</Text>
                </View>
            </View>

            <View style={{width: "100%", height: 90, backgroundColor : "#1A1A1A", borderRadius: 7, marginBottom: 7, flexDirection: "row", justifyContent: "space-between"}}>

            <View style={{width: "40%", height: "100%", alignItems: "center", paddingLeft: 10, flexDirection: "row", gap: 10}}>
                <View style={{width: 50, height: 50, backgroundColor: "black", borderRadius: 30, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../assets/Person.png')}/>
                </View>
                <Text style={{color: 'white'}}>Daniel</Text>
            </View>

            <View style={{width: "50%", height: "100%",justifyContent: "flex-end", alignItems: "center", flexDirection: "row", gap: 10, paddingRight: 40}}>
                <FontAwesome name="user" size={20} color="white" />
                <Text style={{color: "white"}}>66</Text>
                </View>
            </View>

            <View style={{width: "100%", height: 90, backgroundColor : "#1A1A1A", borderRadius: 7, marginBottom: 7, flexDirection: "row", justifyContent: "space-between"}}>

            <View style={{width: "40%", height: "100%", alignItems: "center", paddingLeft: 10, flexDirection: "row", gap: 10}}>
                <View style={{width: 50, height: 50, backgroundColor: "black", borderRadius: 30, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../assets/Person.png')}/>
                </View>
                <Text style={{color: 'white'}}>Daniel</Text>
            </View>

            <View style={{width: "50%", height: "100%",justifyContent: "flex-end", alignItems: "center", flexDirection: "row", gap: 10, paddingRight: 40}}>
                <FontAwesome name="user" size={20} color="white" />
                <Text style={{color: "white"}}>66</Text>
                </View>
            </View>

            <View style={{width: "100%", height: 90, backgroundColor : "#1A1A1A", borderRadius: 7, marginBottom: 7, flexDirection: "row", justifyContent: "space-between"}}>

            <View style={{width: "40%", height: "100%", alignItems: "center", paddingLeft: 10, flexDirection: "row", gap: 10}}>
                <View style={{width: 50, height: 50, backgroundColor: "black", borderRadius: 30, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../assets/Person.png')}/>
                </View>
                <Text style={{color: 'white'}}>Daniel</Text>
            </View>

            <View style={{width: "50%", height: "100%",justifyContent: "flex-end", alignItems: "center", flexDirection: "row", gap: 10, paddingRight: 40}}>
                <FontAwesome name="user" size={20} color="white" />
                <Text style={{color: "white"}}>66</Text>
                </View>
            </View>
               
            <View style={{width: "100%", height: 90, backgroundColor : "#1A1A1A", borderRadius: 7, marginBottom: 7, flexDirection: "row", justifyContent: "space-between"}}>

            <View style={{width: "40%", height: "100%", alignItems: "center", paddingLeft: 10, flexDirection: "row", gap: 10}}>
                <View style={{width: 50, height: 50, backgroundColor: "black", borderRadius: 30, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../assets/Person.png')}/>
                </View>
                <Text style={{color: 'white'}}>Daniel</Text>
            </View>

            <View style={{width: "50%", height: "100%",justifyContent: "flex-end", alignItems: "center", flexDirection: "row", gap: 10, paddingRight: 40}}>
                <FontAwesome name="user" size={20} color="white" />
                <Text style={{color: "white"}}>66</Text>
                </View>
            </View>

        </ScrollView>
        </View>
      
    </SafeAreaView>
  )
}
