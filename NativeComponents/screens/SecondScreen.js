import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function SecondScreen({ navigation, route }) {
  
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Button 
        title='Go to Third Screen'
        onPress={() => navigation.navigate("Third")}
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