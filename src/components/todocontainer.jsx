import Addtodofrom from "./Addtodoform"
import Todolist from "./todolist"
import { useState } from "react"

function Todocontainer() {

    const [activityArr,setactivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Having Breakfast"
        },
        {
            id:3,
            activity:"Take a shower"
        }
    ])

    return (
        <div>

            <div className="flex gap-5 flex-wrap">

            <Addtodofrom activityArr={activityArr} setactivityArr={setactivityArr}></Addtodofrom>
            <Todolist activityArr={activityArr} setactivityArr={setactivityArr}></Todolist>

            </div>

        </div>
    )
}

export default Todocontainer