import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    money: 200,
    displaySushi: 0
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then((resp) => {
      this.setState({
        sushis: resp
      })
    })
  }

  eat = (sushi) => {
    const moneyLeft = this.state.money - sushi.price

    if(!this.state.eaten.includes(sushi) && moneyLeft >=0 ) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: moneyLeft
      })

    }
  }

  moreButton = (e) => {
    let newSushiDisplay = this.state.displaySushi + 4
    this.setState ({
      displaySushi: newSushiDisplay
    })
  }

  chooseFourSushis = () => {
    return this.state.sushis.slice(this.state.displaySushi, this.state.displaySushi+4)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.chooseFourSushis()}
                        more={this.moreButton}
                        eat={this.eat}
                        eaten={this.state.eaten}/>
        <Table remainingBudget={this.state.money}
              eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;