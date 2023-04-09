import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import images from '../assets/image';
import Ellipse from '../components/Ellipse';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.backgroundStyle}>
        <Text style={styles.titleStyle}>Mari Belajar</Text>
        <Ellipse left={-100} top={100}/> 
        <Ellipse width={120} height={120} left={-60} top={250}/>
        <Ellipse left={275} top={300}/>
        <Image source={images.kids} style={styles.imageStyle} resizeMode='contain'></Image>
        <View style={styles.buttonWrap}>
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Alphabet')}
            > 
                <Text style={styles.textStyle}>Mengenal Huruf</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Number')}
            > 
                <Text style={styles.textStyle}>Mengenal Angka</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#6CC2BD',
        alignItems: 'center',
    },
    titleStyle: {
        fontFamily: 'NunitoExtrabold',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: 52,
        color: '#FFFFFF',
        paddingTop: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 4,
        textShadowOffset: {width: 4, height: 4}
    },
    imageStyle: {
        position: 'absolute',
        width: 360,
        height: 360,
        top: 100,
    },
    buttonWrap: {
        position: 'absolute',
        top: 500,
    },
    buttonStyle: {
        width: 300,
        height: 70,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        justifyContent: 'center', 
        alignItems: 'center',
        marginVertical: 10
    },
    textStyle: {
        fontFamily: 'NunitoBold',
        fontStyle: 'normal',
        fontSize: 20,
        color: '#5A809E'
    },
});

export default HomeScreen;
