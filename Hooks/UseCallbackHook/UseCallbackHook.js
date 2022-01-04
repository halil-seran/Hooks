import React, { useState, useCallback } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import List from './List';

//run ettikten sonra bu sayfaya ctrl s cek

//buradaki problem UseCallbackHook her renderlandiginda getItem da calisiyor ve dolayisiyla number recreated oluyor 
//number degismese bile fonksiyon yeniden calistigi icin number olusturuluyor bunu cozmek icin useCallbak kullicaz
// use Memo ile arasindaki buyuk tek fark useMemo bir fonksiyonu alir ve o fonksiyonun dondurdugunu bize dondurur 
//ama useCallback bir fonksiyonu alir ve onu geri dondurur
//eger burada usememo kullansaydik tum fonksiyonu degil returnde arrayi ayarlardi sadece
//ayrica besArtirici yi useMemo ile kullanamazdik 
//useMemo fonksiyonu dondurmez fonksiyonun degerini dondurur, useCallback tum fonksiyonu dondurur
//useCallback cok cok yavas calisan bir fonksiyon varsa kullanilanilir ki cok gerek yok use memo var
//daha cok asagidaki gibi referans esitligi yani number surekli ayni ama renderlaniyor o zaman kullanir

const UseCallbackHook = () => {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const getItems = useCallback((besArtirici) => {
        return [number + besArtirici, number + 1 + besArtirici, number + 2 + besArtirici]
    },[number])

    const theme = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: dark ? '#333' : '#FFF'
        //color: dark ? '#FFF' : '#333'
    }

    return (
        <View style={theme}>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={number}
                onChangeText={number => setNumber(parseInt(number))}
            />
            <Button title='Toggle Theme' onPress={() => setDark(prevDark => !prevDark)} />
            <List getItems={getItems} />
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 2,
        width: 100
    }
});

export default UseCallbackHook;