interface SideBarOption{
    option_name: string;
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
                <button onClick={option_function} className="btn btn-outline-secondary w-100 py-2">
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
            <aside className="col-3 col-lg-2 position-fixed top-0 start-0 vh-100 overflow-auto bg-light p-3">
                <Logo/>
                <ul className="list-unstyled d-grid gap-2 mb-0">
                    {options_list.map((option) => (
                        <SideBarOption
                            key={option.option_name}
                            option_name={option.option_name}
                            option_function={option.option_function}
                        />
                    ))}
                </ul>
            </aside>
        </>
    )
}

export default Sidebar
