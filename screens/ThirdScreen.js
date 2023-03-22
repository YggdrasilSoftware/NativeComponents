import { useEffect } from 'react';
import { StyleSheet, Text, View, Button, NativeModules, EventEmitter, NativeEventEmitter } from 'react-native';
const {CalendarModule} = NativeModules;

const eventEmitter = new NativeEventEmitter(CalendarModule);

export default function ThirdScreen({ navigation, props }) {
  useEffect(() => {
    eventEmitter.addListener ('EventCount', eventCount=> {
      console.log(eventCount);
    });

    return () => {
      eventEmitter.removeAllListeners();
    };

  }, []);
  const createCalendarEventPromise = async ()=> {

    try{
      var result = await CalendarModule.createCalendarPromise();
      console.log(result);

    }catch(e){
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Third</Text>
      <Button
      title='CalendarEventPromise'
      onPress={createCalendarEventPromise}
      />
    </View>
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