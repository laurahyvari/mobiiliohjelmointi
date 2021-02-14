import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import MealItem from './components/MealItem';
import http from './services/httpService';

export default function App() {
  const [mealData, setData] = useState([]);
  const [text, setText] = useState('');

  const fetchData = async () => {
    const result = await http.get(text);
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Recipe finder</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={mealData}
          renderItem={({ item }) => <MealItem itemData={item} />}
          keyExtractor={item => item.href}
        />
      </View>
      <TextInput style={styles.input} onChangeText={txt => setText(txt)}
      />
      <View style={styles.button}>
        <Button title='search' onPress={() => fetchData(text)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  listContainer: {
    flex: 1,
    minWidth: '100%',
    maxHeight: '80%',
    justifyContent: 'space-around'
  },
  button: {
    //flex: 10,
    justifyContent: 'flex-end',
    justifyContent: 'space-around'
  },
  input: {
    flex: 1,
    justifyContent: 'flex-end',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 2,
    maxHeight: '10%',
    width: '50%'

  }
});
