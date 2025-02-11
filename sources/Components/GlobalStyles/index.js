import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentWrap: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 15,
        paddingBottom: 5,
    },
    containerSplash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4E4E6',
    },
    gifSplash: {
        width: '100%',
        height: '100%',
    },
    textRegularBlack: {
        fontSize: 15,
        fontFamily: 'Jost-Regular',
        color: '#000'
    },
    textRegularSemiRed: {
        fontSize: 15,
        fontFamily: 'Jost-SemiBold',
        color: '#FF1A4D'
    },
    textRegularBoldBlack: {
        fontSize: 15,
        fontFamily: 'Jost-Bold',
        color: '#000'
    },
    textTitleToastGreen: {
        fontSize: 20,
        fontFamily: 'Jost-SemiBold',
        color: '#74B72E'
    },
    textTitleToastRed: {
        fontSize: 20,
        fontFamily: 'Jost-SemiBold',
        color: '#FF1A4D'
    },
    textButtonWhite: {
        fontSize: 18,
        fontFamily: 'Jost-SemiBold',
        color: '#fff'
    },
    textButtonRed: {
        fontSize: 18,
        fontFamily: 'Jost-SemiBold',
        color: '#FF1A4D'
    },
    textButtonModal: {
        alignSelf: 'flex-end',
        top: 10,
    },
    cardCategory: {
        backgroundColor: '#FBF8F9',
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1
        },
        padding: 15,
        borderRadius: 10,
        margin: 5
    },
    cardJokes: {
        backgroundColor: '#F7DEE4',
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1
        },
        padding: 10,
        borderRadius: 10,
        marginVertical: 5
    },
    category: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    category1: {
        flexDirection: 'row',
        flex: 0.5
    },
    buttonCategoryTop: {
        backgroundColor: '#FF1A4D',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        flex: 0.2
    },
    buttonCategory: {
        backgroundColor: '#CECECE',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        flex: 0.2
    },
    buttonBlue: {
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        marginTop: 5
    },
    buttonRed: {
        backgroundColor: '#FF1A4D',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 5,
    },
    toastStyle: {
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1
        },
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        height: 55,
        width: '90%',
        borderRadius: 8,
        top: 23,
    },
    headerCustom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 5,
        backgroundColor: '#FF1A4D'
    },
    modal: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        width: '90%',
        padding: 30,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        elevation: 5,
    },
    divider: {
        flex: 1,
        borderWidth: 0.5,
        marginVertical: 10,
        borderColor: '#000'
    },
})

export default styles