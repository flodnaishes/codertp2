import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      listaCompras: [],
    };
  }

  addItem = () => {
    const { item, listaCompras } = this.state;
    if (item !== '') {
      listaCompras.push({ key: String(listaCompras.length + 1), value: item });
      this.setState({ item: '', listaCompras: listaCompras });
    }
  }

deleteItem = (id) => {
    const listaCompras = this.state.listaCompras.filter((item) => item.key !== id);
    this.setState({ listaCompras: listaCompras });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Agregar a la lista"
            value={this.state.item}
            onChangeText={(text) => this.setState({ item: text })}
            style={styles.input}
          />
          <Button title="Agregar" onPress={this.addItem} />
        </View>
        <FlatList
          data={this.state.listaCompras}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.value}</Text>
              <Button title="Eliminar" onPress={() => this.deleteItem(item.key)} />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
  },
});