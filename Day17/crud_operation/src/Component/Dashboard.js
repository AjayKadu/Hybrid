import { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Dashboard() {

    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({
        emp_id: 0,
        ename: "",
        empRole: "",
        empCity: "",
        password: ""

    })

    const [isUpdating, setIsUpdating] = useState(false);

    const [search, setSearch] = useState("");

    useEffect(() => {
        getData();
        //isUpdating = false;
    }, []);

    const OnTextChange = (args) => {

        var copy = { ...employee };
        copy[args.target.name] = args.target.value;
        setEmployee(copy);

    }

    const OnSearchTextChange = (args) => {
        setSearch(args.target.value);
    }

    function clearBoxes() {
        setEmployee({
            emp_id: 0,
            ename: "",
            empRole: "",
            empCity: "",
            password: ""

        })
        setIsUpdating(false);
    }

    function getData() {

        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var result = JSON.parse(helper.responseText);
                setEmployees(result);
            }
        };
        helper.open("GET", `http://localhost:9090/employee`);
        helper.send();

    }

    function Add() {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {

            if (helper.readyState == 4 && helper.status == 200) {

                var result = JSON.parse(helper.responseText);
                if (result.affectedRows != null || result.affectedRows != undefined) {
                    if (result.affectedRows > 0) {
                        getData();
                        clearBoxes();
                    }
                }

            }

        };
        helper.open("POST", `http://localhost:9090/employee`);
        helper.setRequestHeader("content-type", "application/json")
        helper.send(JSON.stringify(employee));
    }

    const Edit = (No) => {

        for (let i = 0; i < employees.length; i++) {

            if (employees[i].emp_id == No) {
                setEmployee(employees[i]);
                setIsUpdating(true);
                break;
            }

        }

    }

    function Update() {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {

            if (helper.readyState == 4 && helper.status == 200) {

                var result = JSON.parse(helper.responseText);
                if (result.affectedRows != null || result.affectedRows != undefined) {
                    if (result.affectedRows > 0) {
                        getData();
                        clearBoxes();
                    }
                }

            }

        };
        helper.open("PUT", `http://localhost:9090/employee/` + employee.emp_id);
        helper.setRequestHeader("content-type", "application/json")
        helper.send(JSON.stringify(employee));
    }

    function Delete(No) {

        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {

            if (helper.readyState == 4 && helper.status == 200) {

                var result = JSON.parse(helper.responseText);
                if (result.affectedRows != null || result.affectedRows != undefined) {
                    if (result.affectedRows > 0) {
                        getData();
                        clearBoxes();
                    }
                }

            }

        };
        helper.open("Delete", `http://localhost:9090/employee/` + No);
        helper.send();

    }

    // function BtnToggle(){

    //     if(isUpdating == false){

    //     }

    // }




    return (<>

        <div className="container" style={{ marginTop: "20px" }}>

            <div className="table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" value={employee.ename} name="ename" onChange={OnTextChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>
                                <input type="text" value={employee.empRole} name="empRole" onChange={OnTextChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <input type="text" value={employee.empCity} name="empCity" onChange={OnTextChange} />
                            </td>
                        </tr>
                        <tr style={{ display: isUpdating ? "none" : "table-row" }}>
                            <td>Password</td>
                            <td>
                                <input type="text" value={employee.password} name="password" onChange={OnTextChange} />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                {!isUpdating ? (
                                    <button className="btn btn-primary" onClick={Add}>Add Record</button>
                                ) : (
                                    <button className="btn btn-info" onClick={Update}>Update</button>
                                )}
                                {"   "}
                                <button className="btn btn-secondary" onClick={clearBoxes}>Clear</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <hr />

            <center>
                <p><b><i>Search City:</i></b> <input type="text" value={search} onChange={OnSearchTextChange} /></p>
            </center>

            <hr />

            <div className="table-responsive">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Emp Role</th>
                            <th>Emp City</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp) => {
                                if (emp.empCity.toLowerCase().includes(search.toLowerCase())) {
                                    return (
                                        <tr key={emp.emp_id}>
                                            <td>{emp.emp_id}</td>
                                            <td>{emp.ename}</td>
                                            <td>{emp.empRole}</td>
                                            <td>{emp.empCity}</td>
                                            <td>
                                                <button className="btn btn-warning" onClick={() => {
                                                    Edit(emp.emp_id)
                                                }}>Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => {
                                                    Delete(emp.emp_id)
                                                }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    </>);
}

export default Dashboard;