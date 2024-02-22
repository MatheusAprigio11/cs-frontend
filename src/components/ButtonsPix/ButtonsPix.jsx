import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function ButtonsPix(props) {

    console.log(props)
  return (
        <TouchableOpacity style={styles.btnsPix} onPress={props.onPress}>
            <View style={styles.iconeView}>
                <MaterialIcons name={props.iconeName}
                size={35}/>
            </View>
        </TouchableOpacity>

  )
}

