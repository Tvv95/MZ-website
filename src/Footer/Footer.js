import React from 'react';
import './Footer.css';
import youtube from '../assets/youtube_logo.png';
import discord from '../assets/discord-logo.svg';
import vk from '../assets/VK_Blue_Logo.svg';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <h2>Красиво! Реалистично! Хардкорно!</h2>
        <ul className="socials">
          <li className="youtube">
            <a href="https://www.youtube.com/channel/UCHmm0OM8MNT5Mle9Dt9C6Cg">
              <img src={youtube} alt="Youtube" />
            </a>
          </li>
          <li className="discord">
            <a href="https://discord.com/invite/pWdwt9u">
              <img src={discord} alt="Discord" />
            </a>
          </li>
          <li className="vk">
            <a href="https://vk.com/modzadrot76">
              <img src={vk} alt="VK" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;