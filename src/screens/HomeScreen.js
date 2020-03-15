import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ComponentsScreen from './ComponentsScreen';
import ListScreen from './ListScreen';

const HomeScreen = ({ navigation }) => {
    return (
    <View>
        <Text style={styles.text}>Hi Abel</Text>
        <Button
            onPress={() => navigation.navigate(Components)}
            title="Go to Components Demo"
        />
        <Button
            title="Go to List Demo"
            onPress={() => navigation.navigate(List)}
        />
        <Button
            title="Go to Image Demo"
            onPress={() => navigation.navigate(Image)}
        />
        <Button
            title="Go to Counter Demo"
            onPress={() => navigation.navigate(Counter)}
        />
        <Button
            title="Go to Square Demo"
            onPress={() => navigation.navigate(Square)}
        />
        <Button
            title="Go to Text Demo"
            onPress={() => navigation.navigate(Text)}
        />
    </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,

    }
});

export default HomeScreen;