import React, { useMemo, useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const UseMemoHook = () => {

    const [number, setNumber] = useState(null);
    const [color, setColor] = useState(false);
    const doubleNumber = useMemo(() => {          //useMemo yani memorize yani şu eger slow fuction gibi bir fonksiyonumuz varsa bu her app renderlandiginda calisiyorsa buyuk bir performans sikintisi vardir. 
        return slowFunction(number)                 //use memo icerisine alarak [number] parametresiyle birlikte slow functionini her app renderlandinda degil de sadece number degistiginde renderliyoruz  
    }, [number])                                        //boylece siyah beyaz olarak degisen tema da number degismedigi icin performans kaybi yasamiyoruz ve uygulamamiz daha hizli calisiyor 
                                                        //kisaca gereksiz yere slow functionini calistirmiyoruz, eger number degisirse calistir diyoruz
                                                        //Peki boyle mukemmel bir hooku neden her fonksiyona kullanmiyoruz mal miyiz her yere kullanalim performansimiz ucsun
                                                        //cunku memorize cunku her memo hookumuz hafizamizda yer kapliyor, eger her yerde kullanirsak fazla hafiza kullandigimiz icin performans sorunlariyla karsilarisiz
                                                        //eger gercekten performans kazanci yuksekse kullanilmali
    const themeStyles = useMemo(() => {
        return {
            width: 100,
            backgroundColor: color ? 'black' : 'white',
            // textColor: color ? 'white' : 'black' 
        }
    }, [color])

    useEffect(() => {
        console.log('theme changed')  // burada anliyoruz ki her app renderlandiginda themeStyles da renderlaniyor ve her renderlanan themeStyles eskisinden farkili olarak yeniden olusturuluyor bu da fazladan gereksiz hafiza kaplamasi demek 
    }, [themeStyles])                    //her renderlandiginda yeniden olusuyor hafizamizi dolduruyor bu yuzden ona da usememo kullanicaz
                
    //PEki bu useEffect ile ayni, ikiside verdigimiz parametre degisirse calisiyor fark ne ?
    //useEffect runs after a render happens, while useMemo runs before
    //useMemo eger parametresi degisirse bir degeri yeniden hesaplar, parametre yoksa bi kere hesaplar, fakat parametre ihmal edilirse ,[] her renderda calisir, fonksiyonu cagirmak re-rendera sebep olmaz, ayrica component renderlaniyorken useMemo renderlanir oncesinde degil
    //useEffect ise her renderdan sonra cagirilir, eger parametresi degismis yada ihmal edilmisse ,[] renderlanir, parametresi yoksa initial mountta bir kere calisir.(and unmount if you return a cleanup function).

    return (    
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <Button title='change' onPress={() => setColor(prevColor => !prevColor)} />
            <View style={themeStyles}>
                <Text >
                    {doubleNumber}
                </Text>
            </View>
        </View>
    );
}

function slowFunction(num) {
    console.log('Calling slow function')
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
}

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

export default UseMemoHook;