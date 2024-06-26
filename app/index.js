import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, Dimensions } from 'react-native'

// import { SpecForm, Pallet } from './components'
import SpecForm from './components/SpecForm'
import OverhangInfo from './components/OverhangInfo'
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
    const [ overhangInfo, setOverhangInfo ] = useState({
        widthOverhang: 0,
        lengthOverhang: 0,
    })

    useEffect(() => {
        const { palletWidth, palletLength, bagWidth, bagLength, pattern } = specData

        setOverhangInfo(() => {
            switch (pattern) {
                case '5':
                    widthOverhang = ((Number(bagWidth) + Number(bagLength)) - palletWidth) / 2
                    lengthOverhang = (Math.max(Number(bagWidth) * 3, Number(bagLength) * 2) - palletLength) / 2
                    return { widthOverhang, lengthOverhang }
                case '4':
                    widthOverhang = ((Number(bagWidth) + Number(bagLength)) - palletWidth) / 2
                    lengthOverhang = ((Number(bagWidth) + Number(bagLength)) - palletLength) / 2
                    return { widthOverhang, lengthOverhang }
                case '3':
                    widthOverhang = (Math.max(Number(bagWidth) * 2, Number(bagLength)) - palletWidth) / 2
                    lengthOverhang = ((Number(bagWidth) + Number(bagLength)) - palletLength) / 2
                    return { widthOverhang, lengthOverhang }
                default:
                    return { widthOverhang: null, lengthOverhang: null }
            }
        })
    }, [specData])

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
                    return { ...oldSpecData }
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

    // console.log(specData.palletLength, overhangInfo.lengthOverhang)

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <ScrollView>
                <SpecForm specData={specData} handleChange={handleChange} palletSwap={palletSwap} bagSwap={bagSwap} setOverhangInfo={setOverhangInfo} />
                <OverhangInfo specData={specData} overhangInfo={overhangInfo} />
                {specData.pattern && <View style={styles({ palletLength: Number(specData.palletLength), lengthOverhang: Number(overhangInfo.lengthOverhang) }).palletWrapper}>
                    <Pallet specData={specData} />
                </View>}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = (props = {}) =>  StyleSheet.create({
    palletWrapper: {
        width: Dimensions.get('window').width,
        height: props.lengthOverhang > 0 ? (props.palletLength + props.lengthOverhang * 2) * 7 : props.palletLength * 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Home