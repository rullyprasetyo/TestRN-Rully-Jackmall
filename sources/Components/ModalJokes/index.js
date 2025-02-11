import React from 'react'
import { View, Modal, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native'
import styles from '../GlobalStyles'

const ModalJokes = (props) => {
    return (
        <Modal visible={props.visible} animationType="fade" transparent={true} onRequestClose={() => props.onClose()}>
            <TouchableWithoutFeedback onPress={() => props.onClose()}>
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.textRegularSemiRed}>{props.jokes}</Text>
                        <TouchableOpacity onPress={() => props.onClose()} style={styles.textButtonModal}>
                            <Text style={styles.textRegularBoldBlack}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ModalJokes