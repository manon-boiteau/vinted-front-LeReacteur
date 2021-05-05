/* Import react-router-dom */
import { useParams } from "react-router-dom";

/* Import hooks */
import { Link } from "react-router-dom";

const Offers = ({ data, id }) => {
  console.log(id);
  id = useParams();
  return (
    <main className="wrapper">
      {/* <Link to={`/offer/${ids[0]}`}>Go to Offer page to test</Link> */}
      <div className="offers">
        {data.offers.map((elem) => {
          return (
            <div
              key={elem._id}
              className="offer-card"

              //   onClick={() => {
              //     return (

              //     );
              //   }}
            >
              <div>
                <img
                  src={elem.owner.account.avatar.secure_url}
                  alt="/"
                  className="avatar-card"
                />
                <span>{elem.owner.account.username}</span>
              </div>

              <div>
                <img
                  key={elem.product_image.asset_id}
                  src={elem.product_image.secure_url}
                  alt="/"
                  className="product-card"
                />
              </div>

              <p>{elem.product_price}</p>
              <>
                {elem.product_details.map((elem, index) => {
                  return elem.TAILLE ? <p key={index}>{elem.TAILLE}</p> : null;
                })}
              </>
              <>
                {elem.product_details.map((elem, index) => {
                  return elem.MARQUE ? <p key={index}>{elem.MARQUE}</p> : null;
                })}
              </>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Offers;
