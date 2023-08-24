import { json, useRouteLoaderData } from "react-router-dom"
import MyBookingStyle from "./MyBookingStyle.js"

function MyBooking() {
    const MyRservation = useRouteLoaderData("BookingDetails")
    const ListOfReservations = MyRservation.booking
    console.log(ListOfReservations)
    return (
        <>
            <div className="container ">
                <div className="row ">

                    {ListOfReservations.map((e) => {
                        return (<div className="col-12 m-2"> <MyBookingStyle id={e._id}
                            Img={e.selectedroom.Img[0]}
                            Total={e.total}
                            Price={e.subtotal}
                            RoomType={e.selectedroom.RoomType}
                            Policy={e.selectedroom.Policy}
                            checkin={e.checkin}
                            checkout={e.checkout}
                            Capacity={e.option.adult}
                            HotelId={e.selectedroom.HotelId} /></div>)
                    })}

                </div>
            </div>



        </>
    )

}
export default MyBooking
export async function loader() {
    const token = localStorage.getItem("token")
    const response = await fetch('http://localhost:4000/reservation/MyBooking', {
        method: 'get',
        headers: {
            'content-type': 'application/json',
            'authorization': `${token}`
        },
    })
    console.log(response)
    if (!response) {
        throw json({ message: "something went wrong" })
    } else {
        const data = await response.json()
        console.log(data)

        return data

    }
}
