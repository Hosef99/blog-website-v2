import React from "react";
import Blog from "./Blog"

function Home() {
	return (
		<div className="container m-5">
			<h2>Welcome to My Blog!</h2>
			<p>Explore the latest blog posts below:</p>
            <Blog />
		</div>
	);
}

export default Home;
