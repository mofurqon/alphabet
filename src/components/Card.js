import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Card = ( props ) => {
    // console.log(props)
    return (
        <View style={styles.cardStyle}>
            <Text style={styles.textStyle}>{props.title}</Text>
            <View style={styles.imageWrap}>
                <Text style={styles.imageDesc}>{props.pronoun}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        width: 280,
        height: 500,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.58,
        shadowRadius: 4,
        elevation: 24,
    },
    textStyle: {
        fontFamily: 'NunitoBold',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: 280,
    },
    imageWrap: {
        alignItems: 'center',
        paddingBottom: 20
    },
    imageDesc: {
        fontFamily: 'NunitoBold',
        fontStyle: 'normal',
        fontSize: 28,
    }
});

export default Card;