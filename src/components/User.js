const User = ({name, email}) => {
    return(
        <div className="user-card">
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
    )
}

export default User