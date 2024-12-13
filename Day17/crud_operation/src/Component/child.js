function Child(props) {
    return ( <>
    
    <h1>This is CHild UI</h1>
    No : <input type="text" value={props.employee.No} name="No" onChange={props.OnTextBoxChange} />
    Name : <input type="text" value={props.employee.Name} name="Name" onChange={props.OnTextBoxChange} />
    Address : <input type="text" value={props.employee.Address} name="Address" onChange={props.OnTextBoxChange} />

    <button onClick={props.DoSomething}>Click Me</button>
    
    
    </> );
}

export default Child;