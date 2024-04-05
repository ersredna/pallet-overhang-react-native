import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Bag = ({ width, length, position }) => {
    return (
        <View style={styles({ width, length, position }).bag} />
    )
}

const styles = (props = {}) => StyleSheet.create({
    bag: {
        width: props.hasOwnProperty('width') ? props.width * 7 : 80,
        height: props.hasOwnProperty('length') ? props.length * 7 : 120,
        backgroundColor: 'white',
        borderWidth: 3,
        position: 'absolute',
        top: props.position.y,
        left: props.position.x,
    },
})

export default Bag