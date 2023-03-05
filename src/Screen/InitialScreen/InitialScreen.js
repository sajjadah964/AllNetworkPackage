import React, { useEffect,useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';
import imagePath from '../../constants/imagePath';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Loader from '../../components/Loader';

const SplashScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(NavigationStrings.MY_TABS);
            setisLoading(false);
        }, 1500);
    }, []);

    return (

        <View style={{ flex: 1, }}>
            <Loader isLoading={isLoading} />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}
            >
                <Image
                    style={{
                        width: moderateScale(260),
                        height: verticalScale(260),
                    }}
                    source={imagePath.bgImage}
                />
                <View style={{
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: scale(30), fontWeight: '600', color: '#8a0204' }}> All Network Package</Text>
                    <Text style={{ fontSize: scale(18), color: '#8a0204' }}> All 2023  Latest Package Included</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});
export default SplashScreen;
