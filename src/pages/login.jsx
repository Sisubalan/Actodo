import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const navigate = useNavigate()
    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()
    const [ruser,setruser] = useState(true)

    const users = props.users
    const setusers = props.setusers

    function handleUinput(evt)
    {
        seteusername(evt.target.value)
    }

    function handlePinput(evt)
    {
        setepassword(evt.target.value)
    }

    function Checkuser()
    {
        var userfound = false

        users.forEach(function(item)
        {
            if(item.username === eusername && item.password === epassword)
            {
                console.log("login success")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
        })

        if(userfound===false)
        {
            console.log("login failed")
            setruser(false)
        }
    }

    return (<div className="bg-black p-10 ">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser? <p>I help you manage your activities after you login :)</p>:<p className="text-red-600">Please Sign Up Before you Login</p>}
            

            <div className="flex flex-col gap-2 my-2">
                <input
                    type="text"
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="Username"
                    onChange={handleUinput} />

                <input
                    type="text"
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="Password"
                    onChange={handlePinput} />

                <button className="bg-yellow-400 w-24 p-1 rounded-md" onClick={Checkuser}>Login</button>

                <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link> </p>
            </div>
        </div>
    </div>)
}

export default Login