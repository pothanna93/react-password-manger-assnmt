import {Component} from 'react'

import {v4} from 'uuid'

import UserItem from '../UserItem'

import './index.css'

const initialBgColor = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
]

class PasswordManager extends Component {
  state = {
    userWebsiteName: '',
    userName: '',
    userPassword: '',
    userEnterLists: [],
    searchUser: '',
    isActive: false,
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  OnDeleteItem = id => {
    const {userEnterLists} = this.state
    const updatedUser = userEnterLists.filter(eachUser => eachUser.id !== id)

    this.setState({userEnterLists: updatedUser})
  }

  renderImage = () => (
    <li className="image-item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt=" no passwords"
        className="no-password-image"
      />
      <p className="no-passwords">No Passwords</p>
    </li>
  )

  renderUserItem = () => {
    const {userEnterLists, searchUser} = this.state
    const searchResults = userEnterLists.filter(eachValue =>
      eachValue.userWebsite.toLowerCase().includes(searchUser.toLowerCase()),
    )

    return searchResults.map(eachItem => (
      <UserItem
        userDetails={eachItem}
        key={eachItem.id}
        OnDeleteItem={this.OnDeleteItem}
      />
    ))
  }

  onAddList = event => {
    event.preventDefault()

    const {userWebsiteName, userName, userPassword, isActive} = this.state
    const initialBgColors = `initial-container ${
      initialBgColor[Math.ceil(Math.random() * initialBgColor.length - 1)]
    }`

    const addNewUserList = {
      id: v4(),
      userWebsite: userWebsiteName,
      username: userName,
      userEnterPassword: userPassword,
      initialContainerColor: initialBgColors,
      active: isActive,
    }

    this.setState(prevState => ({
      userEnterLists: [...prevState.userEnterLists, addNewUserList],
      userWebsiteName: '',
      userName: '',
      userPassword: '',
    }))
  }

  onUserWebsiteEnter = event => {
    this.setState({userWebsiteName: event.target.value})
  }

  onUserEnterName = event => {
    this.setState({userName: event.target.value})
  }

  onUserEnterPassword = event => {
    this.setState({userPassword: event.target.value})
  }

  onSearchUserWebsite = event => {
    this.setState({searchUser: event.target.value})
  }

  render() {
    const {
      userWebsiteName,
      userName,
      userPassword,
      userEnterLists,
      searchUser,
      isActive,
    } = this.state
    const lengthItem = userEnterLists.length === 0

    return (
      <div className="app-container">
        <div className="password-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="image-logo"
          />
        </div>
        <div className="form-image-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-image-sm"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image-lg"
            />
          </div>
          <div className="form-container">
            <h1 className="add-password-heading">Add New Password</h1>
            <form className="form" onSubmit={this.onAddList}>
              <div className="input-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt=" website"
                  className="website-icon"
                />
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Website"
                  onChange={this.onUserWebsiteEnter}
                  value={userWebsiteName}
                />
              </div>
              <div className="input-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-icon"
                />
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Username"
                  onChange={this.onUserEnterName}
                  value={userName}
                />
              </div>
              <div className="input-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt=" password"
                  className="website-icon"
                />
                <input
                  type="password"
                  className="input-element"
                  placeholder="Enter Password"
                  onChange={this.onUserEnterPassword}
                  value={userPassword}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom-lists-container">
          <div className="search-passwords-container">
            <div className="items-count">
              <h1 className="passwords">Your Passwords </h1>
              <p className="count">{userEnterLists.length}</p>
            </div>

            <div className="bottom-search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="input-search"
                placeholder="Search"
                onChange={this.onSearchUserWebsite}
                value={searchUser}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="check-box-container">
            <input
              type="checkbox"
              id="show"
              className="check-box"
              onClick={this.onClickShowPassword}
              value={isActive}
            />
            <label htmlFor="show" className="label-element">
              Show passwords
            </label>
          </div>
          <div>
            <ul className="order-user-list">
              {lengthItem ? this.renderImage() : this.renderUserItem()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
