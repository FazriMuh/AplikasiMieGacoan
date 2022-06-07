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
import Mybutton from '../components/Mybutton';
import Mybutton2 from '../components/Mybutton2';
import Mytittle from '../components/Mytittle';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'dbinventory.db' });

const UpdateBarang = ({ navigation }) => {
  let [InputinventoryId, setInputinventoryId] = useState('');
  let [inventoryNama, setNama] = useState('');
  let [inventoryTipe, setTipe] = useState('');
  let [inventoryKuantitas, setKuantitas] = useState('');
  let [inventoryHarga, setHarga] = useState('');


  let updateAllStates = (nama, tipe, kuantitas, harga) => {
    setNama(nama);
    setTipe(tipe);
    setKuantitas(kuantitas);
    setHarga(harga);
  };

  let searchBarang = () => {
    console.log(InputinventoryId);

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM inventory where id_inventory = ?',[InputinventoryId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(
              res.nama,
              res.tipe,
              res.kuantitas,
              res.harga,
            );
          } else {
            alert('Tidak Ada Barang Ditemukan');
            updateAllStates('', '', '','','');
          }
        },
      );
    });
  };

  let updateBarang = () => {
    console.log(InputinventoryId, inventoryNama, inventoryTipe, inventoryKuantitas, inventoryHarga);

    if (!InputinventoryId) {
      alert('Input Id Barang');
      return;
    }
    if (!inventoryNama) {
      alert('Input Nama Barang');
      return;
    }
    if (!inventoryTipe) {
      alert('Input Tipe Barang');
      return;
    }
    if (!inventoryKuantitas) {
      alert('Input Kuantitas Barang');
      return;
    }
    if (!inventoryHarga) {
      alert('Input Harga Barang');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE inventory set nama=?, tipe=?, kuantitas=?, harga=? where id_inventory=?',
        [inventoryNama, inventoryTipe, inventoryKuantitas, inventoryHarga, InputinventoryId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukses',
              'Data Barang Berhasil diUpdate',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreenInventory'),
                },
              ],
              { cancelable: false },
            );
          } else Alert.alert('Update Gagal');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent:'center' }}>
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: '#0D1039' }}>
          <View style={{alignItems: 'center', justifyContent:'center', marginTop: -40, marginBottom: -20}}>
              <Image style={{height: 200, width:200}}source={require('../../images/gacoan.png')}/>
          </View>
              <Mytextinput
                placeholder="Masukkan ID Barang"
                style={{ padding: 10, color: '#02B1D7' }}
                onChangeText={
                  (InputinventoryId) => setInputinventoryId(InputinventoryId)
                }
              />
              <Mybutton
                title="Cari Data"
                customClick={searchBarang}
                btnColor='#02B1D7'
              />
              <Mytextinput
                placeholder="Input Nama Barang..."
                value={inventoryNama}
                style={{ padding: 10, color: '#02B1D7' }}
                onChangeText={
                  (inventoryNama) => setNama(inventoryNama)
                }
                maxLength={100}
              />
              <Mytextinput
                placeholder="Input Tipe Barang..."
                value={inventoryTipe}
                onChangeText={
                  (inventoryTipe) => setTipe(inventoryTipe)
                }
                maxLength={100}
                style={{ padding: 10 , color: '#02B1D7'}}

              />
              <Mytextinput
                placeholder="Input Kuantitas Barang..."
                value={'' + inventoryKuantitas}
                onChangeText={
                  (inventoryKuantitas) => setKuantitas(inventoryKuantitas)
                }
                maxLength={15}
                keyboardType="numeric"
                style={{padding:10, color: '#02B1D7'}}
              />

              <Mytextinput
                placeholder="Input  Harga Barang..."
                value={'' + inventoryHarga}
                onChangeText={
                  (inventoryHarga) => setHarga(inventoryHarga)
                }
                maxLength={100}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />       

              <Mybutton
                title="Perbarui Data"
                customClick={updateBarang}
                btnColor='#02B1D7'
              />
              
        </View>
    </SafeAreaView>
  );
};

export default UpdateBarang;