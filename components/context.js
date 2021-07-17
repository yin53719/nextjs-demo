import React,{useContext} from "react";

export const TestContext= React.createContext({});

export const Navbar = () => {
  const { username } = useContext(TestContext)

  return (
    <div className="navbar">
      <p>{username}</p>
    </div>
  )
}

export const Messages = () => {
  const { username } = useContext(TestContext)

  return (
    <div className="messages">
      <p>1 message for {username}</p>
    </div>
  )
}