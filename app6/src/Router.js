import React from "react";
import {Router, Scene} from 'react-native-router-flux'
import AboutScene from "./Scenes/AboutScene";
import MainScene from "./Scenes/MainScene";
import OtherScene from "./Scenes/OtherScene";
import ResultScene from "./Scenes/ResultScene";

const Routes = ()=>{
    return(
        <Router sceneStyle={{paddingTop:50}}>
            <Scene key={'main'} component={MainScene} initial title={'Cara ou Coroa'}/>
            <Scene key={'about'} component={AboutScene} title={'Sobre o Jogo'}/>
            <Scene key={'other'} component={OtherScene} title={'Outros Jogos'}/>
            <Scene key={'result'} component={ResultScene} title={'Resultado'}/>
        </Router>
    );
}

export default Routes;
