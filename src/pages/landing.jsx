import Header from "../components/Header"
import Card from "../components/card"
import Todocontainer from "../components/todocontainer"
import { useLocation } from "react-router-dom"

function Landing() {

    const data = useLocation()
    console.log(data)

    return (
        <div className="bg-black p-14">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                {/* header */}
                <Header username={data.state.user} />
                {/* card */}
                <div className="flex justify-between gap-6 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} tittle={"23°c"} subtittle={"Coimbatore"}></Card>
                    <Card bgcolor={"#FD6663"} tittle={"December"} subtittle={"14:03:55"}></Card>
                    <Card bgcolor={"#FCA201"} tittle={"Built Using"} subtittle={"React"}></Card>
                </div>
                {/* todo container */}
                <Todocontainer></Todocontainer>

            </div>
        </div>
    )
}

export default Landing