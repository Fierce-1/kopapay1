import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, PermissionsAndroid, TextInput,ScrollView, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import App_icon from '../components/logo';
import Profile_Detail from '../components/profileDetail';
import Add_Detail from '../components/addDetails';
import * as ImagePicker from 'react-native-image-picker'
import Popup from '../components/modalProfile';
import Button from '../components/button';
import Contact from '../components/Contact';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profilepage = ({navigation}) => {
    const [name,setName] = React.useState('kieran munyi')
    const [number,setNumber] = React.useState('254787898789')
    const [email,setEmail] = React.useState('many@gmail.com')
    const [gender,setGender] = React.useState('male')
    const [dateBirth,setdateBirth] = React.useState('18/11/2021')
    const [Location,setLocation] = React.useState('Kilimanjaro')
    const [showModalid,setShowModalID] = React.useState(false)
    const [showModalCont,setShowModalCont] = React.useState(false)
    const [idNumber,setIdNumber] = React.useState('')

    const handleButtonClickID = () => {
        setShowModalID(true);
    }
  
    const handleButtonClickContacat = () => {
        setShowModalCont(true);
    }
    
    const handleCloseModal = () => {
        setShowModalID(false);
        setShowModalCont(false);
    }

    const logo =  require("../assets/images/kopapayBlack.png");
    const handleIdPhotoClick = async (check) => {
      
        const takePhoto = (photoName) => {
          const options = {
            title: `Take ${photoName} photo`,
            mediaType: 'photo',
            maxWidth: 1000,
            maxHeight: 1000,
            storageOptions: {
              skipBackup: true,
              path: '/',
            },
          };
      
          ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
              console.log(`User cancelled ${photoName} image picker`);
            } else if (response.error) {
              console.log(`ImagePicker Error for ${photoName}: `, response.error);
            } else {
              // Handle the image response here
              console.log(`Photo ${photoName}: `, response);
            }
          });
        };
      
        if (check === 'id'){
          takePhoto('ID Front');
          takePhoto('ID Back');
        }
        else if (check === 'photo'){
          takePhoto('Selfy');
        }

      };
      

    return(
        <ScrollView contentContainerStyle={styles.mainView}>
            <App_icon imgStyle={styles.logo}  img={logo} />
            <View style={styles.userDetailView}>

                <View >
                    <Profile_Detail viewDetail={styles.userDetailInside} textDetail1={styles.text('bold','50%','black')} textDetail2={styles.text('normal','50%','black')} data1={'Name'} data2={name}/>
                    <Profile_Detail viewDetail={styles.userDetailInside} textDetail1={styles.text('bold','50%','black')} textDetail2={styles.text('normal','50%','black')} data1={'Phone Number'} data2={number}/>
                    <Profile_Detail viewDetail={styles.userDetailInside} textDetail1={styles.text('bold','50%','black')} textDetail2={styles.text('normal','50%','black')} data1={'Email Address'} data2={email}/>
                    <Profile_Detail viewDetail={styles.userDetailInside} textDetail1={styles.text('bold','50%','black')} textDetail2={styles.text('normal','50%','black')} data1={'Gender'} data2={gender}/>
                    <Profile_Detail viewDetail={styles.userDetailInside} textDetail1={styles.text('bold','50%','black')} textDetail2={styles.text('normal','50%','black')} data1={'Date of birth'} data2={dateBirth}/>
                    <Profile_Detail viewDetail={styles.userDetailInside} textDetail1={styles.text('bold','50%','black')} textDetail2={styles.text('normal','50%','black')} data1={'Location'} data2={Location}/>
                </View>
                
                <View style={{marginTop:'5%'}}>
                    <Add_Detail viewDetail={styles.userDetailInside} textDetail1={styles.text('bold','40%','black')} textDetail2={styles.text('normal','20%','#14FA47')} data1={'ID Photo'} onPress={()=> {
                      Alert.alert(
                        'Take Both Front and Back ID Photo',
                        '',
                        [
                          {text: 'Cancel', style: 'cancel'},
                          {text: 'OK', onPress: () => handleIdPhotoClick('id')},
                        ],
                      );
                      }}/>
                    <Add_Detail viewDetail={styles.userDetailInside} textDetail1={styles.text('bold','40%','black')} textDetail2={styles.text('normal','20%','#14FA47')} data1={'Id Number'} onPress={handleButtonClickID}/>
                    <Add_Detail viewDetail={styles.userDetailInside} textDetail1={styles.text('bold','40%','black')} textDetail2={styles.text('normal','20%','#14FA47')} data1={'Photo'} onPress={()=> {
                      Alert.alert(
                        'Take your Photo',
                        '',
                        [
                          {text: 'Cancel', style: 'cancel'},
                          {text: 'OK', onPress: () => handleIdPhotoClick('photo')},
                        ],
                      );
                      }}/>
                    <Add_Detail viewDetail={styles.userDetailInside} textDetail1={styles.text('bold','40%','black')} textDetail2={styles.text('normal','20%','#14FA47')} data1={'Contacts'} onPress={handleButtonClickContacat}/>
                
                    <TouchableOpacity style={{alignItems:'center',marginTop:'3%'}}>
                        <Text style={styles.text('bold','40%','#14FA47')}>Request review</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.passwordReset} onPress={()=>navigation.navigate('reset')}>
                        <Text style={styles.passwordText}>Reset Password   <FontAwesome name="lock" color={'black'} size={28} /></Text>                        
                    </TouchableOpacity>
                </View>
                
            </View>
            <Popup visible={showModalid} onRequestClose={handleCloseModal} >
              <View>
                <Button btnText='X' textStyle={styles.text('bold','10%','#0095FF')} btnStyle={{alignSelf:'flex-end'}} onPress={handleCloseModal}/>
                <Text style={styles.text('bold','70%','#0095FF')}>Enter Id Number:</Text>
                <TextInput style={styles.modalInput} onChangeText={setIdNumber} placeholder="Enter You Id Number" placeholderTextColor='#AF9999' />
                <Button btnText='Submit' textStyle={{color:'white',fontSize:18,alignSelf:'center'}} btnStyle={{backgroundColor:'#0095FF',width:'40%',alignSelf:'center',padding:'5%',marginTop:'3%',borderRadius:10}}/>
              </View>
              
            </Popup>

            <Popup visible={showModalCont} onRequestClose={handleCloseModal}>
              <ScrollView contentContainerStyle={{width:'100%'}}>
                <Button btnText='X' textStyle={styles.text('bold','10%','#0095FF')} btnStyle={{alignSelf:'flex-end'}} onPress={handleCloseModal}/>
                <Contact modalClose={handleCloseModal}/>
              </ScrollView>
              
            </Popup>
            
        </ScrollView>
    )
}

export default Profilepage;

const styles = StyleSheet.create({
    
    mainView:{
        flexGrow:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    logo:{
        margin: '5%',
        height: windowHeight * 0.1, 
        width: windowWidth * 0.2
    },
    userDetailView:{
        flex:1,
        width:'100%',
        alignItems:'center',
    }, 
    userDetailInside: {
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    modalInput: {
        backgroundColor: 'white',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
        color:'black',
        marginBottom:'5%',
        marginTop:'5%',
        paddingLeft:'4%'
    },
    text: (weight, width, color) =>({
        fontSize:18,
        fontFamily: 'Montserrat',
        width:width,
        fontWeight:weight,
        color:color,
        marginBottom:5,
    }),
    passwordText:{
      fontSize:18,
      fontFamily: 'Montserrat',
      fontWeight:'bold',
      color:'#14FA47',
    },
    passwordReset:{
      alignItems:'center',
      marginTop:'10%',
  }
})