import React, { useState } from "react";

function LoginForm() {
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submit! ${admin} ${password}`);
  };
  return (
    <div>
      <h1>로그인 폼</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="admin"
          value={admin}
          placeholder="사용자 명을 입력하세요"
          onChange={(e) => setAdmin(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="loginButton"
          onClick={(e) => {
            if (admin === "admin" && password === "password") {
              alert("로그인 성공!");
              setAdmin("");
              setPassword("");
            } else {
              alert("로그인 실패! 다시 입력하세요.");
              setAdmin("");
              setPassword("");
            }
          }}
        >
          login
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
