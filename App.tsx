import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Home from './src/screen/Home';

export default function App() {
  return (
    <View style = {{flex: 1}}>
		<StatusBar 
			style = 'light' 
			backgroundColor = '#000' 
      	/>

		<Home />
    </View>
  );
}
