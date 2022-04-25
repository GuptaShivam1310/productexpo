import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

const DetailScreen = ({ navigation, route , todo}: any) => {
    console.log("props", todo);
  return <Text>{JSON.stringify(todo)}</Text>

}
  const mapStateToProps = (state: any) => ({
    todo: state.state.details,
})
  
export default connect(mapStateToProps, null)(DetailScreen)
