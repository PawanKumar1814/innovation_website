import React, { useState } from "react";
import EquipmentSelection from "./equipment_selection";
import "../styles/log-register-form.css";

const FormSection = ({ title, imageSrcs = [], children, isExpanded, onToggle }) => {
  return (
    <div className="form-section">
      <button className="form-section-toggle" type="button" onClick={onToggle}>
        {title}
        <span className={`arrow ${isExpanded ? "expanded" : ""}`}>&#9654;</span>
      </button>
      <div className={`form-section-content ${isExpanded ? "expanded" : "collapsed"}`}>
        <div className="form-section-body">
          {imageSrcs.length > 0 && (
            <div className="equipment-images">
              {imageSrcs.map((src, index) => (
                <img key={index} src={src} alt={`${title} image ${index + 1}`} className="equipment-image" />
              ))}
            </div>
          )}
          <div className="form-section-fields">{children}</div>
        </div>
      </div>
    </div>
  );
};

const LogRegisterForm = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [formData, setFormData] = useState({});
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
    console.log('Selected Equipment:', selectedEquipment);

  // Clear form data to reset input fields
  setFormData({});
  setSelectedEquipment([]);
  };

  return (
    <form className="form-page" onSubmit={handleSubmit}>
      <h1>Log / Equipment Register</h1>

      <FormSection
        title="Personal Details"
        isExpanded={expandedSections["equipmentDetails"]}
        onToggle={() => toggleSection("equipmentDetails")}
      >
        <label>
          Email:
          <input type="email" name="email" value={formData.email || ""} required onChange={handleChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={formData.name || ""} required onChange={handleChange} />
        </label>
        <label>
          Roll Number:
          <input type="text" name="rollNumber" value={formData.rollNumber || ""} required onChange={handleChange} />
        </label>
        <label>
          Project Name:
          <input type="text" name="projectname" value={formData.projectname || ""} required onChange={handleChange} />
        </label>
      </FormSection>
      <FormSection
        title="Equipment Used"
        isExpanded={expandedSections['equipmentSelection']}
        onToggle={() => toggleSection('equipmentSelection')}
      >
        <EquipmentSelection
          selectedEquipment={selectedEquipment}
          setSelectedEquipment={setSelectedEquipment}
        />
        <label>
        Did you find any problems with above equipments?
          <input
            type="text"
            name="problems"
            value={formData.problems || ""}
            onChange={handleChange}
          />
        </label>
      </FormSection>

      <FormSection
        title="3D Printer Register"
        imageSrcs={["assets/images/3d-printer.jpg"]}
        isExpanded={expandedSections["printerRegister"]}
        onToggle={() => toggleSection("printerRegister")}
      >
        <label>
          Machine ID
          <select
            name="machineid"
            value={formData.machineid || ""}
            onChange={handleChange}
          >
            <option value="">--Select Machine ID--</option>
            <option value="CFI_3D_ULTI_01">CFI_3D_ULTI_01</option>
            <option value="CFI_3D_ULTI_03">CFI_3D_ULTI_03</option>
            <option value="CFI_3D_ULTI_04">CFI_3D_ULTI_04</option>
          </select>
        </label>
        <label>
          Material Used
          <select
            name="materialused"
            value={formData.materialused || ""}
            onChange={handleChange}
          >
            <option value="">--Select Material Type--</option>
            <option value="ABS">ABS</option>
            <option value="PLA">PLA</option>
            <option value="PVA & PLA">PVA & PLA(Only for ultimaker 3)</option>
            <option value="TPU">TPU</option>
            <option value="TPU & PVA">TPU & PVA(Only for ultimaker 3)</option>
            <option value="ABS &PVA">ABS &PVA(Only for ultimaker 3)</option>
          </select>
        </label>
        <label>
          Layer Height
          <select
            name="layerheight"
            value={formData.layerheight || ""}
            onChange={handleChange}
          >
            <option value="">--Select Layer Height--</option>
            <option value="0.06">0.06</option>
            <option value="0.1">0.1</option>
            <option value="0.15">0.15</option>
            <option value="0.2">0.2</option>
            <option value="0.4">0.4</option>
            <option value="0.6">0.6</option>
          </select>
        </label>
        <label>
        Infill [In Percentage %]
          <input
            type="number"
            name="Infill"
            value={formData.Infill || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Select Nozzel Size:
          <select
            name="Nozzelsize"
            value={formData.Nozzelsize || ""}
            onChange={handleChange}
          >
            <option value="">--Select Nozzel Size--</option>
            <option value="0.25">0.25</option>
            <option value="0.4">0.4</option>
            <option value="0.6">0.6</option>
            <option value="0.8">0.8</option>
          </select>
        </label>
        <label>
        Job Start Date
          <input
            type="date"
            name="date"
            value={formData.date || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Estimated Time for printing(HH:MM)
          <input
            type="text"
            name="time"
            value={formData.time || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Estimated Weight Of Material Used in grams(Please find the details in CURA)
          <input
            type="number"
            name="weight"
            value={formData.weight || ""}
            onChange={handleChange}
          />
        </label>
      </FormSection>

      <FormSection
        title="CNC Router Register"
        imageSrcs={["assets/images/3d-printer.jpg", "assets/images/milling_bit.png"]}
        isExpanded={expandedSections["cncRouter"]}
        onToggle={() => toggleSection("cncRouter")}
      >
        <label>
          Machine ID
          <select
            name="machineid"
            value={formData.machineid || ""}
            onChange={handleChange}
          >
            <option value="">--Select Machine ID--</option>
            <option value="CFI_Router_SVP_01">CFI_Router_SVP_01</option>
            <option value="CFI_Router_SVP_02">CFI_Router_SVP_02</option> 
          </select>
        </label>
        <label>
          Raw Material Used
          <select
            name="materialused"
            value={formData.materialused || ""}
            onChange={handleChange}
          >
            <option value="">--Select Material Type--</option>
            <option value="Acrylic">Acrylic</option>
            <option value="Wood">Wood</option>
            <option value="Thermocol">Thermocol</option>
          </select>
        </label>
        <label>
        Quantity Of Raw Material Used in Sq-ft(Square Foot)
          <input
            type="number"
            name="Quantity"
            value={formData.Quantity || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Estimated Job Time(HH:MM)
          <input
            type="text"
            name="time"
            value={formData.time || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Dimension Of Milling Bit (Cutting diameter-In mm)
          <input
            type="number"
            name="Dimension"
            value={formData.Dimension || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Height of the material  be cut(Final depth-in mm)
          <input
            type="number"
            name="Height"
            value={formData.Height || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Max step down value used (in mm)
          <input
            type="number"
            name="stepdown"
            value={formData.stepdown || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Cutting Feed Rate
          <input
            type="number"
            name="feedrate"
            value={formData.feedrate || ""}
            onChange={handleChange}
          />
        </label>
      </FormSection>

      <FormSection
        title="4 Axis CNC Milling Machine Register"
        imageSrcs={["assets/images/3d-printer.jpg", "assets/images/milling_bit.png"]} 
        isExpanded={expandedSections["cncMilling"]}
        onToggle={() => toggleSection("cncMilling")}
      >
        <label>
          Raw Material Used
          <select
            name="materialused"
            value={formData.materialused || ""}
            onChange={handleChange}
          >
            <option value="">--Select Material Type--</option>
            <option value="Aluminium">Aluminium</option>
            <option value="Steel">Steel</option>
            <option value="Cast Iron">Cast Iron</option>
            <option value="MS">MS</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
        Estimated Job Time(HH:MM)
          <input
            type="text"
            name="time"
            value={formData.time || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Milling bit Details(Material, Number of Flutes etc)
          <input
            type="text"
            name="Details"
            value={formData.Details || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Dimension Of Milling Bit (Cutting diameter-In mm)
          <input
            type="number"
            name="Dimension"
            value={formData.Dimension || ""}
            onChange={handleChange}
          />
        </label>
      </FormSection>

      <FormSection
        title="Laser Cutting Machine"
        imageSrcs={["assets/images/3d-printer.jpg"]}
        isExpanded={expandedSections["laserCutting"]}
        onToggle={() => toggleSection("laserCutting")}
      >
        <label>
          Raw Material Used
          <select
            name="materialused"
            value={formData.materialused || ""}
            onChange={handleChange}
          >
            <option value="">--Select Material Type--</option>
            <option value="Acrylic">Acrylic</option>
            <option value="Wood">Wood</option>
            <option value="mica">Mica</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
        Estimated Job Time(HH:MM)
          <input
            type="text"
            name="time"
            value={formData.time || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Quantity Of Raw Material Used in Sq-ft(Square Foot)
          <input
            type="number"
            name="Quantity"
            value={formData.Quantity || ""}
            onChange={handleChange}
          />
        </label>
        <label>
        Laser Power (0 -100)
          <input
            type="number"
            name="Dimension"
            value={formData.Dimension || ""}
            onChange={handleChange}
          />
        </label>
      </FormSection>

      <FormSection
        title="File Upload"
        isExpanded={expandedSections["fileUpload"]}
        onToggle={() => toggleSection("fileUpload")}
      >
        <label>
        Brief Description Of the Project
        <textarea name="description" value={formData.description || ""} required onChange={handleChange} />
        </label>
        <label>
        Photos/Videos of the final product
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
        Photos/Videos of the final product
          <input type="file" name="fileUpload"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                fileUpload: e.target.files[0],
              }))
            }
          />
        </label>
      </FormSection>

      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default LogRegisterForm;
