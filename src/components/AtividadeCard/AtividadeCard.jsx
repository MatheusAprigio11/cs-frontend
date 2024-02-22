import { View, Text } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialIcons';
import instance from '../../../services/axiosInstance';
import { useSelector } from 'react-redux';
import styles from './styles';

export default function AtividadeCard( props ) {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const { token } = useSelector(state => {
    return state.userReducer
  })


  const fetchData = async () => {
    try {
      const movimentacao = await instance.get('movimentacao/',
        {
          headers: {
            'Authorization': `Token ${token}`
          }
        }
      )
      setData(movimentacao.data)
      setTimeout(() => {
        setLoading(false)
      }, 1000)

      console.log(movimentacao.data)
    } catch (error) {
      console.log(error.response.data)

    }

  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.cardsmov}>
        <View style={styles.iconeArea}>
            <MaterialCommunityIcons
                name='lock-outline'
                color='black'
                size={26}
            />
        </View>
        <View style={styles.infoCard}>
          <Text>{props.tipo}</Text>
          <Text>R${props.valor}</Text>
        </View>
      </View>
    </View>
  )
}