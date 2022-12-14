import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarts } from "../redux/CartSlice";

export default function ListPosts() {
	const listProduits = useSelector((state) => state.posts);
	const { id } = useParams();
	const [listProduitUser, setListProduitUser] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCarts());
		setListProduitUser(
			listProduits.produits.produits.filter((produit) => produit.userId == id)
		);
	}, []);
	console.log("setListProduitUser: ", setListProduitUser);
	return (
		<>
			<h1 style={{ margin: "1rem" }}>Liste des produits:</h1>
			<div className="ListProduits">
					<>
						{listProduitUser.map((produit) => (
							<div className="produit">
								<h2>{produit.title}</h2>
								<p>{produit.price}</p>
                                <p>{produit.quantity}</p>
                                <p>{produit.total}</p>
							</div>
						))}
					</>
				
			</div>
		</>
	);
}