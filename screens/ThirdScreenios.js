import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NativeModules, NativeEventEmitter} from 'react-native';



const CounterEvents = new NativeEventEmitter(NativeModules.Counter);

const  ThirdScreenios = props => {
  useEffect(() => {
    CounterEvents.addListener('onIncrement', result =>
      console.log('onIncrement received', result),
    );
    CounterEvents.addListener('onDecrement', result =>
      console.log('onDecrement received', result),
    );

    return () => {
      CounterEvents.removeAllListeners();
    };
  }, []);

  const decrement = async () => {
    try {
      var result = await NativeModules.Counter.decrement();
      console.log(result);
    } catch (e) {
      console.log(e.message, e.code);
    }
  };
  const increment = async () => {
    NativeModules.Counter.increment(res => console.log(res));
  };

  return (
    <View style={styles.container}>
      <Text>Count</Text>
      <Button title="Increase Count" onPress={increment} />

      <Button title="Decrease Count" onPress={decrement} />
    </View>
  );
};
export default ThirdScreenios;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});