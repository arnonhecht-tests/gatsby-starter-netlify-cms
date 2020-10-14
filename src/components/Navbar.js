import React from 'react'
import { Link } from 'gatsby'

import { slide as Menu } from 'react-burger-menu'

import linksService from '../services/linksService';

import logo from '../../static/img/whtif-logo-with-text.png'
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
        className={`navbar override ${(isScrollAtTop) ? 'page-is-at-top' : ''}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="wht if" />
            </Link>
            {/* Hamburger menu */}
            <Menu right width={ '56%' }>
              <Link className="menu-item logo" to='/' id="home">
                <img src={logo} alt="wht if" />
              </Link>
              {linksService.getMobileTopLevelLinksList().map(l => (
                <div key={l.id}>
                  <Link className="menu-item" to={l.link}id={l.id}>
                    {l.text}
                    {
                      l.innerNavList.map(innerItem => (
                        <div className="inner-link" key={innerItem.linkTarget} >
                          {innerItem.text}
                        </div>
                      ))
                    }
                  </Link>
                </div>  
              ))}
              <div className="bottom-nav">
                <Link to="/terms" className="terms ">
                  Terms & Conditions
                </Link>
              </div>
            </Menu>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar
