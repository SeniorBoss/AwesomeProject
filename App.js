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

export default function App() {
  return (
   <View style={{ flex : 1,  width:"100%", height : "100vh", backgroundColor: "black", display: "flex",}}>
     {/* <Welcome/> */}
     {/* <WelcomeSec/> */}
     {/* <WelcomeThir/> */}
     {/* <SignUp/> */}
     {/* <Login/> */}
     {/* <Success/> */}
     {/* <OTP/> */}
     {/* <SuccessNotification/> */}
     <Home/>
    </View>
  );
}


