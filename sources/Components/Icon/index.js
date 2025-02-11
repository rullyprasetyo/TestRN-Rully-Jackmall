import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'

const Icon = (props) => {
    // console.log('first', props.name)
    return (
        <Ionicons
            name={props.name}
            color={props.color}
            size={props.size}
            style={props.style ? props.style : {}}
        />
    )
}

export default Icon