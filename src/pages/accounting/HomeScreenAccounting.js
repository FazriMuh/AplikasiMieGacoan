import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, ImageBackground , StyleSheet} from 'react-native';
import Mybutton from '../components/Mybutton';
import Mytext from '../components/Mytext';
import Mytittle from '../components/Mytittle';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'dbaccounting.db' });

const HomeScreenAccounting = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='accounting'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS accounting', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS accounting(id_accounting INTEGER PRIMARY KEY AUTOINCREMENT, nama VARCHAR(100), tipe VARCHAR(10), tanggal VARCHAR(100), harga INT(100))',
              [],
            );
          }
        },
      );
    });
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={{alignItems: 'center', justifyContent:'center', marginTop: 20}}>
              <Image style={{height: 200, width:200}}source={require('../../images/gacoan.png')}/>
          </View>
          <Text style={{textAlign: 'center' ,color: '#02B1D7', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 30,marginTop: -10,}}>
              Laporan Penjualan
          </Text>
          <Mybutton
            title="Tambah Laporan Penjualan"
            customClick={() => navigation.navigate('RegisterAccounting')}
            btnColor='#02B1D7'
          />
          <Mybutton
            title="Perbarui Laporan Penjualan"
            customClick={() => navigation.navigate('UpdateAccounting')}
            btnColor='#02B1D7'
          />
          <Mybutton
            title="Lihat Laporan Penjualan"
            customClick={() => navigation.navigate('ViewAllAccounting')}
            btnColor='#02B1D7'
          />          
          <Mybutton
            title="Lihat Detail Penjualan"
            customClick={() => navigation.navigate('ViewAccounting')}
            btnColor='#02B1D7'
          />
          <Mybutton
            title="Hapus Data Penjualan"
            customClick={() => navigation.navigate('DeleteAccounting')}
            btnColor='#02B1D7'
          />
          <Mybutton
            title="kembali"
            customClick={() => navigation.navigate('Home')}
            btnColor='#EA008A'
          />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: '#0D1039',
        padding: 30,
	}
});

export default HomeScreenAccounting;