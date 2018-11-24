import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  chamadoView: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  tituloView: {
    paddingTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 14
  },
  descView: {
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 14,
    marginBottom: 10,
  },
  fotoView: {
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 14,
    marginBottom: 10,
    flexDirection: 'row'
  },
  iconeCamera: {
    marginLeft: 10,
    marginBottom: 10,
    width: 60,
    height: 60,

  },
  viewLabelFoto: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 20,
    paddingLeft: 10
  },
  labelFoto: {
    fontSize: 18,
  },
  tituloInput: {
    padding: 10,
  },
  descInput: {
    padding: 10,
  },

  botaoView: {
    marginBottom: 30,
  },
  loginView: {
    flex: 1,
    justifyContent: 'center'
  },
  loginCamposView: {
    backgroundColor:'white',
    height: 300,
    marginLeft: 10,
    paddingLeft: 10,
    marginRight: 10,
    paddingRight: 10,
    borderRadius: 14,
    justifyContent: 'center'
  },
  labelLogin:{
    fontSize: 25,
  },
  inputLogin:{
    fontSize: 20,
  },
  emailView: {
    paddingLeft: 10,
    marginBottom: 10,
  },
  senhaView: {
    paddingLeft: 10,
    marginBottom: 10,
  }
  
});