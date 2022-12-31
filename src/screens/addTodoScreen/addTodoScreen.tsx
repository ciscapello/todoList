import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CustomInput } from '../../components';
import { useAppDispatch } from '../../hooks';
import { ScreensStackParams } from '../../navigation';
import { createTodo } from '../../store';
import { globalStyles } from '../../styles';

export type TodoProps = NativeStackScreenProps<
  ScreensStackParams,
  'AddTodoScreen'
>;

interface FormValues {
  title: string;
}

export default function AddTodoScreen() {
  const { control, handleSubmit, reset, watch } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const backgroundColor = watch().title ? '#222F3E' : '#7a7979';

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (data.title.trim()) {
      const value = { ...data, id: Date.now(), checked: false };
      console.log(value);
      dispatch(createTodo(value));
      reset();
    }
  };

  return (
    <SafeAreaView style={[globalStyles.droidSafeArea, styles.wrapper]}>
      <CustomInput
        control={control}
        name="title"
        placeholder="Текст новой задачи"
      />
      <TouchableOpacity
        disabled={!watch().title}
        style={[styles.button, { backgroundColor }]}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.textButton}>Добавить</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 335,
    height: 45,
    borderRadius: 8,
  },
  textButton: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 24,
  },
});
