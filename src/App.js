import React, {Component} from 'react';
import './App.css'

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllUsersComponent from "./components/all-users/AllUsersComponent";
import AllPostsComponent from "./components/all-posts/AllPostsComponent";
import AllCommentsComponent from "./components/all-comments/AllCommentsComponent";


class App extends Component {
    render() {
        return (
            <Router>
                <div className={'main-block'}>
                    <div className={'navigation-route'}>
                        <div>
                            <Link to={'/users'} className={'App-link'}>Users</Link>
                        </div>
                        <div>
                            <Link to={'/posts'} className={'App-link'}>Posts</Link>
                        </div>
                        <div>
                            <Link to={'/comments'} className={'App-link'}>Comments</Link>
                        </div>
                    </div>


                    <div className={'app-route'}>
                        <Switch>
                            <Route path={'/users'} render={() => {
                                return <AllUsersComponent/>
                            }}/>
                            <Route path={'/posts'} render={() => {
                                return <AllPostsComponent/>
                            }}/>
                            <Route path={'/comments'} render={() => {
                                return <AllCommentsComponent/>
                            }}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;