import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import ProjectModel from '../../datasource/projectModel';
import { create } from '../../datasource/api-projects';

function AddProject() {
    const navigate = useNavigate();
    const [project, setProject] = useState(new ProjectModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject((prevProject) => ({ ...prevProject, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Cancels the default action of the form submission (page reload)

        create(project)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
                    navigate('/admin/projects');
                } else {
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add Project Item</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ProjectForm
                        project={project}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default AddProject;