// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  onMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  render() {
    const {bananaCount, mangoCount} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          Bob ate <span className="style">{mangoCount}</span> mangoes{' '}
          <span className="style">{bananaCount}</span> bananas
        </h1>
        <div className="imgscontainer">
          <div className="man">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="img"
              alt="mango"
            />
            <div>
              <button className="button" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
          </div>
          <div className="man">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="img"
              alt="banana"
            />
            <div>
              <button className="button" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
