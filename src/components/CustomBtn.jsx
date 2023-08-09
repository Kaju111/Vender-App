import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { THEME_COLOR } from '../utils/Color'

const CustomBtn = ({title, onClick, }) => {
  return (
    <TouchableOpacity style={styles.btn}
    onPress={()=>{
        onClick()
    }}>
      <Text style={{color:'white'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn:{
        width: Dimensions.get('window').width - 50,
        height: 50,
        backgroundColor: THEME_COLOR,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 40,
        borderRadius:10
    }
})