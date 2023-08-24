import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/layout.js";
import SignIn, { action as SignInLoader } from "./Componants/SignIn.js";
import SignUp, { action as newAccount } from "./Componants/SignUp.js";
import Property, { loader as roominfo } from "./Componants/Property.js";
import Profile, { loader as userDetails } from "./Componants/profile.js";
import BasicInfo from "./Componants/BasicInfo.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import HotelSearch from "./Pages/filter.js";
import Booking, { loader as reservation } from "./Componants/Booking.js";
import MyBooking, { loader as MyReservations } from "./Componants/MyBooking.js";
import SelectedHotel from "./Pages/selectedhotel.js";
import Update from "./Componants/ChangeDate&Options.js";
import EditRoom, { loader as newroom } from "./Componants/EditRoom.js";
import Reviews from "./Componants/AddReview.js";
import GetAllReviews, { loader as allreviews } from "./Componants/GetAllReviews.js";
import ErrorHandling from "./Pages/Error.js";


const router = createBrowserRouter([{
  path: '/', element: <Layout />,errorElement:<ErrorHandling/>, children: [
    { path: '', element: <HotelSearch /> },
    { path: 'signIn', element: <SignIn />, action: SignInLoader },
    { path: 'signUp', element: <SignUp />, action: newAccount },
    { path: 'Profile', element: <Profile />, loader: userDetails },
    { path: 'AllReviews', element: <GetAllReviews />, loader: allreviews },

    { path: 'Filter', element: <SelectedHotel /> },
    { path: ':HotelId', element: <Property />, id: "hotelrooms", loader: roominfo },
    { path: '/room/:roomId', element: <Booking />, loader: reservation },
    {
      path: 'MyBooking', id: "BookingDetails", loader: MyReservations, children: [
        { index: true, element: <MyBooking /> },
        {
          path: ":BookingId", children: [
            { path: 'EditDateAndOptions', element: <Update /> },
            { path: 'EditGuestInformation', element: <BasicInfo /> },
            {
              path: 'EditRoom', element: <EditRoom />
            },
            { path: 'AddReview', element: <Reviews /> },



          ]
        }
      ]
    },
  ]
}])


function App() {

  const client = new QueryClient()
  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>

  );
}

export default App;
