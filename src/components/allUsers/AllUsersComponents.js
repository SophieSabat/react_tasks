import React, {Component} from 'react';
import UsersService from "../../services/UsersService";
import UserComponent from "../user/UserComponent";
import './AllUsers.css';
import FullUsersComponent from "../fullUsers/FullUsersComponent";

import {Route, Switch, withRouter} from "react-router-dom";


class AllUsersComponents extends Component {

    userService = new UsersService();
    state = {users: []};

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users});
    }

    render() {

        let {users} = this.state;
        let {match: {url}} = this.props;

        return (
            <div>
                {
                    users.map(user => <UserComponent item={user} key={user.id}/>)
                }

                <div className={'all-users-router'}>
                    <Switch>
                        <Route path={`${url}/:id`} exact={true} render={(props) => {
                            return <FullUsersComponent {...props}/>
                        }}/>
                    </Switch>
                </div>

            </div>
        );
    }
}

export default withRouter(AllUsersComponents);