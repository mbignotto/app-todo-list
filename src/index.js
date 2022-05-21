import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [list, setList] = useState([]);

  const addItem = text => {
    setInputValue('');
    const newItem = {
      id: Math.random(),
      task: text,
    };
    setList([newItem, ...list]);
    setModalVisible(!modalVisible);
    AsyncStorage.setItem('@list', JSON.stringify([newItem, ...list]));
  };

  const deleteItem = id => {
    const newList = list.filter(item => item.id !== id);

    console.log(newList);
    setList(newList);
    AsyncStorage.setItem('@list', JSON.stringify(newList));
  };

  const handleAsyncStorage = useCallback(async () => {
    const savedList = await AsyncStorage.getItem('@list');
    if (savedList !== null) {
      const savedListArray = JSON.parse(savedList);

      setList(savedListArray);
    }
  }, []);

  useEffect(() => {
    if (list.length <= 0) {
      handleAsyncStorage();
    }
  }, [handleAsyncStorage, list]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#19196F'} barStyle={'light-content'} />

      <View style={styles.container}>
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.text}>{item.task}</Text>

              <TouchableOpacity onPress={() => deleteItem(item.id)}>
                <Foundation name={'trash'} size={30} color={'#19196F'} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => `${item.id}_item`}
        />
      </View>

      <TouchableOpacity
        style={styles.floatBtn}
        onPress={() => setModalVisible(!modalVisible)}>
        <Foundation name={'plus'} size={26} color={'#19196F'} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centerModal}>
          <View style={styles.modalView}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Digite sua tarefa</Text>
              <TextInput
                value={inputValue}
                onChangeText={text => setInputValue(text)}
                selectionColor={'#19196F'}
                style={styles.textInput}
              />
            </View>

            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => addItem(inputValue)}>
              <Text style={styles.addBtnText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
