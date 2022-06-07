import React, { useEffect } from 'react';
import Mytittle from './components/Mytittle';
import { View, SafeAreaView, Image, StyleSheet, Text, } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation, route}) => {


const image = { uri : "https://terserahresto.000webhostapp.com/wp-content/uploads/2022/05/backg-1.png"};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={{flex: 1}}>
          <Text style={{color: '#02B1D7', fontFamily: 'Poppins', fontWeight: '400', fontSize: 12,}}>
            Halo,
          </Text>
          <Text style={{color: '#EA008A', fontFamily: 'Poppins', fontWeight: '600', fontSize: 25,}}>
            Selamat Datang
          </Text>
        </View>
        <View>
          <Image style={{height: 60, width: 100, resizeMode: 'contain' }}source={require('../images/gacoan2.png')}/>
        </View>
      </View>
      
      <View style={{flexDirection: 'row', paddingHorizontal: 20,paddingVertical: 5, height: 35,alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', marginHorizontal: 20, marginTop: 10, borderRadius: 20, borderWidth: 1, borderColor: '#02B1D7'}}>
        <TextInput style={{flex: 1}} placeholder="Mau cari apa hari ini?" placeholderTextColor={'#02B1D7'}></TextInput>
      </View>

      <ScrollView style={{flex: 1}}>
        <View style={styles.container2}>
          <View style={{flex: 1}}>
            <Text style={styles.textjudul}>
              Fitur Menu
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.text2}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity style={{flex: 1, margin: 5, alignItems: 'center'}} onPress={() => navigation.navigate('HomeScreenInventory')}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{resizeMode: 'contain' }}source={require('../images/pengadaan.png')}/>
              <Text style={styles.text3}>
                Persediaan
              </Text>
              <Text style={styles.text31}>
                Barang
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, margin: 5, alignItems: 'center'}} onPress={() => navigation.navigate('HomeScreenInventory')}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{resizeMode: 'contain' }}source={require('../images/produk.png')}/>
              <Text style={styles.text3}>
                Produk
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, margin: 5, alignItems: 'center'}} onPress={() => navigation.navigate('HomeScreenInventory')}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{resizeMode: 'contain' }}source={require('../images/pekerja.png')}/>
              <Text style={styles.text3}>
                Pegawai
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, margin: 5, alignItems: 'center'}} onPress={() => navigation.navigate('HomeScreenAccounting')}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{resizeMode: 'contain' }}source={require('../images/penjualan.png')}/>
              <Text style={styles.text3}>
                Penjualan
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <View style={{flex: 1}}>
            <Text style={styles.textjudul}>
              Produk
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.text2}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.container4} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{height: 180, width: 150, borderWidth: 1, borderColor: '#02B1D7', borderRadius: 25, marginRight: 20}}>
            <View style={{flex: 1, borderBottomWidth: 1, borderColor: '#02B1D7', borderTopLeftRadius: 30, borderTopRightRadius: 25}}>

            </View>
            <View style={{height: 60, flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Text style={styles.textnamaproduk}>Mie Setan</Text>
                <Text style={styles.textharga}>13.000</Text>
              </View>
              <TouchableOpacity style={{backgroundColor: 'black'}}>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={{height: 180, width: 150, borderWidth: 1, borderColor: '#02B1D7', borderRadius: 25, marginRight: 20}}>
            <View style={{flex: 1, borderBottomWidth: 1, borderColor: '#02B1D7', borderTopLeftRadius: 30, borderTopRightRadius: 25}}>

            </View>
            <View style={{height: 60, flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Text style={styles.textnamaproduk}>Mie Angel</Text>
                <Text style={styles.textharga}>13.000</Text>
              </View>
              <TouchableOpacity style={{backgroundColor: 'black'}}>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{height: 180, width: 150, borderWidth: 1, borderColor: '#02B1D7', borderRadius: 25, marginRight: 20,}}>
            <View style={{flex: 1, borderBottomWidth: 1, borderColor: '#02B1D7', borderTopLeftRadius: 30, borderTopRightRadius: 25}}>
              
            </View>
            <View style={{height: 60, flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Text style={styles.textnamaproduk}>Mie Setan</Text>
                <Text style={styles.textharga}>13.000</Text>
              </View>
              <TouchableOpacity style={{backgroundColor: 'black'}}>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={styles.container2}>
          <View style={{flex: 1}}>
            <Text style={styles.textjudul}>
              Promo
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.text2}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.container4} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{height: 100, width: 200, backgroundColor: '#EA008A', borderRadius: 20, marginRight: 20}}>
          </View>
          <View style={{height: 100, width: 200, backgroundColor: '#02B1D7', borderRadius: 20}}>
          </View>
        </ScrollView>



      </ScrollView>

      <View style={{height: 80, margin: 15, backgroundColor: '#0D1039', padding: 10, alignItems: 'center', borderRadius: 30, flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
          <Image style={{resizeMode: 'contain' }}source={require('../images/homeIcon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
          <Image style={{resizeMode: 'contain' }}source={require('../images/newsIcon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
          <Image style={{resizeMode: 'contain' }}source={require('../images/cartIcon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
          <Image style={{resizeMode: 'contain' }}source={require('../images/profileIcon.png')}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#ffff',
    padding: 10
	},
  container2:{
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 10
  },
  textjudul:{
    color: '#02B1D7', 
    fontFamily: 'Poppins', 
    fontWeight: '500', 
    fontSize: 20,
  },
  text2:{
    color: '#02B1D7', 
    fontFamily: 'Poppins', 
    fontWeight: '300', 
    fontSize: 12,
  },
  container3:{
    flexDirection: 'row',
    marginTop:10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container4:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 20,
    // alignItems: 'center',
    
  },
  text3:{
    color: '#0D1039', 
    fontFamily: 'Poppins', 
    fontWeight: '300',
    marginTop: 8, 
    fontSize: 15,
  },
  text31:{
    color: '#0D1039', 
    fontFamily: 'Poppins', 
    fontWeight: '300', 
    fontSize: 15,
    marginTop: -5
  },
  textharga:{
    color: '#02B1D7', 
    fontFamily: 'Poppins', 
    fontWeight: '300', 
    fontSize: 12,
  },
  textnamaproduk:{
    color: '#02B1D7', 
    fontFamily: 'Poppins', 
    fontWeight: '500', 
    fontSize: 16,
  }
});
export default Home;