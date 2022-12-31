import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { Todo } from '../../types';
import CheckBox from '@react-native-community/checkbox';
import { useAppDispatch } from '../../hooks';
import { checkTodo, removeTodo } from '../../store';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

interface TodoRowProps {
  todo: Todo;
}

type ContextType = {
  translateX: number;
};

export default function TodoRow({ todo }: TodoRowProps) {
  const dispatch = useAppDispatch();

  const removeTodoWithAnimated = () => {
    dispatch(removeTodo(todo.id));
  };

  const translateX = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
    },
    onActive: (event, context) => {
      if (translateX.value > -170 && translateX.value <= 170) {
        translateX.value = event.translationX + context.translateX;
      }
    },
    onEnd: () => {
      if (translateX.value < -150 || translateX.value > 150) {
        translateX.value = withTiming(-200);
        runOnJS(removeTodoWithAnimated)();
      } else {
        translateX.value = withTiming(0, { duration: 100 });
      }
    },
    onFinish: () => {},
  });

  const rStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      transform: [{ translateX: withTiming(translateX.value) }],
    };
  });

  return (
    <PanGestureHandler
      activeOffsetX={[-10, 10]}
      onGestureEvent={panGestureEvent}>
      <Animated.View style={[styles.wrapper, rStyle]}>
        <CheckBox
          style={styles.checkbox}
          boxType="square"
          value={todo.checked}
          onValueChange={value => dispatch(checkTodo({ id: todo.id, value }))}
          onAnimationType="fade"
          offAnimationType="fade"
          animationDuration={0.1}
          onFillColor="#222F3E"
          onCheckColor="#fff"
          onTintColor="#222F3E"
        />
        <Text style={[styles.text, todo.checked && styles.checked]}>
          {todo.title}
        </Text>
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  checked: {
    textDecorationLine: 'line-through',
    color: '#999999',
  },
  checkbox: {
    borderColor: '#000',
    width: 20,
    height: 20,
  },
  text: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28,
    flex: 5,
    paddingLeft: 20,
    color: '#000',
  },
  wrapper: {
    paddingLeft: Platform.OS === 'ios' ? 10 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    backgroundColor: '#f1f1f1',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    elevation: 5,
    shadowRadius: 1.41,
    width: 335,
    height: 45,
    marginVertical: 8,
  },
});
