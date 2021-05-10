/* Import hooks from React */
import { useState } from "react";

/* Import Axios */
import axios from "axios";

/* Import FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Publish = ({ userToken }) => {
  //   console.log(userToken); // is there a user token?

  const [data, setData] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [picture, setPicture] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    console.log(userToken);
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("city", city);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-publish">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="file" className="upload-file">
              <FontAwesomeIcon icon="plus" className="icon-plus" />
              Ajouter photos
            </label>
            <input
              type="file"
              id="file"
              onChange={(event) => {
                setPicture(event.target.files[0]);
              }}
            />
          </div>

          <div>
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              id="title"
              placeholder="Chemise Sézane verte"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="description">Décris ton article</label>
            <textarea
              id="description"
              placeholder="ex : porté quelques fois, taille correctement"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>

          <div>
            <label htmlFor="price">Prix</label>
            <input
              type="text"
              id="price"
              placeholder="15"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="condition">État</label>
            <input
              type="text"
              id="condition"
              placeholder="Bon état"
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="brand">Marque</label>
            <input
              type="text"
              id="brand"
              placeholder="Sézane"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="size">Taille</label>
            <input
              type="text"
              id="size"
              placeholder="38"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="color">Couleur</label>
            <input
              type="text"
              id="color"
              placeholder="Vert"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="city">Ville</label>
            <input
              type="text"
              id="city"
              placeholder="Amsterdam"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>

          <input type="submit" value="Ajouter" className="submit btn-green" />
        </form>
      </div>
    </div>
  );
};

export default Publish;
