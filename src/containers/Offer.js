/* Import react-router-dom */
import { useParams } from "react-router-dom";

/* Import hooks */
import { useState, useEffect } from "react";

/* Import axios */
import axios from "axios";

/* Import */
import Header from "../components/Header";

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
        console.log(response.data);
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
      <Header />
      <main>
        <div>
          {data.product_pictures.map((elem, index) => {
            return (
              <div key={index}>
                <img src={elem.secure_url} alt="/" />
              </div>
            );
          })}
          <p>{data.product_price} €</p>

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

          <p>{data.product_description}</p>
          <p>{data.product_name}</p>
          <img src={data.owner.account.avatar.secure_url} alt="/" />
          <span>{data.owner.account.username}</span>
          <button>Acheter</button>
        </div>
      </main>
    </>
  );
};
export default Offer;
