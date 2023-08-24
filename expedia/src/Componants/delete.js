import axios from "axios"
import { useParams, useRouteLoaderData } from "react-router-dom"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyBookingStyle from "./MyBookingStyle.js";


function Delete() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const MyRservation = useRouteLoaderData("BookingDetails")
    const MyReservationDetails = MyRservation.booking
    const reservationId = useParams().BookingId
    const filterbyId = MyReservationDetails.filter(e => e._id === reservationId)[0]
    const handelSubmit = async (e) => {
        // e.preventDefault()
        try {
            const token = localStorage.getItem("token")

            const res = await axios.put(`http://localhost:4000/reservation/EditDate/${reservationId}`, {
                headers: {
                    'content-type': 'application/json',
                    'authorization': `${token}`
                }
            })
            console.log(res)
            window.location.href = "/MyBooking"

        } catch (error) {
            console.log(error)

        }
    }
    return (
        <>
        <div className="container ">
                <div className="row ">

                
                        <MyBookingStyle/>
                            

                </div>
            </div>
            <Button variant="danger" onClick={handleShow}>delete</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Delete