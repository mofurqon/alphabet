import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import images from '../assets/image';
import variable from '../helper/variable';

const NumberScreen = ({ navigation }) => {
    const numcol = 2;
    const [flag, setFlag] = useState(images.indonesia);
    const [lang, setLang] = useState('id');
    const [langId, setLangId] = useState(0);

    const [abjad, setAbjad] = useState(variable.DATA_ANGKA);

    const imageHandler = (idx, value) => {
      if (idx == 0) {
        setFlag(images.indonesia);
        setLang('id');
        setLangId(0);
        setAbjad(variable.DATA_ANGKA);
      } else if (idx == 1) {
        setFlag(images.britain);
        setLang('en');
        setLangId(1);
        setAbjad(variable.DATA_ANGKA);
      } else {
        setFlag(images.arab);
        setLang('ar');
        setLangId(2);
        setAbjad(variable.DATA_ANGKA_ARAB);
      }
    }

    const renderItem = ({ item }) => (
        // <Item title={item.title} />
        <TouchableOpacity 
          onPress={() => navigation.navigate('ModalDetail', {
            letter: item.id, 
            pronoun: lang == 'id' ? item.nameId : item.nameEn, 
            lang: lang,
            mode: 'number',
            title: item.title,
          })}
        >
          <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
    );

    return (
            <View style={styles.backgroundStyle}>
              <ModalDropdown 
                options={['Indonesia', 'English', 'Arab']} 
                defaultIndex={langId} 
                style={styles.pickerStyle}
                dropdownStyle={styles.dropdownStyle}
                showsVerticalScrollIndicator={false}
                dropdownTextStyle={styles.dropdowntextStyle}
                onSelect={(idx, value) => imageHandler(idx, value)}
              >
                <Image source={flag} style={styles.imageStyle} resizeMode='contain'/>
              </ModalDropdown>
                <FlatList
                    // data={route.params.mode == 'abjad' ? variable.DATA_ABJAD : variable.DATA_ANGKA }
                    data={abjad}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={numcol}
                />
            </View>
        
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#6CC2BD',
        paddingTop: 50,
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        width: 150,
        height: 150,
        backgroundColor: '#ffffff',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        
    },
    flaslistStyle: {
        flexDirection: 'row'
    },
    title: {
      fontFamily: 'NunitoBold',
      fontStyle: 'normal',
      fontSize: 64,
    },
    imageStyle: {
      width: 46,
      height: 30,
    },
    pickerStyle: {
      position: 'absolute',
      top: 10,
      left: 330
    },
    dropdownStyle: {
      backgroundColor: '#F38928',
      height: 108,
    },
    dropdowntextStyle: {
      fontFamily: 'NunitoBold',
      fontStyle: 'normal',
    }
});

export default NumberScreen;
