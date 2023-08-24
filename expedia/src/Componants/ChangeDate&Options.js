import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { useState } from 'react'
import { DateRange } from 'react-date-range';
import { format} from 'date-fns';
import './Property.css'
import { useParams, useRouteLoaderData } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const MyRservation = useRouteLoaderData("BookingDetails")
    const MyReservationDetails = MyRservation.booking
    const reservationId=useParams().BookingId
    const filterbyId=MyReservationDetails.filter(e=>e._id===reservationId)[0]

  const [openDate, setOpenDate] = useState(false)
  const [openOption, setOpenOption] = useState(false)
  


  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1

  })

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const handelOptions = (name, operation) => {
    setOption((prev) => {
        return { ...prev, [name]: operation === 'i' ? option[name] + 1 : option[name] - 1 }

    })

}
    const updateDate =new Intl.DateTimeFormat("en-us",{dateStyle:"full"})
    let checkin=date[0].startDate
    checkin=updateDate.format(checkin)
    let checkout=date[0].endDate
    checkout=updateDate.format(checkout)

const handelSubmit=async(e)=>{
  try {
      const token = localStorage.getItem("token")

      const res=await axios.put(`http://localhost:4000/reservation/EditDate/${reservationId}`,{checkin,checkout,option},{headers:{
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
      <div  className='container p-2 shadow-sm p-3 mb-5 bg-white rounded'>
        <div className='row'>
          <div className='col-5'>
            <div className='position-relative'>
            <input onClick={() => setOpenDate(!openDate)}  className='headerSearchInput' placeholder={`${format(date[0].startDate, "MM-dd-yyyy")} - ${format(date[0].endDate, "MM-dd-yyyy")}`} defaultValue={`${filterbyId.checkin}-${filterbyId.checkout}`}/>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className=" w-100"
            />}
            </div>
          </div>


          <div className='col-5'>
                        <div className='position-relative'>
                            <input onClick={() => setOpenOption(!openOption)} className='headerSearchInput' placeholder={`${option.adult} adult. ${option.children} children.${option.room} room `} defaultValue={`${filterbyId.option.adult} adult. ${filterbyId.option.children} children.${filterbyId.option.room} room `} />
                            {openOption && <div>
                                <div className='optionItem'>
                                    <span className='optionText'>Adults</span>
                                    <div className='optionCounter'>
                                        <button type='button' disabled={option.adult <= 0} className='optionCounterButton' onClick={() => handelOptions("adult", "d")}>-</button>
                                        <span className='optionCounterNumber'>{option.adult}</span>
                                        <button className='optionCounterButton' onClick={() => handelOptions("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText'>Children</span>
                                    <div className='optionCounter'>
                                        <button className='optionCounterButton' onClick={() => handelOptions("children", "d")}>-</button>
                                        <span className='optionCounterNumber'>{option.children}</span>
                                        <button className='optionCounterButton' onClick={() => handelOptions("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText'>Rooms</span>
                                    <div className='optionCounter'>
                                        <button className='optionCounterButton' onClick={() => handelOptions("room", "d")}>-</button>
                                        <span className='optionCounterNumber'>{option.room}</span>
                                        <button className='optionCounterButton' onClick={() => handelOptions("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>


          <div className='col-2'>
            <button onClick={handelSubmit} className='btn btn-primary w-100'>Search</button>
          </div>
        </div>
      </div>




    </>
  )
}
export default Update
