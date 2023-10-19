import React, { useState } from "react"
import {BrowserRouter,  NavLink,  Route, Routes} from 'react-router-dom'
import Home from "./Home"
import Student from "./Student"
import Contact from "./Contact"
import Store from "./StoreData"
import EditStudent from "./EditStudent"
import NewStudent from "./NewStudent"

function RouteCompo(){
    const [stuData, setstuData] = useState([
        {name: "Rohit", age:22, course:"MERN", batch:"April"},
        {name: "Rosh", age:21, course:"MERN", batch:"May"},
        {name: "Rani", age:19, course:"MERN", batch:"May"},
        {name: "Pradum", age:20, course:"MERN", batch:"June"},
        {name: "Soni", age:22, course:"MERN", batch:"April"},
        {name: "Virat", age:20, course:"MERN", batch:"July"},
        {name: "Raj", age:21, course:"MERN", batch:"July"},
        
    ])
    return(
        <>
       <BrowserRouter>
        <div className="navbar">
       <NavLink to={"/"} className={"Home"}>Home</NavLink>
       <NavLink to={"/Student"} className={"Student"}>Student</NavLink>
       <NavLink to={"/Contact"} className={"Contact"}>Contact</NavLink>
       </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Student" element={
                <Store.Provider value={{data: stuData, setData: setstuData}}>
                    <Student />
                </Store.Provider>
            } />
            <Route path="/editStudent/:id" element ={
                <Store.Provider value={{data: stuData, setData: setstuData}}>
                    <EditStudent/>
                </Store.Provider>   
            }/>
            <Route path="/newstudent" element = {
                <Store.Provider value={{data: stuData, setData: setstuData}}>
                    <NewStudent />
                </Store.Provider>
            }/>
            <Route path="/Contact" element={<Contact/>} />
        </Routes>
       
       </BrowserRouter>
        
        
        </>
    )
}

export default RouteCompo;