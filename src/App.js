import React, {Component} from 'react';
import {cars} from "./database/carsDB";
import CarComponents from "./components/car/CarComponents";

class App extends Component {
    render() {
        return (
            <div>
                {
                    cars.map(car => <CarComponents item={car} key={car.id}/>)
                }
            </div>
        );
    }
}

export default App;