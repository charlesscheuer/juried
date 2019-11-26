import React from 'react';
import MailIcon from './MailIcon';

export default function FooterEmail() {
  return (
    <div className='footer_links_email'>
      <div className='footer_links_email_newsletter'>
        <div className='contact_us'>
          <h3 className='footer_links_email_newsletter_header'>Contact Us</h3>
          <p className='footer_links_email_newsletter_body'>hi@juried.co</p>
        </div>
        <h3 className='footer_links_email_newsletter_header'>Newsletter</h3>
        <input
          type='text'
          placeholder='EMAIL'
          className='footer_links_email_newsletter_input'
        />
        <div className='footer_links_email_newsletter_rect'></div>
        <div className='footer_links_email_newsletter_send'>
          <input
            type='checkbox'
            className='footer_links_email_newsletter_send_check'
          />
          <p className='footer_links_email_newsletter_send_info'>
            I have read and agree to the{' '}
            <span className='footer_links_email_newsletter_send_info_underline'>
              privacy conditions.
            </span>
          </p>
          <div className='footer_links_email_newsletter_send_button'>
            <p>Submit</p> <MailIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
