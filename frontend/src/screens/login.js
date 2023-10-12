import {
    LoginButton,
    LoginComponents,
    LoginRegisterButtonsNavigation, RegisterButton,
    RegisterComponents
} from "../components/loginAndRegister";
import {View} from "react-native";
import {Button, ToggleButton} from "react-native-paper";
import {useState} from "react";


export default function LoginScreen(){
    const [login,setLogin]=useState(true);
    return(
        <View style={{flex:1,width:'100%',paddingTop:'15%'}}>
            <LoginRegisterButtonsNavigation login={login} setLogin={setLogin}/>
            <View style={{paddingVertical:'2%'}}/>
            {login?<LoginComponents/>:<RegisterComponents/>}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '90%',paddingVertical:'2%' }}>
                {login?<LoginButton/>:<RegisterButton/>}
            </View>
        </View>





    );
}