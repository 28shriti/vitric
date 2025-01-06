import React from "react";

export default function ProfileList({ profiles, onEdit, onDelete }) {
  return (
    <div className="p-4">
      {profiles.map((profile, index) => (
        <div key={index} className="flex items-center justify-between p-2 border rounded mb-2">
          <div className="flex items-center">
            {profile.profilePicture && (
              <img src={profile.profilePicture} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
            )}
            <div>
              <h4 className="text-lg">{profile.name}</h4>
              <p className="text-sm text-gray-600">{profile.email}</p>
            </div>
          </div>
          <div>
            <button onClick={() => onEdit(profile)} className="mr-2 bg-green-500 text-white p-1 rounded">
              Edit
            </button>
            <button onClick={() => onDelete(profile)} className="bg-red-500 text-white p-1 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
