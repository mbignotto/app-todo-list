import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#19196F',
  },
  text: {
    fontSize: 20,
    color: '#19196F',
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
  },

  separator: {
    marginVertical: 10,
  },

  floatBtn: {
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    bottom: 20,
    right: 20,
    borderRadius: 30,
  },

  centerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 300,
    justifyContent: 'center',
  },

  inputContainer: {
    justifyContent: 'center',
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#19196F',
  },

  textInput: {
    borderBottomWidth: 2,
    borderColor: '#19196F',
  },

  addBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#19196F',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },

  addBtnText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});
