import React, {Component} from 'react';
import Counter from './Counter';
import Table from './Table';
import Form from './Form';
import AutomaticCounter from './AutomaticCounter';

const people = [{name: 'Charlie', job: 'Janitor'}, {name: 'Mac', job: 'Bouncer'}, {
    name: 'Dee',
    job: 'Aspring actress'
}, {name: 'Dennis', job: 'Bartender'}];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Switch react example",
            characters: people,
            automaticCounterActive: true
        };
    }
    removeAutomaticCounter = () => {
        this.setState({automaticCounterActive: false});
    }

    removeCharacter = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            }),
        })
    }

    addCharacter = character => {
        this.setState({characters: [...this.state.characters, character]});
    }


    render() {
        const {title, characters, automaticCounterActive} = this.state;
        const headers = {header1: 'Name', header2: 'Job'};
        let data;
        if (characters.length > 0) {
            data = <Table data={characters} headers={headers} removeData={
                this.removeCharacter}/>
        } else {
            data = <h1>No Data</h1>
        }

        let ac;
        if (automaticCounterActive === true){
            ac = <AutomaticCounter endCounter={this.removeAutomaticCounter}/>
        }

        return (

            <div>
                <h1> {
                    title
                } </h1>
                <Counter/>
                {data}
                <Form handleSubmit={
                    this.addCharacter
                }/>
                {ac}
            </div>
        )
    }
}

export default App;
