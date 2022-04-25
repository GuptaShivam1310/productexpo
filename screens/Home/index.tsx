import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'
import { listData, detailsData } from '../../redux/action'

import styles from './style'

export default function HomeScreen({ navigation }: any) {
  const [list, setList] = useState()
  const [page, setPage] = useState<number>(0)
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.state.product)
  console.log('state', state)
  useEffect(() => {
    getProduct()
  }, [])
  useEffect(() => {
    setList(state)
  }, [state])

  const getProduct = async () => {
    console.log('ndsd')
    try {
      const response: any = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
      )
      if (response.status == 200) {
        const data = await response.json()
        console.log('response', data)
        setPage(page + 1)
        dispatch(listData(data.hits))
      }
    } catch {
      alert('Some thing wrong')
    }
  }
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        dispatch(detailsData(item));
        navigation.navigate('Detail')
      }}
    >
      <View>
        <Text>Title</Text>
        <Text>{item.title}</Text>
      </View>
      <View>
        <Text>author</Text>
        <Text>{item.author}</Text>
      </View>
    </TouchableOpacity>
  )
  return (
    <View style={[styles.container]}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       {/* <ActivityIndicator color={"red"} /> */}
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={() => getProduct()}
      />
    </View>
  )
}
