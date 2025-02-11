import React from 'react'
import { Text, View } from 'react-native'
import { Icon, styles } from '../../Components'

const ToastConfig = {
    customToast: (props) => {
        return (
            <View elevation={3} style={styles.toastStyle}>
                <View>
                    <Text style={props.props.type == 'success' ? styles.textTitleToastGreen : styles.textTitleToastRed}>{props.text1}</Text>
                    <Text style={styles.textRegularBlack}>{props.text2}</Text>
                </View>
                <Icon
                    type='ionicon'
                    name={props.props.type == 'success' ? 'checkmark-done-sharp' : 'close-sharp'}
                    size={25}
                    color={props.props.type == 'success' ? '#74B72E' : '#FF1A4D'}
                />
            </View>
        )
    }
}

export default ToastConfig