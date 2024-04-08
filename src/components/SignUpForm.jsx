import { useState } from "react"


const SignUpForm = ({setToken, token}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
 const handleSubmit = async (e) => {
  e.preventDefault();

  try{
    const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
    { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json" 
      }, 
      body: JSON.stringify({ 
        username,
        password
      }) 
    })
    const result = await response.json();
    setToken(result.token);
    
  }catch (error){
    setError
  }
 }


  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input type="text" value={username} onChange={(e) => {setUsername}}/>
        </label>
        <label>
          Password: <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        </label>
        <label>
           <button>Submit</button>
        </label>
      </form>

      <h3>Username: {username}</h3>
    </>
  )
}

export default SignUpForm