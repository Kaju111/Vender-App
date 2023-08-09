import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { THEME_COLOR } from '../utils/Color'
import CustomText from '../components/CustomText'
import CustomBtn from '../components/CustomBtn'

const SignUp = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../image/banner.jpg')} style={styles.banner}/>
        <View style={styles.img}>
                <Text style={styles.title}>Sign up</Text>
               <CustomText placeholder={'Enter Name'}/> 
               <CustomText placeholder={'Enter Email'}/> 
               <CustomText placeholder={'Enter Mobile'}  type={'number-pad'}/> 
               <CustomText placeholder={'Enter Password'}/> 
               <CustomText placeholder={'Enter Confirm Password'}/> 
               <CustomBtn title={'Sign Up'} onClick={()=>{}}/>
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    banner:{
        width:'100%',
        height:230
    },
    img:{
        width:'95%',
        height:'100%',
        alignSelf:'center',
        backgroundColor:'white',
        position:'absolute',
        top:170,
        elevation:5,
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    title:{
        alignSelf:'center',
        fontSize:30,
        fontWeight: '500',
        color: THEME_COLOR,
        marginTop:20,

    }
})