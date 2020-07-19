import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState(0);

    return <View>
        <Button 
            title="Add a Color" 
            onPress={() => {
                setColors([...colors, randomRgb])
            }}
        />   
        <FlatList
            keyExtractor={(item) => item}
            data={colors}
            renderItem={({ item }) => {
                return <View style={{ height: 100, width: 100, backgroundColor: item }} />
            }}
        />
    </View>
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
}

const styles = StyleSheet.create({});

export default ColorScreen;