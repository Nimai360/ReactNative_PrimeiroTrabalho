import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox } from 'react-native-elements';

export default function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const [day, setDay] = useState('Dia');
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo_login}
        source={require("./assets/img/Discord-logo.png")}
      />
      <Text style={styles.title}>Criar uma conta</Text>

      <View style={styles.div_text_input}>
        <Text style={styles.text_info}>
          E-MAIL<Text style={styles.required}> *</Text>
        </Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.div_text_input}>
        <Text style={styles.text_info}>NOME EXIBIDO</Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.div_text_input}>
        <Text style={styles.text_info}>
          NOME DE USUÁRIO<Text style={styles.required}> *</Text>
        </Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.div_text_input}>
        <Text style={styles.text_info}>
          SENHA<Text style={styles.required}> *</Text>
        </Text>
        {/* <View style={styles.password_div}> */}
        <TextInput
          style={styles.input}
          secureTextEntry={showPassword}
          value={password}
          onChangeText={setPassword}
        ></TextInput>
        {/* <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View> */}
      </View>

      <View style={styles.div_text_input}>
        <Text style={styles.text_info}>
          DATA DE NASCIMENTO<Text style={styles.required}> *</Text>
        </Text>
        <View style={styles.date_Div}>
          <TextInput
            style={styles.dropList}
            placeholder="Dia"
            keyboardType="numeric"
            placeholderTextColor="#aaa"
          ></TextInput>
          <TextInput
            style={styles.dropList}
            placeholder="Mês"
            keyboardType="numeric"
            placeholderTextColor="#aaa"
          ></TextInput>
          <TextInput
            style={styles.dropList}
            placeholder="Ano"
            keyboardType="numeric"
            placeholderTextColor="#aaa"
          ></TextInput>
        </View>
      </View>

      <View
        style={styles.checkbox_Div}>
        <View
          style={styles.checkBox}>

        </View>
        <Text style={styles.opcionalCheckBoxText}>(Opcional) Tudo bem me mandar e-mails com atualizações do Discord, dicas e ofertas especiais. Você pode mudar isso a qualquer momento.</Text>
      </View>

      <TouchableOpacity style={styles.div_text_button}>
        <Text style={styles.button}>Continuar</Text>
      </TouchableOpacity>

      <View style={styles.criarConta_DIV}>
        <Text style={styles.termos_text}>
        Ao se registrar, você concorda com os 
          <Text style={styles.text_link_termos}>  termos de serviço</Text> e a
          <Text style={styles.text_link_termos}>  política de privacidade</Text> do Discord.
        </Text>
      </View>

      <View style={styles.jaTemUmaConta_DIV}>
          <Text style={styles.text_link}>Já tem uma conta?</Text>
      </View>
    </View>
  );
}
