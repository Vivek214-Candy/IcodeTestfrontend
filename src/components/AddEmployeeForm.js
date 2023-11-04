import React, { useState , useRef} from 'react'
import "./AddEmployee.css";
import { AddData } from './Crud';


function AddEmpForm() {

  const formRef = useRef(null);

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

    const [formData, setFormData] = useState({});

   

    const handleSubmit = async (e) => {
      e.preventDefault();
      let isExcel = false;
      try {
        // Send a POST request to your server's endpoint
        const response = await AddData(formData,isExcel);
        console.log('Data submitted:', response.data);
        
      // Reset the form fields or perform any other necessary actions
       handleReset();
       
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    return (
      <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <h1>New Emplyoee</h1>
        <label>First Name</label>
        <input  name="firstName" value={formData.name} onChange={handleChange} type='text'/>
        <label>Last Name</label>
        <input name="lastName" value={formData.name} onChange={handleChange} type='text' />
        <label>Email</label>
        <input name="email" value={formData.name} onChange={handleChange} type='email' />
        <label>Date of Birth</label>
        <input name="dateOfBirth"  value={formData.name} onChange={handleChange} type='date'/>
        <label>City</label>
        <input name="city" value={formData.name} onChange={handleChange} type='text' />
        <input className="submitButton" type="submit"></input>
      </form>
      
    </>  
    );
}

export default AddEmpForm
