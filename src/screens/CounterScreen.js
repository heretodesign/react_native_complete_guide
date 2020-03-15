import React, {useReducer} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    // state === { count: number}
    // action === {type: 'increment' || 'decrement', payload}
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
};

const CounterScreen = () => {
    //@todo: fix this
    const [state, dispatch] = useState(reducer, { count: 0 });

    return (
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                    dispatch({ type: 'increment', payload: 1 })
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    dispatch({ type: 'decrement', payload: 1 })
                }}
            />
            <Text>Current Count: {}</Text>
        </View>
       
    )
};

const styles = StyleSheet.create({});

export default CounterScreen;