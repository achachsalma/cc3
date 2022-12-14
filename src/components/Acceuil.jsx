import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailUser from "./DetailUser";
import ListProduits from "./ListProduits";
import ListUser from "./ListUser";

export default function Acceuil() {
	return (
		<div>
			<nav>
				<h1>Panier</h1>
			</nav>
			<Routes>
				<Route path="/" element={<ListUser />} />
				<Route path="/detailUser/:id" element={<DetailUser />} />
				<Route path="/listProduits/:id" element={<ListProduits />} />
			</Routes>
		</div>
	);
}
