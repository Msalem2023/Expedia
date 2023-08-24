import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import "./top.css"
import Top from "./TopDeals.js"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function Slider() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const { data, isError, isLoading } = useQuery(["params"], () => {
        return axios.post('http://localhost:4000/Hotel/TopDeals').then((res) => res.data.data)

    })
    console.log(data)
    if (isError) {
        return <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>
                OOOOPS something went wrong
            </div>
        </div>
    }
    if (isLoading) {
        return <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }
   
    const slider = data?.map((e, i) => {
        return (
            <Top
                id={e._id}
                Img={e.Img}
                Total={e.Total}
                Price={e.Price}
                HotelName={e.HotelName}
                Policy={e.Policy}
                Payment={e.Payment}
                Availability={e.Availability}

            />
        )

    })



    return (
        <>
            <div id="intro col-sm-12"
                class="bg-image shadow-1-strong"
                style={{backgroundImage: "url('https://r-xx.bstatic.com/xdata/images/xphoto/714x300/204490944.jpeg?k=f1dbbec42645c0ed1dc25f1e0878ab449b461baf936dcd971ad8c63bf13d0dc6&o=')",backgroundRepeat:"no-repeat",backgroundSize:"cover", height: "500px"}}>
                <div class="mask text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                    <div class="container d-flex align-items-center justify-content-center text-center h-100">
                        <div class="text-white">
                            <h1 class="mb-3">the great gateway,your way</h1>
                            <h4 class="mb-4">Save at least 15% on your stays worldwide</h4>
                            <a class="btn btn-outline-light btn-lg mb-3" href="#!" role="button">See the promotional offer
                                <i class="fas fa-gem ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
                </div>




                <Carousel responsive={responsive}>{slider}</Carousel>;








              
            </>
            )
}
            export default Slider