import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Onboard from './src/pages/Onboard';
import HomeScreenInventory from './src/pages/inventory/HomeScreenInventory';
import HomeScreenAccounting from './src/pages/accounting/HomeScreenAccounting';
import RegisterBarang from './src/pages/inventory/RegisterBarang';
import RegisterAccounting from './src/pages/accounting/RegisterAccounting';
import UpdateBarang from './src/pages/inventory/UpdateBarang';
import UpdateAccounting from './src/pages/accounting/UpdateAccounting';
import ViewBarang from './src/pages/inventory/ViewBarang';
import ViewAccounting from './src/pages/accounting/ViewAccounting';
import ViewAllBarang from './src/pages/inventory/ViewAllBarang';
import ViewAllAccounting from './src/pages/accounting/ViewAllAccounting';
import DeleteBarang from './src/pages/inventory/DeleteBarang';
import DeleteAccounting from './src/pages/accounting/DeleteAccounting';
import SignIn_P from './src/pages/SignIn_P';
import SignUp_P from './src/pages/SignUp_P';
import * as axios from 'axios';

const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoard">

        <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="SignIn_P" 
          component={SignIn_P} 
          options={{
              headerShown: false
          }} />

        <Stack.Screen 
          name="SignUp_P" 
          component={SignUp_P} 
          options={{
              headerShown: false
          }} />

        <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown:false,
            }}
          />

        <Stack.Screen
          name="HomeScreenInventory"
          component={HomeScreenInventory}
          options={{
            headerShown:false,
          }}
        />

        <Stack.Screen
          name="HomeScreenAccounting"
          component={HomeScreenAccounting}
          options={{
            headerShown:false,
          }}
        />

        <Stack.Screen
          name="ViewBarang"
          component={ViewBarang}
          options={{
            title: 'View Detail', //Set Header Title
            headerStyle: {
              backgroundColor: '#0D1039', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

       

        <Stack.Screen
          name="ViewAccounting"
          component={ViewAccounting}
          options={{
            title: 'View Detail', //Set Header Title
            headerStyle: {
              backgroundColor: '#0D1039', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="ViewAllBarang"
          component={ViewAllBarang}
          options={{
            title: 'View Data Barang', //Set Header Title
            headerStyle: {
              backgroundColor: '#0D1039', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />


      <Stack.Screen
          name="ViewAllAccounting"
          component={ViewAllAccounting}
          options={{
            title: 'View Laporan', //Set Header Title
            headerStyle: {
              backgroundColor: '#0D1039', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="UpdateBarang"
          component={UpdateBarang}
          options={{
            title: 'Perbarui Barang', //Set Header Title
            headerStyle: {
              backgroundColor: '#0D1039', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />



        <Stack.Screen
          name="UpdateAccounting"
          component={UpdateAccounting}
          options={{
            title: 'Update Laporan', //Set Header Title
            headerStyle: {
              backgroundColor: '#0D1039', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="RegisterBarang"
          component={RegisterBarang}
          options={{
            title: 'Input Barang', //Set Header Title
            headerStyle: {
              backgroundColor: '#0D1039', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />


        <Stack.Screen
          name="RegisterAccounting"
          component={RegisterAccounting}
          options={{
            title: 'Input Laporan', //Set Header Title
            headerStyle: {
              backgroundColor: '#0D1039', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="DeleteBarang"
          component={DeleteBarang}
          options={{
            title: 'Delete Barang', //Set Header Title
            headerStyle: {
              backgroundColor: '#0D1039', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="DeleteAccounting"
          component={DeleteAccounting}
          options={{
            title: 'Delete Laporan', //Set Header Title
            headerStyle: {
              backgroundColor: '#0D1039', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;