import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { list } from '../../datasource/api-projects';
import ListItemProject from './ListItemProject';

function ListProjet() {
    let [projectList, setProjectList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [errorMsg, setErrorMsg] = useState('')

    const loadProjects = () => {
        list()
            .then((res) => {
                if (res.success) {
                    setProjectList(res.data || []);
                } else {
                    setErrorMsg(res.message);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }

    useEffect(() => {
        loadProjects();
    }, [])


    const handleRemoved = () => {
        loadProjects();
    };

    return (
        <main className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <h1>Project List</h1>
                <p className="flash"><span>{errorMsg}</span></p>
                <div>
                    <Link to="/admin/projects/add" className="btn btn-primary align-self-end" role="button">
                        <i className="fas fa-plus-circle"></i>
                        Add a new Item
                    </Link>
                </div>
                <br />
                <br />
                <div className="table-responsive" >
                    {isLoading && <div>Loading...</div>}
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
                                {projectList.map(projectItem =>
                                    <ListItemProject
                                        key={projectItem.id}
                                        project={projectItem}
                                        onRemoved={handleRemoved} />
                                )}
                            </tbody>
                        </table>}
                </div>
            </div>
        </main>
    );
}

export default ListProjet;