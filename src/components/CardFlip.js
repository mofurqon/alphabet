import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import images from '../assets/image';

const CardFlip = ( props ) => {
    let sourceImage = '';

    if ( props.lang == 'id') {
        switch (props.pronoun.toLowerCase()) {
            case "apel":
                sourceImage = images.apel
                break;
            case "buku":
                sourceImage = images.buku
                break;
            case "ceri":
                sourceImage = images.ceri
                break;
            case "dadu":
                sourceImage = images.dadu
                break;
            case "elang":
                sourceImage = images.elang
                break;
            case "feri":
                sourceImage = images.feri
                break;
            case "gajah":
                sourceImage = images.gajah
                break;
            case "harimau":
                sourceImage = images.harimau
                break;
            case "ikan":
                sourceImage = images.ikan
                break;
            case "jari":
                sourceImage = images.jari
                break;
            case "kelinci":
                sourceImage = images.kelinci
                break;
            case "lemon":
                sourceImage = images.lemon
                break;
            case "meja":
                sourceImage = images.meja
                break;
            case "nanas":
                sourceImage = images.nanas
                break;
            case "obat":
                sourceImage = images.obat
                break;
            case "panda":
                sourceImage = images.panda
                break;
            case "quran":
                sourceImage = images.quran
                break;
            case "rusa":
                sourceImage = images.rusa
                break;
            case "semut":
                sourceImage = images.semut
                break;
            case "tomat":
                sourceImage = images.tomat
                break;
            case "ular":
                sourceImage = images.ular
                break;
            case "vespa":
                sourceImage = images.vespa
                break;
            case "wortel":
                sourceImage = images.wortel
                break;
            case "xilofon":
                sourceImage = images.xilofon
                break;
            case "yoyo":
                sourceImage = images.yoyo
                break;
            case "zebra":
                sourceImage = images.zebra
                break;
            default:
                break;
        }
    } else {
        switch (props.pronoun.toLowerCase()) {
            case "ant":
                sourceImage = images.semut
                break;
            case "book":
                sourceImage = images.buku
                break;
            case "chair":
                sourceImage = images.chair
                break;
            case "duck":
                sourceImage = images.duck
                break;
            case "eraser":
                sourceImage = images.eraser
                break;
            case "fish":
                sourceImage = images.fish
                break;
            case "goat":
                sourceImage = images.goat
                break;
            case "house":
                sourceImage = images.house
                break;
            case "island":
                sourceImage = images.island
                break;
            case "jellyfish":
                sourceImage = images.jellyfish
                break;
            case "key":
                sourceImage = images.key
                break;
            case "lamp":
                sourceImage = images.lamp
                break;
            case "mouse":
                sourceImage = images.mouse
                break;
            case "noodle":
                sourceImage = images.noodle
                break;
            case "orange":
                sourceImage = images.orange
                break;
            case "pen":
                sourceImage = images.pen
                break;
            case "queen":
                sourceImage = images.queen
                break;
            case "rice":
                sourceImage = images.rice
                break;
            case "snail":
                sourceImage = images.snail
                break;
            case "tiger":
                sourceImage = images.harimau
                break;
            case "uniform":
                sourceImage = images.uniform
                break;
            case "vase":
                sourceImage = images.vase
                break;
            case "window":
                sourceImage = images.window
                break;
            case "xylophone":
                sourceImage = images.xilofon
                break;
            case "yoghurt":
                sourceImage = images.yoghurt
                break;
            case "zoo":
                sourceImage = images.zoo
                break;
            default:
                break;
        }
    }
    return (
        <View style={styles.cardStyle}>
            {/* <Text style={styles.textStyle}>{props.letter}</Text> */}
            <View style={styles.imageWrap}>
                <Image source={sourceImage} style={styles.imageStyle} resizeMode='contain'></Image>
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
        paddingBottom: 20,
    },
    imageDesc: {
        fontFamily: 'NunitoBold',
        fontStyle: 'normal',
        fontSize: 32,
    },
    imageStyle: {
        marginVertical: 30,
        width: 200,
        height: 200
    }
});

export default CardFlip;