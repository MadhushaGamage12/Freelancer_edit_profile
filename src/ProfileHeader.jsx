import React, { useState } from 'react';
import EditableField from './EditableField';

function ProfileHeader() {
  const [expertise, setExpertise] = useState('');
  const [otherExpertise, setOtherExpertise] = useState('');

  const handleExpertiseChange = (event) => {
    setExpertise(event.target.value);
  };

  const handleSave = () => {
    // Save logic here
    alert('Profile saved successfully!');
  };

  return (
    <div className="profile-header">
      <div className="profile-pic-container">
        <label htmlFor="uploadPicInput" className="upload-pic-icon">📷</label>
        <input type="file" id="uploadPicInput" accept="image/*" hidden />
        <div className="placeholder-pic">Upload Profile Picture</div>
      </div>
      <div className="profile-details">
        <EditableField label="Name" type="text" placeholder="Enter your name" />
        <div className="editable-field">
          <label htmlFor="expertise">Expertise:</label>
          <select id="expertise" value={expertise} onChange={handleExpertiseChange}>
            <option value="" disabled>Select your expertise</option>
            <option value="WebDevelopmentProgramming">Web Development & Programming</option>
            <option value="GraphicDesignMultimedia">Graphic Design & Multimedia</option>
            <option value="WritingContentCreation">Writing & Content Creation</option>
            <option value="DigitalMarketing">Digital Marketing</option>
            <option value="DataAnalytics">Data & Analytics</option>
            <option value="other">Other</option>
          </select>
        </div>
        {expertise === 'other' && (
          <EditableField
            label="Other Expertise"
            type="text"
            value={otherExpertise}
            placeholder="Specify your expertise"
            onChange={(e) => setOtherExpertise(e.target.value)}
          />
        )}
        <EditableField label="Location" type="text" placeholder="Enter your location" />
        <EditableField label="Occupation" type="text" placeholder="Enter your occupation" />
        <EditableField label="Email" type="text" placeholder="Enter your email" />
        <EditableField label="Availability" type="text" placeholder="Enter your availability" />
        <EditableField label="Phone number" type="text" placeholder="Enter your phone number" />
      </div>

      {/* Save Button */}
      <div className="save-button-container">
        <button onClick={handleSave} className="save-button">Save</button>
      </div>
    </div>
  );
}

export default ProfileHeader;
