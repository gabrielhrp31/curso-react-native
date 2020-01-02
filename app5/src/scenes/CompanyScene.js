import React, { Component } from 'react';
import {
    StyleSheet,
    Image, Text, StatusBar, View,ScrollView
} from 'react-native';
import NavigationBar from "../components/NavigationBar";

const detalhesEmpresa = require('../img/detalhe_empresa.png');


export default class CompanyScene extends Component {
    render() {
        return (
            <View style={contactSceneStyle.index}>
                <StatusBar backgroundColor='#EC7148'/>
                <NavigationBar navigator={this.props.navigator} color={'#EC7148'} voltar />
                <View style={contactSceneStyle.contactDetails}>
                    <Image source={detalhesEmpresa}/>
                    <Text style={contactSceneStyle.textDetails}>A Empresa</Text>
                </View>
                <ScrollView style={contactSceneStyle.detailsContact}>
                    <Text style={contactSceneStyle.txtCompany}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius sit. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Morbi tristique senectus et netus et malesuada fames. Imperdiet massa tincidunt nunc pulvinar. Sed cras ornare arcu dui vivamus. Aliquam malesuada bibendum arcu vitae. Vestibulum lorem sed risus ultricies. Praesent tristique magna sit amet purus gravida. Aliquam vestibulum morbi blandit cursus risus at ultrices.

                        Lacus luctus accumsan tortor posuere ac ut consequat. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Egestas purus viverra accumsan in. Et ligula ullamcorper malesuada proin libero nunc. Cursus in hac habitasse platea dictumst quisque sagittis. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Adipiscing commodo elit at imperdiet dui accumsan. Nulla at volutpat diam ut venenatis tellus in metus. Ultrices mi tempus imperdiet nulla. Id nibh tortor id aliquet.

                        Pharetra diam sit amet nisl suscipit. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Risus ultricies tristique nulla aliquet enim tortor at auctor. Sed libero enim sed faucibus turpis in eu mi bibendum. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Amet luctus venenatis lectus magna fringilla urna. Curabitur vitae nunc sed velit dignissim sodales ut eu. Mattis nunc sed blandit libero volutpat. Eget nunc lobortis mattis aliquam faucibus purus in massa. Pulvinar sapien et ligula ullamcorper malesuada. Magna etiam tempor orci eu lobortis. Sodales neque sodales ut etiam sit amet. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Aliquam vestibulum morbi blandit cursus risus at ultrices. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Accumsan in nisl nisi scelerisque eu.

                        Sit amet consectetur adipiscing elit duis. Urna cursus eget nunc scelerisque viverra. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Dictum non consectetur a erat nam at lectus. Felis eget velit aliquet sagittis. Nunc sed id semper risus in hendrerit gravida rutrum. Cras semper auctor neque vitae tempus quam pellentesque nec. Porta nibh venenatis cras sed felis eget. Augue mauris augue neque gravida in fermentum et sollicitudin. Parturient montes nascetur ridiculus mus. Dignissim cras tincidunt lobortis feugiat vivamus at. Nibh sed pulvinar proin gravida. Arcu cursus vitae congue mauris. Urna neque viverra justo nec ultrices dui sapien eget mi. Amet facilisis magna etiam tempor orci eu lobortis. Non nisi est sit amet facilisis. Felis donec et odio pellentesque diam. Convallis a cras semper auctor.

                        Arcu cursus euismod quis viverra. Amet commodo nulla facilisi nullam vehicula. Eget nunc scelerisque viverra mauris in aliquam. Magna fringilla urna porttitor rhoncus dolor purus non enim. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Maecenas accumsan lacus vel facilisis volutpat est. Sagittis aliquam malesuada bibendum arcu. Arcu felis bibendum ut tristique et egestas quis. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Et netus et malesuada fames ac. Habitant morbi tristique senectus et netus. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Facilisis gravida neque convallis a cras semper auctor neque vitae. Diam ut venenatis tellus in.
                    </Text>
                </ScrollView>
            </View>

        );
    }
}

const contactSceneStyle = StyleSheet.create({
    index: {
        backgroundColor:'#FFF',
        flex:1
    },
    contactDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textDetails: {
        color:'#EC7148',
        fontSize:25,
        marginLeft: 15
    },
    detailsContact: {
        marginTop: 10,
        padding:20
    },
    txtCompany: {
        fontSize: 18
    }
});
