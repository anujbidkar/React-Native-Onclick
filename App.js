import React from "react";
import {View,Text,StyleSheet} from "react-native";
export default class App extends React.Component{
  
  render(){

    return( 
    <View style={styles.container}>
      <Text style={styles.textAnuj} >Hello Anuj Bidkar</Text>
    </View>
    );

  
  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#c1c1c1",
    alignItems:"center",
    justifyContent:"center",
    fontSize:60
  },
  textAnuj:{
    color:"red",
    fontSize:30
  }
})