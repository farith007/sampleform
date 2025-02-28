import React, { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    name: "", phoneNo: "", emailId: "", gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value.length > 20) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form successfully submit");
  };
  return (
    <div className="container" style={{border: "2px solid black", margin:"50px"}}>
    <div style={{ textAlign: "center", margin: "50px"}}>
      <h2>Form validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} maxLength="20" required/>
        </div>
        <br />
        <div>
          <label>Phone No: </label>
          <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required/>
        </div>
        <br />
        <div>
          <label>Email ID: </label>
          <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} required/>
        </div>
        <br />
        <div>
          <label>Gender: </label>
          <input type="radio" name="gender" value={formData.gender} onChange={handleChange} required/> Male
          <input type="radio" name="gender" value={formData.gender} onChange={handleChange} required/> Female
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}
export default App;
