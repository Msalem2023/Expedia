import './Property.css'
function PropertyTwo({PropertyDetails}) {
    let stars = PropertyDetails.Reviews.map((e,i)=>{
        return e.stars
    })
    let average = stars.reduce(function (sum, value) {
        return sum + value;
    }, 0) / stars.length;

console.log(average);
    console.log(PropertyDetails.Reviews.stars)
    return (
        <>
        <div className="container">
        <div className="row w-100 bg-white ">
        <div className="col-sm-12 col-md-6 ">
         <img className="w-100 rounded" src={PropertyDetails.Img} alt="pic"/>
        </div>
        <div className="col-sm-6 col-md-3">
        <img  className="w-100 rounded pb-2" src={PropertyDetails.Img} alt="pic"/>
        <img className="w-100 rounded pt-2" src={PropertyDetails.Img} alt="pic"/>
        </div>
        <div className="col-sm-6 col-md-3 ">
        <img className="w-100 rounded pb-2" src={PropertyDetails.Img} alt="pic"/>
        <img className="w-100 rounded pt-2" src={PropertyDetails.Img} alt="pic"/>
        </div>
        </div>
        </div>
            <div className="d-flex justify-content-around align-items-center">
                <div className=" ">
                    <a href="#Overview" className="link">Overview</a>
                    <a href="#Rooms" className="link ">Rooms</a>
                    <a href="#Location" className="link">Location</a>
                    <a href="#Amenties" className="link">Amenties</a>
                    <a href="#Polices" className="link">Polices</a>

                </div>
                <div className="pt-3">
                    <button className="btn btn-outline-primary">Reserve a Room</button>
                </div>
            </div>
            <div className='container' id='Overview'>
                <div className='row w-100 mt-3'>
                    <div className='col-8'>
                        <span className="badge bg-dark p-2 ">VIP Access</span>
                        <h1>{PropertyDetails.HotelName}</h1>
                        <span>Pet-friendly hotel connected to the airport in Schoenefeld with full-service spa</span>
                        <h3 className='pt-3'>{`${average>=3?average +"/"+5 + "" + "Amazing":average +"/"+5 +"" +"Awful"}`}</h3>
                        <div className='pt-3'>
                            <h2>Popular amenities</h2>
                            <div className='row pt-3'>
                                <div className='col-4'>
                                    <div className='d-flex gap-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16">
                                            <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                                            <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                                        </svg>
                                        <p>Free Wifi</p>
                                    </div>
                                    <div className='d-flex gap-3'>

                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" /></svg>
                                        <p>Pet Friendly</p>
                                    </div>


                                </div>
                                <div className='col-4'>
                                    <div className='d-flex gap-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" /></svg>
                                        <p>Restaurant</p>
                                    </div>
                                    <div className='d-flex gap-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" /></svg>
                                        <p>Gym</p>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <h3>Explore the area</h3>
                        <div className='row'>
                            <div className='col-4 w-100'>
                                <div className='d-flex gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z" /></svg>
                                    <span>Airport</span>
                                    <span>2 mins walk</span>
                                </div>
                            </div>
                            <div className='d-flex gap-3 pt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                <p>City Center</p>
                                <span>10 mins walk</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

                

        </>
    )
}
export default PropertyTwo