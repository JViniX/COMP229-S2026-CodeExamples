import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectForm from './ProjectForm';
import MyModal from '../MyModal';
import ProjectModel from '../../datasource/projectModel';
import { create } from '../../datasource/api-projects';
import { uploadProjectImage } from '../../datasource/firebase-storage';

function AddProject() {
    let navigate = useNavigate();
    let [project, setProject] = useState(new ProjectModel());
    let [errorMsg, setErrorMsg] = useState('')
    let [isUploading, setIsUploading] = useState(false);

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
            if (selectedImage){
                let uploadResult = await uploadProjectImage(selectedImage); // Upload the selected image to Firebase Storage.
                
                payload.imageUrl = uploadResult.imageUrl;
                payload.imagePath = uploadResult.imagePath;
            }

            let res = await create(payload); // Create the project with the backend.
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
            <MyModal message="Creating project..." />
        }
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