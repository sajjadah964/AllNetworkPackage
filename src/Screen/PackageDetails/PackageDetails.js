import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
    Linking,
    Image,
    ToastAndroid,
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Loader from '../../components/Loader';
import Share from 'react-native-share';
import Clipboard from '@react-native-clipboard/clipboard';
import imagePath from '../../constants/imagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';
let packages = [];
const PackageDetails = props => {
    // const {navigation}=props;
    // console.log(props.route.params.detail);
    const [isLoading, setisLoading] = useState(true);
    const navigation = useNavigation();
    const {
        pkgName,
        validity,
        price,
        activationCode,
        description,
        statusCode,
        pkgDetails,
    } = props.route.params.detail;
    // console.log(data)
    // console.log(pkgDetails);
    const title = `Package Name: ${pkgName}`;
    const message = `
    Validity: ${validity}, 
    Price: ${price},
    Description: ${description}`;
    const options = {
        title,
        message,
    };
    const sharePackage = async (customOptions = options) => {
        try {
            await Share.open(customOptions);
        } catch (err) {
            console.log(err);
        }
    };
    // LOADING CODE
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false);
        }, 1000);
    }),
        [];
    // open code in contact dialog
    const triggerCall = activationCode => {
        console.log(activationCode);
        const pkgNumber = activationCode;
        Alert.alert('Confirmation...!', 'Would you like to Activate this offer.', [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Yes', onPress: () => Linking.openURL(`tel:${pkgNumber}`) },
        ]);
    };
    // COPY TEXT FUN
    const copyText = (activationCode) => {
        console.log('my code', activationCode);
        Clipboard.setString(activationCode);
        ToastAndroid.showWithGravity(
            'Package Code Copied',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };
    // SAVE DATA IN LOCAL STORAGE
    const saveData = async () => {
        let tempPackage = [];
        packages = [];
        let x = JSON.parse(await AsyncStorage.getItem('Contacts'));
        tempPackage = x;
        // packages.push(tempPackage);
        tempPackage.map(item => {
            packages.push(item);
            return packages;
        });
        packages.push({ pkgName: pkgName, validity: validity, price: price, activationCode, activationCode, description: description, pkgDetails: pkgDetails, statusCode: statusCode });
        if (packages) {
            await AsyncStorage.setItem('Contacts', JSON.stringify(packages));
            ToastAndroid.showWithGravity(
                'Offer is added',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
        // console.log(packages)
        // navigation.navigate(NavigationStrings.FAVORTITE_OFFER);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isLoading ? (
                <Loader isLoading={isLoading} />
            ) : (
                <View style={{ flex: 1, paddingHorizontal: 13 }}>
                    {pkgName ? (
                        <View style={styles.pkgNameView}>
                            <Text style={styles.pkgNameText}>{pkgName}</Text>
                        </View>
                    ) : null}

                    {validity ? (
                        <View style={styles.pkgDetail}>
                            <View style={styles.singleDetail}>
                                <Text style={styles.singleDetailText}>Validity :</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#000', fontSize: 15 }}>{validity}</Text>
                            </View>
                        </View>
                    ) : null}
                    {price ? (
                        <View style={styles.pkgDetail}>
                            <View style={styles.singleDetail}>
                                <Text style={styles.singleDetailText}>Price :</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#000', fontSize: 15 }}>{price}</Text>
                            </View>
                        </View>
                    ) : null}
                    {activationCode ? (
                        <View style={styles.pkgDetail}>
                            <View style={styles.singleDetail}>
                                <Text style={styles.singleDetailText}>Activation Code :</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#000', fontSize: 15 }}>
                                    {activationCode}
                                </Text>
                            </View>
                        </View>
                    ) : null}
                    {statusCode ? (
                        <View style={styles.pkgDetail}>
                            <View style={styles.singleDetail}>
                                <Text style={styles.singleDetailText}>Status Code :</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#000', fontSize: 15 }}>{statusCode}</Text>
                            </View>
                        </View>
                    ) : null}
                    {description ? (
                        <View style={styles.pkgDetail}>
                            <View style={styles.singleDetail} >
                                <Text style={styles.singleDetailText}>Description :</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text selectable={true} style={{ color: '#000', fontSize: 15 }}>{description}</Text>
                            </View>
                        </View>
                    ) : null}
                    <View style={styles.activeBtnView}>
                        <TouchableOpacity
                            style={styles.shareBtn}
                            activeOpacity={0.9}
                            onPress={async () => {
                                await sharePackage();
                            }}>
                            <Image
                                style={{ tintColor: '#246EE9', width: 40, height: 40 }}
                                source={imagePath.icShare}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.activeBtn}
                            activeOpacity={0.9}
                            onPress={() => triggerCall(activationCode)}>
                            <Text style={styles.activeBtnText}>Activate</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.copyBtn}
                            activeOpacity={0.5}
                            onPress={() => copyText(activationCode)}>
                            <Image
                                style={{ tintColor: '#246EE9', width: 40, height: 40 }}
                                source={imagePath.icCopyText}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.favoriteBtnView}>
                        <TouchableOpacity
                            style={styles.favoriteBtn}
                            activeOpacity={0.5}
                            onPress={saveData}>
                            <Text style={styles.favoriteBtnText}>Add to favorite</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    pkgNameView: {
        alignItems: 'center',
        marginVertical: verticalScale(30),
    },
    pkgNameText: {
        fontSize: scale(20),
        fontWeight: 'bold',
        color: '#246EE9',
        // borderBottomWidth: 2,
        // borderBottomColor: '#246EE9',
    },
    pkgDetail: {
        flexDirection: 'row',
        marginBottom: verticalScale(10),
        borderBottomWidth: 1,
        paddingBottom: verticalScale(10),
    },
    singleDetail: {
        flex: 0.7,
    },
    singleDetailText: {
        fontSize: scale(17),
        color: 'red',
    },
    activeBtn: {
        width: moderateScale(170),
        height: verticalScale(45),
        backgroundColor: '#246EE9',
        borderRadius: moderateScale(7),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeBtnText: {
        fontSize: scale(17),
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#fff',
    },
    activeBtnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(20),
    },
    favoriteBtn: {
        width: moderateScale(280),
        height: verticalScale(45),
        borderRadius: moderateScale(15),
        backgroundColor: 'blue',
        marginTop: verticalScale(40),
    },
    favoriteBtnView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    favoriteBtnText: {
        flex: 1,
        alignItems: 'center',
        color: '#fff',
        // justifyContent:'center',
        textAlign: 'center',
        lineHeight: verticalScale(45),
        fontSize: scale(18),
        textTransform: 'uppercase',
    }
});
export default PackageDetails;
