import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import NavigationStrings from '../../constants/NavigationStrings';
import styles from '../styles';


const FavoriteOffer = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [packageList, setPackageList] = useState([]);
    useEffect(() => {
        getData();
    }, [isFocused])

    const getData = async () => {
        const packageDetail = await AsyncStorage.getItem('Contacts')
        // let packages = [];
        setPackageList(JSON.parse(packageDetail));
        // packageDetail.push(packages)
    }

    const DeletePackage = async (index) => {
        console.log(index)
        tempData = packageList;
        const selectedData = tempData.filter((item, ind) => {
            return ind != index;
        })
        setPackageList(selectedData);
        await AsyncStorage.setItem('Contacts', JSON.stringify(selectedData));
    }

    const goToDetails = (detail) => {
        // console.log('item details',detail);
        navigation.navigate(NavigationStrings.PACKAGE_DETAILS, { detail: detail });
    }

    const triggerCall = (item) => {
        const pkgNumber = (item.activationCode)
        Alert.alert('Confirmation...!', 'Would yosu like to Subscribe this offer.', [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Yes', onPress: () => Linking.openURL(`tel:${pkgNumber}`) },
        ]);
    };
    const renderItem = ({ item, index }) => {
        // console.log('new item', item.validity)
        return (
            <TouchableOpacity style={{
                flex: 1,
                backgroundColor: '#00a9e5',
                paddingHorizontal: moderateScale(10),
                paddingVertical: verticalScale(5),
            }}
                activeOpacity={0.9}
                onPress={() => goToDetails(item)}
            >
                <View style={{ padding: 8, borderRadius: 12, backgroundColor: '#fff' }}>
                    <View style={[styles.gridStyle, { marginBottom: 6 }]}>
                        <View style={{ flex: 1 }}>
                            <View><Text style={styles.pkgNameStyle}>{item.pkgName}</Text></View>
                            <View style={[styles.gridStyle, { justifyContent: 'space-between' }]} >
                                <Text style={styles.validityStyle}>validity: <Text style={{ color: 'red' }}>{item.validity}</Text></Text>
                                <Text style={styles.priceStyle}>Rs: {item.price}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.activeStyle}>Activation Code : <Text style={{
                            color: 'red', fontWeight: '500',
                            fontSize: 15,
                        }}>{item.activationCode}</Text></Text>
                    </View>

                    <View
                        style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}
                    >
                        <TouchableOpacity
                            onPress={() => triggerCall(item)}
                            activeOpacity={0.8}
                            style={{ ...styles.subscribeBtn, backgroundColor: '#00a9e5' }}
                        >
                            <Text style={styles.btnTextStyle}>Subscribe</Text>
                        </TouchableOpacity>
                        <View style={{ marginRight: 20 }}></View>
                        <TouchableOpacity
                            onPress={() => DeletePackage(index)}
                            activeOpacity={0.8}
                            style={{ ...styles.subscribeBtn, backgroundColor: '#2223' }}
                        >
                            <Text style={styles.btnTextStyle}>Delete</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={packageList}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}
export default FavoriteOffer;

