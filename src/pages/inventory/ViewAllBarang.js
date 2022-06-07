import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Mytittle from '../components/Mytittle';

var db = openDatabase({ name: 'dbinventory.db' });

const ViewAllBarang = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM inventory',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080',
        }}
      />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.id_inventory}>
        <View style={{alignItems: 'center'}}>
            <View style={styles.container3}>
                <Text style={styles.textNamaBarang}>
                  {item.nama}
                </Text>
                <View style={{flexDirection: 'row', marginLeft: 15}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textjudul}>ID :</Text>
                        <Text style={styles.textIsi}>{item.id_inventory}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textjudul}>Stok :</Text>
                        <Text style={styles.textIsi}>{item.kuantitas}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 15}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textjudul}>Jenis Barang :</Text>
                        <Text style={styles.textIsi}>{item.tipe}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textjudul}>Harga :</Text>
                        <Text style={styles.textIsi}>{item.harga}</Text>
                    </View>
                </View>
            </View>
          </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#0D1039'}}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textid:{    
    color: 'red',
    fontSize: 19,
    fontWeight: '700',
    fontWeight:"bold",

  },
  textheader: {
    color: '#111',
    fontSize: 19,
    fontWeight: '700',
    fontWeight:"bold",

  },
  textbottom: {
    color: '#111',
    fontSize: 19,
  },
  container3:{
    backgroundColor: 'white',
    marginTop: 10,
    height: 200,
    width: 360,
    borderRadius: 30,
    marginHorizontal: 10,
    padding: 10,
    justifyContent: 'center',
  },
  textNamaBarang:{
    color: '#EA008A', 
    fontFamily: 'Poppins', 
    fontWeight: 'bold', 
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  textjudul:{
    color: '#02B1D7', 
    fontFamily: 'Poppins', 
    fontWeight: '300', 
    fontSize: 14,
  },
  textIsi:{
    color: '#EA008A', 
    fontFamily: 'Poppins', 
    fontWeight: '600', 
    fontSize: 18,
    marginBottom: 10,
  }
});

export default ViewAllBarang;