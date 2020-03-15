import React,{useState} from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = setState(0);
    const [green, setGreen] = setState(0);
    const [blue, setBlue] = setState(0);

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;    
            case 'green':
                red + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;    
            case 'blue':
                red + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;            
            default:
                return;
        }
    };

    return (
        <View>
            <ColorCounter 
                onIncrease={() => setColor('red' + COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="red"
            />
            <ColorCounter 
                onIncrease={() => setColor('blue' + COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                color="blue"
            />
            <ColorCounter 
                onIncrease={() => setColor('green' + COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color="green" 
            />
            <View 
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb{${red}, ${green}, ${blue}}`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;