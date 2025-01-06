# Profiles Management Application

A responsive web application for managing user profiles, allowing users to view, edit, and delete profiles, as well as manage skills associated with each profile.

## Features

### Core Functionality
- **View Profiles**: Display all profiles with details such as name, email, profile picture, and skills.
- **Edit Profiles**: Edit a profile's details and manage skills.
- **Delete Profiles**: Remove a profile from the list.
- **Skill Management**:
  - Display skills under each profile.
  - Edit skills with checkboxes for easy selection.
  - Bulk delete skills with a single "Delete Selected Skills" button.
  
### Responsiveness
- Optimized for various screen sizes with responsive design techniques using Tailwind CSS.
- Profiles adapt to different device layouts for better usability.

---

## Challenges Faced

1. **Skill Management**:
   - Implementing bulk deletion functionality using checkboxes required additional state management for selected skills.
   - Ensuring the state updates correctly after deleting selected skills posed challenges in state synchronization.

2. **Responsive Design**:
   - Adjusting the layout for different screen sizes while maintaining a clean and functional UI required careful use of Tailwind CSS classes.

3. **Data Updates**:
   - Managing data consistency when editing or deleting profiles or skills required robust state management and UI updates.

---

## Potential Improvements

1. **Backend Integration**:
   - Add a backend service for persistent storage of profiles and skills.
   - Replace current local state with API calls to fetch, update, and delete data.

2. **Authentication**:
   - Add user authentication for secure access to profile data.
   - Allow individual users to manage their own profiles.

3. **Search and Filter**:
   - Include a search bar to filter profiles based on name or skills.
   - Add sorting options for profiles based on name or number of skills.

4. **Improved UI**:
   - Enhance the profile cards with additional information like location, contact, and biography.
   - Add animations for smoother user interaction.

---

## Setup Instructions

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn package manager

### Steps to Run Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/28shriti/vitric.git
   cd vitric
   ```

2. **Install Dependencies**:
  ```bash
  npm install
  ```

3. **Run the Application**:
  ```bash
  npm start
  ```

