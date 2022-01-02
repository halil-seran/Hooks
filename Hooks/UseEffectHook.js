import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const UseEffectHook = () => {
/*
    const [resourceType, setResourceType] = useState('users');
    const [items, setItems] = useState([]);

    useEffect(() => {                   //eger ,[] i yazmassak useEffectHook functioni her renderlandiginda useEffecte calisir, yani her islemde
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])                               //bu arrayde ki her eleman degistiginde use effect calisir


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '70%', margin: 20 }}>
                <Button onPress={() => setResourceType('posts')} title='posts' />
                <Button onPress={() => setResourceType('user')} title='user' />
                <Button onPress={() => setResourceType('comments')} title='comments' />
            </View>
            <Text style={{ fontSize: 30 }}>
                {resourceType}
            </Text>
            <Text>
                {items.map(item => {
                    return <>{JSON.stringify(item)}</>
                })}
            </Text>
        </View>
    )
};*/

const innerWindowWidth = Dimensions.get('window').width;
const innerwindowHeight = Dimensions.get('window').height;


const [windowWidth, setWindowWidth] = useState(innerWindowWidth);
const [resourceType, setResourceType] = useState('users');

useEffect(() => {
    console.log('Changed')
    return () => {                  //once return u calistiriyor sonra change yazana console logu
        console.log('return from resource Change')   //bunu temizlemek icin kullanabiliriz onceki datayi silebiliriz degistirebiliriz
    }
}, [resourceType])



return (
    <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '70%', margin: 20 }}>
                <Button onPress={() => setResourceType('posts')} title='posts' />
                <Button onPress={() => setResourceType('user')} title='user' />
                <Button onPress={() => setResourceType('comments')} title='comments' />
            </View>
            <Text style={{ fontSize: 30 }}>
                {resourceType}
            </Text>
            
        </View>
)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default UseEffectHook;