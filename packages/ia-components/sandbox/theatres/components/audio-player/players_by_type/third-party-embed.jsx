import React from 'react';
import PropTypes from 'prop-types';


/**
 * This Third Party Player will render an iFrame to show the player
 * It is responsive by nature and will grow/shrink with the container #iframe-wrapper
 *
 * @param { string } sourceURL
 * @param { string } title
 *
 * @return component
 */
const ThirdPartyPlayer = ({ sourceURL, title }) => (
  <div className="iframe-wrapper">
    <iframe
      title={title}
      src={sourceURL}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen="allowfullscreen"
      className="iframe"
    />
  </div>
);

ThirdPartyPlayer.defaultProps = {
  title: 'Playing external media source from Archive.org',
};

ThirdPartyPlayer.propTypes = {
  sourceURL: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default ThirdPartyPlayer;
