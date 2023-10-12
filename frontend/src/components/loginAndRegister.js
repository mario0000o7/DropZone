import {useState} from "react";
import {Button, TextInput, ToggleButton} from "react-native-paper";
import {Text, View} from "react-native";


const LoginComponents=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <View style={{alignItems:"center",width:'100%',height:'auto'}}>
            <TextInput
                style={{width:'80%'}}
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={{width:'80%'}}
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
            />
        </View>



    )
}

const RegisterComponents=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    return(
        <View style={{alignItems:"center",width:'100%',height:'auto'}}>
            <TextInput
                style={{width:'80%'}}
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={{width:'80%'}}
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TextInput
                style={{width:'80%'}}
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
            />
        </View>
    )
}

const LoginRegisterButtonsNavigation=({login,setLogin})=>{
    return(
        <View style={{alignItems:"center",width:'100%',height:'auto'}}>
            <Text style={{fontWeight:'bold',fontSize:50}}>{login?"Login":"Register"}</Text>
            <View style={{paddingVertical:'2%'}}/>
            <ToggleButton.Row onValueChange={value => setLogin(!login)} value={login}>
                <ToggleButton icon="login" value={true} />
                <ToggleButton icon="account-plus" value={false} />
            </ToggleButton.Row>
        </View>
    )
}
const LoginButton=()=>{
    return(
        <Button mode="contained" onPress={() => console.log('Pressed')}>
            Login
        </Button>
    )
}
const RegisterButton=()=>{
    return(
        <Button mode="contained" onPress={() => console.log('Pressed')}>
            Register
        </Button>
    )
}

export {LoginComponents,RegisterComponents,LoginRegisterButtonsNavigation,LoginButton,RegisterButton};