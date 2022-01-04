import React, { useState, useContext } from "react";
import { Text, View, TextInput } from "react-native";
import { UserContext } from "./contexts/UserContext";

const User = ({ user /* , changeColor */ }) => { //artik buna ihtiyacimiz yok 

    const [e, setE] = useState('');

    const context = useContext(UserContext); //illa changeColor dememize gerek yok istedigimiz ismi veriyoruz
    console.log(context);               //function geldi

    return (
        <View style={{ backgroundColor: user.color }} >
            <Text>{user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Age: {user.age}</Text>
            <Text> Color:{" "}</Text>
            <TextInput
                value={user.color}
                onChangeText={e => setE(context.changeColor(user.id, e))} //changeColor yerine changeC yaziyoruz
            />

        </View>
    )
}

export default User;

