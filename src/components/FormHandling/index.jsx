import React, { useState } from "react";
import "./index.css";
const FormHandling = () => {
    const[form,setForm] = useState({
        user_name:"",
        user_email:"",
        user_password:""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log("e.target",name)
        setForm({
        ...form,
        [name]: value,
        }); 

        // const { name, value } = e.target; 
        // setForm((prevFormData) => ({
        //   ...prevFormData,
        //   [name]: value,
        // }));
      };
  return (
    <div>
      <form>
        <h1> Sign Up </h1>
        <div>
          <legend>
            <span className="number">1</span> Your Basic Info
          </legend>

          <label  >Name:</label>
          <input type="text" value={form.user_name} onChange={handleInputChange}  id="name" name="user_name" />

          <label  >Email:</label>
          <input type="email" id="mail" value={form.user_email} onChange={handleInputChange} name="user_email" />

          <label  >Password:</label>
          <input type="password" id="password" value={form.user_password} onChange={handleInputChange} name="user_password" /> 
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default FormHandling;
