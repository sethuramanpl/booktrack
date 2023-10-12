import { Link } from "react-router-dom";

const OpenSearchButton = () => {
    return (
      <div className="open-search">
        <Link to="search">
          <button className="open-search">Add a Book</button>
        </Link>
      </div>
    );
  };

  export default OpenSearchButton