import React, { useState } from "react";
import "../styles/log-register-form.css";


const ExternalUserRegisterForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log("Form Data:", formData);

  // Clear form data to reset input fields
  setFormData({});
  };

  return (
    <form className="form-page" onSubmit={handleSubmit}>
      <h1>External User Register</h1>
        <label>
          Email:
          <input type="email" name="email" value={formData.email || ""} required onChange={handleChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={formData.name || ""} required onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="text" name="rollNumber" value={formData.rollNumber || ""} required onChange={handleChange} />
        </label>
        <label>
        Guide/ reporting Officer/ Faculty In charge
          <select
            name="guide"  required
            value={formData.guide || ""}
            onChange={handleChange}
          >
            <option value="">--Choose--</option>
            <option value="Arvind">Dr. Arvind Ajoy(arvindajoy@iitpkd.ac.in)</option>
            <option value="santhakumar">Dr. santhakumar(santhakumar@iitpkd.ac.in)</option>
            <option value="Techin">Techin Office(office@techin-iitpkd.org)</option>
          </select>
        </label>
        <label>
        Request for permission till (Please mention the last working day)
          <input
            type="date"
            name="date" required
            value={formData.date || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Photo
          <input type="file" name="fileUpload" required
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                fileUpload: e.target.files[0],
              }))
            }
          />
        </label>
        <label>
        Copy of id proof (In PDF)
          <input type="file" name="fileUpload" required
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                fileUpload: e.target.files[0],
              }))
            }
          />
        </label>

      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExternalUserRegisterForm;
