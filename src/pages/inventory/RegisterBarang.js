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
import Mybutton from '../components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import Mytittle from '../components/Mytittle';

var db = openDatabase({ name: 'dbinventory.db' });

const RegisterBarang = ({ navigation }) => {
  let [inventoryNama, setNama] = useState('');
  let [inventoryTipe, setTipe] = useState('');
  let [inventoryKuantitas, setKuantitas] = useState('');
  let [inventoryHarga, setHarga] = useState('');

  let reset = () => {
    alert('Apakah Anda Yakin Reset Data?')
  };

  let batal_btn = () => {
    navigation.navigate('HomeScreenInventory');
  };
  
  let register_barang = () => {
    console.log(inventoryNama, inventoryTipe, inventoryKuantitas, inventoryHarga);

    if (!inventoryNama) {
      alert('Please Input Nama Barang');
      return;
    }
    if (!inventoryTipe) {
      alert('Please Input Tipe Barang');
      return;
    }
    if (!inventoryKuantitas) {
      alert('Please Input Kuantitas Barang');
      return;
    }
    if (!inventoryHarga) {
      alert('Please Input Harga Barang');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO inventory (nama, tipe, kuantitas, harga) VALUES (?,?,?,?)',
        [inventoryNama, inventoryTipe, inventoryKuantitas, inventoryHarga],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukses',
              'Data Berhasil Ditambahkan',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreenInventory'),
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
            <KeyboardAvoidingView
              behavior="padding"
              style={{ justifyContent: 'center' }}>
              <Mytextinput
                placeholder="Masukkan nama barang"
                onChangeText={
                  (inventoryNama) => setNama(inventoryNama)
                }
                maxLength={100}
                style={{ padding: 10, color: '#02B1D7' }}
              />
              <Mytextinput
                placeholder="Masukkan tipe barang"
                onChangeText={
                  (inventoryTipe) => setTipe(inventoryTipe)
                }
                maxLength={100}
                style={{ padding: 10, color: '#02B1D7' }}
              />
              <Mytextinput
                placeholder="Masukkan jumlah barang"
                onChangeText={
                  (inventoryKuantitas) => setKuantitas(inventoryKuantitas)
                }
                maxLength={15}
                keyboardType="numeric"
                style={{ padding: 10, color: '#02B1D7' }}
              />
              <Mytextinput
                placeholder="Masukkan harga barang"
                onChangeText={
                  (inventoryHarga) => setHarga(inventoryHarga)
                }
                maxLength={100}
                keyboardType="numeric"
                style={{ padding: 10, color: '#02B1D7' }}
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
          </KeyboardAvoidingView>
        </View>
    </SafeAreaView>
  );
};

export default RegisterBarang;