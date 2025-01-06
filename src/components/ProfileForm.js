import React, { useState, useEffect } from "react";

export default function ProfileForm({ selectedProfile, onSave }) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    standard: "",
    dob: "",
    phone: "",
    profilePicture: "",
    skills: [],
  });

  useEffect(() => {
    if (selectedProfile) {
      setProfile(selectedProfile);
    }
  }, [selectedProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfile({ ...profile, profilePicture: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(profile);
    setProfile({
      name: "",
      email: "",
      standard: "",
      dob: "",
      phone: "",
      profilePicture: "",
      skills: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Standard</label>
        <select
          name="standard"
          value={profile.standard}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Standard</option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={profile.dob}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Profile Picture</label>
        <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2" />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        {selectedProfile ? "Update Profile" : "Add Profile"}
      </button>
    </form>
  );
}
