import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Alert,
  Pressable,
  Image,
  Modal
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Ahorro from './Ahorro';
import Contacto from './Contacto';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
      >
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page'}
        }
        />
        <Tab.Screen 
          name="Ahorro"
          component={Ahorro}
          options={{ title: 'Inversion'}
        }
        />
        <Tab.Screen 
          name="Contacto"
          component={Contacto}
          options={{ title: 'Contacto'}
        }
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
};


export default App;
