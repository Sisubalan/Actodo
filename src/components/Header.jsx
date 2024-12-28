function Header(props)
{
    return(
        <>
        <h1 className="text-3xl font-medium">Hello {props.username}</h1>
        <p>I Help You Manage Your Activities :)</p>
        </>
    )
}
export default Header