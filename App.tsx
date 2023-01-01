import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { Navigation } from './src/navigation/navigation';
import store from './src/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.gestureHandlerView}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  gestureHandlerView: {
    flex: 1,
  },
});

export default App;
