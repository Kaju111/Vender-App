import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {THEME_COLOR} from '../utils/Color';
import CustomText from '../components/CustomText';
import CustomBtn from '../components/CustomBtn';
import { useNavigation } from '@react-navigation/native';


const LogIn = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image source={require('../image/banner.jpg')} style={styles.banner} />
      <View style={styles.img}>
        <Text style={styles.title}>Login</Text>
        <CustomText placeholder={'Enter Email'} />
        <CustomText placeholder={'Enter Password'} />
        <CustomBtn title={'Login'} onClick={() => {}} />
        <View style={styles.row}>
          <Text>{"Don't have account? "}</Text>
          <TouchableOpacity style={{marginLeft: 10,}} onPress={()=>{
            navigation.navigate('Signup')
          }}>
            <Text style={{color:THEME_COLOR,  fontWeight: '600'}}>{'Create One'}</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 230,
  },
  img: {
    width: '95%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: 170,
    elevation: 5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: THEME_COLOR,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    justifyContent: 'center',
  },
});
