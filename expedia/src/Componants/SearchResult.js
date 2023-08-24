import { Link } from "react-router-dom"

function SearchResult(props) {
        return (
        <>
            <Link to={`/${props.id}`} class='row   text-decoration-none  '>
                <div className="col-sm-12  col-lg-4" >
                    <img className='img-fluid rounded' src={props.Img} alt='pic' />
                </div>
                <div class='col row align-items-end'>
                     <p className="fw-bold fs-900">{props.HotelName}</p>
                    <span className='text-success'>{props.Policy}</span>
                    <span class="text-success d-block ">{props.Payment}</span>
                     <div className="">
                    <span class="badge bg-success">8.9</span>
                    <span className="p-2">Exceptional</span>
                    </div>
                </div>
                 <div className="col  align-self-end ">
                    <div className="">
                     <div className="text-end">
                     <span class="badge bg-success fs-300 fw-bold p-1 d-block">{props.Capacity}</span>
                     <span className='fs-600 fw-bold text-end '>{props.Price}</span>
                     <span className="d-block">{props.Total}</span>
                     <span>includes taxes and fees</span>
                     </div>
                    </div>
                </div>
                    </Link>
        </>
    )
}
export default SearchResult