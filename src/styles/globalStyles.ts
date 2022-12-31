import { StyleSheet, Platform } from 'react-native';

export const globalStyles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});
