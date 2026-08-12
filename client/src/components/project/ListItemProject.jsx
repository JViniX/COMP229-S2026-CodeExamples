import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { remove } from '../../datasource/api-projects';

function ListItemProject({ project, onRemoved }) {

    const handleRemove = (id) => {
        if (window.confirm("Are you sure you want to remove this project?")) {
            remove(id)
                .then((res) => {
                    if (res.success) {
                        alert(res.message);
                        onRemoved();
                    }
                    else {
                        alert(res.message);
                    }
                })
                .catch((err) => {
                    alert(err.message);
                    console.log(err);
                });
        }
    };

    return (
        <tr >
            <td className="text-center">
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.title || 'Project image'}
                        style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                ) : '-'}
            </td>
            <td className="text-center"> {project.title || ''} </td>
            <td className="text-center"> {project.completion ? new Date(project.completion).toLocaleDateString() : ''} </td>
            <td className="text-center"> {project.description || ''} </td>
            <td className="text-center">
                <Link className="btn bg-primary btn-primary btn-sm" to={'/admin/project/edit/' + project.id}>
                    <i className="fas fa-pencil-alt"></i>
                </Link>
            </td>
            <td className="text-center">
                <button
                    className="btn bg-danger btn-danger btn-sm"
                    onClick={() => handleRemove(project.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    );
}

export default ListItemProject;