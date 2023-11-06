// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; 

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); 

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:8000/token/login/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username: email, email, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//       localStorage.setItem('accessToken', data.auth_token);

//       navigate("/rhythmix");
//     } else {
//       const errorData = await response.json();
//       console.error(errorData);
//     }
//   };

//   return (
//     <div>
//       <h1 className='login-header1' style={{ fontFamily: 'Bebas Neue', fontSize: '60px' }}>Good to see you again</h1>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="text"
//             name='email'
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name='password'
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>

//         <button>
//           <Link to="/" style={{ textDecoration: 'none' }}>Back</Link>
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;

