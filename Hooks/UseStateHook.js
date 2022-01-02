import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from 'react-native';

const useStateFunction = () => {
    console.log('X');
    return 0
}


const UseStateHook = () => {

    const [number, setNumber] = useState(0); //0 yerine useStateFunction() ile function da yazabiliriz, o zaman deger eher yukseldiginde x yazar/ / useState icinde direkt fuction da yazabiliriz o zaman 1 kere x yazar,,,, app her renderlandiginde useState() de calisir

    const topla = () => {
        setNumber(a => a + 1)   //bu sekilde de yazabiliriz 
        setNumber(a => a + 1)      // sonuc 2 artar, - nin aksine burda fonsiyon oldugu icin 2 kere calisir, asagida number-1 burda foksiyon ile numberi cagirip 1 azaltiyoruz, o yuzden 2. satirda 1 eksilen number tekrar cagirip 1 eksiltiyoruz
    };

    const cikar = () => {
        setNumber(number - 1)
        setNumber(number - 1)   //2 kere yazarsak da sonuc 1 eksilir cunku cikar functioni 1 kere calistirdik, 2 satirda da 4 den 1 cikardi
    };

    //EGER USESTATE DE KI DEGER BIR NESNE ISE 

    const [state, setState] = useState({ count: 1, theme: 'blue' });
    const count = state.count
    const theme = state.theme

    const sayiAzalt = () => {
        setState(prevState => {
            //return {count: prevState.count - 1} // bu durumda state i override edip uzerine yaziyor theme datasi artik yok
            return {...prevState, count: prevState.count - 1}  // countu degistirmek icin tum state i guncellememiz gerekiyor sadece countu mergeleyemiyoruz yada updateleyemiyoruz
        })
    } 

    //eger imkan varsa count ve theme mayi ayri ayri yazabiliriz (yukardaki ornek gibi) cok daha kolay oluyor

    return (
        <View style={styles.container}>

            <View>
                <Button title='1 cikar' onPress={cikar} />
                <Text>
                    {number}
                </Text>
                <Button title='1 topla' onPress={topla} />
            </View>

            
            <View>
                <View style={{ margin: 5 }}>
                    <Button title='nesne cikar'  onPress={sayiAzalt} />
                </View>
                <Text>
                    {count}
                    {theme}
                </Text>
                <View style={{ margin: 5 }}>
                    <Button title='nesne topla'  onPress={cikar} />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'

    }
});

export default UseStateHook;