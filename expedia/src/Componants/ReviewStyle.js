import "./top.css"
function ReviewStyle(props) {
    console.log(props.Stars)
    return(
    <>
                <div class="row d-flex justify-content-center m-5" >
                    <div class="col-md-10">
                        <div class="card">
                            <div class="card-body m-3">
                                <div class="row">
                                    <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                                        <img src={props.pic}
                                            class="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
                                    </div>
                                    <div class="col-lg-8">

                                        <p class="text-muted fw-light mb-4">

                                            {props.review}
                                        </p>
                                        <p class="fw-bold lead mb-2"><strong>{props.username}</strong></p>
                                        <p class="fw-bold text-muted mb-0">{props.Stars}</p>
                                        <ul class="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${props.Stars >= 1 ? "yellow" : "currentColor"}`} class="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${props.Stars >= 2 ? "yellow" : "currentColor"}`} class="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${props.Stars >= 3 ? "yellow" : "currentColor"}`} class="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${props.Stars >= 4 ? "yellow" : "currentColor"}`} class="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${props.Stars === 5 ? "yellow" : "currentColor"}`} class="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
    </>
    )

}
export default ReviewStyle