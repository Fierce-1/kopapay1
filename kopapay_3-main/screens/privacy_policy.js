import React, {useState, useRef}  from 'react';
import {View, StyleSheet,Text, TouchableOpacity, ScrollView, Alert, PermissionsAndroid, Dimensions} from 'react-native'
import ExitApp from 'react-native-exit-app';
import App_text from '../components/text'
import App_icon from '../components/logo'
import Button from '../components/button'
import Popup from '../components/modal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Privacy({navigation}) {

    const scrollViewRef = useRef()
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [buttonColor, setButtonColor] = useState('#000');

    const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent
        const isEndReached = contentOffset.y + layoutMeasurement.height >= contentSize.height
        if (isEndReached) {
            setButtonColor('#07EFE1');
          } else {
            setButtonColor('#000');
          }
        setButtonEnabled(isEndReached)

    };

    const handleButtonClick = () => {
        setShowModal(true);
    }
    
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const getAllPermissions = async () => {
        PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.SEND_SMS,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]).then(result => {
          if (
            result['android.permission.CAMERA'] === 'granted' &&
            result['android.permission.READ_CONTACTS'] === 'granted' &&
            result['android.permission.ACCESS_FINE_LOCATION'] === 'granted' && 
            result['android.permission.SEND_SMS'] === 'granted'
          ) {
            navigation.navigate('login')
          } else {
            Alert.alert('Permissions denied!', 'You need to give permissions');
            }
        });
    };
    const logo = require("../assets/images/kopapayBlack.png");

    return(
        <View style={styles.container_parent_view}>
            <View>
                <App_icon imgStyle={{ height: windowHeight * 0.1, width: windowWidth * 0.2, alignSelf: 'center'}} img={logo}/>
                <App_text textStyle={styles.text_bold_1} text="Privacy Policy" />
                <App_text textStyle={styles.text_bold} text="Privacy Policy For Kopa Pay" />
                <ScrollView style={styles.scrollView} ref={scrollViewRef} onScroll={handleScroll}>
                    <App_text textStyle={styles.text} text="At KOPAPAY, accessible from KOPAPAY.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by KOPAPAY and how we use it.
If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
Log Files
Kopa Pay follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information. 
Privacy Policies
You may consult this list to find the Privacy Policy for each of the advertising partners of KOPAPAY.
Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Kopa Pay, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
Note that Kopa Pay has no access to or control over these cookies that are used by third-party advertisers.
Third Party Privacy Policies
Kopa Pay Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites. What Are Cookies?
Children’s Information
Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
Kopa Pay does not knowingly collect any Personal Identifiable Information from children under the age of 18. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
Online Privacy Policy Only
This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Kopa Pay. This policy is not applicable to any information collected offline or via channels other than this website.
Consent
By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
" />
                </ScrollView>
            </View>
            <View style={styles.container_second_view}>
                <Button btnStyle={styles.btn_disagree} btnText="I Disagree" textStyle={styles.text_disagree} onPress={handleButtonClick}></Button>
                <Button btnStyle={[styles.btn_agree, {backgroundColor: buttonColor}]} btnText="I Agree" textStyle={styles.text_agree} disabled={!buttonEnabled} onPress={getAllPermissions}></Button>
            </View>
            <Popup visible={showModal} onRequestClose={handleCloseModal}>
                <App_text textStyle={styles.text_bold_1} text="Notice"/>
                <App_text textStyle={styles.text_popup} text="In order to evaluate your qualifications and provide you with better services, we need your authorization to collect your relevant information. Please confirm whether to deny the permission and understand that this operation will exit the APP, or cancel the operation? "/>
                <View style={styles.container_second_view}>
                <Button btnStyle={styles.btn_disagree} btnText="Cancel" textStyle={styles.text_disagree} onPress={handleCloseModal}></Button>
                <Button btnStyle={styles.btn_agree} btnText="Confirm" textStyle={styles.text_agree} onPress={() => {ExitApp.exitApp()}}></Button>
                </View>
            </Popup>
        </View>
    )
}

const styles = StyleSheet.create({
    container_parent_view:{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-between'
    }, 
    scrollView: {
        height: '60%',
        width: '90%',
    },
    container_second_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '10%'
    },
    img:{
        alignSelf: 'center'
    },
    text: {
        marginStart: '10%',
        marginTop: '3%',
        color: 'black'
    },
    text_popup: {
        textAlign: 'justify',
        marginTop: '5%',
        marginBottom: '10%',
        color: 'black'
    },

    text_bold: {
        marginTop: '2%',
        marginStart: '10%',
        color: 'black',
        fontWeight: 'bold'
    },
    text_bold_1: {
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 18
    },
    btn_disagree:{
        width: '40%',
        padding: '5%',
        borderWidth: 2,
        borderColor: '#07EFE1',
        borderRadius: 10
    },
    btn_agree:{
        width: '40%',
        padding: '5%',
        borderRadius: 10, 
        backgroundColor: '#07EFE1'
    },
    text_disagree: {
        color: '#07EFE1',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    text_agree: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Privacy