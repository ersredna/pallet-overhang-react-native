import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Dropdown from 'react-native-input-select'

const SpecForm = ({ specData: { palletWidth, palletLength, bagWidth, bagLength, allowableWidthOverhang, allowableLengthOverhang, pattern }, handleChange, palletSwap, bagSwap }) => {

    function handleChangeLink(e) {
        handleChange(e.target._internalFiberInstanceHandleDEV.memoizedProps.nativeID, e.nativeEvent.text )
    }

    function handlePatternChangeLink(value) {
        handleChange('pattern', value)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <Text style={styles.text}>Pallet Dimensions(in) -</Text>
                <Text style={styles.text}>Width:</Text>
                <TextInput id='pallet-width-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={palletWidth.toString()}  />
                <Text style={styles.text}>Length:</Text>
                <TextInput id='pallet-length-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={palletLength.toString()}  />
                <TouchableOpacity style={{ borderWidth: 1, marginLeft: 5 }} onPress={palletSwap}>
                    <Text>Swap</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.text}>Bag Dimensions(in) -</Text>
                <Text style={styles.text}>Width:</Text>
                <TextInput id='bag-width-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={bagWidth.toString()}  />
                <Text style={styles.text}>Length:</Text>
                <TextInput id='bag-length-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={bagLength.toString()}  />
                <TouchableOpacity style={{ borderWidth: 1, marginLeft: 5 }} onPress={bagSwap}>
                    <Text>Swap</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.text}>Allowable Overhang(in) -</Text>
                <Text style={styles.text}>Width:</Text>
                <TextInput id='allowable-width-overhang-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={allowableWidthOverhang.toString()}  />
                <Text style={styles.text}>Length:</Text>
                <TextInput id='allowable-length-overhang-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={allowableLengthOverhang.toString()}  />
            </View>
            <View style={styles.inputWrapper}>
                <Dropdown 
                    options={[
                        { label: '5', value: '5' },
                        { label: '4', value: '4' },
                        { label: '3', value: '3' },
                    ]}
                    selectedValue={pattern}
                    onValueChange={value => handleChange('pattern-input', value)}
                />
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