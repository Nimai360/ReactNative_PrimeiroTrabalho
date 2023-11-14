import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323339',
    alignItems: 'center',
    //   justifyContent: 'flex-start',
    paddingTop: 50,
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },

  logo_login: {
    width: '35%',
    height: '10%'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#abb1b7'
  },

  div_text_input: {
    backgroundColor: '#323339',
    justifyContent: 'flex-start',
    paddingTop: 20,
    width: '100%',
    gap: 10,
  },

  text_info: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },

  input: {
    backgroundColor: '#1e1f23',
    borderRadius: 5,
    width: '100%',
    height: 40,
    color: '#fff',
    paddingLeft: 10,
  },

  text_link: {
    marginTop: -5,
    fontSize: 15,
    color: '#02a3f3',
    fontWeight: 'bold',
  },  

  text_link_termos: {
    marginTop: -5,
    fontSize: 15,
    color: '#02a3f3',
  },

  div_text_button: {
    display: 'flex',
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: '#5865f2',
    borderRadius: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  criarConta_DIV: {
    paddingTop: 10,
    width: '100%',
  },

  jaTemUmaConta_DIV: {
    paddingTop: 30,
    width: '100%',
  },

  criarConta: {
    color: '#727379',
    textAlign: 'left',
    fontWeight: 'bold',
  },

  termos_text: {
    color: '#727379',
    textAlign: 'left',
  },

  required: {
    paddingLeft: 50,
    color: 'red'
  },

  icon: {
    marginLeft: 10,
    fontSize: 24,
    color: '#aaa',
  },

  password_div: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 14,
  },

  date_Div: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dropList: {
    width: '30%',
    backgroundColor: '#1e1f23',
    // borderColor: 'black',
    // borderWidth: 1,
    padding: 10,
    margin: 5,
  },

  checkbox_Div: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 15,

  },

  opcionalCheckBoxText: {
    color: '#727379',
    textAlign: 'left',
    fontSize: 14,
    paddingLeft: 12,
  },

  checkBox: {
    // backgroundColor: '#727379',
    borderColor: '#727379',
    borderWidth: 1,
    height: 22,
    width: 22,
    borderRadius: 5,
  },
});