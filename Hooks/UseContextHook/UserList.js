import React, { useContext } from "react";
import User from "./User";
import { Text } from "react-native";
import { UserContext } from "./contexts/UserContext";

const UserList = ({/* users */  /*, changeColor */}) => {  //buna da gerek yok

    const context = useContext(UserContext);


    return (
        <>
            <Text>User List</Text>
            {context.users.map(user => (
                <User key={user.name} user={user} /*changeColor={changeColor}*/ />
            ))}
        </>
    );
};

export default UserList;


//obje gondermistik 2 tane fonksiyon vardi. 
// gelen objeyi context ile aldik 
//kullanirken context.Fonksiyon adi ile kullaniyoruz 
// tek fonksiyon gonderirken context yerine istedigimizi yazip diyelim gelenFonkiyon
// gelenFonksiyonu kullanabiliriz, kullandigimizda gidenFonksiyon calisir