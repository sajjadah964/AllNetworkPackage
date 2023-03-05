import React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavigationStrings from '../../constants/NavigationStrings';
import imagePath from '../../constants/imagePath';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CustomPkgBtn from '../../components/CustomPkgBtn';
import fontFamily from '../../styles/fontFamily';
import Colors from '../../styles/Colors';

const Home = ({ navigation }) => {

    const moveToScreen = screen => {
        navigation.navigate(screen);
        console.log('screen', screen)
    };
    const pkgName = 'All Network Package';
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity style={styles.MenubarStyle}
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Image
                            source={imagePath.icMenubar}
                            style={{
                                width: moderateScale(24), height: verticalScale(24), tintColor: '#fff',
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTextStyle}>{pkgName}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            moveToScreen(NavigationStrings.FAVORTITE_OFFER);
                        }}
                        style={{marginRight:moderateScale(10)}}
                    >
                        <Image
                            source={imagePath.icFavort}
                            style={{
                                tintColor: '#fff',
                                width: moderateScale(26),
                                height: verticalScale(26)
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    height: verticalScale(100),
                    backgroundColor: '#a60006',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: scale(34),
                        textTransform: 'uppercase',
                        fontWeight: '500'
                    }}>
                        All Sim Network
                    </Text>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: scale(26),
                            textTransform: 'uppercase',
                        }}
                    >Packages 2023</Text>

                </View>

                <View>
                    <Image
                        source={imagePath.icSimname}
                        style={{
                            height: verticalScale(48),
                            width: '100%'
                        }}
                    />
                </View>

                <View style={{ flex: 1, backgroundColor: '#740707', justifyContent: 'center', }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>

                        <CustomPkgBtn
                            btnText={'Telenor'}
                            textStyle={{ ...styles.textStyle, color: '#00a9e5' }}
                            simImage={imagePath.icTelenorlogo}
                            logoStyle={styles.logoStyle}
                            singleStyle={styles.singleStyle}
                            iconStyle={styles.iconStyle}
                            arrowIcon={imagePath.icArrow}
                            arrowImageStyle={{ ...styles.arrowImageStyle, tintColor: Colors.telenor }}
                            arrowImageView={styles.arrowImageView}
                            onPress={() => {
                                moveToScreen(NavigationStrings.TELENOR_HOME);
                            }}
                        />
                        <CustomPkgBtn
                            btnText={'Jazz '}
                            textStyle={{ ...styles.textStyle, color: '#8a0204' }}
                            simImage={imagePath.icJazzlogo}
                            logoStyle={styles.logoStyle}
                            singleStyle={styles.singleStyle}
                            iconStyle={styles.iconStyle}
                            arrowIcon={imagePath.icArrow}
                            arrowImageStyle={{ ...styles.arrowImageStyle, tintColor: Colors.jazz }}
                            arrowImageView={styles.arrowImageView}
                            onPress={() => {
                                moveToScreen(NavigationStrings.JAZZ_HOME);
                            }}
                        />
                        <CustomPkgBtn
                            btnText={'Ufone'}
                            textStyle={{ ...styles.textStyle, color: '#ff6501' }}
                            simImage={imagePath.icUfonelogo}
                            logoStyle={styles.logoStyle}
                            singleStyle={styles.singleStyle}
                            iconStyle={styles.iconStyle}
                            arrowIcon={imagePath.icArrow}
                            arrowImageStyle={{ ...styles.arrowImageStyle, tintColor: Colors.ufone }}
                            arrowImageView={styles.arrowImageView}
                            onPress={() => {
                                moveToScreen(NavigationStrings.UFONE_HOME);
                            }}

                        />
                        <CustomPkgBtn
                            btnText={'Zong'}
                            textStyle={{ ...styles.textStyle, color: '#8ec740' }}
                            simImage={imagePath.icZonglogo}
                            logoStyle={styles.logoStyle}
                            singleStyle={styles.singleStyle}
                            iconStyle={styles.iconStyle}
                            arrowIcon={imagePath.icArrow}
                            arrowImageStyle={{ ...styles.arrowImageStyle, tintColor: Colors.zong }}
                            arrowImageView={{ ...styles.arrowImageView, }}
                            onPress={() => {
                                moveToScreen(NavigationStrings.ZONG_HOME);
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        height: verticalScale(48),
        backgroundColor: '#abcabc',
        alignItems: 'center',
        paddingHorizontal: moderateScale(10),
        backgroundColor: '#a60006',
        justifyContent: 'space-between'
    },
    MenubarStyle: {
        marginRight: moderateScale(30)
    },
    headerTextStyle: {
        fontSize: scale(17),
        color: '#fff',
        fontWeight: '600',
    },
    logoStyle: {
        width: moderateScale(30),
        height: verticalScale(30),
    },
    iconStyle: {
        borderWidth: 1,
        borderColor: '#a60006',
        width: moderateScale(50),
        height: verticalScale(50),
        borderRadius: moderateScale(40 / 2),
    },
    singleStyle: {
        width: moderateScale(290),
        height: verticalScale(60),
        borderRadius: moderateScale(40 / 2),
    },
    textStyle: {
        color: '#000',
        fontSize: 23,
        // fontFamily:fontFamily.Bmedium
    }
});
export default Home;
