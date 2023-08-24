import axios from 'axios'
import React, { useState } from 'react'
import { Link, useParams, useRouteLoaderData } from 'react-router-dom'


function Reviews() {
    const [Rate, setRate] = useState()
    const [Review, setReview] = useState()
    const BookingId = useParams().BookingId
    const MyRservation = useRouteLoaderData("BookingDetails")
    const MyReservationDetails = MyRservation.booking
    const filterbyId = MyReservationDetails.filter(e => e._id === BookingId)[0]
    const HotelId = filterbyId.selectedroom.HotelId

    const handelSubmit = async (e) => {
        try {
            const token = localStorage.getItem("token")

            const res = await axios.post(`http://localhost:4000/reservation/addreview`, { Rate, Review, HotelId, BookingId }, {
                headers: {
                    'content-type': 'application/json',
                    'authorization': `${token}`
                }
            })
            console.log(res)
            window.location.href = "/MyBooking"

        } catch (error) {
            console.log(error)

        }
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="col-8 p-3 mb-5  btn btn-light">
                        <Link to='/AllReviews'>All Reviews</Link>
                    </div>
                </div>
                <div className='col'>
                    <div className="d-flex justify-content-center gap-3 flex-row-reverse">
                        <div>
                            <svg onClick={() => setRate(5)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${Rate == 5 ? "yellow" : "currentColor"}`} class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                        </div>
                        <div>
                            <svg onClick={() => setRate(4)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${Rate >= 4 ? "yellow" : "currentColor"}`} class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div> <div>
                            <svg onClick={() => setRate(3)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${Rate >= 3 ? "yellow" : "currentColor"}`} class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>

                        </div> <div>
                            <svg onClick={() => setRate(2)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${Rate >= 2 ? "yellow" : "currentColor"}`} class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div> <div>
                            <svg onClick={() => setRate(1)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={`${Rate >= 1? "yellow" : "currentColor"}`} class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <div className='col'>
                            <h3>Write A Review</h3>
                            <div class="form-group">
                                <label className='fs-4' for="exampleFormControlTextarea1">Write your Review in English or German. (optional)</label>
                                <textarea class="form-control mt-2" onChange={(e) => setReview(e.target.value)} id="exampleFormControlTextarea1" rows="3" name='specialRequest'></textarea>
                            </div>
                            <button onClick={handelSubmit} className='btn btn-primary w-25 offset-md-4 mt-2'>Submit</button>


                        </div>


                    </div>
                </div>
            </div>
        </div>

    )

}

export default Reviews
