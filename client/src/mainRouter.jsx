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
import AddProject from "./components/project/AddProject";
import EditProject from "./components/project/EditProject";
import Signup from "./components/auth/signup";

function MainRouter(){
    return(
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/references" element={<References />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/admin/projects" element={<ListProjet />} />
                <Route exact path="/admin/projects/add" element={<AddProject />} />
                <Route exact path="/admin/project/edit/:id" element={<EditProject />} />
                <Route exact path="/users/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default MainRouter;