import React from "react";
import {View,StyleSheet,TextInput,Text,Button,Alert,TouchableOpacity} from "react-native";
export default class App extends React.Component{
  myButtonPressed(){
    Alert.alert("text clicked");
  }
  
  constructor(props){
    super(props);
    this.state = {
      text:""
    };

  }
  render(){

    return( 
    <View style={styles.container}>
      <TextInput style={styles.textAnuj}
      placeholderTextColor="black"
      placeholder="Enter Your Name"
      onChangeText={(text)=>{this.setState({text})}}
      ></TextInput>
      <Text style={styles.textnew}>{this.state.text}</Text>
      <Button
      title="Click"
      onPress={()=>{
        Alert.alert("Hello");
      }}
      />

      <TouchableOpacity
      onPress={this.myButtonPressed}
      >
        <Text style={styles.touch}>Anuj</Text>
      </TouchableOpacity>
    </View>
    );

  
  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    fontSize:60,
    alignItems:"center",
  },
  textAnuj:{
    marginTop:100,
    color:"red",
    height:50,
    width:200,
    borderWidth:2,
    padding:10,
    borderRadius:15,
    borderColor:"#23abab"
  },
  textnew:{
    marginTop:5
  },
  touch:
  {
    backgroundColor:"orange",
    padding:10,
    borderRadius:10,
    

  }
})