import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
            console.log(props)

            //All state variables will come here under this one state object
            this.state = {
                userInfo:{
                    name:"abc",
                    url:"example.com"
                }
            }
            console.log("Constructor is called first") 
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/SidJ11");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json)
    }
    
    render(){
        const {name, url} = this.state.userInfo;
        console.log("Then the render method is called")
        return(
            <div className="user-card">
                <h3>{name}</h3>
                <h3>{url}</h3>
                {/* <h3>Count : {this.state.count}</h3>
                <button onClick={()=>{
                    //Never Update State var directly, do this instead
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count ++</button> */}
            </div>
        )
    }
}

export default UserClass;