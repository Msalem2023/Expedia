import axios from "axios"
import { useParams, useRouteLoaderData } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import UpdateRoom from "./updateRoom.js"

function EditRoom() {
    const MyRservation = useRouteLoaderData("BookingDetails")
    const MyReservationDetails = MyRservation.booking
    const reservationId = useParams().BookingId
    const filterbyId = MyReservationDetails.filter(e => e._id === reservationId)[0]
    console.log(filterbyId)
    const id = filterbyId.selectedroom.HotelId
    console.log(id)
    const token = localStorage.getItem("token")
    const { data,isError,isLoading } = useQuery(["rooms"], () => {
        return axios.get(`http://localhost:4000/rooms/update/${id}`, {
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `${token}`,
                    }
                    
                }).then((res)=>res.data.Hotel)

    })
    console.log(data)
    if(isError){
        console.log(isError)
        return<h1>ooops</h1>
    }
    if(isLoading){
        return<h1>looding</h1>
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    {data.map((e, i) => {
                        return (
                            <div className="col-4">
                                <UpdateRoom
                                    id={e._id}
                                    Img={e.Img}
                                    RoomType={e.RoomType}
                                    Price={e.Price}
                                    NumberOfBed={e.NumberOfBed}
                                    Amenities={e.Amenities}
                                    Policy={e.Policy}
                                    Payment={e.Payment}
                                    TypeOfBed={e.TypeOfBed}
                                    Capacity={e.Capacity}
                                    Availablility={e.Availablility}
                                    reservationId={reservationId}


                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}
export default EditRoom

