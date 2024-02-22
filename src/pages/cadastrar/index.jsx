import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const Cadastro = () => {
  
  const navigation = useNavigation();

  return (
    <View>
      <Text>Cadastro</Text>
      <Text onPress={() => navigation.navigate('Login')}>Vorta mofi</Text>
    </View>
  )
}

export default Cadastro