import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Name & Password</Text>
             <TextInput 
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                value={name}
                onChange={newValue => setName(newValue)}
            />
             <TextInput 
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChange={newValue => setPassword(newValue)}
            />
            <Text>My Name is: {name}</Text>
            { true ? <Text>That was True</Text> : null }
            {password.length < 4 ? <Text>Password must be more than 4 charachers</Text> : null }
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;