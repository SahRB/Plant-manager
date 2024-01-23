import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/button";
import { useNavigation } from '@react-navigation/core';
export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();



    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true)
    }

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }   

    function handleSubmit(){
        navigation.navigate('Confirmation');

    }
    return(

        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS ==='ios'?'padding': 'height'}>
            <View style={styles.content}>
                <View style={styles.form}>
                   
                    <Text style={styles.emoji}>
                    {isFilled ? '😄':'😃'}
                    </Text>
                    <Text style={styles.title}>
                        Como podemos {'\n'}chamar você?
                    </Text>
                    <TextInput style={[styles.input, isFocused && {borderColor:colors.green}]} 
                    placeholder="Digite um nome"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                    ></TextInput>

                <View style={styles.footer}>
                <Button
                 title={"Confirmar"}
                 onPress={handleSubmit}
            />
                </View>
                    
                </View>
              
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: "space-around",

    },
    content:{
        flex: 1,
        width: "100%",
    },
    form:{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 54,
        alignItems: "center",
    },
    emoji:{
        fontSize: 42,
        marginBottom: 20,
    },
    input:{
        borderBottomWidth:2,
        borderColor: colors.gray,
        color: colors.heading,
        width: "100%",
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: "center",
    },
    title:{
        color: colors.heading,
        fontSize: 32,
        fontFamily: fonts.heading,
        lineHeight: 10,
        marginTop: 20,
        textAlign: "center",
    },
    footer:{
        marginTop: 40,
        width: "100%",
        paddingHorizontal: 20,
    }
});