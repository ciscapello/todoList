import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ScreensStackParams } from '../../navigation';
import { globalStyles } from '../../styles';

export type TodoProps = NativeStackScreenProps<
  ScreensStackParams,
  'AddTodoScreen'
>;

export default function AddTodoScreen() {
  return (
    <SafeAreaView style={globalStyles.droidSafeArea}>
      <Text>asdasa</Text>
    </SafeAreaView>
  );
}
