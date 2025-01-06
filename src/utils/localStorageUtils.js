export const getProfiles = () => {
    const profiles = localStorage.getItem("profiles");
    return profiles ? JSON.parse(profiles) : [];
  };
  
  export const saveProfiles = (profiles) => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  };
  