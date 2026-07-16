import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectForm({ project = {}, handleChange, handleSubmit }) {
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit} className="form">
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