import React, { useState } from "react";



//create your first component
const Home = () => {
	const [item, setItem] = useState("")
	const [toDos, setToDos] = useState([])
	console.log(toDos)

	const handleEnter = (e) => {
		if (e.key === "Enter") {
			setToDos([...toDos,item])
			setItem("")
		}
	}

	const handleDelete = (i) => {
		
		
		setToDos(toDos.filter((_, index) => index !== i))
	}

	return (
		<div classNameName="container">
			<h1>Todos</h1>
			<div>
				<ul>
					<li><input type ="text" placeholder="Agregar nueva tarea" onChange={(e) => setItem(e.target.value)} value ={item} onKeyDown={(e) => handleEnter(e)}/></li>
					{toDos && toDos.map((item, index) => (
						<li key={index}> {item} <i className="fas fa-times" onClick={() => handleDelete(index)}></i></li>
					))}
					<li> {toDos.length} items faltantes</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
