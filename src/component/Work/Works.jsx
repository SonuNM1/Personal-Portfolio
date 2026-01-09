import { useState, useEffect } from "react";
import { projectData } from "./Data";
import WorkItems from "./WorkItems";

export default function Works() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setProjects(projectData); // Load all projects directly
	}, []);

	return (
		<div className="container">

			<div className="work__container">
				{projects.map((item) => (
					<WorkItems item={item} key={item.id} />
				))}
			</div>
		</div>
	);
}
