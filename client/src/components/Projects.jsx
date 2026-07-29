import RowComponent from "./RowComponent";

import photo10 from "../assets/photo10.jpg"
import photo11 from "../assets/photo11.jpg"
import photo12 from "../assets/photo12.jpg"

const data = [
    {
        imagePath: photo10,
        title: 'Title 01',
        description: 'This is the first item',
        completion: 'May 05, 2025'
    },
    {
        imagePath: photo11,
        title: 'Title 02',
        description: 'This is the second item',
        completion: 'May 05, 2025'
    },
    {
        imagePath: photo12,
        title: 'Title 03',
        description: 'This is the third item',
        completion: 'May 05, 2025'
    },
];

function Projects() {
    return (
        <div className="container-fluid" >
            <h1>My Projects</h1>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {data.map((project, index) => (
                    <RowComponent key={index} item={project} />
                ))}
            </div>
        </div>

    )
}

export default Projects;