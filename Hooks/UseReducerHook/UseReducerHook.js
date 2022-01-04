import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

// USEREDUCER HOOK VERY SIMILAR PATTERN TO REDUX
// UseReducer boyle basit bir uyg icin fazladan yuk, daha complex , fazla nested componentlarin kullanildigi actionslarin cok daha fazla 
// oldugu uygulamalar icin daha iyi 

const ACTIONS = {
    EKLEME: 'ekleme',
    CIKARMA: 'cikarma'
}

function reducer(state, action) {
    switch (action.type) {
        case /*'ekleme'*/ ACTIONS.EKLEME:
            return { count: state.count + 1 } //state.count state objectinin countu 
        case /*'cikarma'*/ ACTIONS.CIKARMA:
            return { count: state.count - 1 }
        default:
            return state   //throw error yazilabilir
    }
}


const UseReducerHook = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });  // useStateden farkli 2 parametre aliyor 1. fonksiyon 2. initial value, paranteze aldik cunku object
                                                             // eger { count: 0 } yerine 0 yazsaydik state yerine count yazmamiz gerekirdi fakat countu object seklinde yazdik state o objectin adi bu onemli state.count


    const ekle = () => {
        dispatch({ type: /*'ekleme'*/ ACTIONS.EKLEME })
    }

    const cikar = () => {
        dispatch({ type: /*'cikarma'*/ ACTIONS.CIKARMA })
    }

    return (
        <View style={styles.container}>
            <Button title='1 ekle' onPress={ekle} />
            <Text>
                {state.count}
            </Text>
            <Button title='1 azalt' onPress={cikar} />
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

export default UseReducerHook;