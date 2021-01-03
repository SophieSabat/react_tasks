import React, {Component} from 'react';
import CommentsService from "../../services/CommentsService";
import CommentComponent from "../comment/CommentComponent";

import {Route, Switch, withRouter} from "react-router-dom";
import FullCommentComponet from "../full-comment/FullCommentComponet";


class AllCommentsComponent extends Component {

    state = {comments: []};
    commentsService = new CommentsService();

    async componentDidMount() {
        const comments = await this.commentsService.getAllComments();
        this.setState({comments});
    }


    render() {

        const {comments} = this.state;
        const {match: {url}} = this.props;

        return (
            <div>
                {
                    comments.map(comment => <CommentComponent item={comment} key={comment.id}/>)
                }
                <div>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            const {match: {params: {id}}} = props;
                            return <FullCommentComponet commentId={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllCommentsComponent);