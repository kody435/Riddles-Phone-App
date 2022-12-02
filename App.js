/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {

  return (
    <WebView
      style={{backgroundColor:'#000'}}
      source={{uri: 'https://riddles-mocha.vercel.app/'}}
    />
  );
}
