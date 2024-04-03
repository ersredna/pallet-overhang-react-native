import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SpecForm = ({ specData: { palletWidth, palletHeight, bagWidth, bagHeight, allowedWOverhang, allowedHOverhang, pattern } }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <Text style={styles.text}>Pallet Dimensions(in) -</Text>
                <Text style={styles.text}>Width:</Text>
                <TextInput style={styles.input} value={palletWidth.toString()} placeholder='40' keyboardType='numeric' />
                <Text style={styles.text}>Height:</Text>
                <TextInput style={styles.input} value={palletHeight.toString()} placeholder='40' keyboardType='numeric' />
                <TouchableOpacity style={{ borderWidth: 1, marginLeft: 5 }}>{/* TODO: Finish button */}
                    <Text>Swap</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.text}>Bag Dimensions(in) -</Text>
                <Text style={styles.text}>Width:</Text>
                <TextInput style={styles.input} value={bagWidth.toString()} placeholder='40' keyboardType='numeric' />
                <Text style={styles.text}>Height:</Text>
                <TextInput style={styles.input} value={bagHeight.toString()} placeholder='40' keyboardType='numeric' />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 200,
    },
    inputWrapper: {
        flexDirection: 'row'
    },
    text: {
        marginLeft: 5,
    },
    input: {
        width: 30,
        backgroundColor: 'white',
        borderWidth: 1
    }
})

export default SpecForm