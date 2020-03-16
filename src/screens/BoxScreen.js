import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: "row",
        height: 200,
        alignItems: "center",
        justifyContent: 'flex-start'
    },
    textOneStyle: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 20,

    },
    textTwoStyle: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 20,

    },
    textThreeStyle: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 20,

    },
});

export default BoxScreen;