import { Link } from "react-router-dom";

function RoomList(props) {
 console.log(props.Stars)


    return (
        <>
                    <div className="card testimonial-card p-2">

                        <div>
                            <img
                                className="w-100  rounded fluid"
                                src={props.Img}
                                alt="Third slide"
                            />
                        </div>
                        <div>
                            <h5>{props.RoomType}</h5>
                        </div>
                        <div className='d-flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>
                            <span >{props.TypeOfBed}</span>
                        </div>
                        <div className='d-flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                            <span > sleeps {props.Capacity} </span>
                        </div>
                        <div className='d-flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
                            <span >Free Wifi</span>
                        </div>
                        <div className='d-flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            <span >{props.Payment}</span>
                        </div>
                        <div className='d-flex gap-3'>
                            <span className='text-primary'> click here for more details ... </span>
                        </div>
                        <div className='mt-3'>
                            <p>Extras</p>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    <div className='d-flex gap-5'>
                                        <p>No Extras</p>
                                        <p>$0</p>

                                    </div>
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    <div className='d-flex gap-5'>
                                        <p>breakfast</p>
                                        <p>$33</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between pt-5'>
                            <p>{props.Price}</p>
                            <Link to={`/room/${props.id}`} className={`${props.Availablility === false ? "btn btn-danger" : "btn btn-primary"}`} disabled={props.Availablility===false}>{`${props.Availablility===false?"Sold Out":"Reserve"}`}</Link>
                        </div>
                    </div>
        </>
    )

}
export default RoomList