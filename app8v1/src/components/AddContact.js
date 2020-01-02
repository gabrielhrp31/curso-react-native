import React from 'react'
import {View, Text, StyleSheet, TextInput, Button, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux'
import {addContact, modifyEmailContact} from "../actions/AppActions";



class AddContact extends React.Component {
    renderBtnAdicionar(){
        if(this.props.gettingContact){
            return(
                <ActivityIndicator/>
            )
        }else{
            return(
                <Button title='Adicionar Contato' color='#115E54' onPress={()=>this.props.addContact(this.props.emailContact)}/>
            )
        }
    };

    render() {
        return (
            <View style={styles.scene} >
                <View>
                    <TextInput
                        placeholder='E-mail do Contato'
                        style={{fontSize:20, height:45, borderBottomWidth:1, borderBottomColor:'#115E54', marginBottom: 15}}
                        value={this.props.emailContact}
                        onChangeText={text=> this.props.modifyEmailContact(text)}
                    />
                </View>
                <View>
                    {this.renderBtnAdicionar()}
                </View>
                <Text style={{color:'#ff0000', fontSize: 20, marginTop:20}}>
                    {this.props.addContactError}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        emailContact: state.AppReducer.emailContact,
        addContactError: state.AppReducer.addContactError,
        gettingContact: state.AppReducer.gettingContact,
    }
);

export default connect(mapStateToProps, {modifyEmailContact, addContact})(AddContact);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        padding: 20
    },
});
