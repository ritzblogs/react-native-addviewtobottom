import React from 'react';
import { StyleSheet,StatusBar,Image, Text, View } from 'react-native';

   class App extends React.Component{
     render(){
        return (
           <View style={styles.container}>
                     <StatusBar translucent backgroundColor="black" />

             <View style={styles.container}>
                <Image
                  style={styles.tinyLogo}
                   source={{
                     uri: 'https://i.ibb.co/GJN88pP/1280px-React-icon-svg.png',
                       }}
                 />
                 <Text style={{fontSize:25, textAlign:"center",color:"white",
                    padding:10,paddingLeft:30,paddingRight:30, margin:10, 
                    borderRadius:10}}> React Native </Text>
            </View>
              <Text style={{fontSize:18, marginRight:20, marginBottom:20,
                  justifyContent:"flex-end",
                  textAlign:'right', color:"white", alignSelf:"stretch",}}>      
                  Ruchi Tiwari
               </Text>
          </View>
        );
      }
}

    export default App;
    const styles = StyleSheet.create({
     container: {
      flex: 1,
      backgroundColor: '#282C34',
      alignItems: 'center',
      justifyContent: 'center',
    },
     tinyLogo: {
      width: 180,
      alignSelf:"center",
      height: 180,
  }
});