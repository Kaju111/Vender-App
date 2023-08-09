import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomText = ({placeholder, value, onChangeText, type}) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={placeholder}
        keyboardType={type ? type : 'default'}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width - 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 15,
  },
});
