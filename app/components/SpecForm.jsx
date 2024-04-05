import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Dropdown from 'react-native-input-select'

const SpecForm = ({ specData: { palletWidth, palletLength, bagWidth, bagLength, allowableWidthOverhang, allowableLengthOverhang, pattern }, handleChange, palletSwap, bagSwap, setOverhangInfo }) => {

    function handleChangeLink(e) {
        handleChange(e.target._internalFiberInstanceHandleDEV.memoizedProps.nativeID, e.nativeEvent.text )
    }
    
    function handlePatternChangeLink(value) {
        handleChange('pattern-input', value)
    }

    return (
        <View style={styles.container}>
            <View style={styles.lineWrapper}>
                <Text style={styles.text}>Pallet -</Text>
                <Text style={styles.text}>Width(in):</Text>
                <TextInput id='pallet-width-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={palletWidth.toString()}  />
                <Text style={styles.text}>Length(in):</Text>
                <TextInput id='pallet-length-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={palletLength.toString()}  />
                <TouchableOpacity style={{ borderWidth: 1, marginLeft: 5 }} onPress={palletSwap}>
                    <Text style={styles.buttonText}>Swap</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineWrapper}>
                <Text style={styles.text}>Bag -</Text>
                <Text style={styles.text}>Width(in):</Text>
                <TextInput id='bag-width-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={bagWidth.toString()}  />
                <Text style={styles.text}>Length(in):</Text>
                <TextInput id='bag-length-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={bagLength.toString()}  />
                <TouchableOpacity style={{ borderWidth: 1, marginLeft: 5 }} onPress={bagSwap}>
                    <Text style={styles.buttonText}>Swap</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineWrapper}>
                <Text style={styles.text}>Allowable Overhang -</Text>
                <Text style={styles.text}>X(in):</Text>
                <TextInput id='allowable-width-overhang-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={allowableWidthOverhang.toString()}  />
                <Text style={styles.text}>Y(in):</Text>
                <TextInput id='allowable-length-overhang-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={allowableLengthOverhang.toString()}  />
            </View>
            <View style={styles.lineWrapper}>
                <Dropdown 
                    options={[
                        { label: '5', value: '5' },
                        { label: '4', value: '4' },
                        { label: '3', value: '3' },
                    ]}
                    selectedValue={pattern}
                    onValueChange={value => handlePatternChangeLink(value)}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 200,
    },
    lineWrapper: {
        marginBottom: 5,
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        marginLeft: 5,
    },
    buttonText: {
        fontSize: 20,
    },
    input: {
        width: 30,
        height: 20,
        fontSize: 20,
        backgroundColor: 'white',
        borderWidth: 1
    }
})

export default SpecForm