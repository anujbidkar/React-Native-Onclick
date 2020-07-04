import React,{Component} from "react";
import {Text,StyleSheet} from "react-native";
export default class Name extends Component {
  
  render(){

    return( 
   
      <Text style={styles.textAnuj} >Hello, {this.props.name}</Text>
    

    );

  
  }

}


const styles = StyleSheet.create({
  textAnuj:{
    color:"#ffffff",
    fontSize:30,
    backgroundColor:"orange",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:30,
    borderColor: 'red',
    marginTop:10,
  }
})