import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {
    
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()

    function handleUinput(evt)
    {
        seteusername(evt.target.value)
    }

    function handlePinput(evt)
    {
        setepassword(evt.target.value)
    }

    function AddUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10 ">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username" 
                        onChange={handleUinput}/>

                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password"
                        onChange={handlePinput} />

                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Confirm password" />

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={AddUser}>Sign Up</button>

                    <p>Alreay have an account? <Link to={"/"} className="underline">Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Signup