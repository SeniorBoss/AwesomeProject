import React, { useState, useRef } from 'react';
import { SafeAreaView, View, StatusBar, Platform, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export const OTP = ({ route }) => {
    const navigation = useNavigation();
    const { userEmail } = route.params || { userEmail: '' }; 
    const [otp, setOtp] = useState(['', '', '', '', '']); 
    const otpInputRefs = useRef(Array(5).fill(null).map(() => React.createRef()));
    
    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        
        if (value && index < 4) {
            otpInputRefs.current[index + 1].focus();
        }
    };
    
    const handleVerifyOTP = async () => {
        try {
            const token = await AsyncStorage.getItem("swiftVerifyToken");
            const enteredOtp = otp.join('').trim();
            console.log("Token:", token);
            console.log("Entered OTP:", enteredOtp);
            
            const data = {
                otp: enteredOtp
            };
    
            const response = await axios.post(`https://swift-coin-pi.vercel.app/api/verify/${token}`, data);
            console.log("Response:", response.data.message);
    
            if (response.data.message === "User verified successfully") {
                ToastAndroid.show(response?.data?.message, ToastAndroid.SHORT);
                await AsyncStorage.removeItem("swiftVerifyToken");
                setTimeout(() => {
                    navigation.navigate("SuccessNotification");
                }, 3000);
            } else {
                ToastAndroid.show(data.message, ToastAndroid.SHORT);
            }
        } catch (error) {
           
            if (error.response) {
                console.log("Error Response:", error.response);
                ToastAndroid.show('Failed to verify OTP. Please try again later.', ToastAndroid.SHORT)
            }
        } 
    };
    

    const handleResendOTP = async () => {
        try {
            const response = await fetch('https://swift-coin.onrender.com/api/resend-verification-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userEmail,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                ToastAndroid.show(data.message, ToastAndroid.SHORT);
            } else {
                ToastAndroid.show(data.message, ToastAndroid.SHORT);
            }
        } catch (error) {
            console.error('Failed to resend OTP:', error);
            ToastAndroid.show('Failed to resend OTP. Please try again later.', ToastAndroid.SHORT);
        }
    };

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            <View style={{ width: "75%", height: 300, borderWidth: 1, borderColor: "#E45E13", borderRadius: 20, justifyContent: "center", alignItems: "center", gap: 20 }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>OTP Verification</Text>
                    <Text style={{ color: 'white' }}>Enter the OTP sent to {userEmail}</Text>
                </View>

                <View style={{ width: "100%", height: 70, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(index, value)}
                            style={{ width: 40, height: 40, borderColor: "#F45B2B", borderWidth: 1, color: "white", borderRadius: 7, textAlign: 'center' }}
                            keyboardType="numeric"
                            maxLength={1}
                            ref={ref => otpInputRefs.current[index] = ref}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    onPress={handleResendOTP}
                    style={{ marginBottom: 10 }}
                >
                    <Text style={{ color: "white" }}>Resend OTP</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleVerifyOTP}
                    style={{ width: '80%', height: 50, backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}
                >
                    <Text style={{ color: "white", fontWeight: "600", fontSize: 17 }}>Verify</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
