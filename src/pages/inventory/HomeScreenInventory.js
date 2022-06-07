import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, ImageBackground , StyleSheet} from 'react-native';
import Mybutton from '../components/Mybutton';
import Mytext from '../components/Mytext';
import Mytittle from '../components/Mytittle';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'dbinventory.db' });

const HomeScreenInventory = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='inventory'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS inventory', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS inventory(id_inventory INTEGER PRIMARY KEY AUTOINCREMENT, nama VARCHAR(100), tipe VARCHAR(10), kuantitas INT(15), harga INT(100))',
              [],
            );
          }
        },
      );
    });
  }, []);


  const image = { uri : "https://terserahresto.000webhostapp.com/wp-content/uploads/2022/05/backg-1.png"};

  return (
    <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={{alignItems: 'center', justifyContent:'center', marginTop: 20}}>
              <Image style={{height: 200, width:200}}source={require('../../images/gacoan.png')}/>
          </View>
          <Text style={{textAlign: 'center' ,color: '#02B1D7', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 30,marginTop: -10,}}>
              Persediaan Barang
          </Text>
          <Mybutton
            title="Tambah Data Barang"
            customClick={() => navigation.navigate('RegisterBarang')}
            btnColor='#02B1D7'
          />
          <Mybutton
            title="Perbarui Data Barang"
            customClick={() => navigation.navigate('UpdateBarang')}
            btnColor='#02B1D7'
          />
          <Mybutton
            title="Lihat Data Barang"
            customClick={() => navigation.navigate('ViewAllBarang')}
            btnColor='#02B1D7'
          />          
          <Mybutton
            title="Lihat Detail Barang"
            customClick={() => navigation.navigate('ViewBarang')}
            btnColor='#02B1D7'
          />
          <Mybutton
            title="Hapus Data Barang"
            customClick={() => navigation.navigate('DeleteBarang')}
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

export default HomeScreenInventory;