import React, {useEffect}  from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
import App_icon from '../components/logo';
import App_text from '../components/text';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Logo(props) {

    useEffect(() => {
        setTimeout(() => {
          props.navigation.replace('term_condition');
        }, 3000);
      }, []);

    const logo = require("../assets/images/kopaMain.png");
    
    return(
        <View style={styles.contianer}>
            <App_icon imgStyle={{height: windowHeight * 0.3, width: windowWidth * 0.6}} img={logo}/>
            <App_text textStyle={styles.text} text="Your Financial Freedom" />
            <View style={{marginBottom: '30%', backgroundColor: 'white'}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white'
    }, 
    text:{
        color: '#479DE5'
    }
})

export default Logo