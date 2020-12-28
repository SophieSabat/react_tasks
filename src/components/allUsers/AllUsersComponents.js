import React, {Component} from 'react';
import {UsersService} from "../../services/UsersService";
import UserComponents from "../user/UserComponents";

class AllUsersComponents extends Component {

    userService = new UsersService();
    state = {users: [], chosenOne: null}

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}))
    }
    onSelectUser = (id) => {
        this.userService.getUserById(id).then(value => this.setState({chosenOne: value}))
    }


    render() {

        let {users, chosenOne} = this.state;

        return (
            <div>
                {
                    users.map(user => <UserComponents item={user} key={user.id} onSelectUseer={this.onSelectUser}/>)
                }
                {
                    chosenOne && <h4>{chosenOne.id} - {chosenOne.name} - {chosenOne.email}</h4>
                }
            </div>
        );
    }
}

export default AllUsersComponents;