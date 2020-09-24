import React, { Component, useRef } from 'react'
import { ToastAndroid, View, Text, StyleSheet, FlatList, Dimensions, KeyboardAvoidingView, Animated, Modal, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Radio, Right, Left, Item, Input, Button, } from 'native-base';
import Questions from './Questions'
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const fadeAnim = new Animated.Value(0);


export default class TestMySelf extends Component {
    constructor(props) {
        super(props)
        // AsyncStorage.removeItem('DataTest')
        this.state = {
            question: {},
            modalHistory: false,
            cpt: 1,
            pourcentage: 0,
            disabled: true,
            textInput: "",
            showModal: false,
            dataTest: {
                date: null,
                pourcentage: null
            },
            history: null

        }

    }

    fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1300,
            useNativeDriver: true
        }).start();
    }

    componentDidMount() {



        this.props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }} onPress={async () => {
                    try {

                        let data = await AsyncStorage.getItem('DataTest');
                        if (data != null) {
                            data = JSON.parse(data)
                            //data.map(obj => console.log(obj.date + ' ' + obj.pourcentage))
                            this.setState({ history: data })
                            console.log(data)
                        }
                        this.setState({ modalHistory: true })
                    }
                    catch (error) { console.log(error) }
                }
                }>
                    <Icon
                        name="history"

                        iconStyle={{ fontSize: 30 }}


                    ></Icon></TouchableOpacity>
            ),
        })
        this.setState({ question: Questions['q' + this.state.cpt], cpt: this.state.cpt + 1 })
        this.fadeIn()
    }
    __next = (data) => {

        if (this.state.cpt <= 11) {
            if (this.state.question.res == 1) {
                this.setState({ pourcentage: this.state.pourcentage + this.state.question['res' + data] })
            }
            else {
                this.setState({ pourcentage: this.state.pourcentage + this.state.question.calcul(data) })
            }
            this.setState({ question: Questions['q' + this.state.cpt], cpt: this.state.cpt + 1 })
            fadeAnim.setValue(0)
            this.fadeIn()
        } else {
            this.setState({ showModal: true })
            let d = new Date();

            this.setState({ dataTest: { date: d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(), pourcentage: this.state.pourcentage } }, async () => {
                try {
                    let data = (JSON.parse(await AsyncStorage.getItem('DataTest')))

                    if (data != null) {
                        data.unshift(this.state.dataTest)
                        await AsyncStorage.setItem('DataTest', JSON.stringify(data))
                    }
                    else {
                        await AsyncStorage.setItem('DataTest', JSON.stringify([this.state.dataTest]))
                    }
                }
                catch (error) {
                    console.log(error)
                }
            })

        }
    }
    __calculColor = (pourcentage) => {
        if (pourcentage < 50) return "green"
        else if (pourcentage >= 50 && pourcentage < 75) return "orange"
        else return "red"
    }
    ListEmpty = () => {
        return (

            <View  >
                <Text style={{ textAlign: 'center', marginTop: 15 }}>No Data Found</Text>
            </View>
        );
    };

    render() {
        const ItemList = ({ date, pourcentage, color }) => (


            < View style={[style.flatItem, { backgroundColor: color }]} >
                <Text>
                    Date: {date}
                </Text>
                <Text>
                    Result Of Test : {pourcentage}
                </Text>
            </View >
        )
        const renderItem = ({ item }) => (


            < ItemList date={item.date}
                pourcentage={item.pourcentage}
                color={this.__calculColor(item.pourcentage)}
            >
            </ItemList >

        );

        return (

            <Animated.View style={[style.container, { opacity: fadeAnim }]} >

                <Text>{this.state.cpt - 1}/11</Text>
                <Text style={style.ViewQues}>{this.state.question.question}</Text>

                {this.state.question.res == 1 && <View style={style.ViewBox}><Left><Text>Yes</Text><Radio selected={false} onPress={() => { this.__next("Yes"); }}></Radio></Left>
                    <Right><Text>No</Text><Radio selected={false} onPress={() => { this.__next("No"); }}></Radio></Right>
                </View>}

                {
                    this.state.question.res == 2 &&
                    <KeyboardAvoidingView behavior="padding" style={style.ViewInput}>
                        <Item style={style.item} rounded>
                            <Input onChangeText={(text) => {
                                if (!isNaN(text) && text)
                                    this.setState({ disabled: false, textInput: text })

                                else
                                    this.setState({ disabled: true })
                            }}
                                style={{ paddingLeft: 20 }} placeholder='Tap to enter response' />
                        </Item>
                        <Button disabled={this.state.disabled} style={{ alignSelf: "center", width: windowWidth / 3, borderRadius: 50, top: 20 }} onPress={() => {

                            this.__next(this.state.textInput);

                            this.setState({ disabled: true, textInput: "" })
                        }}>
                            <Text style={style.text}>Confirm</Text>
                        </Button>
                    </KeyboardAvoidingView >
                }
                <Modal style={style.Modal}
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalHistory}
                >


                    <Text style={{ fontSize: 20, alignSelf: "flex-start", marginLeft: 10, top: 13, position: "absolute" }}>History Test Results</Text>
                    <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 8, marginBottom: 15 }}
                        onPress={() => this.setState({ modalHistory: false })}
                    ><Icon name="close" iconStyle={{ fontSize: 35 }}></Icon></TouchableOpacity>

                    <SafeAreaView >

                        <FlatList
                            data={this.state.history}
                            renderItem={renderItem}
                            keyExtractor={item => item.date}
                            ListEmptyComponent={this.ListEmpty}
                        >


                        </FlatList>

                    </SafeAreaView>
                </Modal>
                <Modal style={style.Modal}
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.showModal}

                >{this.state.pourcentage < 50 && <View style={[{ backgroundColor: 'green' }, style.cont2]}>
                    <Text style={style.titlePourcentage}>{this.state.pourcentage}%</Text>
                    <Text style={style.textCont}>Congratulations, according to the information you have entered, your infection with the Coronavirus is very weak ({this.state.pourcentage}%)and you do not have any symptoms. Do not worry and adhere to the health protocol to protect yourself and others
            </Text>
                    <Button style={{ alignSelf: "center", width: windowWidth / 2, borderRadius: 50, top: 20, paddingLeft: 15 }} onPress={() => {
                        this.setState({ showModal: false })
                        this.props.navigation.navigate('HowP')
                    }}>

                        <Text style={style.textOne}>How To Get Protected</Text>

                    </Button>
                </View>}
                    {this.state.pourcentage >= 50 && this.state.pourcentage < 75 && <View style={[{ flex: 1, backgroundColor: 'orange' }, style.cont2]}>
                        <Text style={style.titlePourcentage}>{this.state.pourcentage}%</Text>
                        <Text style={style.textCont}>The probability of contracting the Coronavirus is weak and is {this.state.pourcentage}%, do not worry, dear
                    We advise you to go to the nearest health point to make sure of your health or to report yourself</Text>
                        <Button style={{ alignSelf: "center", width: windowWidth / 3, borderRadius: 50, top: 20, paddingRight: 20, paddingLeft: 15 }} onPress={() => {
                            this.setState({ showModal: false })
                            this.props.navigation.navigate('find')
                        }}>
                            <Icon name="phone" color="white"></Icon>
                            <Text style={style.textOne}>Call Now</Text>

                        </Button>
                    </View>}
                    {this.state.pourcentage >= 75 && <View style={[{ flex: 1, backgroundColor: 'red' }, style.cont2]}>
                        <Text style={style.titlePourcentage}>{this.state.pourcentage}%</Text>
                        <Text style={style.textCont}>Unfortunately, the probability of contracting Corona virus is very high({this.state.pourcentage}%)
            We ask you to immediately call the Emergency numbers</Text>
                        <Button style={{ alignSelf: "center", width: windowWidth / 3, borderRadius: 50, top: 20, paddingRight: 20, paddingLeft: 15 }} onPress={() => {
                            this.setState({ showModal: false });
                            this.props.navigation.navigate('find')
                        }}>
                            <Icon name="phone" color="white"></Icon>
                            <Text style={style.textOne}>Call Now</Text>

                        </Button>
                    </View>}

                </Modal>
            </Animated.View >
        )
    }
}
const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",



        },
        item: {
            width: windowWidth / 1.2,
            height: 50,
            borderStyle: 'solid',

        },
        flatItem: {

            marginTop: 10,
            borderRadius: 30,
            paddingLeft: 30,
            height: 50,
            justifyContent: "center"
        },
        ViewQues: {

            textAlign: "center",
            fontSize: 30,
            maxHeight: windowHeight / 1.9


        },
        ViewBox: {
            fontSize: 20,
            marginRight: 100,
            marginLeft: 100,
            top: windowHeight / 1.9 + windowHeight / 8,
            position: "absolute",
            flexDirection: "row",


        },
        ViewInput: {
            fontSize: 20,
            alignItems: "center",
            top: windowHeight / 10,


        },
        text: {


            color: "#ffff",
            fontSize: 18,
            marginLeft: windowWidth / 11
        },
        cont2: {
            flex: 1,
            justifyContent: "center",
            padding: 20

        },
        textCont: {
            color: 'white',
            fontSize: 20,
            textAlign: "center",
            lineHeight: 35

        },
        textOne: {


            color: "#ffff",
            fontSize: 18,
            marginLeft: 0

        },
        titlePourcentage: {
            fontSize: 80,
            alignSelf: "center",
            color: 'white',
            position: "absolute",
            top: windowHeight / 6
        }

    }
)
