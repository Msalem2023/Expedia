import { useParams, useRouteLoaderData } from 'react-router-dom'
import './Profile.css'
import axios from 'axios'
import { useState } from 'react'
function BasicInfo() {
    const MyRservation = useRouteLoaderData("BookingDetails")
    const MyReservationDetails = MyRservation.booking
    const reservationId = useParams().BookingId
    const filterbyId = MyReservationDetails.filter(e => e._id === reservationId)[0]
    const [FirstName,setFirstName]=useState()
    const [LastName,setLastName]=useState()
    const [Email,setEmail]=useState()

    const handelSubmit=async(e)=>{
        try {
            const token = localStorage.getItem("token")

            const res=await axios.post(`http://localhost:4000/reservation/EditInfo/${reservationId}`,{FirstName,LastName,Email},{headers:{
                'content-type': 'application/json',
                'authorization': `${token}`}
            })
            console.log(res)
            window.location.href="/MyBooking"
            
        } catch (error) {
            console.log(error)
            
        }
    }

    return (
        <>
            <form  className="container">
                <div className="row justify-content-center">
                    <div className="col-6 shadow-lg p-3 mb-5 bg-white rounded">
                        <h1>Basic Information</h1>
                        <div>
                            <h3>Full name</h3>
                            <div class="wrapper">
                                <input type="text" onChange={(e)=>setFirstName(e.target.value)} class="inputText" required defaultValue={filterbyId.FirstName} />
                                <span class="label">First name</span>
                            </div>
                            <div class="wrapper">
                                <input type="text" onChange={(e)=>setLastName(e.target.value)} class="inputText" required defaultValue={filterbyId.LastName} />
                                <span class="label">Last name</span>
                            </div>
                        </div>
                        <h3 className='my-3'>Your Email</h3>
                        <div class="wrapper">
                            <input type="text" onChange={(e)=>setEmail(e.target.value)} class="inputText" required defaultValue={filterbyId.Email} />
                            <span class="label">Email</span>
                        </div>
                        <button onClick={handelSubmit} className='btn btn-primary w-25 offset-md-4 mt-2'>Update</button>
                    </div>
                </div>
            </form>
        </>
    )

}
export default BasicInfo
// export const action = async ({ request, params }) => {
//     const id = params.BookingId
//     const token = localStorage.getItem("token")
//     const data = await request.formData()
//     const enteredData = {
//         Email: data.get('Email'),
//         FirstName: data.get('FirstName'),
//         LastName: data.get('LastName')

//     }
//     console.log(enteredData)
//     const response = await axios.post(`http://localhost:4000/reservation/EditInfo/${id}`, {
//         headers: {
//             'content-type': 'application/json',
//             'authorization': `${token}`,
//         },
//         body: JSON.stringify(enteredData)


//     })

//     if (!response) {
//         throw json({ message: "something went wrong" })
//     } else {
//         const info = await response.json()
//         console.log(info)

//         //   window.location.href="/Profile"

//         return info

//     }


// }