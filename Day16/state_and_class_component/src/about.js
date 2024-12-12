import { Component } from "react";

class About extends Component {

    state = {companyName : "CDAC"}

    constructor  (){
        super();
        console.log("Constructor Called...");
        
    }

    DoSomething = () =>{
        this.setState({companyName: "Sunbeam"});
        console.log("State change to Sunbeam");
        
    } 

    componentDidMount(){
        console.log("ComponentDid Mount Called..");
        
    }

    componentDidUpdate(){
        console.log("Component Did Update Called..");
        
    }

    shouldComponentUpdate(){
        console.log("Should Component Update is Called...");
        console.log("Should update ? TRUE")
        return true;
        
    }

    render() { 
     console.log("Render is Called...");
     
        return (<>
           <div>{this.state.companyName}</div>
           <button onClick={this.DoSomething}>Click me</button>
        </>);
    }
}
 
export default About;