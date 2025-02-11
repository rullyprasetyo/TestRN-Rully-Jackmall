import React from 'react'
import { View, Text } from 'react-native'
import styles from '../GlobalStyles'

const Header = (props) => {
    return (
        <View style={styles.headerCustom}>
            <Text style={styles.textButtonWhite}>{props.screenName}</Text>
        </View>
    )
}

export default Header