import React, {Component} from "react";

class PersonCard extends Component {
    
    render() {
        const {firstName, lastName, age, hairColor} = this.props


        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair color: {hairColor}</p>
                <button onClick={() => this.setState({ age: this.state.age + 1})}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }   
}
export default PersonCard

