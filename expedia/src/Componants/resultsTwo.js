import { useSearchParams, Link, json } from "react-router-dom";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { useContext, useState } from 'react'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import './Property.css'
import { URLContext } from "../context/queryContext.js";
import Slider from "./slider.js";





function ResultsTwo() {

    const [searchParams, setSearchParams] = useSearchParams()
    const destination = searchParams.get('destination')

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
        dispatch({ type: "Change", payload: { destination, date, option } })


    }
    const { dispatch } = useContext(URLContext)
    const handelSearch = event => {
        const destination = (event.target.value)
        dispatch({ type: "Change", payload: { destination, date, option } })

        if (destination) {
            setSearchParams({ destination: destination})



        } else {
            setSearchParams({})

        }


    }





    return (
        <>
            <div className='container p-2 shadow-sm p-3 mb-5 bg-white rounded'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-3'>
                        <input className='headerSearchInput' value={destination} onChange={handelSearch} placeholder='Destination' />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='position-relative'>
                            <input onClick={() => setOpenDate(!openDate)} className='headerSearchInput' placeholder={`${format(date[0].startDate, "MM-dd-yyyy")} - ${format(date[0].endDate, "MM-dd-yyyy")}`} />
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className=" w-100"
                            />}
                        </div>
                    </div>


                    <div className='col-sm-12 col-md-6 col-lg-3'>
                        <div className='position-relative'>
                            <input onClick={() => setOpenOption(!openOption)} className='headerSearchInput' placeholder={`${option.adult} adult. ${option.children} children.${option.room} room `} />
                            {openOption && <div>
                                <div className='optionItem'>
                                    <span className='optionText'>Adults</span>
                                    <div className='optionCounter'>
                                        <button disabled={option.adult <= 0} className='optionCounterButton' onClick={() => handelOptions("adult", "d")}>-</button>
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
                        <Link to='/Filter' className='btn btn-primary w-100'>Search</Link>
                    </div>
                </div>

            </div>
            <div className="container">

                <div className="row">
                    <div className="col-12">

                        <Slider />
                    </div>


                </div>
            </div>
        </>

    )

}
export default ResultsTwo
