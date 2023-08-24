import SearchResult from "./SearchResult.js"
import { useContext, useRef, useState } from "react"
import { URLContext } from "../context/queryContext.js"
import useFetch from "../hooks/useFetch.js"
function Filter() {
    const { destination } = useContext(URLContext)
    const[Property,setProperty]=useState()
    const[Price,setPrice]=useState()
    const[Meal,setMeal]=useState({Meal:""})
    const[Policy,setPolicy]=useState({Policy:""})
    const[Amenites,setAmenites]=useState({Amenites:""})

    

    



   
    function filter(e, val) {        

        let value = e.target.value
       

        if (e.target.checked) {
           
            if (val === "Meal") {
                setMeal(value)

            } else if (val === "Policy") {
                setPolicy(value)

            } else {
                setAmenites(value)
            }
        }else{
                if (val === "Meal") {
                    setMeal("")
    
                } else if (val === "Policy") {
                    setPolicy("")
    
                } else {
                    setAmenites("")
                }
        }
}



// }
const { data, error, loading, reFetch } = useFetch(`http://localhost:4000/Hotel/advancedSearch?destination=${destination}&Price=${Price}&Property=${Property}&Meal=${Meal}&Amenities=${Amenites}&Policy=${Policy}`)
console.log(data)
const handelClick = () => {

    reFetch()
}
console.log(data)
if (loading) {
    return <p>Loading...</p>
}
if (error) {
    return console.log(error)
}


return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 shadow-sm p-3 mb-5 bg-light rounded">

                    <div className="col-4 w-100">
                        <div>
                            <h5>Search by property name</h5>
                        </div>
                        <div>
                            <input  type="text"  onChange={(e) => setProperty(e.target.value)} class="w-100 rounded border border-primary" required />
                        </div>
                        <div className="pt-3">
                            <h5>Price Per Night</h5>
                        </div>
                        <div className="rounded">
                            <input type="range"  onChange={(e) => setPrice(e.target.value)} class="form-range" min="100" max="1000" step={100} id="customRange2" />
                        </div>
                        <div className="pt-3 w-100">
                            <div>
                                <h5>Meal plans available</h5>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value='Breakfast' onChange={(e) => filter(e, "Meal")} id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Breakfast included  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="Half-board" onChange={(e) => filter(e, "Meal")} id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Half-board</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" onChange={(e) => filter(e, "Meal")} value="All inclusive" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">All inclusive</label>
                            </div>
                        </div>
                        <div className="pt-3 w-100">
                            <div>
                                <h5>Payment type</h5>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" onChange={(e) => filter(e, "Policy")} value="refundable" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Fully Refundable</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" onChange={(e) => filter(e, "Policy")} type="checkbox" value="Non-refundable" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Non-refundable</label>
                            </div>
                        </div>
                        <div className="pt-3 w-100">
                            <div>
                                <h5>Amenties</h5>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" onChange={(e) => filter(e, "Amenities")} value="Pool" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Pool</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" onChange={(e) => filter(e, "Amenities")} type="checkbox" value="Parking" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Parking</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" onChange={(e) => filter(e, "Amenities")} value="Gym" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Gym</label>
                            </div>
                        </div>
                        <div>
                            <button className="rounded btn btn-primary"onClick={handelClick}>search</button>
                        </div>


                    </div>

                </div>
                <div className="col-sm-12 col-md">

                    {data.map((e) => {
                        return (<div className="card testimonial-card p-2 m-2"> <SearchResult id={e._id}
                            Img={e.Img}
                            Total={e.Total}
                            Price={e.Price}
                            HotelName={e.HotelName}
                            Policy={e.Policy}
                            Payment={e.Payment}
                            Capacity={e.Capacity} /></div>)
                    })}
                </div>
            </div>
        </div>
    </>

)

}
export default Filter