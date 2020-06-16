import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  // state = { isOpen: false }

  // handleToggle = () => {
  //   this.setState({ isOpen: !this.state.isOpen })
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     this.setState({ isOpen: false })
  //   }
  // }

  render() {
    
    return (
      <nav className="navbar">
        <div className="navbar wrap">
        | <Link to="/Home" className="navbar-item">Home</Link> |
        <Link to="/Portfolio" className="navbar-item">Portfolio</Link> |
        <Link to="/About" className="navbar-item">About</Link> |
        <Link to="/Contact" className="navbar-item">Contact</Link> |
        </div>
      </nav >
    )
  }
}

export default withRouter(Navbar)