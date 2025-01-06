import React, { useState } from "react";

export default function SkillForm({ skills, onAddSkill, onDeleteSkill }) {
  const [skill, setSkill] = useState({ name: "",category: "", proficiency: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill({ ...skill, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSkill(skill);
    setSkill({ name: "",category: "", proficiency: "" });
  };


  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="mb-4 text-xl font-bold">Skills</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700">Skill Name</label>
          <input
            type="text"
            name="name"
            value={skill.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            name="category"
            value={skill.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Beginner">Technical</option>
            <option value="Intermediate">Soft Skill</option>
            <option value="Expert">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Proficiency</label>
          <select
            name="proficiency"
            value={skill.proficiency}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Proficiency</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Skill
        </button>
      </form>
      <div>
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between p-2 border rounded mb-2">
            <div>
              <h4 className="text-lg">{skill.name}</h4>
              <p className="text-sm text-gray-600">{skill.category}</p>
              <p className="text-sm text-gray-600">{skill.proficiency}</p>
            </div>
            <button onClick={() => onDeleteSkill(index)} className="bg-red-500 text-white p-1 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
