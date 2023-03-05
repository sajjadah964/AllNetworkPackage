import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import fontFamily from '../styles/fontFamily';

const CustomPkgBtn = ({
    logoStyle,
    onPress,
    textStyle,
    singleStyle,
    iconStyle,
    simImage,
    btnText,
    arrowIcon,
    arrowImageStyle,
    arrowImageView,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.singleStyle, ...singleStyle }}
                onPress={onPress}
                activeOpacity={1}
            >
                <View style={{ ...styles.iconStyle, ...iconStyle }}>
                    <Image
                        style={{ ...styles.logoStyle, ...logoStyle }}
                        source={simImage}
                    />
                </View>
                <View style={{ ...styles.gapStyle }}></View>
                <Text style={{ ...styles.textStyle, ...textStyle }}>{btnText}</Text>
                {arrowIcon ?
                    <View style={{ ...styles.arrowImageView, ...arrowImageView }}>
                        <Image
                            style={{ ...styles.arrowImageStyle, ...arrowImageStyle }}
                            source={arrowIcon}
                        />
                    </View>
                    : null
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    singleStyle: {
        flexDirection: 'row',
        width: moderateScale(300),
        height: verticalScale(45),
        borderRadius: moderateScale(300 / 2),
        borderWidth: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: verticalScale(15)
    },
    logoStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        borderWidth: 1,
        borderColor: '#a60006',
        width: moderateScale(40),
        height: verticalScale(40),
        borderRadius: moderateScale(40 / 2),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: moderateScale(5)
    },
    gapStyle: {
        marginHorizontal: moderateScale(10)
    },
    textStyle: {
        fontSize: scale(17),
        fontWeight: '600',
        color: '#fff',
        fontFamily: fontFamily.Bbold,
    },
    arrowImageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    arrowImageStyle: {
        width: moderateScale(40),
        height: verticalScale(40)
    }
});
export default CustomPkgBtn;
