import { useState } from "react"

function Addtodofrom(props)
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newactivity,setnewactivity] = useState("")

    function handlechange(evt)
    {
        setnewactivity(evt.target.value)
    }
    function addactivity()
    {
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
    }

    return(
        <>
        <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>

                <div>
                    <input value={newactivity} onChange={handlechange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?" />
                    <button onClick={addactivity} className="bg-black text-white p-1 border border-black">Add</button>
                </div>
            </div>
        </>
    )
}

export default Addtodofrom