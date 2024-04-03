import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Pallet = ({ specData: { palletWidth, palletLength, bagWidth, bagLength, allowableWidthOverhang, allowableLengthOverhang, pattern } }) => {
    return (
        <View style={styles({ palletWidth: Number(palletWidth), palletLength: Number(palletLength) }).pallet}>
            <View style={styles().bag}>
                <Text>bag</Text>
            </View>
        </View>
    )
}

const styles = (props = {}) => StyleSheet.create({
    pallet: {
        width: props.hasOwnProperty('palletWidth') ? props.palletWidth * 5 : 200,
        height: props.hasOwnProperty('palletLength') ? props.palletLength * 5 : 240,
        backgroundColor: 'yellow',
        borderWidth: 3,
    },
    bag: {
        width: 16 * 5,
        height: 24 * 5,
        backgroundColor: 'white',
        borderWidth: 3,
        top: 40,
    },
})

export default Pallet