/* Import hooks from React */
// import { useState, useEffect } from "react";

/* Import react-router-dom */
import { Link } from "react-router-dom";

const Offers = ({ data }) => {
  // const [nbPages, setNbPages] = useState(20);

  return (
    <main className="wrapper">
      <div className="select-pages">
        <select name="pages" id="pages">
          <option
            value="cinq"
            // onCLick={() => {
            //   setNbPages(nbPages + 1);
            // }}
          >
            5
          </option>
          <option value="dix">10</option>
          <option value="vingt" selected>
            20
          </option>
        </select>
      </div>

      <div className="offers">
        {data.offers.map((elem) => {
          return (
            <Link
              key={elem._id}
              to={`/offer/${elem._id}`}
              className="wrap-card"
            >
              <div className="offer-card">
                <div>
                  <img
                    src={elem.owner.account.avatar.secure_url} // ??
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

                <div>
                  <p>{elem.product_price} €</p>
                  <>
                    {elem.product_details.map((elem, index) => {
                      return elem.TAILLE ? (
                        <p key={index}>{elem.TAILLE}</p>
                      ) : null;
                    })}
                  </>
                  <>
                    {elem.product_details.map((elem, index) => {
                      return elem.MARQUE ? (
                        <p key={index}>{elem.MARQUE}</p>
                      ) : null;
                    })}
                  </>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Offers;
