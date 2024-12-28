function Todoitem(props)
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    function handleDelete(deleteid)
    {
        var temarr = activityArr.filter(function(item){
            if(item.id === deleteid )
            {
                return false
            }
            else{
                return true
            }
        })
        setactivityArr(temarr)
    }
    return(
        <div className="flex justify-between">
            <p>{props.index+1}.{props.activity}</p>
            <button className="text-red-500" onClick={()=>{handleDelete(props.id)}}>Delete</button>
        </div>
    )
}
export default Todoitem