const Login = (props) => {
  return (
    <>
      <h2>Hello from Login</h2>
      <label>Username</label>
      <input
        type="text"
        value={props.userName}
        onChange={(e) => props.setUserName(e.target.value)}
      />
      <br />
      <label>Password</label>
      <input
        type="text"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={props.toggleLogin}>Child Login Button</button>
    </>
  );
};

export default Login;
