import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OverhangInfo = ({ specData: { allowableWidthOverhang, allowableLengthOverhang }, overhangInfo: { widthOverhang, lengthOverhang } }) => {

    let widthOverhangColor = widthOverhang > allowableWidthOverhang ? 'red' : 'green'
    let lengthOverhangColor = lengthOverhang > allowableLengthOverhang ? 'red' : 'green'

    return (
        <View style={styles().lineWrapper}>
            <Text style={styles().text}>Overhang - </Text>
            <Text style={styles().text}>X: </Text>
            <Text style={[ styles({ color: widthOverhangColor }).overhangText, styles().text ]}>{widthOverhang} </Text>
            <Text style={styles().text}>Y: </Text>
            <Text style={[ styles({ color: lengthOverhangColor }).overhangText, styles().text ]}>{lengthOverhang} </Text>
        </View>
    )
}

const styles = (props = {}) => StyleSheet.create({
    lineWrapper: {
        marginLeft: 5,
        flexDirection: 'row',
    },
    text: {
        fontSize: 23,
        marginBottom: 5,
    },
    overhangText: {
        color: props.color,
    },
})

export default OverhangInfo