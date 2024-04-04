import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Bag from './Bag'

const Pallet = ({ specData: { palletWidth, palletLength, bagWidth, bagLength, pattern } }) => {

    let bags = 0
    let onSide = 0
    let positions = {}
    const offset = (bagLength - bagWidth) / 2
    const border = 3

    switch (pattern) {  
        case '4a':
            bags = 4
            onSide = 2
            positions = {
                0: { x: (palletWidth / 2 - bagLength + offset) * 7, y: (palletLength / 2 - bagWidth - offset) * 7 },
                1: { x: (palletWidth / 2 - offset) * 7, y: (palletLength / 2 + offset) * 7 }, 
                2: { x: (palletWidth / 2 + offset) * 7, y: (palletLength / 2 - bagLength + offset) * 7 }, 
                3: { x: (palletWidth / 2 - bagWidth - offset) * 7, y: (palletLength / 2 - offset) * 7 }, 
            }
            break
        case '4b':
            bags = 4
            onSide = 3
            positions = {
                0: { x: (palletWidth / 2 - offset) * 7, y: (palletLength / 2 - bagWidth * 1.5) * 7 },
                1: { x: (palletWidth / 2 - offset) * 7, y: (palletLength / 2 + bagWidth * 0.5) * 7 },
                2: { x: (palletWidth / 2 - offset) * 7, y: (palletLength / 2 - bagWidth * 0.5) * 7 },
                3: { x: (palletWidth / 2 - bagWidth - offset) * 7, y: (palletLength / 2 - bagLength / 2) * 7 },
            }
            break
        case '3':
            bags = 3
            onSide = 1
            positions = {
                0: { x: (palletWidth / 2 - bagLength / 2) * 7, y: (palletLength / 2 - bagWidth * 1 - offset) * 7 },
                1: { x: (palletWidth / 2) * 7, y: (palletLength / 2 - offset) * 7 },
                2: { x: (palletWidth / 2 - bagWidth) * 7, y: (palletLength / 2 - offset) * 7 }, 
            }
            break
        default:
            bags = 5
            onSide = 3
            positions = { 
                0: { x: (palletWidth / 2 - offset) * 7 - border, y: (palletLength / 2 - bagWidth * 1.5) * 7 - border },
                1: { x: (palletWidth / 2 - offset) * 7 - border, y: (palletLength / 2 + bagWidth * 0.5) * 7 - border },
                2: { x: (palletWidth / 2 - offset) * 7 - border, y: (palletLength / 2 - bagWidth * 0.5) * 7 - border },
                3: { x: (palletWidth / 2 - bagWidth - offset) * 7 - border, y: (palletLength / 2) * 7 - border },
                4: { x: (palletWidth / 2 - bagWidth - offset) * 7 - border, y: (palletLength / 2 - bagLength) * 7 - border },
            }
    }

    return (
        <View style={styles({ palletWidth: Number(palletWidth), palletLength: Number(palletLength) }).pallet}>
            {Array.from({ length: bags }, (_, i) => {
                let width
                let length

                if (i < onSide) {
                    width = bagLength
                    length = bagWidth
                }
                else {
                    width = bagWidth
                    length = bagLength
                }

                return <Bag key={i} width={width} length={length} position={positions[i]} />
            })}
        </View>
    )
}

const styles = (props = {}) => StyleSheet.create({
    pallet: {
        width: props.hasOwnProperty('palletWidth') ? props.palletWidth * 7 : 200,
        height: props.hasOwnProperty('palletLength') ? props.palletLength * 7 : 240,
        backgroundColor: 'yellow',
        borderWidth: 3,
    },
})

export default Pallet