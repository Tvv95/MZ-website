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
          <li>
            <a href="https://www.youtube.com/channel/UCmuEKdGhyftEuZ6X7bFYEqg/">
              <img src={youtube} className="socials youtube" alt="Youtube" />
            </a>
          </li>
          <li>
            <a href="https://discord.com/invite/pWdwt9u">
              <img src={discord} className="socials discord" alt="Discord" />
            </a>
          </li>
          <li>
            <a href="https://vk.com/modzadrot76">
              <img src={vk} className="socials vk" alt="VK" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;