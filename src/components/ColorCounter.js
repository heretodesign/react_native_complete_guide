import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({ color, OnIncrease, onDecrease }) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => OnIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ColorCounter;