import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { TodoRow } from '../../components';
import { useAppSelector } from '../../hooks';
import { ScreensStackParams } from '../../navigation';
import { Azalia, Plus } from '../../shared/assets/svgs';
import { selectAllTodos } from '../../store';

export default function Homescreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<ScreensStackParams>>();

  const todos = useAppSelector(selectAllTodos);

  return (
    <SafeAreaView style={[styles.wrapper]}>
      <View style={styles.logoContainer}>
        <Azalia width={234} height={36} style={styles.logo} />
      </View>
      <ScrollView>
        {todos.map(elem => (
          <TodoRow key={elem.id} todo={elem} />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddTodoScreen')}>
        <Plus width={60} height={60} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 40,
    width: '90%',
    paddingLeft: 10,
    marginBottom: 20,
  },
  logo: {
    alignSelf: 'flex-start',
  },
  button: {
    alignSelf: 'flex-end',
    margin: 30,
  },
  wrapper: {
    height: '100%',
    alignItems: 'center',
  },
});
