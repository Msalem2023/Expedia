import { Link, json, useLoaderData } from "react-router-dom"
import "./top.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";


function Profile() {
    const info = useLoaderData()
    const user = info.userDetails[0]
    console.log(user)
    const reservations = user.reservations.map((e, i) => {
        return e.selectedroom.Img
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [image, setImage] = useState()
    const handelProfileImage = async () => {
        try {
            const token = localStorage.getItem("token")
            const formData = new FormData()
            formData.append("image", image)
            formData.append("imageName", image.name)

            console.log(formData)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'authorization': `${token}`
                }
            }
            const res = await axios.post('http://localhost:4000/user/upload', formData, config)
            console.log(res)
            window.location.href = "/MyBooking"

        } catch (error) {
            console.log(error)

        }

    }
    return (
        <>
            <section class="h-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-lg-9 col-xl-7">
                            <div class="card">
                                <div class="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#000", height: "200px" }}>
                                    <div class="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                                        <img src={`http://localhost:4000/uploads/${user.Img}`}
                                            alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                                            style={{ width: "150px", zIndex: "1" }} />
                                        <Button onClick={handleShow} type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                                            style={{ zIndex: "1" }}>
                                            Edit profile
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Modal heading</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <form encType="multipart/form-data">
                                                    <form className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <input
                                                            type="file"
                                                            placeholder="name@example.com"
                                                            autoFocus
                                                            onChange={(e) => setImage(e.target.files[0])}

                                                        />
                                                    </form>
                                                </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={handelProfileImage} type="submit">
                                                    upload
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <div class="ms-3" style={{ marginTop: "130px" }}>
                                        <h5>{user.UserName}</h5>
                                    </div>
                                </div>
                                <div class="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                                    <div class="d-flex justify-content-end text-center py-1">
                                        <div>
                                            <Link to="/MyBooking" class="small btn btn-outline-primary mb-0">Bookings</Link>
                                        </div>
                                        <div class="px-3">
                                            <Link to="/AllReviews" class="small btn btn-outline-primary mb-0">Reviews</Link>
                                        </div>
                                        <div>
                                            <Link class="small btn btn-outline-primary mb-0">Rewards</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-4 text-black">
                                    <div class="mb-5 gap-3">
                                        <p class="lead fw-normal mb-1">About</p>
                                        <div class="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                            <div>
                                                <span className="p-2">Email:</span>
                                                <span class="font-italic mb-2">{user.Email}</span>
                                            </div>
                                            <div>
                                                <span className="p-2">Phone:</span>

                                                <span class="font-italic mb-2">{user.Phone}</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <p class="lead fw-normal mb-0">Recent Booking</p>
                                        <p class="mb-0"><Link to="/MyBooking" class="text-muted">Show all</Link></p>
                                    </div>
                                    <div class="row">
                                        {reservations.map((e, i) => {
                                            return (

                                                <div class="col-6 p-2">
                                                    <img src={e}
                                                        alt="image 1" class="w-100 rounded-3" />
                                                </div>

                                            )
                                        })}

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >



















































            {/* <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="col-8 p-3 mb-5  btn btn-primary">
                            <h5>Profile</h5>
                        </div>
                        <div className="col-8 p-3 mb-5  btn btn-primary">
                            <Link to="/AllReviews" className="text-light">Reviews</Link>
                        </div>
                        <div className="col-8 p-3 mb-5  btn btn-primary">
                            <h5>Bookings</h5>
                        </div>
                        <div  className="col-8 p-3 mb-5  btn btn-primary">
                            <Link to="/MyBooking" className="text-light" > Bookings</Link>
                        </div>
                    </div>
                    <div className="col-8 shadow-lg p-3 mb-5 bg-white rounded">
                        <div>
                        </div>
                        <div>
                            <h1>Basic information</h1>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div>
                                    <h5>Name</h5>
                                    <p>{user.UserName}</p>

                                </div>
                                <div>
                                    <h5>Phone Number</h5>
                                    <p>{user.Phone}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <h5>Email</h5>
                                    <p>{user.Email}</p>
                                </div>
                                <div>
                                    <h5>Gender</h5>
                                    <p>{user.Gender}</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div> */}
        </>
    )

}
export default Profile
export async function loader() {
    const token = localStorage.getItem("token")
    const response = await fetch('http://localhost:4000/user/Profile', {
        method: 'get',
        headers: {
            'content-type': 'application/json',
            'authorization': `${token}`
        },
    })
    if (!response) {
        throw json({ message: "something went wrong" })
    } else {
        const data = response.json()
        console.log(data)

        return data

    }
}
