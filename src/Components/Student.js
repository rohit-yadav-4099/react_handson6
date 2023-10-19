import { useContext } from "react"
import Store from "./StoreData"
import { Link, useNavigate } from "react-router-dom";



function Student(){
    const StudentData = useContext(Store)
    const Navi = useNavigate();
    return(
        <>
            <div className="parentbtn">
                <span className="Studentsdetail">Student Details</span>
                <button className="addbtn" onClick={() => Navi('/newstudent')}>Add new Student</button>
            </div>
            <table className="data" border='1px'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {StudentData.data.map((item, index) => {
                            return(
                              <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td><Link to={`/editStudent/${index}`}>Edit</Link></td>
                        
                              </tr>
                            )
                        })}       
                </tbody>
            </table>
        </>
    )
}
export default Student