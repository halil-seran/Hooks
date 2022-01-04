import { useState, useEffect } from 'react';
//import { AsyncStorage } from '@react-native-community/async-storage';

//local Storage calismiyor o yuzden calismiyor ama ornek onemli

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(AsyncStorage.getItem(key))
    if(savedValue) return savedValue

    if(initialValue instanceof Function) return initialValue()

    return initialValue
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        getSavedValue(key,initialValue)
    })

    useEffect(() => {
        AsyncStorage.setItem(key, JSON.stringify(value))
    },[value])

    return [value, setValue]
}


//bu yazdigimiz hooku yazmak, okumak ve anlamak zor olabilir fakat UseCustomHook.js de sadece bir satir kullandik 