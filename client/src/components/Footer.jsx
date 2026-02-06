import React from 'react';
import './style/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Personal Note */}
                <div className="footer-bio">
                    <p>
                        Yeah This is me i thought of making a page for myself
                        unfilterd so this is it. it will give you a rough idea of who i am
                        what i do and what i like. there are more things about me that i
                        haven't mentioned here but i hope you get a good idea of who i am.
                    </p>
                    <p>
                        Thanks for stopping by.
                    </p>
                    <span className="footer-signature">Nagiseishiro</span>
                </div>

                {/* Credits & Copyright */}
                <div className="footer-credits">
                    <div className="credit-text">
                        Designed & Built by <strong>Nagiseishiro (AKA) Me </strong>
                        <br />
                        Design inspiration from <a href="https://www.linkedin.com/in/sai-suraj-chatrathi/" target="_blank" rel="noopener noreferrer"><strong>Sai Suraj</strong></a>
                    </div>

                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
