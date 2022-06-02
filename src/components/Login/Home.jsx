import { Link } from "react-router-dom"
import { useState } from "react"
import Select from "react-select"
function Home() {
    const data=[{
        value:"Gold",
        label:"gold"
    },
    {
        value:"Diamond",
        label:"diamond"
    },
    {
        value:"Platinum",
        label:"platinum"

    }

]

const handleChange = (obj) => {
setSelected(obj)
}
    // const [isdropdown, setIsdropdown] = useState(true);
    const [selected, setSelected] = useState(null);
    // const [item, setItem] = useState([
    //     {
    //         title: "gold",
    //         value: "Gold"
    //     },

    //     {
    //         title: "diamond",
    //         value: "Diamond"
    //     },
    //     {
    //         title: "platinum",
    //         value: "Platinum"
    //     }
    // ]);
    // console.log(item)
    return (
        <div>
            {/* ..... */}
            {/* <div className="custom-dropdown">
                <div className="custom-dropdown-slection">
                    {selected !== undefined ? item[selected].title : "select another plan"}
                </div>

                <div className="items.holder">
                    {item.map((el, index) => {
                        <div className="dropdown-item">
                            {el.title}
                        </div>
                    })
                    }
                </div>
            </div> */}
            {/* ....... */}
            <div className="nav" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <p>Select Plan:
                    </p>
                <Select
                value={selected}
                options={data}
                onChange={handleChange}/>
                
                <p>Current Plan:Silver</p>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/signin">

                    <p >Login</p>
                </Link>
                <Link to="/signup">
                    <p>signup</p>
                </Link>
            </div>
        </div>
    )
}

export default Home