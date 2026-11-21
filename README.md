# Upliance – React Project Assignment

A React web app built for the Upliance associate software developer assignment, with a counter, a user data form, a rich text editor and a small dashboard chart.

[![Live demo](https://img.shields.io/badge/demo-live-brightgreen?logo=vercel)](https://upliance-git-main-sharky412s-projects.vercel.app/)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Material UI](https://img.shields.io/badge/Material%20UI-6-007FFF?logo=mui&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2-764ABC?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-11-FFCA28?logo=firebase&logoColor=black)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Live demo:** https://upliance-git-main-sharky412s-projects.vercel.app/

## Overview

This project is a React-based web application that includes a counter, a user data form and a rich text editor. It uses the following technologies:

- **UI library:** Material UI
- **Animations:** React Spring
- **State management:** Redux Toolkit (RTK)
- **Routing:** React Router
- **Charts and visualization:** Recharts
- **Rich text editor:** React Quill
- **Authentication:** Firebase (Google sign-in)
- **Package manager:** Yarn

The original assignment wireframe is in [`Screenshot 2025-02-04 163537.png`](Screenshot%202025-02-04%20163537.png).

## Features

### 1. Counter
- Buttons for increment, decrement and reset.
- Count value persists across re-renders.
- Background color changes dynamically in a linear manner based on the count.
- Reset restores the background color to its initial state.

### 2. User data form
- Fields: name, address, email, phone.
- Auto-generates a unique user ID.
- Saves user data to Local Storage and Redux Toolkit (RTK).
- Warns about unsaved changes if the user tries to close the browser.

### 3. Rich text editor
- Displays user data in JSON format.
- Supports formatting options such as bold, italic, underline and lists.
- Content persists in Local Storage.

### 4. Additional features (optional)

#### User authentication
- Sign-in and sign-up using Firebase Authentication (attempted; not fully working).
- Private and public routes with mock authentication validation.

#### Dashboard visualization
- A dashboard displaying the counter and user profile details.
- Uses **Recharts** to visualize user profile trends. Admin data is hard-coded; user data is read from Local Storage every 5 seconds.

## Tech stack

| Feature           | Library / tool      |
|-------------------|---------------------|
| UI library        | Material UI         |
| Animations        | React Spring        |
| State management  | Redux Toolkit (RTK) |
| Routing           | React Router        |
| Charts            | Recharts            |
| Rich text editor  | React Quill         |
| Authentication    | Firebase (optional) |
| Package manager   | Yarn                |

## Getting started

### Prerequisites
- Node.js
- **Yarn** as the package manager

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/sharky412/Upliance
   cd Upliance
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```
3. Start the development server:
   ```sh
   yarn start
   ```
4. Create a production build:
   ```sh
   yarn build
   ```

## Project structure

```
Upliance/
├── public/
├── src/
│   ├── auth/
│   │   └── firebase.js
│   ├── components/
│   │   ├── Chart.js
│   │   ├── Counter.js
│   │   ├── Navbar.js
│   │   ├── PrivateRoute.js
│   │   ├── RichTextEditor.js
│   │   └── UserForm.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Profile.js
│   │   └── Signup.js
│   ├── redux/
│   │   ├── counterSlice.js
│   │   ├── store.js
│   │   └── userSlice.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── theme.js
├── .gitignore
├── package.json
└── README.md
```

## License

Released under the [MIT License](LICENSE).
