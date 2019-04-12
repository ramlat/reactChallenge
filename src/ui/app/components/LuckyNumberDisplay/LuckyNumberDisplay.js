/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    // TODO: Receive props passed down from LuckyNumber container
    // Latha
    const { firstNm, lastNm, luckyNumber } = this.props;
    // const userLucky = this.props.

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {/* TODO: Display the user's full name and their lucky number
          Latha */}
        <p> Hello {lastNm}, {firstNm} ! </p>
        <p> Your lucky number is </p>
        <p>{luckyNumber}</p>

      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {
  firstNm: PropTypes.string,
  lastNm: PropTypes.string,

};

export default LuckyNumberDisplay;
