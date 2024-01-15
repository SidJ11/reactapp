import User from "./User"
import UserClass from "./UserClass"

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <div className="user-section">
          <User name="Zack Snyder" email="zsnyder@email.com"/>
          <UserClass name="Zack Snyder" email="zsnyder@email.com"/>
        </div>
    </div>
  )
}

export default About