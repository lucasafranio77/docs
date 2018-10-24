import React, { Component } from 'react';
import Link from 'gatsby-link';
import Cookies from 'js-cookie';
import LINKS from '../../constants/pageLinks';
import './NavMain.scss';

class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      user: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentWillMount() {
    const token = Cookies.get('mako_auth_token');

    if (!token) return;

    fetch('https://api.sendgrid.com/v3/user/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: `token ${token}`,
      },
    }).then((response) => {
      if (!response.ok) {
        return false;
      }

      return response.json().then(user => this.setState({ user }));
    });
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  render() {
    const {
      showMenu,
      user,
    } = this.state;

    const menuState = showMenu ? 'in' : '';

    return (
      <div className="nav-wrap">

        <div className="nav-main-wrap">
          <div className="container-lg">
            <nav className="nav-main">
              <Link className="nav-main__logo" onClick={this.closeMenu} to="/" >
                <span className="nav-main__help-center" >Wiki</span>
              </Link>

              <button
                className={`nav-main__toggle js-menu-toggle ${menuState}`}
                onClick={this.toggleMenu}
              >
                <span className="nav-main__menu" />
              </button>

              <div className={`nav-main__mobile ${menuState}`} >

                <div className="nav-item">
                  <Link className="nav-main__plain" onClick={this.closeMenu} to={LINKS.FOR_DEVELOPERS}>
                    Para Devs
                  </Link>
                </div>

              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default NavMain;
