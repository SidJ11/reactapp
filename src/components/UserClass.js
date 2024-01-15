import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
            console.log(props)
        
    }
    render(){
        const {name} = this.props;
        return(
            <div className="user-card">
                <h3>{name}</h3>
                <h3>{this.props.email}</h3>
            </div>
        )
    }
}

export default UserClass;