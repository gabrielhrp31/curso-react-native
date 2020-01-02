import  React, {Component} from 'react';
import { View, Text} from 'react-native';
import Operation from './Operation'
import Comand from './Comand'
import Input from './Input'

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {num1: '10', num2:'15', operation:'+'};
        // impedir alteração do contexto de executação da função e manter sua execução baseada no component Panel
        this.calculate = this.calculate.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOpcao = this.atualizaOpcao.bind(this);
    }

    calculate(){
        let result;
        switch (this.state.operation) {
            case '+':
                result = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break;
            case '-':
                result = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break;
            default:
                result = 0;
                break;
        }
        this.props.atualizaDisplay(String(result));
    }

    atualizaValor(value, id){
        switch (id) {
            case 1:
                this.setState({num1: value});
                break;
            case 2:
                this.setState({num2: value});
                break;
        }
    }

    atualizaOpcao(value){
        this.setState({operation: value});
    }


    render() {
     return(
         <View>
             <Input num1={this.state.num1} num2={this.state.num2} atualizaValor={this.atualizaValor}/>
             <Operation operation={this.state.operation} atualizaOpcao={this.atualizaOpcao}/>
             <Comand action={this.calculate} />
         </View>
     )
    }
}

export { Panel }