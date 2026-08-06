function MyModal({ message }) {
    return (
        <div
            className="modal fade show d-block"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="modal-dialog modal-dialog-centered" >
                <div className="modal-content" >
                    <div className="modal-body text-center">
                        <div className="spinner-border spinner-border-sm" role="status" />
                        <span className="ms-2">{message}</span>
                    </div>                
                </div>
            </div>
        </div>
    );
}

export default MyModal;