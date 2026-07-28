import RowComponent from "./RowComponent";

import photo08 from "../assets/photo08.jpg"
import photo09 from "../assets/photo09.jpg"

const data = [
     { imagePath: photo08, description: 'This is the first Service Offered' },
     { imagePath: photo09, description: 'This is the second Service Offered' },
];

function Services() {
    return (
        <div className="container-fluid" >
            <h1>Services</h1>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {data.map((service, index) => (
                    <RowComponent key={index} item={service} />
                ))}
            </div>
        </div>
    )
}

export default Services;