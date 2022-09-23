import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    const {value} = event.target

    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="bottom-container">
          <div className="inner-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                className="search-bar"
                id="phraseText"
                placeholder="Enter the phrase"
                onChange={this.onSearchInput}
                value={searchInput}
              />
            </div>
            <div className="button-container">
              <p className="letters-count">
                No.of letters: {searchInput.length}
              </p>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
