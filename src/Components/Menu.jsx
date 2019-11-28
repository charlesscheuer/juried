import React, { Component } from 'react';
import logo from '../images/juried logo-01.svg';
import MenuIcon from './MenuIcon';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, isToggled: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  renderMobileMenu = () => {
    const { isToggled, width } = this.state;
    if (width < 900) {
      return (
        <div
          ref={this.setWrapperRef}
          className={
            isToggled
              ? 'homepage_menu_mobile'
              : 'homepage_menu_mobile homepage_menu_mobile_hidden'
          }
        >
          <ul className='homepage_menu_mobile_list'>
            <li
              onClick={() => this.props.activeChangeHandler('home')}
              className='homepage_menu_mobile_list_item'
            >
              Home
            </li>
            <li
              onClick={() => this.props.activeChangeHandler('about')}
              className='homepage_menu_mobile_list_item'
            >
              About
            </li>
            <li className='homepage_menu_mobile_list_item'>Shop</li>
            <li className='homepage_menu_mobile_list_item'>Contact</li>
          </ul>
        </div>
      );
    }
  };

  toggleMenuHandler = () => {
    const { isToggled } = this.state;
    this.setState({ isToggled: !isToggled });
  };

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.toggleMenuHandler();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    const { isToggled } = this.state;
    const { about } = this.props;
    return (
      <div
        className={
          about ? 'homepage_menu homepage_menu-about' : 'homepage_menu'
        }
      >
        <img className='homepage_photo-logo' src={logo} alt='logo' />
        {this.state.width < 900 ? (
          <div onClick={() => this.toggleMenuHandler()} className='menuIcon'>
            <MenuIcon />
          </div>
        ) : (
          <ul className='homepage_menu_list'>
            <li
              onClick={() => this.props.activeChangeHandler('home')}
              className='homepage_menu_list_item'
            >
              Home
            </li>
            <li
              onClick={() => this.props.activeChangeHandler('about')}
              className='homepage_menu_list_item'
            >
              About
            </li>
            <li className='homepage_menu_list_item'>Shop</li>
            <li className='homepage_menu_list_item'>Contact</li>
          </ul>
        )}
        {isToggled && this.renderMobileMenu()}
      </div>
    );
  }
}
