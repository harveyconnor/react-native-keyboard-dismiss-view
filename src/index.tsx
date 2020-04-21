import React, { ReactNode } from 'react';
import { TouchableWithoutFeedback, View, ViewProps, Keyboard } from 'react-native';

export interface KeyboardDismissViewProps extends ViewProps {
  children: ReactNode;
}

/**
 * Helper function to dismiss the keyboard.
 */
export const dismissKeyboard = Keyboard.dismiss;

/**
 * A view that wraps a TouchableWithoutFeedback component around the view.
 * This calls the Keyboard.dismiss() function when pressed.
 * 
 * Any interactable children override this wrapper function.
 */
export default function KeyboardDismissView({ children, ...props }: KeyboardDismissViewProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View {...props}>{children}</View>
    </TouchableWithoutFeedback>
  );
}