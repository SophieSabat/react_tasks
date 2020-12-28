import React, {Component} from 'react';
import './car.css'

class CarComponents extends Component {
    render() {

        let {item} = this.props;

        return (
            <div className={'car'}>
                {item.id} - {item.model} - {item.year} - {item.color}
            </div>
        );
    }
}

export default CarComponents;