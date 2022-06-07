import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import React, {useEffect} from 'react';

const Onboard = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn_P');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0D1039', padding: 20}}>
      <View style={{ flex: 1}}>
        <View style={{alignItems: 'center', justifyContent:'center', flex: 1}}>
          <Image style={{height: 300, width:300}}source={require('../images/gacoan.png')}/>
        </View>
        <View>
          <Text style={{color: '#fff', fontWeight: '200', marginTop: 10, fontSize: 18, }}>
            Powered by
          </Text>
          <Image style={{height: 60, width: 200, marginTop: 5, resizeMode: 'contain' }}source={require('../images/Sekolahvokasi.png')}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({});
