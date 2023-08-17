import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  //  state = {searchInput: ''}

  render() {
    const {hostoryItems} = this.props
    return (
      <div className="bg-container">
        <div className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search-logo"
          />
          <input type="search" className="input" placeholder="Search history" />
        </div>
        <ul className="list-container">
          {hostoryItems.map(each => (
            <HistoryItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default BrowserHistory
