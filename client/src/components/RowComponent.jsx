function RowComponent({item}){
    return(
        <div className="card" style={{ width: 400 }}>
            <img src={item.imagePath} alt="Item Image" />
            <div className="card-body">
                <h3 class="card-title">{item.title}</h3>
                <p class="card-text">{item.description}</p>
                <p class="card-text">{item.completion}</p>
            </div>
        </div>
    )
}

export default RowComponent;