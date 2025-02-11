import Toast from 'react-native-toast-message';

const ToastMessage = (props) => {
    return (
        Toast.show({
            type: 'customToast',
            props: {type: props.type},
            text1: props.textTitle,
            text2: props.textMessage,
        })
    )
}

export default ToastMessage