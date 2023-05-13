import useAuth from "../../hooks/useAuth"

const UsersStatus = () => {
  const { username, status} = useAuth()

    const content = (
    <div className="status-employement">
        <p>Current user: {username}</p>
        <p>Status: {status}</p>
    </div>
    )
  return content
}

export default UsersStatus