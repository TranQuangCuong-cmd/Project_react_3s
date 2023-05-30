import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [emai, setemail] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();

  const emailuse = "cuongtran2120@gmail.com";
  const passworduse = "123";

  const handleSubmit = (e) => {
    if (emai === emailuse && pass === passworduse) {
      e.preventDefault();
      navigate("./TrangChu");
    } else {
      e.preventDefault();
      alert("Vui lòng nhập thông tin cho đúng: ");
    }
  };

  return (
    <form className="Loginform" onSubmit={handleSubmit}>
      <div className="nav">
        <div className="divsubmit">
          <label htmlFor="email">Nhập Email: </label>
          <input
            value={emai}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Nhập email"
            id="email"
            name="email"
          ></input>
        </div>
        <div className="divsubmit">
          <label htmlFor="pass">Nhập pass: </label>
          <input
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            type="password"
            placeholder="Nhập mật khẩu "
            id="password"
            name="password"
          ></input>
        </div>
        <button type="submit">Đăng Nhập</button>
      </div>
    </form>
  );
}
export default Login;
