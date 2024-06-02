
import React, { useState } from 'react';
import { SafeAreaView, View, Platform, StatusBar, Image, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { Feather, AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Success } from '../SuccessFulPage/Success';

export const SignUp = () => {

    const [fullName, setFullName] = useState("");
    const [fullNameVerify, setFullNameVerify] = useState(false);
    const [email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState("");
    const [userNameVerify, setUserNameVerify] = useState(false);
    const [referalName, setReferrerName] = useState(""); 
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    function handleName(e) {
        const nameVar = e.nativeEvent.text;
        setFullName(nameVar);
        setFullNameVerify(false);

        if (nameVar.length > 1) {
            setFullNameVerify(true);
        }
    }

    function handleUsername(e) {
        const userNameVar = e.nativeEvent.text;
        setUserName(userNameVar);
        setUserNameVerify(false);

        if (userNameVar.length > 1) {
            setUserNameVerify(true);
        }
    }

    function handleEmail(e) {
        const emailVar = e.nativeEvent.text;
        setEmail(emailVar);
        setEmailVerify(false);
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailVar)) {
            setEmail(emailVar);
            setEmailVerify(true);
        }
    }

    function handlePassword(e) {
        const passwordVar = e.nativeEvent.text;
        setPassword(passwordVar);
        setPasswordVerify(false);
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
            setPassword(passwordVar);
            setPasswordVerify(true);
        }
    }

    function handleReferrerName(e) {
        const referalNameVar = e.nativeEvent.text;
        setReferrerName(referalNameVar);
    }

    const navigateToLogin = () => {
        navigation.navigate('Login');
    };

    const handleSignUp = async () => {
        if (!fullName || !userName || !email || !password) {
            ToastAndroid.show('Please fill in all input fields.', ToastAndroid.SHORT);
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post('https://swift-coin-pi.vercel.app/api/sign-up', {
                fullName,
                userName,
                email,
                password,
                referalName: referalName || "name", 
            });
            console.log('Sign-up successful:', response.data);
            await AsyncStorage.setItem("swiftVerifyToken", response.data.data.token);
            await sendVerificationEmail(email);

            navigation.navigate('Success', { userEmail: email });
        } catch (error) {
            if (error.response && error.response.data && typeof error.response.data.message) {
                const errorMessage = error.response.data.message;
                ToastAndroid.show(errorMessage, ToastAndroid.LONG);
            } else if (error.response && error.response.status === 409) {
                ToastAndroid.show('Username already exists. Please choose a different one.', ToastAndroid.LONG);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
            console.error('Axios error config:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const sendVerificationEmail = async (email) => {
        console.log(email);
        try {
            await axios.post('https://swift-coin.onrender.com/api/sign-up-mail', { email });
            console.log('Verification email sent successfully.');
        } catch (error) {
            console.error('Failed to send verification email:', error);
        }
    };

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, width: "100%", height: "100%", backgroundColor: "black" }}>
            <View style={{ width: "100%", height: "100%" }}>
                <Image source={require('../assets/CoinSwift4.png')} style={{ position: "absolute", top: 0, right: 0 }} />
                <Image source={require('../assets/CoinSwift4.png')} style={{ position: "absolute", bottom: 0, right: 0 }} />
                <View style={{ width: "100%", height: "100%", alignItems: "center" }} >
                    <View style={{ width: "100%", height: 60, paddingLeft: 10 }}>
                        <Image source={require('../assets/CoinSwift5.png')} />
                    </View>
                    <View style={{ width: "100%", height: "10%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>Create Account</Text>
                    </View>
                    <View style={{ width: "85%", height: "max-content", gap: 30, justifyContent: "center" }}>
                        <View>
                            <TextInput
                                placeholder='Full Name'
                                placeholderTextColor="white"
                                style={{ color: "white", width: "100%", height: 60, borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10 }}
                                onChange={e => handleName(e)}
                            />
                            {fullName.length < 1 ? null : fullNameVerify ? (
                                <FontAwesome5 name="check-circle" size={20} color="green" style={{ position: "absolute", right: 10, top: 20 }} />
                            ) : (
                                <AntDesign name="exclamationcircle" size={20} color="red" style={{ position: "absolute", right: 10, top: 20 }} />
                            )}
                        </View>
                        {fullName.length < 1 ? null : fullNameVerify ? null : (
                            <Text style={{ color: "red", fontSize: 8 }}>Name should be more than one character</Text>
                        )}
                        <View>
                            <TextInput
                                placeholder='Username'
                                placeholderTextColor="white"
                                style={{ color: "white", width: "100%", height: 60, borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10 }}
                                onChange={e => handleUsername(e)}
                            />
                            {userName.length < 1 ? null : userNameVerify ? (
                                <FontAwesome5 name="check-circle" size={20} color="green" style={{ position: "absolute", right: 10, top: 20 }} />
                            ) : (
                                <AntDesign name="exclamationcircle" size={20} color="red" style={{ position: "absolute", right: 10, top: 20 }} />
                            )}
                        </View>
                        {userName.length < 1 ? null : userNameVerify ? null : (
                            <Text style={{ color: "red", fontSize: 8 }}>Username should be more than one character</Text>
                        )}
                        <View>
                            <TextInput
                                placeholder='Email Address'
                                placeholderTextColor="white"
                                style={{ color: "white", width: "100%", height: 60, borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10 }}
                                onChange={e => handleEmail(e)}
                            />
                            {email.length < 1 ? null : emailVerify ? (
                                <FontAwesome5 name="check-circle" size={20} color="green" style={{ position: "absolute", right: 10, top: 20 }} />
                            ) : (
                                <AntDesign name="exclamationcircle" size={20} color="red" style={{ position: "absolute", right: 10, top: 20 }} />
                            )}
                        </View>
                        {email.length < 1 ? null : emailVerify ? null : (
                            <Text style={{ color: "red", fontSize: 8 }}>Enter a proper Email Address</Text>
                        )}
                     
                        <View style={{ flexDirection: "row", width: "100%", height: 60, position: "relative" }}>
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor="white"
                                style={{ color: "white", width: "100%", height: "100%", borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10 }}
                                onChange={e => handlePassword(e)}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 10, top: 20 }}>
                                {password.length < 1 ? null : showPassword ? (
                                    <Ionicons name="eye-off-outline" size={24} color={passwordVerify ? "white" : "red"} />
                                ) : (
                                    <Feather name="eye" size={24} color={passwordVerify ? "white" : "red"} />
                                )}
                            </TouchableOpacity>
                        </View>
                        {password.length < 1 ? null : passwordVerify ? null : (
                            <Text style={{ color: "red", fontSize: 8 }}>Password must have an uppercase, a lowercase, a number, and be at least 6 characters long.</Text>
                        )}

                        <View>
                            <TextInput
                                placeholder='Referrer Name'
                                placeholderTextColor="white"
                                style={{ color: "white", width: "100%", height: 60, borderWidth: 1, borderColor: "white", borderRadius: 10, paddingLeft: 10 }}
                                onChange={e => handleReferrerName(e)}
                            />
                        </View>

                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <AntDesign name="checkcircleo" size={24} color="#E45E13" />
                            <Text style={{ color: "white" }}>Accept our terms and conditions</Text>
                        </View>
                    </View>
                    <View style={{ width: "85%", height: "20%", justifyContent: "center", alignItems: "center", gap: 10 }}>
                        <TouchableOpacity
                            style={{ width: '100%', height: 60, backgroundColor: '#E45E13', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}
                            onPress={handleSignUp}
                        >
                            {isLoading ? (
                                <Spinner
                                    visible={true}
                                    textContent={'Verifying...'}
                                    textStyle={{ color: 'white' }}
                                />
                            ) : (
                                <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>Sign Up</Text>
                            )}
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "white", fontWeight: "700" }}>Already have an account? </Text>
                            <Text style={{ color: "orange" }} onPress={navigateToLogin}>Log in</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}