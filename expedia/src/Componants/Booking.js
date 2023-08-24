import { useContext, useState } from 'react'
import './Profile.css'
import { URLContext } from '../context/queryContext.js'
import { json,us, useLoaderData } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'
import axios from 'axios'

function Booking() {
    const[FirstName,setFirstName]=useState()
    const[LastName,setLastName]=useState()
    const[Phone,setPhone]=useState()
    const[Email,setEmail]=useState()

    const{destination,date,option}=useContext(URLContext)
    console.log(date)
    console.log(option)
    const data=useLoaderData()
    const selectedroom=data.room[0]
    console.log(selectedroom)
    const day = 1000*60*60*24
    function lengthOfStay(CheckIn,CheckOut) {
        const timediff=Math.abs(CheckOut.getTime()-CheckIn.getTime())
        const diffDays=Math.ceil(timediff/day)
        return diffDays
        
    }
    const nights=lengthOfStay(date[0].startDate,date[0].endDate)
    console.log(nights)
    let checkin=date[0].startDate
    const format =new Intl.DateTimeFormat("en-us",{dateStyle:"full"})
    checkin=format.format(checkin)
    let checkout=date[0].endDate
    checkout=format.format(checkout)
    const subtotal=nights*selectedroom.Price
    const taxes=subtotal*0.10
    const localtaxes=subtotal*0.05
    const total=subtotal+taxes+localtaxes

    const handelSubmit=async(e)=>{
        try {
            const token = localStorage.getItem("token")

            const res=await axios.post('http://localhost:4000/reservation/addOne',{FirstName,LastName,Phone,Email,destination,checkin,checkout,option,subtotal,total,taxes,localtaxes,selectedroom},{headers:{
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
            <div className="container">
                <div className="row mb-2">
                    <div className="col-12 shadow-lg p-3 bg-light">
                        <h5>{selectedroom.Policy}</h5>

                    </div>
                    <div className="col-7 shadow-lg p-2 mt-2  bg-light">
                        <h5>Who's checking in?</h5>
                        <p>Room {selectedroom.length}: {option.adult} Adults 1 {selectedroom.TypeOfBed} Non-smoking</p>
                        <div class="wrapper w-50 d-flex">
                            <input type="text" onChange={(e)=>setFirstName(e.target.value)} class="inputText" required />
                            <span class="label">First name</span>
                        </div>
                        <div class="wrapper w-50">
                            <input type="text"  onChange={(e)=>setLastName(e.target.value)} class="inputText" required />
                            <span class="label">Last name</span>
                        </div>
                        <div class="wrapper w-50">
                            <input type="text"  onChange={(e)=>setPhone(e.target.value)} class="inputText" required />
                            <span class="label">Phone Number</span>
                        </div>
                        <div class="wrapper w-50">
                            <input type="text"  onChange={(e)=>setEmail(e.target.value)} class="inputText" required />
                            <span class="label">Email</span>
                        </div>
                        <div>
                            <p className='pt-3'>
                                Special/accessibility requests (e.g. roll-away beds, late check-in, and accessible rooms) are not guaranteed. If you don't hear back from the property, you may want to contact them directly to confirm. The property may charge a fee for certain special requests.
                            </p>
                            <div class="form-group">
                                <label className='fs-4' for="exampleFormControlTextarea1">Please write your requests in English or German. (optional)</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='specialRequest'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg p-2 m-2 bg light">
                        <div>

                            <img className="w-100" src={selectedroom.Img} alt="hotelimag" />
                            <p>{destination}</p>
                        </div>
                        <div>
                            <span>9.4/10 Wonderful (29 reviews)</span>
                            <span className="d-block">Guests rated this property 9.6/10 for cleanliness</span>
                            <p>{selectedroom.length} Room: {selectedroom.RoomType}, 1 {selectedroom.TypeOfBed}, Non Smoking</p>
                            <p>{selectedroom.policy}</p>
                            <span className='d-block'>Check in :{checkin}</span>
                            <span className='d-block'>Check Out:{checkout}</span>
                            <span>{nights}-night stay</span>
                        </div>

                    </div>

                </div>
                <div className='row'>

                    <div className="col-7 shadow-lg p-2 mt-2  bg-light">
                        <h5>Important information</h5>
                        <ul>
                            <li>Cancellations or changes made after 11:59pm (property local time) on Aug 25, 2023 or no-shows are subject to a property fee equal to 90% of the total amount paid for the reservation.</li>
                            <li>Front desk staff will greet guests on arrival</li>
                            <li>You'll be asked to pay the following charges at the property:</li>
                            <ul>

                                <li>A city tax is imposed by the city of Berlin. Business travelers with proof of business-related travel are exempt from this tax. For more details, please contact the property using the information on the reservation confirmation received after booking.</li>
                                <li>An effective city/local tax rate of 4.67 percent will be charged</li>
                            </ul>
                        </ul>
                        <button onClick={handelSubmit} className='btn btn-primary w-25'>Book this stay</button>

                    </div>
                    <div className='col shadow-lg p-2 m-2  bg-light' >
                        <h5 className=' border-bottom p-2'>Price details</h5>

                        <div className='d-flex justify-content-between'>
                            <p>{selectedroom.length} room x {nights} nights</p>
                            <p>${subtotal}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Taxes</p>
                            <p>${taxes}</p>
                        </div>
                        <div className='d-flex justify-content-between border-bottom'>
                            <p>Local tax</p>
                            <p>${localtaxes}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>total</p>
                            <p>${total}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Pay now</p>
                            <p>0</p>
                        </div><div className='d-flex justify-content-between'>
                            <p>Pay at the Propery</p>
                            <p>${total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Booking
export async function loader({request,params}) {
    const id = params.roomId
    console.log(id)
    const response = await fetch(`http://localhost:4000/rooms/Booking/${id}`)

    if (!response) {
        throw json({ message: "something went wrong" })
    }
    const roomData = await response.json()
    console.log(roomData)

    return roomData

}