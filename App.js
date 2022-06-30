import React, {useState, useEffect} from 'react';
import{View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () =>{
  //const toggle = false; //false
  const [toggle, setToggle] = useState(false);
 
 const handChangeToggle = () => setToggle(oldToggle=>!oldToggle); 
  
useEffect(()=>{
  //Liga flash do celular
  //Alert.alert('Atualizou ' +toggle);
  Torch.switchState(toggle);
  console.log("trocou estado da lanterna");
}, [toggle]);

useEffect(()=>{
  //Quando celular for agitado, mudaremos o toggle
const subscription = RNShake.addListener(()=>{
  setToggle(oldToggle => !oldToggle);
});
// Essa funcao ser'a chamada quando for desmontada
return () => subscription.remove();
}, []);

 return ( 
    //if toggle return light
  <View style={toggle ? style.containerLight: style.container}>
  
  <TouchableOpacity 
  onPress ={handChangeToggle}>

  <Image 
    style={
      toggle 
      ? style.lightingOn 
      : style.lightingOff
    }
    source={
      toggle 
      ? require('./assets/icons/eco-light.png')
      : require('./assets/icons/eco-light-off.png')
    }
    />
<Image 
  style={style.dioLogo}
  source={
    toggle 
    ? require('./assets/icons/logo-dio.png')
    : require('./assets/icons/logo-dio-white.png')
  }
  />
  </TouchableOpacity>
  </View>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    widht: 150,
    height: 150,
  },

  lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    widht: 150,
    height: 150,
  },

  dioLogo:{
    marginTop: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    widht: 100,
    height: 100,
  },
  
});