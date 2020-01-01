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
        <div className='contact_us'>
          <h3 className='footer_links_email_newsletter_header'>Newsletter</h3>
          <div className='footer_links_email_newsletter-submission'>
            <input
              type='text'
              placeholder='EMAIL'
              className='footer_links_email_newsletter_input'
            />
            <div className='footer_links_email_newsletter_send'>
              <div className='footer_links_email_newsletter_send_button'>
                <p>Submit</p> <MailIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
