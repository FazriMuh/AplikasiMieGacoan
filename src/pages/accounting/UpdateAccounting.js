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

var db = openDatabase({ name: 'dbaccounting.db' });

const UpdateAccounting = ({ navigation }) => {
  let [InputaccountingId, setInputaccountingId] = useState('');
  let [accountingNama, setNama] = useState('');
  let [accountingTipe, setTipe] = useState('');
  let [accountingTanggal, setTanggal] = useState('');
  let [accountingHarga, setHarga] = useState('');


  let updateAllStates = (nama, tipe, tanggal, harga) => {
    setNama(nama);
    setTipe(tipe);
    setTanggal(tanggal);
    setHarga(harga);
  };

  let searchLaporan = () => {
    console.log(InputaccountingId);

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM accounting where id_accounting = ?',[InputaccountingId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(
              res.nama,
              res.tipe,
              res.tanggal,
              res.harga,
            );
          } else {
            alert('Tidak Ada Laporan Ditemukan');
            updateAllStates('', '', '','');
          }
        },
      );
    });
  };

  let updateLaporan = () => {
    console.log(InputaccountingId, accountingNama, accountingTipe, accountingTanggal, accountingHarga);

    if (!InputaccountingId) {
      alert('Input Id Laporan');
      return;
    }
    if (!accountingNama) {
      alert('Input Nama Laporan');
      return;
    }
    if (!accountingTipe) {
      alert('Input Tipe Laporan');
      return;
    }
    if (!accountingTanggal) {
      alert('Input Tanggal Laporan');
      return;
    }
    if (!accountingHarga) {
      alert('Input Total Laporan');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE accounting set nama=?, tipe=? , tanggal=?, harga=? where id_accounting=?',
        [accountingNama, accountingTipe, accountingTanggal, accountingHarga, InputaccountingId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukses',
              'Data Laporan Berhasil diUpdate',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreenAccounting'),
                },
              ],
              { cancelable: false },
            );
          } else alert('Update Gagal');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent:'center' }}>
         <View style={{ flex: 1, justifyContent: "center", backgroundColor: '#0D1039' }}>
            <View style={{alignItems: 'center', justifyContent:'center', marginTop: -10, marginBottom: -80}}>
                <Image style={{height: 200, width:200}}source={require('../../images/gacoan.png')}/>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}>
              <Mytextinput
                placeholder="Input ID Laporan"
                style={{ padding: 10, color: '#02B1D7' }}
                onChangeText={
                  (InputaccountingId) => setInputaccountingId(InputaccountingId)
                }
              />
              <Mybutton
                title="Cari Data"
                customClick={searchLaporan}
                btnColor='#02B1D7'
              />
              <Mytextinput
                placeholder="Input Nama Laporan..."
                value={accountingNama}
                style={{ padding: 10, color: '#02B1D7'  }}
                onChangeText={
                  (accountingNama) => setNama(accountingNama)
                }
                maxLength={100}
              />
              <Mytextinput
                placeholder="Input Tipe Laporan..."
                value={accountingTipe}
                onChangeText={
                  (accountingTipe) => setTipe(accountingTipe)
                }
                maxLength={100}
                style={{ padding: 10, color: '#02B1D7'  }}

              />
              <Mytextinput
                placeholder="Input Tanggal Laporan..."
                value={accountingTanggal}
                onChangeText={
                  (accountingTanggal) => setTanggal(accountingTanggal)
                }
                maxLength={100}
                style={{padding:10, color: '#02B1D7' }}
              />

              <Mytextinput
                placeholder="Input Total Laporan..."
                value={'' + accountingHarga}
                onChangeText={
                  (accountingHarga) => setHarga(accountingHarga)
                }
                maxLength={100}
                style={{ padding: 10, color: '#02B1D7'  }}
                keyboardType="numeric"
              />       

              <View style={{}}>
              <Mybutton
                title="Cari Data"
                customClick={updateLaporan}
                btnColor='#02B1D7'
              />
              </View>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default UpdateAccounting;