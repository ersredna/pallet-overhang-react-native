import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OverhangInfo = ({ specData: { palletWidth, palletLength, bagWidth, bagLength, allowableWidthOverhang, allowableLengthOverhang, pattern } }) => {
    palletWidth = Number(palletWidth)
    palletLength = Number(palletLength)
    bagWidth = Number(bagWidth)
    bagLength = Number(bagLength)

    let xOverhang = { value: -1, textColor: 'black' }
    let yOverhang = { value: -1, textColor: 'black' }

    switch (pattern) {
        case '5':
            xOverhang.value = ((bagWidth + bagLength) - palletWidth) / 2
            xOverhang.textColor = xOverhang.value > allowableWidthOverhang ? 'red' : 'green'
            yOverhang.value = (Math.max(bagWidth * 3, bagLength * 2) - palletLength) / 2
            yOverhang.textColor = yOverhang.value > allowableLengthOverhang ? 'red' : 'green'
            break
        case '4':
            xOverhang.value = ((bagWidth + bagLength) - palletWidth) / 2
            xOverhang.textColor = xOverhang.value > allowableWidthOverhang ? 'red' : 'green'
            yOverhang.value = ((bagWidth + bagLength) - palletLength) / 2
            yOverhang.textColor = yOverhang.value > allowableLengthOverhang ? 'red' : 'green'
            break
        case '3':
            xOverhang.value = (Math.max(bagWidth * 2, bagLength) - palletWidth) / 2
            xOverhang.textColor = xOverhang.value > allowableWidthOverhang ? 'red' : 'green'
            yOverhang.value = ((bagWidth + bagLength) - palletLength) / 2
            yOverhang.textColor = yOverhang.value > allowableLengthOverhang ? 'red' : 'green'
            break
        default:
            break
    }

    return (
        <View style={styles().lineWrapper}>
            <Text style={styles().text}>Overhang - </Text>
            <Text style={styles().text}>X: </Text>
            <Text style={[ styles({ color: xOverhang.textColor }).overhangText, styles().text ]}>{xOverhang.value} </Text>
            <Text style={styles().text}>Y: </Text>
            <Text style={[ styles({ color: yOverhang.textColor }).overhangText, styles().text ]}>{yOverhang.value} </Text>
        </View>
    )
}

const styles = (props = {}) => StyleSheet.create({
    lineWrapper: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
    },
    overhangText: {
        color: props.color,
    },
})

export default OverhangInfo