import React, { useState } from 'react';
import { Text, View, Alert, SafeAreaView, ImageBackground, Image } from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import Mytext from '../components/Mytext';
import Mytittle from '../components/Mytittle';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'dbinventory.db' });

const DeleteBarang = ({ navigation }) => {
  let [inputBarangId, setInputBarangId] = useState('');
  let deleteBarang = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  inventory where id_inventory=?',
        [inputBarangId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukses',
              'Data berhasil dihapus',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreenInventory'),
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
            placeholder="Enter Id Barang"
            onChangeText={(inputBarangId) => setInputBarangId(inputBarangId)}
            style={{ padding: 10, color: '#02B1D7'}}
          />
          <Mybutton
            title="Hapus"
            customClick={deleteBarang}
            btnColor='#EA008A'
          />
        </View>

        
    </SafeAreaView>
  );
};

export default DeleteBarang;