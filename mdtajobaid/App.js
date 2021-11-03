import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button , SafeAreaView,Alert} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
       <StatusBar
        animated={true}
        backgroundColor="blue"
        hidden={true} />
    <View>
      <Text style={styles.title}>
        Select your language:
      </Text>
      <Separator/>
      <Button
        title="English"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />

    <Button
        title="Amahric-አማርኛ"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Separator/>

<Button
    title="Afan Oromo "
    color="#f194ff"
    onPress={() => Alert.alert('Button with adjusted color pressed')}
  />
  <Separator/>

<Button
    title="Tigriga-ትግርኛ "
    color="#f194ff"
    onPress={() => Alert.alert('Button with adjusted color pressed')}
  />
    </View>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin:5,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});