import {useState} from "react";
import {Button, SegmentedButtons, TextInput, ToggleButton} from "react-native-paper";
import {Text, View} from "react-native";


const LoginComponents=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(true);

    return(
        <View style={{alignItems:"center",width:'100%',height:'auto'}}>
            <TextInput
                style={{width:'80%'}}
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                mode={'outlined'}
            />
            <TextInput
                style={{width:'80%',marginTop:'2%'}}
                mode={'outlined'}
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                right={<TextInput.Icon icon={showPassword ? 'eye' : 'eye-off'} onPress={()=>{showPassword ? setShowPassword(false) : setShowPassword(true)}}/>}

            />
        </View>



    )
}


const RegisterComponents=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [showPassword,setShowPassword]=useState(true);
    const [showConfirmPassword,setShowConfirmPassword]=useState(true);

    return(
        <View style={{alignItems:"center",width:'100%',height:'auto'}}>
            <TextInput
                style={{width:'80%'}}
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                mode={'outlined'}
            />
            <TextInput
                style={{width:'80%',marginBottom:'2%',marginTop:'2%'}}
                label="Password"
                value={password}
                secureTextEntry={showPassword}
                onChangeText={text => setPassword(text)}
                mode={'outlined'}
                right={<TextInput.Icon icon={showPassword ? 'eye' : 'eye-off'} onPress={()=>{showPassword ? setShowPassword(false) : setShowPassword(true)}}/>}
            />
            <TextInput
                style={{width:'80%'}}
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                mode={'outlined'}
                right={<TextInput.Icon icon={showConfirmPassword ? 'eye' : 'eye-off'} onPress={()=>{showConfirmPassword ? setShowConfirmPassword(false) : setShowConfirmPassword(true)}}/>}

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
        <Button buttonColor={'blue'} mode="contained" onPress={() => console.log('Pressed')}>
            Login
        </Button>
    )
}
const RegisterButton=()=>{
    return(
        <Button buttonColor={'blue'} mode="contained" onPress={() => console.log('Pressed')}>
            Register
        </Button>
    )
}

export {LoginComponents,RegisterComponents,LoginRegisterButtonsNavigation,LoginButton,RegisterButton};