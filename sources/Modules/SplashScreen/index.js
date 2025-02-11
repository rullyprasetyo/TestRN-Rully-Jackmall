import React, { useEffect } from 'react'
import { View } from 'react-native'
import { styles } from '../../Components'
import FastImage from 'react-native-fast-image'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            goToHomeScreen()
        }, 5000);
    }, []);

    const goToHomeScreen = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.containerSplash}>
            <FastImage 
                source={require('../../Assets/splash.gif')}
                style={styles.gifSplash}
                resizeMode={FastImage.resizeMode.contain}
            />
        </View>
    )
}

export default SplashScreen