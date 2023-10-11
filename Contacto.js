import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  SectionList
} from 'react-native';

  const sections = [
    {
      id: '0',
      title: 'Contacto',
      data: [
        { id: '0', text: 'Silvia Martín María: silvia.martin94@gmail.com' },
        { id: '1', text: 'Pepito Perez: pepito@gmail.com' },
      ],
    },
    {
      id: '1',
      title: 'Areas de trabajo',
      data: [
        { id: '3', text: 'Proyecto ahorro' },
        { id: '4', text: 'Proyecto criptomoneda' },
      ],
    },
  ]
  
const Contacto = () => {
    return (
      <SectionList
        style={styles.container}
        sections={sections}
        renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    )
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
})

export default Contacto;