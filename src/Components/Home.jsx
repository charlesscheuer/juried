import React, { Component } from 'react';
import MailIcon from './MailIcon';
import LatestCollection from './LatestCollection';
import Menu from './Menu';

const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      subscribed: false,
      wasError: false
    };
  }

  subscribe = e => {
    let that = this;
    e.preventDefault();
    let body = { email: this.state.emailValue };
    let api =
      'https://us-central1-nu-sheet-api.cloudfunctions.net/app/appendEmail';
    if (regexp.test(this.state.emailValue)) {
      fetch(api, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function(response) {
          if (response.ok) {
            that.setState({ subscribed: true });
          }
        })
        .catch(error => {
          alert(
            'Sorry, there was an error submitting your email. Please try again. If this continues, please contact us.'
          );
        });
    } else {
      alert('Sorry, that is not a valid email');
    }
  };

  render() {
    return (
      <div className='homepage'>
        <Menu activeChangeHandler={this.props.activeChangeHandler} />
        <div className='aboveFold'>
          <div className='aboveFold_card'>
            <p className='aboveFold_card_content'>
              The best art you haven't yet discovered.
            </p>
            {this.state.subscribed ? (
              <div className='confirm'>
                <p className='confirmSubscription'>Thanks for subscribing! </p>
              </div>
            ) : (
              <div className='aboveFold_card_subscribe'>
                <input
                  type='text'
                  className='aboveFold_card_subscribe_input'
                  placeholder='EMAIL'
                  value={this.state.emailValue}
                  onChange={e => {
                    this.setState({ emailValue: e.target.value });
                  }}
                />
                <div
                  onClick={e => this.subscribe(e)}
                  className='aboveFold_card_subscribe_send'
                >
                  <div className='aboveFold_card_subscribe_send_button'>
                    <p>Submit</p> <MailIcon />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='aboveFold_photo'></div>
        </div>
        <LatestCollection />
      </div>
    );
  }
}
