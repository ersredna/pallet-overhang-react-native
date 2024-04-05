import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native'

// import { SpecForm, Pallet } from './components'
import SpecForm from './components/SpecForm'
import Pallet from './components/Pallet'

const Home = () => {
    const [ specData, setSpecData ] = useState({
        palletWidth: '40',
        palletLength: '48',
        bagWidth: '16',
        bagLength: '24',
        allowableWidthOverhang: '1',
        allowableLengthOverhang: '1',
        pattern: '5',
    })

    const handleChange = (id, value) => {
        if (/[^0-9\.\r\n]|(.*?\.){2}/.test(value) && id !== 'pattern-input') return

        setSpecData(oldSpecData => {
            switch (id) {
                case 'pallet-width-input':
                    return { ...oldSpecData, palletWidth: value }
                case 'pallet-length-input':
                    return { ...oldSpecData, palletLength: value }
                case 'bag-width-input':
                    return { ...oldSpecData, bagWidth: value }
                case 'bag-length-input':
                    return { ...oldSpecData, bagLength: value }
                case 'allowable-width-overhang-input':
                    return { ...oldSpecData, allowableWidthOverhang: value }
                case 'allowable-length-overhang-input':
                    return { ...oldSpecData, allowableLengthOverhang: value }
                case 'pattern-input':
                    return { ...oldSpecData, pattern: value }
                default:
                    break
            }
        })
    }

    const palletSwap = () => {
        setSpecData(oldSpecData => {
            return { ...oldSpecData, palletWidth: oldSpecData.palletLength, palletLength: oldSpecData.palletWidth }
        })
    }

    const bagSwap = () => {
        setSpecData(oldSpecData => {
            return { ...oldSpecData, bagWidth: oldSpecData.bagLength, bagLength: oldSpecData.bagWidth }
        })
    }

    return (
        <SafeAreaView>
            <SpecForm specData={specData} handleChange={handleChange} palletSwap={palletSwap} bagSwap={bagSwap} />
            <View style={styles({ palletLength: specData.palletLength }).palletWrapper}>
                <Pallet specData={specData} />
            </View>
        </SafeAreaView>
    )
}

const styles = (props = {}) =>  StyleSheet.create({
    palletWrapper: {
        width: Dimensions.get('window').width,
        height: props.palletLength,
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'red',
    },
})

export default Home