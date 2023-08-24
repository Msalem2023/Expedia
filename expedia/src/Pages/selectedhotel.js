import { Outlet } from "react-router-dom";
import Filter from "../Componants/Filter.js";

function SelectedHotel() {

    return (
        <>
            <Filter />
            <main>

                <Outlet />
            </main>

        </>
    )

}
export default SelectedHotel