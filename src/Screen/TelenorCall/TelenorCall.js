import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Image, Linking, Alert, SafeAreaView } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

import Loader from '../../components/Loader';
import imagePath from '../../constants/imagePath';
import NavigationStrings from '../../constants/NavigationStrings';
import styles from '../styles';
import dataCall from './dataCall';

const TelenorCall = ({
    // isLoading,
    navigation
}) => {
    const [isLoading,setisLoading]=useState(true);
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false);
        }, 2000);
    }, [])
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
    const goToDetails = (detail) => {
        // console.log('item details',detail);
        navigation.navigate(NavigationStrings.PACKAGE_DETAILS, { detail: detail });
    }

    const renderItem = ({ item }) => {
        // console.log(item)
        return (
            <TouchableOpacity style={{
                flex: 1,
                backgroundColor: '#00a9e5',
                paddingHorizontal:moderateScale(10),
                paddingVertical: verticalScale(5),
            }}
                activeOpacity={0.9}
                onPress={() => goToDetails(item)}
            >
                <View style={{ padding: 8, borderRadius: 12, backgroundColor: '#fff' }}>
                    <View style={[styles.gridStyle, { marginBottom: 6 }]}>
                    <View style={{ flex: 1 }}>
                            {item.pkgName ?
                                <View><Text style={styles.pkgNameStyle}>{item.pkgName}</Text></View>
                                : null

                            }
                            <View style={[styles.gridStyle, { justifyContent: 'space-between' }]} >
                                {item.validity ?
                                    <Text style={styles.validityStyle}>validity: <Text style={{ color: 'red' }}>{item.validity}</Text></Text>
                                    : null
                                }
                                {item.price ?
                                    <Text style={styles.priceStyle}>Rs: {item.price}</Text>
                                    : null
                                }
                            </View>
                        </View>
                        {/* <View
              style={styles.logoView}
            >
              <Image
                style={style.logoStyle}
                source={imagePath.icTelenorlogo}
              />
            </View> */}
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.activeStyle}>Activation Code : <Text style={{
                            color: 'red', fontWeight: '500',
                            fontSize: 15,
                        }}>{item.activationCode}</Text></Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                        {/* ONNET MINUT  */}
                        {item.pkgDetails.onnetMint ?
                            <View style={{
                                flex: 1,
                            }}>
                                <View style={styles.imgCenter}>
                                    <Image
                                        style={styles.pkgImageStyle}
                                        source={imagePath.icMint}
                                    />
                                </View>
                                <Text style={{ ...styles.pkgDetailsStyle, backgroundColor: '#00a9e5' }}>{item.pkgDetails.onnetMint}</Text>
                                <Text style={styles.pkgName}>onNetMint</Text>
                            </View>
                            : null
                        }

                        {/* OFFNET MINUT  */}
                        {item.pkgDetails.offnetMint ?
                            <View style={{ flex: 1 }}>
                                <View style={styles.imgCenter}>
                                    <Image
                                        style={styles.pkgImageStyle}
                                        source={imagePath.icMint}
                                    />
                                </View>
                                <Text style={{ ...styles.pkgDetailsStyle, backgroundColor: '#00a9e5' }}>{item.pkgDetails.offnetMint}</Text>
                                <Text style={styles.pkgName}>offNetMint</Text>
                            </View>
                            : null
                        }

                        {/* SMS MINUT  */}
                        {item.pkgDetails.sms ?
                            <View style={{ flex: 1 }}>
                                <View style={styles.imgCenter}>
                                    <Image
                                        style={styles.pkgImageStyle}
                                        source={imagePath.icSMS}
                                    />
                                </View>
                                <Text style={{ ...styles.pkgDetailsStyle, backgroundColor: '#00a9e5' }}>{item.pkgDetails.sms}</Text>
                                <Text style={styles.pkgName}>SMS</Text>
                            </View>
                            : null
                        }
                        {/* INTERNET  */}
                        {item.pkgDetails.internet ?
                            <View style={{ flex: 1 }}>
                                <View style={styles.imgCenter}>
                                    <Image
                                        style={styles.pkgImageStyle}
                                        source={imagePath.icMB}
                                    />
                                </View>
                                <Text style={{ ...styles.pkgDetailsStyle, backgroundColor: '#00a9e5' }}>{item.pkgDetails.internet}</Text>
                                <Text style={styles.pkgName}>MBs</Text>
                            </View>
                            : null
                        }

                    </View>

                    <View
                        style={{ alignItems: 'center' }}
                    >
                        <TouchableOpacity
                            onPress={() => triggerCall(item)}
                            activeOpacity={0.8}
                            style={{ ...styles.subscribeBtn, backgroundColor: '#00a9e5' }}
                        >
                            <Text style={styles.btnTextStyle}>Subscribe</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isLoading ? <Loader isLoading={isLoading} />
                : <View style={styles.container}>
                    <FlatList
                        data={dataCall}
                        renderItem={renderItem}
                        // keyExtractor={item => item.id}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            }
        </SafeAreaView>
    )
};


export default TelenorCall;