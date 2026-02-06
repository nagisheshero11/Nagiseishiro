import React from 'react';
import './style/SocialDock.css';

function SocialDock() {
    return (
        <div className="social-dock">
            {/* GitHub */}
            <a href="https://github.com/nagisheshero11" target="_blank" rel="noopener noreferrer" className="dock-item">
                <img src="/git.png" alt="GitHub" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/hemanth-sai-1575962ba/" target="_blank" rel="noopener noreferrer" className="dock-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
            </a>

            <div className="dock-separator"></div>

            {/* Spotify */}
            <a href="https://open.spotify.com/user/31fazvark25z5pggqzdbyevfktzu?si=b14ab28fe2544ea7" target="_blank" rel="noopener noreferrer" className="dock-item">
                <img src="/spotify.png" alt="Spotify" />
            </a>

            {/* Letterboxd */}
            <a href="https://boxd.it/fF5QJ" target="_blank" rel="noopener noreferrer" className="dock-item">
                <img src="/letterboxed.png" alt="Letterboxd" />
            </a>

            {/* Mail (Optional/Bonus) -> User usually wants contact */}
            <div className="dock-separator"></div>
            <a href="mailto:hemanthsai964@gmail.com" className="dock-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            </a>
        </div>
    );
}

export default SocialDock;
