// /* Import hooks from React */
// import { useState } from "react";

// /* Import Axios */
// import axios from "axios";

// const Publish = ({ userToken }) => {
//   //   console.log(userToken); // is there a user token?

//   const [data, setData] = useState();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState();
//   const [condition, setCondition] = useState("");
//   const [brand, setBrand] = useState("");
//   const [size, setSize] = useState("");
//   const [color, setColor] = useState("");
//   const [city, setCity] = useState("");
//   const [picture, setPicture] = useState();
//   const [loading, setIsLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     try {
//       event.preventDefault();

//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("condition", condition);
//       formData.append("brand", brand);
//       formData.append("size", size);
//       formData.append("color", color);
//       formData.append("city", city);
//       formData.append("picture", picture);

//       const response = await axios.post(
//         "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
//         formData,
//         {
//           headers: {
//             authorization: { userToken },
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setData(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Titre</label>
//         <input
//           type="text"
//           id="title"
//           placeholder="Chemise Sézane verte"
//           onChange={(event) => {
//             setTitle(event.target.value);
//           }}
//         />

//         <label htmlFor="description">Décris ton article</label>
//         <textarea
//           id="description"
//           placeholder="ex : porté quelques fois, taille correctement"
//           onChange={(event) => {
//             setDescription(event.target.value);
//           }}
//         ></textarea>

//         <label htmlFor="price">Prix</label>
//         <input
//           type="text"
//           id="price"
//           placeholder="15"
//           onChange={(event) => {
//             setPrice(event.target.value);
//           }}
//         />

//         <label htmlFor="condition">État</label>
//         <input
//           type="text"
//           id="condition"
//           placeholder="Bon état"
//           onChange={(event) => {
//             setCondition(event.target.value);
//           }}
//         />

//         <label htmlFor="brand">Marque</label>
//         <input
//           type="text"
//           id="brand"
//           placeholder="Sézane"
//           onChange={(event) => {
//             setBrand(event.target.value);
//           }}
//         />

//         <label htmlFor="size">Taille</label>
//         <input
//           type="text"
//           id="size"
//           placeholder="38"
//           onChange={(event) => {
//             setSize(event.target.value);
//           }}
//         />

//         <label htmlFor="color">Couleur</label>
//         <input
//           type="text"
//           id="color"
//           placeholder="Vert"
//           onChange={(event) => {
//             setColor(event.target.value);
//           }}
//         />

//         <label htmlFor="city">Ville</label>
//         <input
//           type="text"
//           id="city"
//           placeholder="Amsterdam"
//           onChange={(event) => {
//             setCity(event.target.value);
//           }}
//         />

//         <input
//           type="file"
//           onChange={(event) => {
//             setPicture(event.target.files[0]);
//           }}
//         />

//         <input type="submit" value="Ajouter" />
//       </form>
//     </div>
//   );
// };

// export default Publish;
