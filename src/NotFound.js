import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>SORRY</h1>
            <p>The page was not found</p>
            <Link to = "/">Go back to Home page...</Link>
        </div>
    );
}
 
export default NotFound;