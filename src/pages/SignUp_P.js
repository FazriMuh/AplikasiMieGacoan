import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, StyleSheet, Button, Alert, Image, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import axios from 'axios';
import Mybutton from './components/Mybutton';
import Mytextinput from './components/Mytextinput';

const SignUp_P = ({navigation}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        if(password === '' || confirmPassword === '' || email === '' || firstName === '' || lastName === ''){
            Alert.alert('Please fill in all fields');
        } else if(password !== confirmPassword){
            Alert.alert('Passwords do not match');
        } else if(password.length < 8){
            Alert.alert('Password must be at least 8 characters');
        }
        else{
            axios.post('https://10.0.2.2:8000/users', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            .then(function (response) {
                Alert.alert('Sign up successful!');
                navigation.navigate('SignIn_P', {
                    email: email,
                    password: password
                });
            })
            .catch(function (error) {
                Alert.alert('Sign up failed!');
            });
        }
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: 'center', justifyContent:'center', marginTop: 50, marginBottom: -250}}>
                    <Image style={{height: 200, width:200}}source={require('../images/gacoan.png')}/>
            </View>
            <View style={styles.cover}>
                <Text style={styles.headerText}></Text>
            </View>
            <ScrollView>
                
                <View style={styles.body}>
                    <Mytextinput
                        placeholder="First Name" 
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName} 
                        style={{ padding: 10, color: '#02B1D7'}}
                    />
                    <Mytextinput
                        placeholder="Last Name"
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                        style={{ padding: 10, color: '#02B1D7'}}
                    />
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
                    <Mytextinput
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        onChangeText={(text) => setConfirmPassword(text)}
                        style={{ padding: 10, color: '#02B1D7'}}
                    />
                    <Mybutton
                            title="Sign in"
                            customClick={handleSignUp}
                            btnColor='#02B1D7'
                    />
                    
                    <View style={styles.buttonContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.signUpText}>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignIn_P')}>
                                <Text style={styles.signUpText}> Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignUp_P;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1039',
        
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 100
        
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 120,
        marginBottom: 50,
        
    },
    body: {
        marginTop: 160,

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
        fontSize: 18,
        color: 'white',
    },
    signUpText:{
        color: '#02B1D7'
    }
});
