import React, { useState } from 'react';
import { SafeAreaView, View, Platform, StatusBar, Image, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        let isValid = true;

        if (!email.trim()) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email format');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password.trim()) {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }
        return isValid;
    };

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            if (!validate()) {
                ToastAndroid.show('Please fill in all input fields', ToastAndroid.SHORT);
                setIsLoading(false);
                return;
            }

            const response = await axios.post('https://swift-coin-pi.vercel.app/api/sign-in', {
                email: email,
                password: password
            });

            if (response.status === 200) {
                const token = response.data.token;
                await AsyncStorage.setItem('swiftcoin', token);
                ToastAndroid.show('Login successful', ToastAndroid.SHORT);
                navigation.navigate('Home');
            }
        } catch (error) {
            let errorMessage = 'Failed to login. Please try again later.';
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
            }
            ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = () => {
        navigation.navigate('EmailResetOTP');
    };

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, width: "100%", height: "100%", backgroundColor: "black" }}>
            <View style={{ width: "100%", height: "100%" }}>
                <Image source={require('../assets/CoinSwift4.png')} style={{ position: "absolute", top: 0, right: 0 }} />
                <Image source={require('../assets/CoinSwift4.png')} style={{ position: "absolute", bottom: 0, right: 0 }} />

                <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
                    <View style={{ width: "100%", height: 60, paddingLeft: 10 }}>
                        <Image source={require('../assets/CoinSwift5.png')} />
                    </View>

                    <View style={{ width: "100%", height: "80%", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "100%", height: "10%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>Welcome</Text>
                        </View>

                        <View style={{ width: "85%", height: "max-content", gap: 30, justifyContent: "center" }}>
                            <TextInput
                                placeholder='Email Address'
                                placeholderTextColor="white"
                                style={{ color: "white", width: "100%", height: 60, borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10 }}
                                onChangeText={setEmail}
                                value={email}
                            />
                            {emailError ? <Text style={{ color: "red" }}>{emailError}</Text> : null}

                            <View style={{ flexDirection: "row", width: "100%", height: 60, position: "relative" }}>
                                <TextInput
                                    placeholder='Password'
                                    placeholderTextColor="white"
                                    style={{ color: "white", width: "100%", height: "100%", borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10 }}
                                    onChangeText={setPassword}
                                    value={password}
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "4%", top: "22%" }}>
                                    <Feather name={showPassword ? "eye" : "eye-off"} size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                            {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}

                            <View style={{ flexDirection: "row", gap: 10, width: '100%', height: 20, justifyContent: "flex-end" }}>
                                <Text style={{ color: "#F45B2B" }} onPress={handleForgotPassword}>Forgot Password ?</Text>
                            </View>
                        </View>

                        <View style={{ width: "85%", height: "20%", justifyContent: "center", alignItems: "center", gap: 10 }}>
                            <TouchableOpacity onPress={handleLogin}
                                style={{ width: '100%', height: 60, backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                {isLoading ? (
                                    <Spinner
                                        visible={true}
                                        textContent={'Verifying ....'}
                                        textStyle={{ color: 'white' }}
                                    />
                                ) : (
                                    <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>Login</Text>
                                )}
                            </TouchableOpacity>

                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <Text style={{ color: "white", fontWeight: "700" }}>Don't have Account?</Text>
                                <Text style={{ color: "#E45E13" }}>Create Account</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
