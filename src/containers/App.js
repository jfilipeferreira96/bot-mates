import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './app.css' 
    
class App extends Component  {
    constructor() {
        super()
        this.state = {
            bots: [],
            searchfield: ''
        }
    }

    /*componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ bots: users }))
        
    }*/

    async componentDidMount() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const json = await response.json();
            this.setState({ bots: json });
        } catch (error) {
            console.log(error);
        }
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }


    render() {
        //with out destructuring
        /* const filteredBots = this.state.bots.filter(bot => {
            return bot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        }) */

        //with destructuring
        const { bots, searchfield } = this.state;
        const filteredBots = bots.filter(bot => {
            return bot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        //if ajax takes too long
        if (bots.length === 0) {
            return <h1>Loading</h1>
        } else {

            return (
                <div className="tc">
                    <h1 className="f1">Bot Mates</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList bots={filteredBots} />
                    </Scroll>
                </div>
            ); 
        }

    }
    
}

export default App;