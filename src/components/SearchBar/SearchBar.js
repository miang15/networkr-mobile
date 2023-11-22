import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../../utils/theme';

const SearchBar = ({value, onChangeText, placeholder, ...rest}) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder || 'Search'}
        placeholderTextColor={theme.gray}
      />
      <Feather name="search" size={24} color={theme.gray} />
    </View>
  );
};

export default SearchBar;
