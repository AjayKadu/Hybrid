import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

function Home(props) {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetchMobiles();
  }, []);

  const fetchMobiles = () => {
    axios
      .get(`http://192.168.1.21:4444/user/mobiles`)
      .then((result) => {
        setMobiles(result.data.data);
      })
      .catch((error) => {
        console.error('Error fetching mobiles:', error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://192.168.1.21:4444/admin/mobile/${id}`)
      .then((result) => {
        if (result.data.status === 'success') {
          Alert.alert('Mobile Deleted Successfully');
          fetchMobiles();
        }
      })
      .catch((error) => {
        console.error('Error deleting mobile:', error);
      });
  };

  const renderMobileItem = ({ item }) => (
    <ScrollView horizontal={true} style={styles.row}>
      <Text style={[styles.cell, styles.idCell]}>{item.id}</Text>
      <Text style={styles.cell}>{item.mname}</Text>
      <Text style={styles.cell}>{item.ram}</Text>
      <Text style={styles.cell}>{item.storage}</Text>
      <Text style={styles.cell}>{item.company}</Text>
      <Text style={styles.cell}>{item.price}</Text>
      <Button title="Delete" onPress={() => handleDelete(item.id)} />
    </ScrollView>
  );

  return (
    <FlatList
      data={mobiles}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderMobileItem}
      ListHeaderComponent={
        <ScrollView horizontal={true} style={styles.row}>
          <Text style={[styles.cell, styles.headerCell]}>Id</Text>
          <Text style={styles.headerCell}>Name</Text>
          <Text style={styles.headerCell}>RAM</Text>
          <Text style={styles.headerCell}>Storage</Text>
          <Text style={styles.headerCell}>Company</Text>
          <Text style={styles.headerCell}>Price</Text>
          <Text style={styles.headerCell}>Action</Text>
        </ScrollView>
      }
    />
  );
}

export default Home;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%', // Ensure row fills the width
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
    minWidth: 80, // Set a minimum width for each cell
  },
  idCell: {
    flex: 0.5, // ID cell is a bit smaller
  },
  headerCell: {
    fontWeight: 'bold',
    flex: 1,
    padding: 5,
    minWidth: 80,
    textAlign: 'center',
  },
});
