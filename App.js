import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
