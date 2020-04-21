# react-native-keyboard-dismiss-view

[![NPM version](https://img.shields.io/npm/v/react-native-keyboard-dismiss-view.svg)](https://www.npmjs.com/package/react-native-keyboard-dismiss-view)

A touch intercepting view to dismiss the keyboard.

## Install
```bash
$ npm install react-native-keyboard-dismiss-view
```

## Usage

### React Native
```tsx
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
```

