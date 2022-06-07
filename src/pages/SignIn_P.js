import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Image
} from 'react-native';
import axios from 'axios';
import Mybutton from './components/Mybutton';
import Mytextinput from './components/Mytextinput';

const SignIn_P = ({navigation}) => {

    useEffect(() => {
        axios.get('https://10.0.2.2:8000/users')
        .then(function (response) {
            console.log(response);
            setData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if(data.find(user => user.email === email && user.password === password)){
            Alert.alert('Sign in successful!');
            navigation.navigate('Home', {
                email: email,
                password: password
            });
        } else {
            Alert.alert('Sign in failed!');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
          <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{alignItems: 'center', justifyContent:'center', marginTop: 50, marginBottom: -250}}>
                    <Image style={{height: 200, width:200}}source={require('../images/gacoan.png')}/>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}></Text>
                </View>
                <ScrollView>
                    <View style={styles.body}>
                        <Mytextinput
                            placeholder="Email"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            style={{ padding: 10, color: '#02B1D7'}}
                        />
                        <Mytextinput
                                placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                                style={{ padding: 10, color: '#02B1D7'}}
                        />
                        
                        <Mybutton
                            title="Sign in"
                            customClick={handleSignIn}
                            btnColor='#02B1D7'
                        />
                        <View style={styles.buttonContainer}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.signUpText}>Dont have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('SignUp_P')}>
                                    <Text style={styles.signUpText}> Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                </View>
            </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default SignIn_P;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1039'
        
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 100,
        
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 120,
        color: 'white'
    },
    body: {
        marginTop: 140,

    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '75%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingLeft: 10,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        width: 100,
        height: 40,
        borderColor: 'navy',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 0,
        backgroundColor: 'navy',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    signUpText:{
        color: '#02B1D7'
    }
});