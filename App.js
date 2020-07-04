import React from "react";
import {View,Text,StyleSheet} from "react-native";
import Name from './component/Name';
export default class App extends React.Component{
  
  render(){

    return( 
    <View style={styles.container}>
     <Name name="anuj"/>
     <Name name="Bidkar"/>

    </View>
    );

  
  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"pink",
    alignItems:"center",
    justifyContent:"center",
    fontSize:60
  },
  
})