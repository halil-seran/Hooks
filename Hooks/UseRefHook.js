import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const UseRefHook = () => {

    const [name, setName] = useState('');
    const inputRef = useRef();
    const prevName = useRef('')
    const renderCount = useRef(0);  //it return a single object  { current : 0 }
    //                                  useRef componenti yada appi kac kere renderladigimizi ogrenmemizi saglar use effect ve state ile de yapilabilirdi ama sonsuz donguye sokar.cunku useEffecteki referans useState ile durmadan caliisyor
    //                                   ama en yaygin kullanimi su sekilde asagidaki input componentlara ref propunu koyabiliyoruz boylece input degisimini kaydediyoruz
    //                                      statein onceki degerinide tutmamizi saglar ,,refs ile dom elemanlarına erişmekte size kolaylık sağlıyor.,, Ardışık işlemelerde değerleri kalıcı hale getirin

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    useEffect(() => {
        prevName.current = name
    },[name])

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} ref={inputRef} value={name} onChangeText={name => setName(name)} />
            <Text>benim adim {name} eski adim{prevName.current}</Text>
            <Text>i rendered {renderCount.current} times</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderColor: 'black',
        width: 100,
        borderWidth: 2
    }
});

export default UseRefHook;