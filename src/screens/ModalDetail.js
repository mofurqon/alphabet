import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import GestureFlipView from 'react-native-gesture-flip-card';
import Sound from 'react-native-sound';

import Card from '../components/Card';
import CardFront from '../components/CardFront';
import CardFlip from '../components/CardFlip';
import variable from '../helper/variable';

const ModalDetail = ({ navigation, route }) => {
    const {letter, lang, pronoun, mode, title} = route.params;
    // console.log(route.params);
    // kumpulan variable
    let abjadVar = variable.DATA_ABJAD;
    let angkaVar = variable.DATA_ANGKA;
    if (lang == 'ar') {
        abjadVar = variable.DATA_ABJAD_ARAB;
        angkaVar = variable.DATA_ANGKA_ARAB;
    }

    const [soundStart, setSoundStart] = useState();
    const [flip, setFlip] = useState(0);
    const flipCount = useRef(0);

    // suara default
    let soundSrc = lang + title.slice(-1);
    // mode number dan bukan arab
    if ( mode == 'number' && lang !== 'ar') {
        soundSrc = lang + title;
    }
    // abjad arab
    if ( lang == 'ar' && mode != 'number') {
        soundSrc = `hj${letter}`;
    }
    // angka arab
    if ( lang == 'ar' && mode === 'number') {
        soundSrc = lang + letter;
    }

    const playSoundStart = async () => {
        // source sound menjadi keterangan gambar
        if (flip == 1) {
            soundSrc = pronoun.toLowerCase();
        }
        const soundstart = new Sound(soundSrc, Sound.MAIN_BUNDLE, (err) => {
            if (err) {
                return;
            }
            setSoundStart(soundstart);
            soundstart.play();
        }); 
    }

    // useeffect untuk release sound
    useEffect(() => {
        return soundStart ? () => {
            soundStart.release();
        } : undefined;
    }, [soundStart]);

    // fungsi next
    const nextChar = ( currentLetter ) => {
        if (mode == 'alphabet') {
            const nextLetter = abjadVar.find((alphabet) => alphabet.id === currentLetter + 1);

            if ( nextLetter ) {
                navigation.navigate('ModalDetail', {letter: nextLetter.id, title: nextLetter.title, pronoun: lang == 'id' ? nextLetter.nameId : nextLetter.nameEn});
            }
        } else {
            const nextLetter = angkaVar.find((number) => number.id === currentLetter + 1);
        
            if ( nextLetter ) {
                navigation.navigate('ModalDetail', {letter: nextLetter.id, title: nextLetter.title, pronoun: lang == 'id' ? nextLetter.nameId : nextLetter.nameEn});
            }
        }
    }

    // fungsi prev
    const prevChar = ( currentLetter ) => {
        if (mode == 'alphabet') {
            const nextLetter = abjadVar.find((alphabet) => alphabet.id === currentLetter - 1);

            if ( nextLetter ) {
                navigation.navigate('ModalDetail', {letter: nextLetter.id, title: nextLetter.title, pronoun: lang == 'id' ? nextLetter.nameId : nextLetter.nameEn});
            }
        } else {
            const nextLetter = angkaVar.find((number) => number.id === currentLetter - 1);

            if ( nextLetter ) {
                navigation.navigate('ModalDetail', {letter: nextLetter.id, title: nextLetter.title, pronoun: lang == 'id' ? nextLetter.nameId : nextLetter.nameEn});
            }
        }
    }

    const renderFront = () => {
        return (
            <CardFront letter={letter} pronoun={pronoun} title={title}/>
        );
    };
    
    const renderBack = () => {
        return (
            <CardFlip letter={letter} pronoun={pronoun} lang={lang} isNotNumber={isNaN(letter)}/>
        );
    };

    // fungsi flip dan ganti sound menggunakan useref
    const voiceHandler = () => {
        if (flipCount.current % 2 == 0) {
            setFlip(1);
            flipCount.current = flipCount.current + 1
        } else {
            setFlip(0);
            flipCount.current = flipCount.current + 1
        }
    } 

    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <View style={styles.mainArea}>
                <Icon name="chevron-left" size={45} color="#FFFFFF" style={styles.backStyle} onPress={()=> navigation.goBack()}/>
                {(mode == 'alphabet' && lang != 'ar') && <GestureFlipView width={280} height={500} onFlipEnd={voiceHandler}>
                    {renderFront()}
                    {renderBack()}
                </GestureFlipView>}
                {(mode == 'number' || lang == 'ar') && <Card letter={letter} pronoun={pronoun} title={title}/>}
            </View>
            <View style={styles.footerArea}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.buttonStyle}>
                        <Icon name="home" size={30} color="#5A809E" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={playSoundStart}>
                    <View style={styles.buttonStyle}>
                        <Icon name="mic" size={30} color="#5A809E" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => prevChar(letter)}>
                    <View style={styles.buttonStyle}>
                        <Icon name="arrow-left" size={30} color="#5A809E" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => nextChar(letter)}>
                    <View style={styles.buttonStyle}>
                        <Icon name="arrow-right" size={30} color="#5A809E" />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
    },
    mainArea: {
        width: '100%',
        height: '87%',
        backgroundColor: '#6CC2BD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerArea: {
        width: '100%',
        height: '13%',
        backgroundColor: '#5A809E',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonStyle: {
        width: 70,
        height: 60,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        borderRadius: 20,
        borderColor: '#6CC2BD',
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backStyle: {
        position: 'absolute',
        top: 10,
        left: 10,
    }
});

export default ModalDetail;