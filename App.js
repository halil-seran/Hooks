import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UseStateHook from './Hooks/UseStateHook';
import UseEffectHook from './Hooks/UseEffectHook';
import UseMemoHook from './Hooks/UseMemoHook';
import UseRefHook from './Hooks/UseRefHook';
import UseContextHook from './Hooks/UseContextHook/UseContextHook';
import UseReducerHook from './Hooks/UseReducerHook/UseReducerHook';
//import UseReducerHook2 from './Hooks/UseReducerHook/UseReducerHook2';  //sacma bir hatadan dolayi boyle kullanirken import et
import UseCallbackHook from './Hooks/UseCallbackHook/UseCallbackHook';
import UseCustomHook from './Hooks/UseCustomHook/UseCustomHook';
import UseLayoutEffectHook from './Hooks/UseLayoutEffectHook'

export default function App() {
  return (
      <UseLayoutEffectHook/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
