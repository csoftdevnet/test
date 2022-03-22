import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/Action";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const uid = useSelector((state) => state?.authReducer?.userInfo?.user?.uid);
  const navigate = useNavigate();

  useEffect(() => {
    if(uid){
      navigate("/product");
    }
      
  }, [uid]);

  const onLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      //   setOpen(true);
    }
    try {
      dispatch(login(email, password));
    } catch (error) {
      console.log("Error detect", error);
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="User name / Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                value={password}
                className="login__input"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="Password"
              />
            </div>
            <button className="button login__submit" onClick={onLogin}>
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
