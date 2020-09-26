import { StatusBar } from 'expo-status-bar';
import React , {component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//SafeAreaView makes sure screen fits to devices
export default class App extends Component{
	render(){
		return(
		<SafeAreaView>

		</SafeAreaView>
		)
	}
}

const StyleSheet.create({
main:{
	paddingHorizontal:10, //creates a view so that edges of app doesnt go on the edge. controls it
   }
})