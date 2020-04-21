import React from 'react';
import { Button, TextInput } from 'react-native';
import KeyboardDismissView, { dismissKeyboard } from 'react-native-keyboard-dismiss-view';

export default function Home() {
  return (
    <KeyboardDismissView style={{flex: 1}}>
      <TextInput
        placeholder="Email address"
      />
      <Button title="Submit" onPress={() => alert('pressed')} />
      <Button title="Dismiss keyboard" onPress={dismissKeyboard} />
    </KeyboardDismissView>
  );
}
