
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Store from "./StoreData";

function NewStudent(){
    const newdata = useContext(Store)
    const Navigate = useNavigate();
    const newdataobj = {
        name: '',
        age:'',
        course:'',
        batch:''
    }

    const handleChange = (e) => {
        newdataobj[e.target.name] = e.target.value;
    }

    const handleSubmit = () => {
        newdata.data.push(newdataobj);
        Navigate('/student')
    }
    return(
        <>

            <div className="newstudent">
                <label>Name:</label>
                <input className="name2" type="text" placeholder="Enter name" name="name" onChange={handleChange} ></input>
                <label>Age:</label>
                <input className="age2" type="number" placeholder="Enter age" name="age" onChange={handleChange} ></input><br></br>
                <label>Course:</label>
                <input className="course2" type="text" name="course" placeholder="Enter course" onChange={handleChange}></input>
                <label>Batch:</label>
                <input className="batch2" type="text" name="batch" placeholder="Enter batch" onChange={handleChange} ></input><br></br>  
            </div>
            <div className="button">
                <button className="cancle" onClick={() => Navigate('/student')}>Cancle</button>
                <button className="Submit" onClick={handleSubmit}>Submit</button>
            </div>
            
        </>
    )
}
export default NewStudent;