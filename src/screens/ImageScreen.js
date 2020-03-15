import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return <Text>
        <ImageDetail 
            title="Forest" 
            imageSource={require('../../assets/forest.jpg')}
            score={3}
        />    
        <ImageDetail 
            title="Beach" 
            imageSource={require('../../assets/mountain.jpg')}
            score={7}
        />    
        <ImageDetail 
            title="Mountains" 
            imageSource={require('../../assets/beach.jpg')} 
            score={10}
        />    
    </Text>
};

const styles = StyleSheet.create({});

export default ImageScreen;