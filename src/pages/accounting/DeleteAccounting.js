import React, { useState } from 'react';
import { Text, View, Alert, SafeAreaView, ImageBackground, Image } from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import Mytittle from '../components/Mytittle';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'dbaccounting.db' });

const DeleteAccounting = ({ navigation }) => {
  let [inputLaporanId, setInputLaporanId] = useState('');

  let deleteLaporan = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  accounting where id_accounting=?',
        [inputLaporanId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukses',
              'Data Laporan berhasil dihapus',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreenAccounting'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Insert ID yang benar');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#0D1039'}}>
          <View style={{alignItems: 'center', justifyContent:'center', marginTop: -20, marginBottom: -20}}>
              <Image style={{height: 200, width:200}}source={require('../../images/gacoan.png')}/>
          </View>
          <Mytextinput
            placeholder="Enter Id Laporan"
            onChangeText={(inputBarangId) => setInputBarangId(inputLaporanId)}
            style={{ padding: 10, color: '#02B1D7'}}
          />
          <Mybutton
            title="Hapus"
            customClick={deleteLaporan}
            btnColor='#EA008A'
          />
        </View>

        
    </SafeAreaView>
  );
};

export default DeleteAccounting;