import React from 'react'
import { Link } from 'gatsby'

import { slide as Menu } from 'react-burger-menu'

import linksService from '../services/linksService';

import logo from '../img/whtif-logo.png'
import './Navbar.scss'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowGlobal: (typeof window !== 'undefined') && window,
      isScrollAtTop: true,
      active: false,
      navBarActiveClass: '',
    }
  }
  componentDidMount() {
    this.state.windowGlobal.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    this.state.windowGlobal.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const {scrollY} = e.currentTarget;
    if (scrollY > 0 && this.state.isScrollAtTop) {
      this.setState({isScrollAtTop: false});
    } else if(scrollY === 0 && !this.state.isScrollAtTop) {
      this.setState({isScrollAtTop: true});
    }
  }

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    const {isScrollAtTop} = this.state;
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <nav
        className={`navbar override ${(isScrollAtTop) ? 'is-transparent' : ''}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="wht if" />
            </Link> */}
            {/* Hamburger menu */}
            <Menu right width={ '50%' } >
              <a id="home" className="menu-item" href='/'>
                <img src={logo} alt="wht if" />
              </a>
              {linksService.getTopLevelLinksList().map(l => (
                <Link className="menu-item" to={l.link} key={l.id}>
                  {l.text}
                </Link>
              ))}
            </Menu>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar
