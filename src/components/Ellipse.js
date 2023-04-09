import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {Defs, Circle, LinearGradient, Stop} from 'react-native-svg';

const Ellipse = ( props ) => {
    return (
        <View style={[styles.svg, {left: props.left, top: props.top}]}>
            <Svg width={props.width || 212} height={props.height || 212} viewBox="0 0 212 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="106" cy="106" r="106" fill="url(#paint0_linear)"/>
                <Defs>
                    <LinearGradient id="paint0_linear" x1="106" y1="0" x2="106" y2="212" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#5A809E"/>
                        <Stop offset="1" stopColor="#5A809E" stopOpacity="0"/>
                    </LinearGradient>
                </Defs>
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    svg: {
        position: 'absolute'
    }
})

export default Ellipse;