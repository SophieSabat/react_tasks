import React, {Component} from 'react';
import './user.css'

class UserComponents extends Component {
    render() {

        let {item, onSelectUseer} = this.props;

        return (
            <div className={'userStyle'}>
                {item.id} - {item.name} - {item.email}
                <button onClick={() => {onSelectUseer(item.id)}}>chosen</button>
            </div>
        );
    }
}

export default UserComponents;