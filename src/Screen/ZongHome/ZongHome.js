import React from 'react';
import { StyleSheet, View } from 'react-native'
import CustomPkgBtn from '../../components/CustomPkgBtn';
import imagePath from '../../constants/imagePath';
import { moderateScale } from 'react-native-size-matters';
import NavigationStrings from '../../constants/NavigationStrings';


const ZongHome = ({ navigation }) => {
    const moveToScreen = screen => {
        navigation.navigate(screen);
        console.log('screen', screen)
    };
    return (
        <View style={styles.container}>
            <CustomPkgBtn
                btnText={'Call Offers'}
                simImage={imagePath.icPhone}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}
                onPress={() => {
                    moveToScreen(NavigationStrings.ZONG_CALL);
                }}
            />
            <CustomPkgBtn
                btnText={'SMS Offers'}
                simImage={imagePath.icMessage}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}
                onPress={() => {
                    moveToScreen(NavigationStrings.ZONG_MSG);
                }}
            />
            <CustomPkgBtn
                btnText={'Internet Offers'}
                simImage={imagePath.icInternet}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}
                onPress={() => {
                    moveToScreen(NavigationStrings.ZONG_INTERNET);
                }}
            />
            {/* <CustomPkgBtn
        btnText={'Location Based Offers'}
        simImage={imagePath.icLocation}
        logoStyle={styles.logoStyle}
        singleStyle={styles.singleStyle}
        iconStyle={styles.iconStyle}
        onPress={() => {
          moveToScreen(NavigationStrings.ZONG_LOCATION);
      }}
      /> */}
            {/* <CustomPkgBtn
                btnText={'Other Offers'}
                simImage={imagePath.icOtherOffer}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}

            /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    logoStyle: {
        tintColor: '#8ec740',
    },
    singleStyle: {
        backgroundColor: '#8ec740',
        borderWidth: 0
    },
    iconStyle: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        marginLeft: moderateScale(3)
    }
});
export default ZongHome;