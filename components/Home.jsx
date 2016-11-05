import React from 'react';
import { Link } from 'react-router';

import SocialLink from './SocialLink';

function Home() {

  return (
    <div>
      <div class="wrapper">
        <header>
          <h1>Jared Casner</h1>
          <p></p>

          <p class="view">
            <table>
              <tbody>
                <SocialLink icon="images/github-mark-32px.png" link="https://github.com/jcasner" />
                <SocialLink icon="images/in-2c-14px.png" link="https://www.linkedin.com/in/jaredmcasner" />
                <SocialLink icon="images/twitter_logo_blue.png" link="https://twitter.com/jaredcaz" />
                <SocialLink icon="images/so-icon.png" link="http://stackoverflow.com/users/2812273/jcasner" />
                <SocialLink icon="images/medium_logo32.png" link="https://medium.com/@jaredcaz" />
              </tbody>
            </table>
          </p>

        </header>
        <section>
          <h3>
  <a id="coming-soon" class="anchor" href="#coming-soon" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Coming soon!</h3>
        </section>
        <footer>
          <p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
        </footer>
      </div>
      <script src="javascripts/scale.fix.js"></script>
    </div>
  );
}

export default Home;
