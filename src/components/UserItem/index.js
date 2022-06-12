import './index.css'

const starImage =
  'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'

const UserItem = props => {
  const {userDetails} = props
  const {id, userWebsite, username, initialContainerColor} = userDetails

  const renderPassword = () => {
    const {active, userEnterPassword} = userDetails

    if (active) {
      return <p>{userEnterPassword}</p>
    }
    return <img src={starImage} alt="stars" className="star-image" />
  }

  const initial = username ? username[0].toUpperCase() : ''

  const onDeleteUser = () => {
    const {OnDeleteItem} = props
    OnDeleteItem(id)
  }

  return (
    <li className="user-Item-list">
      <div className="user-items-container">
        <div className={initialContainerColor}>
          <p className="initial">{initial}</p>
        </div>

        <div className="user-details">
          <p className="user-name">{userWebsite}</p>
          <p className="user-name">{username}</p>
          <p>{renderPassword()}</p>
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteUser}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default UserItem
