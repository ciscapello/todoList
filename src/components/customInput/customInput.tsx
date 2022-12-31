import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet, TextInput, View } from 'react-native';

interface CustomInputProps {
  control: Control<{ title: string }>;
  name: 'title';
  placeholder: string;
}

export default function CustomInput({
  control,
  name,
  placeholder,
}: CustomInputProps) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <View style={styles.wrapper}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            blurOnSubmit={true}
            onChangeText={val => {
              onChange(val);
            }}
            value={value}
            autoCapitalize="none"
            multiline={name === 'title' ? false : true}
          />
        </View>
      )}
      name={name}
      rules={{
        required: true,
      }}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.41,
    marginBottom: 16,
  },
  input: {
    width: 335,
    height: 45,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d0d0d0',
    marginTop: 15,
    zIndex: 999,
    overflow: 'visible',
    fontSize: 24,
    lineHeight: 28,
  },
});
