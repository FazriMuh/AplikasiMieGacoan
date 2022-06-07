import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  ImageBackground,
  Image
} from 'react-native';

import Mytextinput from '../components/Mytextinput';
import Mybutton2 from '../components/Mybutton2';
import { openDatabase } from 'react-native-sqlite-storage';
import Mytittle from '../components/Mytittle';
import Mybutton from '../components/Mybutton';

var db = openDatabase({ name: 'dbaccounting.db' });

const RegisterAccounting = ({ navigation }) => {
  let [accountingNama, setNama] = useState('');
  let [accountingTipe, setTipe] = useState('');
  let [accountingTanggal, setTanggal] = useState('');
  let [accountingHarga, setHarga] = useState('');

  let reset = () => {
    alert('Apakah Anda Yakin Reset Data?')
  };

  let batal_btn = () => {
    navigation.navigate('HomeScreenAccounting');
  };
  
  let register_barang = () => {
    console.log(accountingNama, accountingTipe, accountingTanggal, accountingHarga);

    if (!accountingNama) {
      alert('Please Input Nama Laporan');
      return;
    }
    if (!accountingTipe) {
      alert('Please Input Tipe Laporan');
      return;
    }
    if (!accountingTanggal) {
      alert('Please Input Tanggal Laporan');
      return;
    }
    if (!accountingHarga) {
      alert('Please Input Total Laporan');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO accounting (nama, tipe, tanggal, harga) VALUES (?,?,?,?)',
        [accountingNama, accountingTipe, accountingTanggal, accountingHarga],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukses',
              'Data Laporan Berhasil Ditambahkan',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreenAccounting'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Gagal');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: '#0D1039'}}>
          <View style={{alignItems: 'center', justifyContent:'center', marginTop: -40, marginBottom: -20}}>
              <Image style={{height: 200, width:200}}source={require('../../images/gacoan.png')}/>
          </View>
              <Mytextinput
                placeholder="Input Nama Laporan..."
                onChangeText={
                  (accountingNama) => setNama(accountingNama)
                }
                maxLength={100}
                style={{ padding: 10, color: '#02B1D7' }}
              />
              <Mytextinput
                placeholder="Input Tipe Laporan..."
                onChangeText={
                  (accountingTipe) => setTipe(accountingTipe)
                }
                maxLength={100}
                style={{ padding: 10, color: '#02B1D7' }}
              />
              <Mytextinput
                placeholder="Enter Tanggal Laporan..."
                onChangeText={
                  (accountingTanggal) => setTanggal(accountingTanggal)
                }
                maxLength={100}
                style={{ padding: 10, color: '#02B1D7' }}
              />
              <Mytextinput
                placeholder="Input Total Laporan..."
                onChangeText={
                  (accountingHarga) => setHarga(accountingHarga)
                }
                maxLength={100}
                keyboardType="numeric"
                style={{ padding: 10, color: '#02B1D7'  }}
              />
            <Mybutton
              title="Tambah Data"
              customClick={register_barang}
              btnColor='#02B1D7'
            />
            <Mybutton
              title="Reset Data"
              customClick={reset}
              btnColor='#02B1D7'
            />
            <Mybutton
              title="Kembali"
              customClick={batal_btn}
              btnColor='#EA008A'
            />
        </View>
    </SafeAreaView>
  );
};

export default RegisterAccounting;