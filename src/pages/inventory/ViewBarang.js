import React, { useState } from 'react';
import { Text, View, SafeAreaView, ImageBackground, Image } from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import Mybutton2 from '../components/Mybutton2';
import Mytittle from '../components/Mytittle';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'dbinventory.db' });

const ViewBarang = () => {
  let [inputBarangId, setInputBarangId] = useState('');
  let [barangData, setBarangData] = useState({});

  let searchBarang = () => {
    console.log(inputBarangId);
    setBarangData({});
    
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM inventory where id_inventory = ?',
        [inputBarangId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setBarangData(results.rows.item(0));
          } else {
            alert('Data inventory Tidak Ditemukan');
          }
        },
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
            placeholder="Input ID Barang"
            onChangeText={
              (inputBarangId) => setInputBarangId(inputBarangId)
            }
            style={{ padding: 10, color: '#02B1D7' }}
          />

          <Mybutton
                title="Cari Data"
                customClick={searchBarang}
                btnColor='#02B1D7'
              />

          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10,
              backgroundColor: '#373057',
              padding:20,
              borderRadius: 10,

            }}>
            <Text style={{fontSize:20,color:'white',fontWeight:"bold",paddingTop:2, paddingBottom:15, textAlign:"center"}}>Detail Barang</Text>
            <Text style={{color:'white'}}>Id Barang              : {barangData.id_inventory}</Text>
       
            <Text style={{color:'white'}}>Nama Barang       : {barangData.nama}</Text>
            
            <Text style={{color:'white'}}>Tipe Barang          : {barangData.tipe}</Text>
            
            <Text style={{color:'white'}}>Kuantitas Barang : {barangData.kuantitas}</Text>
            <Text style={{color:'white'}}>Harga Barang       : {barangData.harga}</Text>
           

          </View>
        </View>
    </SafeAreaView>
  );
};

export default ViewBarang;