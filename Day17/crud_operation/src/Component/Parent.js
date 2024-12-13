import { useState } from "react";
import Child from "./child";

// function Parent() {

//     const [emp, setEmp] = useState({No: 45, Name: "Rohit", Address: "Mumbai"});

//     const DoSomething = () => {
//         console.log(emp);
        
//     }

//     const OnTextBoxChange = (args) =>{
         
//         var copy = {...emp};
//         copy[args.target.name] = args.target.value;
//         setEmp(copy);

//     }

//     return ( <>
              
//               <h1>This is Parent UI</h1>

//               No: <input type="text" value={emp.No} name="No" onChange={OnTextBoxChange} />
//               Name: <input type="text" value={emp.Name} name="Name" onChange={OnTextBoxChange} />
//               Address: <input type="text" value={emp.Address} name="Address" onChange={OnTextBoxChange} />

//               <button onClick={DoSomething}>Click Me</button>
    
//             </> );
// }

// export default Parent;


function Parent() {

    const [emp, setEmp] = useState({No: 45, Name: "Rohit", Address: "Mumbai"});

    const DoSomething = () => {
        console.log(emp);
        
    }

    const OnTextBoxChange = (args) =>{
         
        var copy = {...emp};
        copy[args.target.name] = args.target.value;
        setEmp(copy);

    }

    return ( <>
              
              <h1>This is Parent UI</h1>
              <Child employee={emp} OnTextBoxChange={OnTextBoxChange} DoSomething={DoSomething} />
             
            </> );
}

export default Parent;