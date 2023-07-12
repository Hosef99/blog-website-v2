import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
        
		<BrowserRouter>
        <Header />
            <Routes>
                
				<Route exact path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
            </Routes>
		</BrowserRouter>
	);
}

export default App;
