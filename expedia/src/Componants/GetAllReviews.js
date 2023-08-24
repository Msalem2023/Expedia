import axios from "axios"
import { json, useLoaderData } from "react-router-dom"
import ReviewStyle from "./ReviewStyle.js"

function GetAllReviews() {
    const MyReviews = useLoaderData()
    const Img = MyReviews[0].userId.Img
    console.log(Img)
    const UserName = MyReviews[0].userId.UserName

    let Reviews = MyReviews.map((e,i)=>{
        return [...e.Reviews]
    })
    let test=[]
    for (let i = 0; i < Reviews.length; i++) {
           let data= Reviews[i]
           for (let j = 0; j < data.length; j++) {
             test.push(data[j]);
            }

        }
        

    return (
        <>
            <section class=" gradient-custom p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded" >

                {test.map((e, i) => {
                    return (
                        <ReviewStyle
                            pic={Img}
                            Stars={e.stars}
                            username={UserName}
                            review={e.Review}



                        />
                    )
                })}


            </section>
        </>
    )

}
export default GetAllReviews
export async function loader({ request, params }) {
    const token = localStorage.getItem("token")
    const response = await axios.get(`http://localhost:4000/reservation/getallreviews`, {
        headers: {
            'content-type': 'application/json',
            'authorization': `${token}`
        }
    })
    console.log(response)
    const allComments = response.data.allreviews
    console.log(allComments)



    if (!response) {
        throw json({ message: "something went wrong" })
    }


    return allComments

}