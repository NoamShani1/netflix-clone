import "./login.scss"

export default function Login() {

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
      <form>  
      <h1> Sign in</h1>
      <input type='email' placeholder="E-mail or phone number"/>
      <input type='password' placeholder="password"/>

      </form>
      </div>
    </div>
  );
}
