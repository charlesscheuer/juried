import React, { Component } from 'react';
import MailIcon from './MailIcon';

const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class FooterEmail extends Component {
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
        .then(() => {
          console.log('registered');
          // this.setState({ registered: true });
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
      <div className='footer_links_email'>
        <div className='footer_links_email_newsletter'>
          <div className='contact_us'>
            <h3 className='footer_links_email_newsletter_header'>Contact Us</h3>
            <p className='footer_links_email_newsletter_body'>hi@juried.co</p>
          </div>
          <div className='contact_us'>
            <h3 className='footer_links_email_newsletter_header'>Newsletter</h3>
            {this.state.subscribed ? (
              <p className='confirmSubscription-light'>
                Thanks for subscribing!{' '}
              </p>
            ) : (
              <div className='footer_links_email_newsletter-submission'>
                <input
                  type='text'
                  placeholder='EMAIL'
                  value={this.state.emailValue}
                  onChange={e => {
                    this.setState({ emailValue: e.target.value });
                  }}
                  className='footer_links_email_newsletter_input'
                />
                <div
                  onClick={e => this.subscribe(e)}
                  className='footer_links_email_newsletter_send'
                >
                  <div className='footer_links_email_newsletter_send_button'>
                    <p>Submit</p> <MailIcon />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
