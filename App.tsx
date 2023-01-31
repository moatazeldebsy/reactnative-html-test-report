/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = () => {
    setTodos([...todos, value]);
    setValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Add a todo"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      {todos.map((todo, index) => (
        <View key={index} style={styles.todoContainer}>
          <Text>{todo}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default App;
