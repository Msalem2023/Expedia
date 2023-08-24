// import PropertyTwo from "./PropertyTwo.js"
import { json, useLoaderData } from "react-router-dom"
import RoomList from "./RoomList.js"
import "./top.css"
import PropertyTwo from "./PropertyTwo.js"
import PropertyReview from "./HotelReview.js"







function Property() {
    const propertyInfo = useLoaderData()
    const propertyData = propertyInfo.Hotel
    console.log(propertyData)
    const PropertyRatig = propertyData.map((e, i) => {
        return e.HotelId.Reviews
    })[0]
    const PropertyDetails = propertyData.map((e, i) => {
        return e.HotelId
    })[0]
    console.log(PropertyDetails)



    return (
        <>
            {/* <Search/> */}

            <div className="container">
                <div className="row ">
                    <PropertyTwo PropertyDetails={PropertyDetails} />
                    {propertyData.map((e, i) => {
                        return (
                            <div className="col-sm-12 col-md-6 col-lg-4 p-2">
                                <RoomList
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

                                />
                            </div>
                        )
                    })}
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-10 col-xl-8 text-center">
                            <h3 class="mb-4">Random Reviews</h3>
                            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                                numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                                quisquam eum porro a pariatur veniam.
                            </p>
                        </div>
                    </div>
                    <section className="container">
                <div class="row">
                    
                    {PropertyRatig.map((e, i) => {
                        return (
                            <div class="col-sm-12 col-md-6 col-lg-4">


                            <PropertyReview
                                Stars={e.stars}
                                review={e.Review}



                            />
                            </div>
                        )
                    })}
                    </div>
                    </section>
                </div>

            </div>



        </>
    )
}
export default Property
export async function loader({ request, params }) {
    const id = params.HotelId
    console.log(params)
    const response = await fetch(`http://localhost:4000/rooms/${id}`)

    if (!response) {
        throw json({ message: "something went wrong" })
    }
    const roomData = await response.json()
    console.log(roomData)

    return roomData

}