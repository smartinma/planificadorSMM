import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Ahorro = () => {

  const url = "https://api.api-ninjas.com/v1/cryptoprice?symbol=LTCBTC";
  const [usersData,setUsersData]=useState([])

  const getData=()=>{
    fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "X-API-KEY": "lEk4td62gyUNxC8keRCI3Q==7nExs4TLPlqG4RLU",
        "Content-Type": "application/json"
      }
    })
    .then(response=>response.json())
    .then(data=>setUsersData(data));
  }
/*
const [usersData,setUsersData]=useState([])
  const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUsersData(data));
  }
  */
  return (
    <View style={styles.container}>
      {usersData.map(_user=><Text style={styles.loadingtext} key={_user.symbol}>{_user.price}</Text>)}
    <Text style={styles.loadingtext}>HOLAA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingtext:{
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor:'#FFFF'
  },
  text:{
    fontSize:24,
    margin:10,
  }
});

export default Ahorro;