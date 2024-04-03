import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'

// import { SpecForm, Pallet } from './components'
import SpecForm from './components/SpecForm'
import Pallet from './components/Pallet'

const Home = () => {
    const [ specData, setSpecData ] = useState({
        palletWidth: 40,
        palletHeight: 48,
        bagWidth: 16,
        bagHeight: 24,
        allowedWOverhang: 1,
        allowedHOverhang: 1,
        pattern: '5',
    })

    return (
        <SafeAreaView>
            <SpecForm specData={specData} />
            <Pallet specData={specData} />
        </SafeAreaView>
    )
}

export default Home