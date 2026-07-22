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
import Signin from "./components/auth/signin";

import PrivateRoute from "./components/auth/PrivateRoute";

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
                <Route exact path="/admin/projects" element={
                    <PrivateRoute>
                        <ListProjet />
                    </PrivateRoute>
                } />

                <Route exact path="/admin/projects/add" element={
                    <PrivateRoute>
                        <AddProject />
                    </PrivateRoute>
                } />
                <Route exact path="/admin/project/edit/:id" element={
                    <PrivateRoute>
                        <EditProject />
                    </PrivateRoute>
                } />
                <Route exact path="/users/signup" element={<Signup />} />
                <Route exact path="/users/signin" element={<Signin />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default MainRouter;