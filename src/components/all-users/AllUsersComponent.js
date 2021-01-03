import React, {Component} from 'react';
import UsersService from "../../services/UsersService";
import UserComponent from "../user/UserComponent";
import FullUsersComponent from "../full-user/FullUsersComponent";

import {Route, Switch, withRouter} from "react-router-dom";



class AllUsersComponent extends Component {

    userService = new UsersService();
    state = {users: []};

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users});
    }


    render() {

        const {users} = this.state;
        const {match: {url}} = this.props;

        return (
            <div>
                {
                    users.map(user => <UserComponent item={user} key={user.id}/>)
                }
                <div>
                    <Switch>
                        <Route path={url + '/:id'} render={(props) => {
                            const {match: {params: {id}}} = props;
                            return <FullUsersComponent userId={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsersComponent);