import { Text, View, } from 'react-native';
import { Welcome} from './WelcomePage/Welcome';
import { WelcomeSec } from './WelcomePage/WelcomeSec';
import { WelcomeThir } from './WelcomePage/WelcomeThir';
import { SignUp } from './AUTH/SignUp';
import { Login } from './AUTH/Login';
import { Success } from './SuccessFulPage/Success';
import { OTP } from './SuccessFulPage/OTP';
import { SuccessNotification } from './SuccessFulPage/SuccessNotification';
import { Home } from './Home/Home';
import { SwiftAmount } from './Token/SwiftAmount';
import { Referral } from './Referral/Referral';
import { Withdraw } from './WithdrawerPage/Withdraw';
import { NativeModules } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EmailResetOTP } from './ResetPassword/EmailResetOTP';
import { ChangeForegetPass } from './ResetPassword/ChangeForegetPass';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    
        <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{ headerShown: false }} 
      />

      <Stack.Screen
        name="WelcomeSec"
        component={WelcomeSec}
        options={{ headerShown: false }} 
      />

      <Stack.Screen
        name="WelcomeThir"
        component={WelcomeThir}
        options={{ headerShown: false }} 
      />

       <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }} 
      />

      
    <Stack.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }} 
      /> 

    <Stack.Screen
        name="OTP"
        component={OTP}
        options={{ headerShown: false }} 
      />

    <Stack.Screen
        name="SuccessNotification"
        component={SuccessNotification}
        options={{ headerShown: false }} 
      /> 

     <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} 
      /> 

     <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} 
      /> 

     <Stack.Screen
        name="EmailResetOTP"
        component={EmailResetOTP}
        options={{ headerShown: false }} 
      />

   
     <Stack.Screen
        name="ChangeForegetPass"
        component={ChangeForegetPass}
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
