function Top(props) {
    return(
        <>
                <div className="w-100 shadow-sm p-1 mb-5 bg-white rounded" >
                    <div>
                        <img className="w-100 rounded" src={props.Img} alt="Hotel" />
                    </div>
                    <div className="p-2">
                        <span className="fs-600 fw-bold d-block">{props.HotelName}</span>
                        <span>{props.Policy}</span>
                    </div>
                    <div className="p-2">
                    <h5>{props.price}</h5>
                    <span class="badge bg-success">30% off</span>
                    </div>

                </div>
        </>
    )
}
export default Top