import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../../styles";
import { useNavigation } from '@react-navigation/native'


export default function Login() {
  const navigation = useNavigation();

  function handleRegister() {
    navigation.navigate('Register');
  } 

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo_login}
        source={require("../../../assets/img/Discord-logo.png")}
      />
      <Text style={styles.title}>Boas-vindas de volta!</Text>
      <Text style={styles.subtitle}>
        Estamos muito animados em te ver novamente!
      </Text>

      <View style={styles.div_text_input}>
        <Text style={styles.text_info}>
          E-MAIL OU NÚMERO DE TELEFONE<Text style={styles.required}> *</Text>
        </Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.div_text_input}>
        <Text style={styles.text_info}>
          SENHA<Text style={styles.required}> *</Text>
        </Text>
        <TextInput style={styles.input}></TextInput>
        <TouchableOpacity>
          <Text style={styles.text_link}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
      style={styles.div_text_button}
      >
        <Text style={styles.button}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.criarConta_DIV}>
        <Text 
        style={styles.criarConta}        
        onPress={handleRegister}>
          Precisando de uma conta?{" "}
          <Text style={styles.text_link}>Registre-se</Text>
        </Text>
      </View>
    </View>
  );
}
