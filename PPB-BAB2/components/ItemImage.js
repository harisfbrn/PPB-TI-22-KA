import { View, Text, Image } from 'react-native'
import React from 'react'
import ItemTypograp from './ItemTypograp'

const ItemImage = () => {
    return (
        <View style={{ backgroundColor: 'aqua', padding: 50 }}>
            <View style={{ borderWidth: 1, backgroundColor: 'white' }}>
                <Image source={require('../assets/avatar.png')} style={{ width: 100, height: 80 }}
                />
            </View>
        </View>
    )
}

export default ItemImage