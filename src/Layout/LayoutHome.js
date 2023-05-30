import { Link } from "react-router-dom";
import Test from "./Home/Test/Test";

function LayoutHome() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Test">Home</Link>
          </li>
        </ul>
      </nav>
      <Test />
    </div>
  );
}

export default LayoutHome;
