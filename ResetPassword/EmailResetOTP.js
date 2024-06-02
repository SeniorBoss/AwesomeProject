import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, SafeAreaView, TextInput, TouchableOpacity, Platform, StatusBar, Text, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; 

export const EmailResetOTP = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")


    const validateEmail = () =>{
        if (!email.trim()){
            setEmailError('Email is reduired');
            return false;
        } else if(!/\S+@\S+\.\S+/.test(email)){
            setEmailError('invalid email format');
            return false
        } else{
            setEmailError('')
            return true;
        }
    }

    const handleSave = async () =>{
        if(validateEmail()) {
            try {
                const response = await axios.post('https://swift-coin-pi.vercel.app/api/forgot-password', {email})
                ToastAndroid.show('email sent successfully', ToastAndroid.SHORT)
                navigation.navigate('ChangeForegetPass');
            } catch (error) {
                ToastAndroid.show('failed to reset password. please try again later', ToastAndroid.SHORT)
            } 
        } else if (error.response.status === 400) {
            ToastAndroid.show('Invalid email, please try again', ToastAndroid.SHORT)
        } else{

        }
    }



    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1, backgroundColor: "black" }}>
            <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", gap: 50 }}>
                <View style={{ width: "90%", justifyContent: "center", alignItems: "center", gap: 20 }}>
                    <AntDesign name="questioncircleo" size={54} color="white" />
                    <Text style={{ color: "white" }}>Do you want to change your password</Text>
                </View>

                <View style={{ width: "80%", justifyContent: "center", alignItems: "center", gap: 30 }}>
                    <TextInput
                        placeholder='Email Address'
                        placeholderTextColor="white"
                        style={{ color: "white", width: "100%", height: 60, borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 20 }}
                        onChangeText={setEmail}
                        value={email}
                    />
                     {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}


                    <TouchableOpacity
                        style={{ width: '100%', height: 60, backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}
                        onPress={handleSave}>
                        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
