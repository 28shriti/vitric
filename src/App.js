import React, { useState, useEffect } from "react";
import { getProfiles, saveProfiles } from "./utils/localStorageUtils";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({
    id: null,
    name: "",
    email: "",
    standard: "",
    dob: "",
    phone: "",
    profilePicture: null,
    skills: [],
  });
  const [currentSkill, setCurrentSkill] = useState({ name: "", category: "Technical", level: "Beginner" });

  // Load profiles from localStorage on mount
  useEffect(() => {
    const storedProfiles = getProfiles();
    setProfiles(storedProfiles);
  }, []);

  const handleSaveProfile = () => {
    if (currentProfile.name && currentProfile.email) {
      let updatedProfiles = [...profiles];
      if (currentProfile.id !== null) {
        // Update existing profile
        updatedProfiles = updatedProfiles.map((profile) =>
          profile.id === currentProfile.id ? currentProfile : profile
        );
      } else {
        // Add new profile
        const newProfile = { ...currentProfile, id: Date.now(), skills: [] };
        updatedProfiles.push(newProfile);
      }

      setProfiles(updatedProfiles);
      saveProfiles(updatedProfiles);
      resetProfileForm();
    }
  };

  const handleDeleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
    saveProfiles(updatedProfiles);
  };

  const handleEditProfile = (profile) => {
    setCurrentProfile(profile);
  };

  const handleViewProfile = (profile) => {
    const profileDetails = `
      Name: ${profile.name}
      Email: ${profile.email}
      Standard: ${profile.standard}
      Date of Birth: ${profile.dob}
      Phone: ${profile.phone}
      Skills:
      ${profile.skills
        .map(
          (skill, index) =>
            `  ${index + 1}. Name: ${skill.name}, Level: ${skill.level}, Category: ${skill.category}`
        )
        .join("\n")}
    `;
    window.alert(profileDetails);
  };

  const handleAddSkill = () => {
    if (currentSkill.name) {
      const updatedSkills = [...currentProfile.skills, currentSkill];
      const updatedProfile = { ...currentProfile, skills: updatedSkills };
      setCurrentProfile(updatedProfile);
      setCurrentSkill({ name: "", category: "Technical", level: "Beginner" });
    }
  };

  const handleDeleteSkill = (skillIndex) => {
    const updatedSkills = currentProfile.skills.filter((_, index) => index !== skillIndex);
    setCurrentProfile({ ...currentProfile, skills: updatedSkills });
  };

  const resetProfileForm = () => {
    setCurrentProfile({
      id: null,
      name: "",
      email: "",
      standard: "1",
      dob: "",
      phone: "",
      profilePicture: null,
      skills: [],
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-2xl font-bold mb-4">Student Profile Management</h1>

      {/* Profile Form */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Profile Form</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={currentProfile.name}
            onChange={(e) => setCurrentProfile({ ...currentProfile, name: e.target.value })}
            className="border p-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={currentProfile.email}
            onChange={(e) => setCurrentProfile({ ...currentProfile, email: e.target.value })}
            className="border p-2 w-full"
          />
          <select
            value={currentProfile.standard}
            onChange={(e) => setCurrentProfile({ ...currentProfile, standard: e.target.value })}
            className="border p-2 w-full"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={currentProfile.dob}
            onChange={(e) => setCurrentProfile({ ...currentProfile, dob: e.target.value })}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={currentProfile.phone}
            onChange={(e) => setCurrentProfile({ ...currentProfile, phone: e.target.value })}
            className="border p-2 w-full"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setCurrentProfile({ ...currentProfile, profilePicture: URL.createObjectURL(e.target.files[0]) })
            }
            className="border p-2 w-full"
          />
        </div>

        {/* Skills Section */}
        <div className="mt-4">
          <h3 className="text-lg font-medium">Skills</h3>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <input
              type="text"
              placeholder="Skill Name"
              value={currentSkill.name}
              onChange={(e) =>
                setCurrentSkill({ ...currentSkill, name: e.target.value })
              }
              className="border p-2 flex-1"
            />
            <select
              value={currentSkill.category}
              onChange={(e) =>
                setCurrentSkill({ ...currentSkill, category: e.target.value })
              }
              className="border p-2 flex-1"
            >
              <option>Technical</option>
              <option>Soft Skills</option>
              <option>Others</option>
            </select>
            <select
              value={currentSkill.level}
              onChange={(e) =>
                setCurrentSkill({ ...currentSkill, level: e.target.value })
              }
              className="border p-2 flex-1"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
            <button
              onClick={handleAddSkill}
              className="bg-green-500 text-white px-4 py-2 rounded flex-1 sm:flex-none"
            >
              Add Skill
            </button>
          </div>
          <ul className="mt-2">
            {currentProfile.skills.map((skill, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border p-2 mt-2 gap-2 sm:gap-0"
              >
                <span className="flex-1 text-sm sm:text-base">
                  {skill.name} - {skill.level} - {skill.category}
                </span>
                <button
                  onClick={() => handleDeleteSkill(index)}
                  className="text-red-500 text-sm sm:text-base"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>


        <button
          onClick={handleSaveProfile}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Save Profile
        </button>
      </div>

      {/* Profile List */}
<h2 className="text-xl font-semibold mb-2">Profiles</h2>
<ul>
  {profiles.map((profile) => (
    <li
      key={profile.id}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center border p-4 mt-2 gap-4 sm:gap-2 rounded-lg shadow-sm bg-white"
    >
      <div className="flex items-start gap-4">
        {profile.profilePicture && (
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          {/* Profile Name and Email */}
          <span className="text-sm sm:text-base font-medium">{profile.name}</span>
          <p className="text-gray-600 text-xs sm:text-sm">{profile.email}</p>
          
          {/* Skills Section */}
          <div className="mt-2">
            <h3 className="text-sm font-semibold">Skills</h3>
            {profile.skills.length > 0 ? (
              <ul className="list-disc list-inside text-sm text-gray-700">
                {profile.skills.map((skill, index) => (
                  <li key={index} className="mt-1">
                    <span className="font-medium">{skill.name}</span> - {skill.level} ({skill.category})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No skills added</p>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => handleViewProfile(profile)}
          className="bg-blue-500 text-white px-4 py-2 rounded text-sm sm:text-base"
        >
          View
        </button>
        <button
          onClick={() => handleEditProfile(profile)}
          className="bg-yellow-500 text-white px-4 py-2 rounded text-sm sm:text-base"
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteProfile(profile.id)}
          className="bg-red-500 text-white px-4 py-2 rounded text-sm sm:text-base"
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>


    </div>
  );
};

export default App;
