import React, {Component} from 'react';
import UserService from "./services/UserService";
import './App.css'

class App extends Component {

    inputMain = React.createRef();
    state = {inputValue: '', chosenOneUser: []};
    userService = new UserService();

    onInputFill = () => {
        this.setState({inputValue: this.inputMain.current.value});
    }
    onFormSubmit = (e) => {
        e.preventDefault();
    }
    choseUser = (id) => {
        this.userService.getUserById(id).then(value => this.setState({chosenOneUser: value}))
    }



    render() {

        const {inputValue, chosenOneUser} = this.state;

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type={'number'} ref={this.inputMain} onInput={this.onInputFill} min={1} max={10}/>
                    <button onClick={() => {this.choseUser(inputValue)}}>chose</button>
                </form>
                {
                    chosenOneUser && <div className={'chosen-user-render'}>{chosenOneUser.id} - {chosenOneUser.name} - {chosenOneUser.email} - {chosenOneUser.username}</div>
                }
            </div>
        );
    }
}

export default App;