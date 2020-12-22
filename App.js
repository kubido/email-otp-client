import React from 'react';
import {
  View,
  Text
} from 'react-native'
import Navigation from './navigations'
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';


export default function App() {

  const [loaded] = useFonts({
    Roboto: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2',
    RobotoBold: 'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2'
  });

  if (!loaded) {
    return <View style={{ marginTop: 20 }}>
      <Text> Loading... </Text>
    </View>
  }
  return <Navigation />
}

