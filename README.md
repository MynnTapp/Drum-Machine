# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Drum Machine

A simple drum machine built with React and Vite. This project allows users to play drum sounds by clicking buttons or pressing corresponding keys on their keyboard.

## Features

- Play drum sounds using buttons or keyboard keys.
- Display the name of the currently playing drum sound.
- Responsive design with styled components.

## Project Structure
Drum-Machine/ ├── public/ # Public assets ├── src/ # Source code │ ├── assets/ # Static assets │ ├── components/ # React components │ ├── App.jsx # Main application component │ ├── main.jsx # Application entry point │ └── index.css # Global styles ├── .gitignore # Git ignore file ├── eslint.config.js # ESLint configuration ├── index.html # HTML template ├── package.json # Project dependencies and scripts ├── README.md # Project documentation └── vite.config.js # Vite configuration



## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/drum-machine.git
   cd drum-machine
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
## Usage
- Click on the buttons labeled Q, W, E, A, S, D, Z, X, or C to play drum sounds.
- Alternatively, press the corresponding keys on your keyboard.
- The name of the currently playing sound will be displayed on the screen.
  
## Technologies Used
**React**: For building the user interface.
**Vite**: For fast development and build tooling.
**CSS**: For styling the application.

## File Overview
```bash
DrumMachine.jsx
```
The main component of the application. It handles:

- Rendering the drum pad buttons.
- Playing sounds when buttons are clicked or keys are pressed.
- Displaying the name of the currently playing sound.
- DrumMachine.css
- Styles specific to the DrumMachine component.
```bash
App.jsx
```
The root component that renders the DrumMachine component.
```bash
main.jsx
```
- The entry point of the application, responsible for rendering the React app into the DOM.

## License
- This project is open-source and available under the MIT License.

## Acknowledgments
- FreeCodeCamp for providing the drum sound assets.
- Vite and React for their amazing tools and libraries.



