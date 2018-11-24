import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, TextInput, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import { Actions } from 'react-native-router-flux'


export default class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'aa',
            senha: 'bb'
        }
    }

    alteraEmail(email) {
        this.setState({ email })
    }

    alteraSenha(senha) {
        this.setState({ senha })
    }

    botaoLogar() {
        console.log(this.state.email);
        console.log(this.state.senha);
        Actions.formChamada();

    }

    render() {
        return (
            <View style={styles.loginView}>
                <View style={styles.loginCamposView}>
                    <View style={styles.emailView}>
                        <Text style={styles.labelLogin}>Email</Text>
                        <TextInput
                            style={styles.inputLogin}
                            placeholder='Seu email'
                            onChangeText={txt => {
                                this.alteraEmail(txt);
                            }}
                        />
                    </View>
                    <View style={styles.senhaView}>
                        <Text style={styles.labelLogin}>Senha</Text>
                        <TextInput
                            style={styles.inputLogin}
                            secureTextEntry
                            placeholder='Sua senha'
                            onChangeText={txt => {
                                this.alteraSenha(txt);
                            }}
                        />
                    </View>
                    <View>
                        <Button
                            title='Logar'
                            onPress={() => {
                                this.botaoLogar();
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}