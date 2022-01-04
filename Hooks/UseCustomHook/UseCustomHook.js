import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

// kendi hookumuzun ismi kesinlikle use ile baslamalidir baslamasada olur ama use ile baslarsa Hooklar icin genel kurallar otomatik oalrak bizim hookumuz icinde olur

 
const UseCustomHook = () => {
    const [name, setName] = useLocalStorage('name','');
    useUpdateLogger(name)

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={name => setName(name)}
            />
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
        borderWidth: 2,
        width: 100
    }
});

export default UseCustomHook;