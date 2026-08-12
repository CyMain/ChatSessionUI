interface SideBarOption{
    option_name:String;
    option_function: ()=>void;
}

const Logo = () =>{
    return(
        <>

        </>
    )
}

const SideBarOption = ({option_name, option_function}:SideBarOption)=>{
    return(
        <>
            <li>
                <button onClick={option_function}>
                    {option_name}
                </button>
            </li>
        </>
    )
}


const Sidebar = () =>{
    const options_list:SideBarOption[] = [
        {
            option_name: "Home",
            option_function: ()=>{
                console.log("Switching to Home Page...")
            }
        },
        {
            option_name: "Options",
            option_function: ()=>{
                console.log("Switching to Options Menu...")
            }
        },
    ]

    return(
        <>
            <div className="side-bar">
                <Logo/>
                {options_list.map((option) => <SideBarOption option_name={option.option_name} option_function={option.option_function} />)}
            </div>
        </>
    )
}

export default Sidebar