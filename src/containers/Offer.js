/* Import react-router-dom */
import { useParams } from "react-router-dom";

/* Import react-router-dom */
import { Link } from "react-router-dom";

const Offer = () => {
  const { id } = useParam();
  return <Link to="/">Go to Home page to test</Link>;
};
export default Offer;
