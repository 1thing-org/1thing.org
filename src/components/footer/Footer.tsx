import React, {Component} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';
import './Footer.css'

function SocialMedia({name, refLink} : {name: IconProp, refLink: string}) {
    return <a className="icon" href={refLink} target="_blank"><FontAwesomeIcon icon={name as IconName} /></a>;
}

class Footer extends Component{
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <div className='left-side'>
                        <h4>1 Thing Against Racism</h4>
                        <p>
                            1 Thing Against Racism is a grassroots, non-profit organization of volunteers founded in [DATE]. 
                            We believe ending racism and hate begins with uniting people through compassion and advocacy. 
                            Together we can make the world a more beautiful place — one thing at a time.
                        </p>
                        <div className='social-icons'>
                            <SocialMedia name={faEnvelope} refLink='' />
                            <SocialMedia name={faTwitter} refLink='https://twitter.com/1Thing_Org' />
                            <SocialMedia name={faLinkedin} refLink='https://www.linkedin.com/company/1-thing-org/' />
                            <SocialMedia name={faFacebook} refLink='https://www.facebook.com/people/One-Thing-Org/100081311228444/' />
                        </div>
                    </div> 
                    <div className="split-line"></div>
                    <div className='right-side'>
                        <p>Sign up for our newsletter for updates on the organization and the projects we’re working on.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;