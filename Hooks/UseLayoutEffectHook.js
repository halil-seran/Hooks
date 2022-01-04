import React, { useState, useEffect, useLayoutEffect } from "react";
import { Text, View, StyleSheet, Button } from 'react-native';

//useEffect ve useLayoutEffect arasinda ki fark useLayoutEffect synchronous //useEffect asynchronous
//useLayoutEffect synchronous  oldugu icin performans sorunlarina yol acabilir 
//oyuzden useEffect ile olmuyorsa useLayoutEffect kullanmak daha mantikli zaten cok sfesifik bir hook 
//en altta bir ornek var
 
const UseLayoutEffectHook = () => {

    const [number, setNumber] = useState(0);

    useLayoutEffect(() => {
        console.log(number)
    }, [number])

    return (
        <View style={styles.container}>
            <Button title='artir' onPress={sayi => setNumber(sayi => sayi + 1)} />
            <Text>
                {number}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default UseLayoutEffectHook;

// https://youtu.be/wU57kvYOxT4?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&t=273