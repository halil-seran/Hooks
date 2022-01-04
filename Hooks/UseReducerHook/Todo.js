import React from 'react'
import { View, Text, Button } from 'react-native'
import { ACTIONS } from './UseReducerHook2';

export default function Todo({ todo, dispatch }) {

    return (
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ color: todo.complete ? '#AAA' : '#000' }} >
                {todo.name}
            </Text>
            <Button title='Toggle' onPress={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })} />
            <Button title='delete' onPress={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })} />
        </View>
    )
}
