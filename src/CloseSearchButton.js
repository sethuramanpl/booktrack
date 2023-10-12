import { Link } from "react-router-dom";

const CloseSearchButton = ({ onResetSearch }) => {
    return (
      <Link to="/">
        <button className="close-search" onClick={onResetSearch}>
          Close
        </button>
      </Link>
    );
  };

  export default CloseSearchButton;