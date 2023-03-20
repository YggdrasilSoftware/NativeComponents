import { StyleSheet, Text, View, Button, NativeModules } from 'react-native';
const {CalendarModule} = NativeModules;
console.log(CalendarModule);
CalendarModule.createCalendarEvent(res => console.log(res));

export default function ThirdScreen({ navigation, props }) {
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