import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import References from "./components/References";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import ListProjet from "./components/project/ListProjects";

function MainRouter(){
    return(
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                {/* <Route exact path="/projects" element={<Projects />} /> */}
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/references" element={<References />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/projects" element={<ListProjet />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default MainRouter;