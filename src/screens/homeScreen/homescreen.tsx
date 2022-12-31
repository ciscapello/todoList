import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScreensStackParams } from '../../navigation';
import { Plus } from '../../shared/assets/svgs';

export default function Homescreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<ScreensStackParams>>();

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Text>asdasda</Text>
        <Text>asdasda</Text>
        <Text>asdasda</Text>
        <Text>asdasda</Text>
        <Text>asdasda</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddTodoScreen')}>
        <Plus width={60} height={60} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    margin: 30,
  },
  wrapper: {
    height: '100%',
  },
});
