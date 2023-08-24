import { useState } from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function MyBookingStyle(props) {
    const [open, setOpen] = useState(false)
    const [change, setChange] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handelSubmit = async (e) => {
        // e.preventDefault()
        try {
            const token = localStorage.getItem("token")

            const res = await axios.delete(`http://localhost:4000/reservation/delete/${props.id}`, {
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
            <div onClick={() => setOpen(!open)} class='row border-secondary rounded text-decoration-none ' >
                <div className="col-sm-12 col-lg-4" >
                    <img className='rounded w-100' src={props.Img} alt='pic' />
                </div>
                <div class='col-sm-6 col-lg-4 p-2 row align-items-end'>
                    <p className="fw-bold fs-900">{props.RoomType}</p>
                    <span className={`${props.Policy === "Non-refundable" ? "text-danger" : "text-success"}`}>{props.Policy}</span>
                    <span class="d-block ">Check In:{props.checkin}</span>
                    <span class="d-block ">Chick Out {props.checkout}</span>
                    <div className="">
                        <span class="badge bg-success">8.9</span>
                        <span className="p-2">Exceptional</span>
                    </div>
                </div>
                <div className="col  align-self-end ">
                    <div className="">
                        <div className="text-end">
                            <span class="badge bg-success fs-300 fw-bold p-1 d-block">{`${props.Capacity === 1 ? props.Capacity + " " + "adult" : props.Capacity + " " + "adults"}`}</span>
                            <span className='fs-600 fw-bold text-end '>{props.Price}</span>
                            <span className="d-block">{props.Total}</span>
                            <span>includes taxes and fees</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <div className="container p-3">
                <div className="row">
                    <div className="row align-items-center">
                        <Button onClick={handleShow} className="col btn btn-danger m-3">cancel</Button>
                        <Link to={`/MyBooking/${props.id}/AddReview`} className="col btn btn-primary m-3">Add Review</Link>
                        <button onClick={() => setChange(!change)} className="col btn btn-success">change</button>
                        {change && <div className="d-flex justify-content-around">
                            <Link to={`/MyBooking/${props.id}/EditDateAndOptions`} className=" btn btn-outline-primary"> Date and Options</Link>
                            <Link to={`/MyBooking/${props.id}/EditRoom`} className="btn btn-outline-primary"> Room</Link>
                            <Link to={`/MyBooking/${props.id}/EditGuestInformation`} className=" btn btn-outline-primary ">Guest information</Link>
                        </div>}
                    </div>

                </div>

            </div>}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm your cancelation</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center fw-bold fs-lg text-danger">
                Are You Sure?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handelSubmit} variant="danger">Yes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}
export default MyBookingStyle