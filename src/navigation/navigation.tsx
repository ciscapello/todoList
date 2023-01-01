import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Homescreen, AddTodoScreen } from '../screens';
import { Back } from '../shared/assets/svgs';
import { StyleSheet, TouchableOpacity } from 'react-native';

export type ScreensStackParams = {
  Homescreen: undefined;
  AddTodoScreen: undefined;
};

const Stack = createNativeStackNavigator<ScreensStackParams>();

export function Navigation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<ScreensStackParams>>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddTodoScreen"
        component={AddTodoScreen}
        options={{
          title: 'Вернуться назад',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
              <Back style={styles.backButton} width={30} height={30} />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 28,
            color: '#999999',
          },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  backButton: {
    paddingTop: 15,
    alignSelf: 'flex-end',
  },
});
