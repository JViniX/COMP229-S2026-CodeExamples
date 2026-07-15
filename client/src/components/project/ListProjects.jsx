import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { list } from '../../datasource/api-projects';

function ListProjet() {
    let [projectList, setProjectList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadProjects = () => {
        list()
            .then((res) => {
                if (res.success) {
                    setProjectList(res.data || []);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            });
    }

    useEffect(() => {
        loadProjects();
    }, [])

    
    const handleRemoved = (id) => {
        loadProject();
    };

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && console.log("Project List: ", projectList)}
            {!isLoading && projectList.length === 0 && <div>No projects found.</div>}
            {!isLoading && projectList.length > 0 &&
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        {/* -- Header Row-- */}
                        <tr>
                            <th className="text-center">Title</th>
                            <th className="text-center">Completion</th>
                            <th className="text-center">Description</th>
                            <th className="text-center" colSpan="3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* -- Repeatable Template Row -- */}
                        {projectList.map(project =>
                            <tr >
                                <td className="text-center"> {project.title || ''} </td>
                                <td className="text-center"> {project.completion ? new Date(project.completion).toLocaleDateString() : ''} </td>
                                <td className="text-center"> {project.description || ''} </td>
                                <td className="text-center">
                                    <Link className="btn bg-primary btn-primary btn-sm" to={'/project/edit/' + project.id}>
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
                        )}
                    </tbody>
                </table>}
        </div>
    );
}

export default ListProjet;