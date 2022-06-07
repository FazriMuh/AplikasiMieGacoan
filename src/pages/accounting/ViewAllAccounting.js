import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Mytittle from '../components/Mytittle';

var db = openDatabase({ name: 'dbaccounting.db' });

const ViewAllAccounting = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM accounting',
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
        key={item.id_accounting}>
        <View style={{alignItems: 'center'}}>
            <View style={styles.container3}>
                <Text style={styles.textNamaBarang}>
                  {item.nama}
                </Text>
                <View style={{flexDirection: 'row', marginLeft: 15}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textjudul}>ID :</Text>
                        <Text style={styles.textIsi}>{item.id_accounting}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.textjudul}>Tipe:</Text>
                        <Text style={styles.textIsi}>{item.tipe}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 15}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textjudul}>Tanggal :</Text>
                        <Text style={styles.textIsi}>{item.tanggal}</Text>
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

export default ViewAllAccounting;