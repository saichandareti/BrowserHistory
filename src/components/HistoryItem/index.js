import './index.css'

const HistoryItem = props => {
  const {item} = props
  const {timeAccessed, logoUrl, title, domainUrl} = item

  return (
    <li className="list-item">
      <div className="small-con">
        <p className="time-para">{timeAccessed}</p>
        <div className="middle-con">
          <img src={logoUrl} className="image" alt="domain logo" />
          <div className="title-con">
            <p className="title">{title}</p>
            <p className="url">{domainUrl} </p>
          </div>
        </div>
      </div>
      <button className="button" type="button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="image"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
