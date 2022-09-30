import * as React from 'react';
import {View , Text} from 'react-native';

function WelcomeScreen(){
    return(
        <View style={style.Container}>
            <Text> Welcome To React World ...!!!</Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        flex:1,
        justifyContent:"center",
        alignItem:"center"  ,
        backgrounColor : "white" 
    },

    text:{
        color:'red',      
    }
})
export default WelcomeScreen;

//  <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>