import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StatusBar, View, Platform, NativeModules } from 'react-native'
import CardStackStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import FormChamada from './components/FormChamada';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const IOSNAV = 64+STATUSBAR_HEIGHT
const ANDROIDNAV = 56+STATUSBAR_HEIGHT
const NAVBAR_HEIGHT = Platform.OS === 'ios' ? 54 : ANDROIDNAV;

export default props => (
    <View style={{ flex: 1 }}>
        {/* <StatusBar barStyle="light-content" /> */}
        <Router navigationBarStyle={{ backgroundColor: '#3E9ACC', paddingTop: STATUSBAR_HEIGHT, height: NAVBAR_HEIGHT}} titleStyle={{ color: '#fff' }} >
            <Scene key="root" transitionConfig={() => ({
                screenInterpolator: (props) => {
                    switch (props.scene.route.params.direction) {
                        case 'vertical':
                            return CardStackStyleInterpolator.forVertical(props);
                        case 'fade':
                            return CardStackStyleInterpolator.forFade(props);
                        case 'none':
                            return CardStackStyleInterpolator.forInitial
                        case 'horizontal':
                        default:
                            return CardStackStyleInterpolator.forHorizontal(props)
                    }
                }
            })}>
                <Scene key="formChamada" component={FormChamada}  title="Chamada" />
                {/* <Scene key="formCadastro" component={FormCadastro} style={{paddingTop:30}} title="Cadastro"/>
                <Scene key="boasVindas" component={BoasVindas} hideNavBar title="Bem Vindo" />
                <Scene key='principal' component={Principal} hideNavBar title="Principal" direction="vertical"/>
                <Scene key='adicionarContato' component={AdicionarContato} back title="Adicionar Contato" />
                <Scene key='conversa' component={Conversa} title="Conversa" />
                <Scene key='loginv2' component={FormLogin2} hideNavBar title="Bem Vindo" /> */}
            </Scene>
        </Router>
    </View>
)