// components/SettingsModal.js
import * as React from "react";
import { useState, useEffect } from "react";

function SettingsModal({ settings, setSettings }) {
  const [formData, setFormData] = useState({
    store_name: '',
    store_address: '',
    store_contact: '',
    footer_note: '',
  });

  useEffect(() => {
    setFormData(settings);
  }, [settings]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSettings(formData);
        alert('Settings updated successfully!');
        // Close the modal
        document.getElementById('settingsModal').querySelector('.btn-close').click();
      } else {
        throw new Error('Failed to update settings');
      }
    } catch (error) {
      console.error('Error updating settings:', error);
      alert('Failed to update settings. Please try again.');
    }
  };

  return (
    <div className="modal fade" id="settingsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
        <div className="modal-content">
          <div className="modal-header rounded-0">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Invoice Data Settings</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body rounded-0">
            <div className="container-fluid">
              <form onSubmit={handleSubmit} id="settings-form">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label htmlFor="store_name" className="form-label">Store Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="store_name" 
                        name="store_name" 
                        value={formData.store_name} 
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="store_address" className="form-label">Store Address</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="store_address" 
                        name="store_address" 
                        value={formData.store_address} 
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="store_contact" className="form-label">Store Contact</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="store_contact" 
                        name="store_contact" 
                        value={formData.store_contact} 
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="footer_note" className="form-label">Footer Note</label>
                      <textarea 
                        rows="3" 
                        className="form-control" 
                        id="footer_note" 
                        name="footer_note" 
                        value={formData.footer_note} 
                        onChange={handleInputChange}
                        required 
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer rounded-0">
            <button type="submit" form="settings-form" className="btn btn-primary">Update</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;