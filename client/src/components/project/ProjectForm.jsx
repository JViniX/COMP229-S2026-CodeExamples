import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectForm({ project = {}, handleChange, handleSubmit }) {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    useEffect(() => {
        if (!selectedImage) {
            setPreviewUrl(project.imageUrl || '');
            return;
        }

        const objectUrl = URL.createObjectURL(selectedImage);
        setPreviewUrl(objectUrl);

        return () => {
            URL.revokeObjectURL(objectUrl);
        };
    }, [selectedImage, project.imageUrl]);
    
    const handleImageChange = (event) => {
        const file = event.target.files?.[0] || null;
        setSelectedImage(file);
    };

    const handleFormSubmit = (event) => {
        handleSubmit(event, selectedImage); // Pass the selected image to the parent component's handleSubmit function
    };

    return (
        <form onSubmit={handleFormSubmit} className="form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title" name="title"
                    placeholder="Enter title"
                    value={project.title || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description" name="description"
                    placeholder="Enter description"
                    value={project.description || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="completion">Completion</label>
                <input
                    type="text"
                    className="form-control"
                    id="completion" name="completion"
                    placeholder="Enter completion"
                    value={project.completion || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="imageFile">Project Image</label>
                <input
                    type="file"
                    className="form-control"
                    id="imageFile"
                    name="imageFile"
                    accept="image/*"
                    onChange={handleImageChange}
                />

                {previewUrl && (
                    <div style={{ marginTop: '12px' }}>
                        <img
                            src={previewUrl}
                            alt="Project preview"
                            style={{ maxWidth: '100%', maxHeight: '220px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ddd' }}
                        />
                    </div>
                )}
            </div>


            <button className="btn btn-primary" type="submit">
                <i className="fas fa-edit"></i> Submit
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-warning" type="button" onClick={() => navigate(-1)} >
                <i className="fas fa-undo"></i>
                Cancel
            </button>
        </form>
    )
}

export default ProjectForm;