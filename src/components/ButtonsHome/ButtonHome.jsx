import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function ButtonHome(props) {

    console.log(props)
  return (
        <TouchableOpacity style={styles.btnsHome} onPress={props.onPress}>
            <View style={styles.context}>
                <View style={styles.iconeView}>
                    <MaterialIcons name={props.iconeName}
                    size={35}/>
                </View>
                <Text style={styles.texto}>{props.texto}</Text>
            </View>
        </TouchableOpacity>
  )
}

