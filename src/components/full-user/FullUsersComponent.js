import React, {Component} from 'react';
import UsersService from "../../services/UsersService";
import './FullUser.css'

class FullUsersComponent extends Component {

    state = {user: null};
    userService = new UsersService();

    async componentDidMount() {
        const {userId} = this.props;
        const user = await this.userService.getUser(userId);
        this.setState({user});
    }


    render() {

        const {user} = this.state;

        return (
            <div className={'full-user-render'}>
                {
                    user && <div>{user.id} - {user.name} - {user.email} - {user.username}</div>
                }
            </div>
        );
    }
}

export default FullUsersComponent;