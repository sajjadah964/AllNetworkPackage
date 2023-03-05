import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gridStyle: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pkgNameStyle: {
        fontSize: scale(18),
        color: '#149235',
        fontWeight: '600'
    },
    validityStyle: {
        fontSize:scale(14),
        fontWeight: '500',
        textTransform: 'capitalize'
    },
    priceStyle: {
        fontSize: scale(15),
        fontWeight: '500',
        color: '#149235'
    },
    activeStyle: {
        color: '#000',
        fontWeight: '500',
        fontSize: scale(15),
    },
    subscribeBtn: {
        width: moderateScale(300),
        height: verticalScale(45),
        borderRadius:moderateScale(10),
        backgroundColor: '#ff6501',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTextStyle: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: scale(17),
        fontWeight: '600',
    },
    pkgImageStyle: {
        width: moderateScale(25),
        height: verticalScale(25),
        marginBottom:verticalScale(4),
    },
    pkgDetailsStyle: {
        backgroundColor: '#ff6501',
        borderRadius: moderateScale(10),
        textAlign: 'center',
        color: '#fff',
        marginBottom:verticalScale(4),
        marginLeft:moderateScale(7),
        padding:moderateScale(3),
    },
    pkgName: {
        textAlign: 'center',
        fontWeight: '500'
    },
    imgCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoView :{

    },
    logoStyle :{

    }
})
export default styles;