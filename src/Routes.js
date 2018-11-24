import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StatusBar, View, Platform, NativeModules } from 'react-native'
import CardStackStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import FormChamada from './components/FormChamada';
import FormLogin from './components/FormLogin';

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
                <Scene key="formLogin" component={FormLogin} initial title="Login" />
            </Scene>
        </Router>
    </View>
)