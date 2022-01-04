import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function List({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(5))
        console.log('updating items')
    }, [getItems])

    return items.map(item => <Text key={item}>{item}</Text>)
}