import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Pallet = ({ specData: { palletWidth, palletHeight, bagWidth, bagHeight, allowedWOverhang, allowedHOverhang, pattern } }) => {
    return (
        <View style={styles({ palletWidth, palletHeight }).container}>
            <Text>pallet</Text>
        </View>
    )
}

const styles = (props) => StyleSheet.create({
    container: {
        width: props.hasOwnProperty('palletWidth') ? props.palletWidth * 5 : 200,
        height: props.hasOwnProperty('palletHeight') ? props.palletHeight * 5 : 240,
        backgroundColor: 'yellow',
        borderWidth: 5,
    },
})

export default Pallet