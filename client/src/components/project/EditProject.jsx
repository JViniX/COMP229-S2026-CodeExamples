import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import MyModal from '../MyModal';
import ProjectModel from '../../datasource/projectModel';
import { read, update } from '../../datasource/api-projects';
import { uploadProjectImage } from '../../datasource/firebase-storage';

function EditProject() {
    let navigate = useNavigate();
    let [project, setProject] = useState(new ProjectModel());
    let [isUploading, setIsUploading] = useState(false);
    let [errorMsg, setErrorMsg] = useState('')
    let { id } = useParams(); // Get the project ID from the URL parameters

    useEffect(() => {
        read(id)
            .then((res) => {
                if (res.success) {
                    setProject(res.data);
                }
                else {
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }, [id, navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject((prevProject) => ({ ...prevProject, [name]: value }));
    }

    const handleSubmit = async (event, selectedImage) => {
        event.preventDefault(); // Cancels the default action of the form submission (page reload)
        setErrorMsg('');

        try {
            setIsUploading(true);

            let payload = { ...project };

            if (selectedImage) {
                let uploadResult = await uploadProjectImage(selectedImage); // Upload the selected image to Firebase Storage.

                payload.imageUrl = uploadResult.imageUrl;
                payload.imagePath = uploadResult.imagePath;
            }

            let res = await update(id, payload);

            if (res.success) {
                alert(res.message);
                navigate('/admin/projects');
            } else {
                setErrorMsg(res.message);
            }

        } catch (err) {
            setErrorMsg(err.message);
            console.log(err);
        } finally {
            setIsUploading(false);
        }
    }

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            {isUploading &&
                <MyModal message="Updating project..." />
            }
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Edit a Project Item</h1>
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

export default EditProject;