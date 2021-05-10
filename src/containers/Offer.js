/* Import react-router-dom */
import { useParams } from "react-router-dom";

/* Import hooks from React */
import { useState, useEffect } from "react";

/* Import axios */
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <main className="main-offer">
        <div className="wrapper offer-page">
          {data.product_pictures.length > 0 ? (
            <div className="carousel">
              {data.product_pictures.map((elem) => {
                return (
                  <img key={elem.asset_id} src={elem.secure_url} alt="/" />
                );
              })}
            </div>
          ) : (
            <div key={data.product_image.asset_id} className="carousel">
              <img src={data.product_image.secure_url} alt="/" />
            </div>
          )}

          <div className="offer-page-details">
            <p className="offer-price">{data.product_price} €</p>
            <div className="bloc-1">
              <div>
                <p>MARQUE</p>
                <p>TAILLE</p>
                <p>ÉTAT</p>
                <p>COULEUR</p>
                <p>EMPLACEMENT</p>
              </div>
              <div>
                {data.product_details.map((elem, index) => {
                  return elem.MARQUE ? (
                    <div>
                      <p>{elem.MARQUE}</p>
                    </div>
                  ) : null;
                })}

                {data.product_details.map((elem, index) => {
                  return elem.TAILLE ? (
                    <div>
                      <p>{elem.TAILLE}</p>
                    </div>
                  ) : null;
                })}

                {data.product_details.map((elem, index) => {
                  return elem.ÉTAT ? (
                    <div>
                      <p>{elem.ÉTAT}</p>
                    </div>
                  ) : null;
                })}

                {data.product_details.map((elem, index) => {
                  return elem.COULEUR ? (
                    <div>
                      <p>{elem.COULEUR}</p>
                    </div>
                  ) : null;
                })}

                {data.product_details.map((elem, index) => {
                  return elem.EMPLACEMENT ? (
                    <div>
                      <p>{elem.EMPLACEMENT}</p>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            <div className="bloc-2">
              <p>{data.product_name}</p>
              <p>{data.product_description}</p>
              <div>
                {data.owner.account.avatar ? (
                  <img src={data.owner.account.avatar.secure_url} alt="/" />
                ) : null}
                <span>{data.owner.account.username}</span>
              </div>
            </div>
            <button className="btn-green">Acheter</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Offer;
