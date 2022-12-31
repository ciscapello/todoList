import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Back } from '../../shared/assets/svgs';

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <Back width={30} height={30} />
      <Text>Вернуться назад</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginVertical: 50,
  },
});
