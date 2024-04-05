import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const SpecForm = ({ specData: { palletWidth, palletLength, bagWidth, bagLength, allowableWidthOverhang, allowableLengthOverhang, pattern }, handleChange, palletSwap, bagSwap, setOverhangInfo }) => {

    function handleChangeLink(e) {
        handleChange(e.target._internalFiberInstanceHandleDEV.memoizedProps.nativeID, e.nativeEvent.text )
    }
    
    function handlePatternChangeLink(value) {
        handleChange('pattern-input', value)
    }

    return (
        <>
            <View style={styles.lineWrapper}>
                <Text style={styles.text}>Pallet -</Text>
                <Text style={styles.text}>Width(in):</Text>
                <TextInput id='pallet-width-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={palletWidth.toString()}  />
                <Text style={styles.text}>Length(in):</Text>
                <TextInput id='pallet-length-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={palletLength.toString()}  />
                <TouchableOpacity onPress={palletSwap}>
                    <Text style={[styles.input, { width: 'auto' }]}>Swap</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineWrapper}>
                <Text style={styles.text}>Bag -</Text>
                <Text style={styles.text}>Width(in):</Text>
                <TextInput id='bag-width-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={bagWidth.toString()}  />
                <Text style={styles.text}>Length(in):</Text>
                <TextInput id='bag-length-input' keyboardType='numeric' onChange={handleChangeLink} style={styles.input} value={bagLength.toString()}  />
                <TouchableOpacity onPress={bagSwap}>
                    <Text style={[styles.input, { width: 'auto' }]}>Swap</Text>
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
                <Text style={styles.text}>Number of bags: </Text>
                <View style={styles.inputWrapper}>
                    <RNPickerSelect 
                        items={[
                            { label: '5', value: '5' },
                            { label: '4', value: '4' },
                            { label: '3', value: '3' },
                        ]}
                        value={pattern}
                        onValueChange={value => handlePatternChangeLink(value)}
                        placeholder={{}}
                        style={{
                            inputIOS: styles.input,
                            inputAndroid: styles.input,
                        }}
                    />
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    lineWrapper: {
        marginBottom: 5,
        marginHorizontal: 5,
        flexDirection: 'row',
    },
    text: {
        fontSize: 23,
    },
    input: {
        width: 35,
        height: 23,
        marginRight: 5,
        fontSize: 23,
        textAlign: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
    },
    dropdown: {
        height: 23,
        paddingHorizontal: 3,
        paddingVertical: 3,
        margin: 0,
    },
})

export default SpecForm