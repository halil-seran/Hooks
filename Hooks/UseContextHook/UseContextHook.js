/*
    Parent ve child componentler arasindaki veri aktarimi kolaylastirir.
    uygulamanin theme sini, dil seceneklerini, tokenlari contexte tutabiliriz 

    diyelim ki bir app.js var Returnde bir x fonksiyonun renderliyoruz renderladigimiz fonsiyon app.js in icinde 
    return kisminda Diyelim ki RoundedButton diye bir component kullaniyoruz. RoundedButton.js de de bu x fonskiyonunu kullanmak istyoruz
    iste burada useContext kullaniyoruz. Mesela RoundedButton.js de bir component kullanalim Rounded.js de bu x fonsiyonunu kullanmak istiyoruz
    yine useContext Kullaniyoruz iste bu zaten yukardaki gibi theme, dil secenekleri felan gibi yerlerde kullaniliyor
    eski yontem app.jsden RoundedButton.js e ordan Rounded.js e x fonksiyonunu cekmek karisik ve mantiksiz
    useContext ile app.js den merkezi bir sekilde Rounded.js e fonskiyonu cekip orada kullanabiliyoruz

    //ozet React takimi useContexi cok kullanmayi onermiyor cunku componentlerin yeniden kullanilabilirligi azaliyor (sanirim simdi baska bir screen de userListi kullanmak istesek kullanabilir miyiz ? o yuzden olabilir )
    // bunun yerine her yerde kullanilablen componentler yazmak biraz daha mantikli
    // en cok kullanilan yerler Tokenlar AutoAuthenticate, Theme sacenekleri, dil secenekleri (bir kere degistiginde tum screenlerde degisecek seyler icin genelde) 

*/

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import UserList from "./UserList";
import { UserContext } from './contexts/UserContext';  //suslu parantez icinde import ediyoruz cunku default bir export yok

const data = [
    { id: 1, name: "Ahmet", email: "ahmet@site.com", age: 25, color: "lightcyan" },
    { id: 2, name: "Mehmet", email: "mehmet@site.com", age: 30, color: "honeydew" },
    { id: 3, name: "Ali", email: "ali@site.com", age: 35, color: "mistyrose" }
];

const UseContextHook = () => {

    const [users, setUsers] = useState(data);

    const changeColor = (id, color) =>
        setUsers(
            users.map(user => (user.id === id ? { ...user, color: color } : user))
        );

    return (
        <UserContext.Provider value={{ users, changeColor }} //value={changeColor} fonksiyon olabilir ama parantez yok () 
                                                             // parantezin koydugun yerde fonksiyon calistirilir 
                                                             // biz burda fonksiyonu aktariyoruz bu yuzden parantez olmadan gonderiyoruz 
                                                             //tekrar parateze almamizin nedeni birden fazla gonrilecek sey oldugu icin obje olarak gonderiyoruz o yuzden cift paranteze aldik //users: users gibi yazmamiz gerekiyor ama key ve value ayni oldugunda yazmamiza gerek yok  
        >
            <View style={styles.container}>
                <Text>
                    Welcome
                </Text>
                <UserList /* users={users} */ /*changeColor={changeColor} artik bunu gondermemize gerek yok */ />
            </View>
        </UserContext.Provider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default UseContextHook;
