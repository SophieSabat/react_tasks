import React, {Component} from 'react';
import AllUsersComponents from "./components/allUsers/AllUsersComponents";
import AllPostsComponent from "./components/allPosts/AllPostsComponent";
import AllCommentsComponent from "./components/allComments/AllCommentsComponent";
import './App.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>users</Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>posts</Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>comments</Link>
                    </div>


                    <div className={'app-route'}>
                        <Switch>
                            <Route path={'/users'} render={() => {
                                return <AllUsersComponents/>
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