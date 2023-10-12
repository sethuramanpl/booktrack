import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CloseSearchButton = ({ onResetSearch }) => {
    return (
      <Link to="/">
        <button className="close-search" onClick={onResetSearch}>
          Close
        </button>
      </Link>
    );
  };

  CloseSearchButton.prototype = {
    onResetSearch : PropTypes.func,
  }
  export default CloseSearchButton;