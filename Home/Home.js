import React from 'react';
import { SafeAreaView, Platform, StatusBar, View, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { TimeSet } from './TimeSet';
import { Bonus } from './Bonus';
import { Inviite } from './Inviite';
import { Community } from './Community';
import { Navigate } from './Navigate';
import { HeaderHome } from './HeaderHome';

export const Home = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1 }}>
      <ScrollView>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={{ width: "95%", alignItems: "center" }}>
           
              <Image source={require('../assets/CoinSwift4.png')}
                style={{ position: "absolute", top: 60, right: 0 }} />
              <Image source={require('../assets/CoinSwift4B.png')}
                style={{ position: "absolute", top: 200, left: 0 }} />
           
            <HeaderHome/>

            <TimeSet />
            <Bonus />
            <Inviite />
            <Community />
            <Navigate/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
