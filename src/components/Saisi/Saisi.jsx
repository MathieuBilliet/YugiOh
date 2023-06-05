import { useState } from "react";
import "./Saisi.css"

const Saisi = () => {
  const [firstname, setFirstname] = useState("");
    
    const handleInputChange = (event) => {
      setFirstname(event.target.value);
    };
  
    return (
      <div className="enterFirstname">
        <h1>
          <label  htmlFor="firstname">Hello, {firstname} </label>
        </h1>
        <p>
          <input 
          type="text"
          id="firstname"
          value={firstname}
          onChange={handleInputChange}
          />
        </p>
      </div>
    );
  };
  export default Saisi;