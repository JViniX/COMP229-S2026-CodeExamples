function RowComponent({item}){
    return(
        <div className="row">
            <img src={item.imagePath} alt="Item Image" />
            <div className="text-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.completion}</p>
            </div>
        </div>
    )
}

export default RowComponent;