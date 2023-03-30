import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {Image, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import React, {useState} from 'react';
import LenderHome from '../screens/kopapay_lender_home';
import App_icon from './logo';
import Drawer_component from './drawer_comp';
import Loan_s from '../screens/loan_status';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Drawer_navigator_Lender({route}){
    const { selectedValue, selectedValueLoan, selectedValueDay, repayment, interest, date} = route.params
    const Drawer = createDrawerNavigator()
    const logo=require('../assets/images/kopapayGreen.png')
    const CustomDrawerHeader = ({navigation}) => {
        return (
            <View style={styles.drawerContainer}>
                <View style={styles.container1('15%')}>
                    <App_icon imgStyle={{ height: windowHeight * 0.1, width: windowWidth * 0.2}} img={logo}/>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('kopa_pay_home')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="home" color="black" size={20} text="Home"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('lendingList')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="money-bill" color="black" size={20} text="Lending List"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Become a Lender')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="blender" color="black" size={20} text="Switch to Borrower acc"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('bidder')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="user-times" color="black" size={20} text="Choose bidders"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('fav')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="money-bill" color="black" size={20} text="Favourite Bidders"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Transaction Records')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="clipboard-list" color="black" size={20} text="Records"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="bell" color="black" size={20} text="Notifications"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('chat')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="comments" color="black" size={20} text="Live Chat"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ads')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="search-location" color="black" size={20} text="Ads"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('saving')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="search-location" color="black" size={20} text="Save with us"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Contact us')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} name="envelope" color="black" size={20} text="Contact Us"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Drawer_component drawerItem1={styles.drawerItem} drawerItemText1={styles.drawerItemText} text="Log Out"/>
                </TouchableOpacity>


                <View style={styles.container1('13.35%')} />
            </View>
        );
      };

  
    return(
        <Drawer.Navigator  drawerContent={props => <CustomDrawerHeader {...props} />} screenOptions={() => ({
            headerShown: false,
            headerTintColor: '#FFFFFF',
            drawerStyle:{
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
            },
            headerTitleStyle: {
                color: '#05F000'
            },
            headerStyle: {
                backgroundColor: '#05F000',
                elevation: 0
            }})}>
            <Drawer.Screen name="Home" component={LenderHome} />
      </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({

    container1: (height) => ({
        backgroundColor: '#05F000',
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    }),
    drawerContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden'
      },

      drawerItem: {
        padding: 10,
        borderBottomWidth: 5,
        borderBottomColor: '#05F000',
        color: 'black',
        flexDirection: 'row',
      },
      drawerItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginStart: '2%'
      },
})

export default Drawer_navigator_Lender