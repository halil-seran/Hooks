import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Todo from "./Todo";



export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]  //eski todo bir object dolayisiyla yeni bir veri ekledigimizde objectin icindeki diger veriler kayboluyor o yuzden objecti yani todo yu aciyoruz ...todos ardinda name i ekliyoruz
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id )
        default:
            return todos
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}


const UseReducerHook2 = () => {

    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })  //actions yapan // payload gonderdigimiz parametre
        setName('')
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                type="text"
                value={name}
                onChangeText={e => setName(e)} // burda textde yazani value ye aktariyoruz
                onSubmitEditing={handleSubmit}
            />
            <>
                {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                })}
            </>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        width: 100
    }
});

export default UseReducerHook2;