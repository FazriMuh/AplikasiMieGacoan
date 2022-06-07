import React, { useState } from 'react';
import { Text, View, SafeAreaView, ImageBackground, Image } from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import Mybutton2 from '../components/Mybutton2';
import Mytittle from '../components/Mytittle';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'dbaccounting.db' });

const ViewAccounting = () => {
  let [inputLaporanId, setInputLaporanId] = useState('');
  let [laporanData, setLaporanData] = useState({});

  let searchLaporan = () => {
    console.log(inputLaporanId);
    setLaporanData({});
    
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Accounting where id_accounting = ?',
        [inputLaporanId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setLaporanData(results.rows.item(0));
          } else {
            alert('Data Laporan Tidak Ditemukan');
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
            placeholder="Input ID Laporan"
            onChangeText={
              (inputLaporanId) => setInputLaporanId(inputLaporanId)
            }
            style={{ padding: 10, color: '#02B1D7' }}
          />

            <Mybutton
                title="Cari Data"
                customClick={searchLaporan}
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
            <Text style={{fontSize:20,color:'white',fontWeight:"bold",paddingTop:2, paddingBottom:15, textAlign:"center"}}>Detail Accounting</Text>
            <Text style={{color:'white'}}>Id Laporan: {laporanData.id_accounting}</Text>
            <Text style={{color:'white'}}>Nama Laporan: {laporanData.nama}</Text>
            <Text style={{color:'white'}}>Tipe Laporan: {laporanData.tipe}</Text>
            <Text style={{color:'white'}}>Tanggal Laporan: {laporanData.tanggal}</Text>
            <Text style={{color:'white'}}>Total Laporan: {laporanData.harga}</Text>
           

          </View>
        </View>
    </SafeAreaView>
  );
};

export default ViewAccounting;