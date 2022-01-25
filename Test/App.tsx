/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useEffect, useState } from 'react';
 import {
   Image,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import database from '@react-native-firebase/database';
import { flag } from './Image/idnex';
 
 const Section: React.FC<{
   title: string;
 }> = ({ children, title }) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const option = [111111111, 2222, 33333333, 444444444]
   const [data, setData] = useState(Object)
   const [right, setRight] = useState(true)
   const [answer, setAnswer] = useState('House')
  //  const [questionIndex, setQuestionIndex] = useState(Number)

  //  const option = [111111111, 2222, 33333333, 444444444]
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   useEffect(() => {
    // setQuestionIndex(questionIndex + 1)
     database()
     .ref(`question/`)
     .on('value', snapshot => {
       let responselist = Object.values(snapshot.val());
       console.log(responselist[0])
       setData(responselist)
       
       // this.setState({data: responselist});
       // console.log(snapshot.val());
     });
   },[])
 
 
   // componentDidMount() {
   //   // database()
   //   //   .ref('question/')
   //   //   .once('value')
   //   //   .then(snapshot => {
   //   //     // console.log('User data: ', snapshot.val());
   //   //     var x = snapshot.val();
   //   //     console.log(snapshot.question, 'LLL');
   //   //     // this.setState({
   //   //     //   name: snapshot.val(),
   //   //     // });
   //   //   });
   //   database()
   //     .ref(`question/`)
   //     .on('value', snapshot => {
   //       let responselist = Object.values(snapshot.val());
   //       this.setState({data: responselist});
   //       // console.log(snapshot.val());
   //     });
   // }
 
   return (
    //  <SafeAreaView style={backgroundStyle}>
    //    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#76dafe',
        }}>
        <View
          style={{
            height: '85%',
            width: '100%',
            alignItems: 'center',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            backgroundColor: '#3d6d82',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                marginTop: '10%',
                marginBottom: 30,
                color: '#ffffff',
                fontSize: 18,
              }}>
              Fill in the missing word
            </Text>
            <Text
              style={{
                marginBottom: 30,
                color: '#ffffff',
                fontSize: 20,
                textDecorationLine: 'underline',
              }}>
              The house is small.
            </Text>
            <Text
              style={{
                marginBottom: 30,
                color: '#ffffff',
                fontSize: 20,
                borderBottomWidth: 1,
                borderStyle: 'dotted',
                borderColor: '#ffffff',
              }}>
              Das _______ ist klein.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 50,
                flexWrap: 'wrap',
                marginTop: 20,
                justifyContent: 'center',
              }}>
              {option.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      height: 50,
                      borderRadius: 10,
                      backgroundColor: 'white',
                      minWidth: '20%',
                      margin: 10,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        marginHorizontal: 10,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: 200,
                backgroundColor: right ? '#50E3E8' : '#F57A87',
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                zIndex: -50,
                position: 'absolute',
                right: 0,
                left: 0,
                opacity: right ? 0 : 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // backgroundColor: '#000',
                  marginTop: 25,
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    marginLeft: 40,
                    marginBottom: 20,
                    fontWeight: 'bold',
                    color: '#ffffff',
                  }}>
                  {right
                    ? 'Great Job!'
                    : `Answer: ${answer}`}
                </Text>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    marginRight: '5%',
                    tintColor: '#fff',
                    marginTop: 5,
                  }}
                  source={flag}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => console.log('hello')}
              style={{
                height: '25%',
                borderRadius: 50,
                width: '90%',

                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: '#6492A6',
                marginBottom: '10%',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 30,
                  // color: this.state.right ? '#50E3E8' : '#F57A87',
                  color: 'white',
                }}>
                Countinue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    //  </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 