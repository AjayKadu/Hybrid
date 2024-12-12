import React, { Component } from 'react'

class Show extends Component {
    state = { emp: {No:1, Name: "Ajay", Address: "Akola"}} 


    DoSomething = () =>{
        //this.setState({ emp:{Name : "Rohit"}});
        //this.setState({emp : {No: 1, Name : "Rohit", Address : "Akola"}});
         
        //var replica = {...this.state.emp, Name : "Rohit"}
        //this.setState({emp : replica});

        this.setState({emp: {...this.state.emp, Name : "Rohit"}})

    }

    render() { 
        return (<>
               <h1>No is {this.state.emp.No}</h1>
               <h1>Name is {this.state.emp.Name}</h1>
               <h1>Address is {this.state.emp.Address}</h1>
               <button onClick={this.DoSomething}>Click Me</button>
         
        </>);
    }
}
 
export default Show;