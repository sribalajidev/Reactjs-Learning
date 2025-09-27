# 1.Install ReactJS

This folder contains the first step in learning ReactJS: **setting up a React project** from scratch.  
We are using **Vite** for its simplicity and fast setup.

---

## **Learning Objectives**
By the end of this POC, you will be able to:  
1. Set up a ReactJS project using Vite.  
2. Understand the project structure.  
3. Run the React app locally.  

---

## **Prerequisites**
Before starting, make sure you have:  
- Node.js installed (version ^20.19.0 or >=22.12.0)  
- npm or yarn installed  
- A code editor (VS Code recommended)  

Check Node.js and npm versions: 

```bash
node -v
npm -v
```

---

## **Step 1: Navigate to Your Repo**
Open your terminal and navigate to the cloned repository:

```bash
cd path/to/reactjs-learning
```

---

## **Step 2: Create a New React Project Using Vite**
Run the following command:

```bash
npm create vite@latest 1.Install-Reactjs
```

When prompted:
- Project name: 1.Install-Reactjs
- Framework: React
- Variant: JavaScript

---

## **Step 3: Install Dependencies**
Navigate into the project folder and install dependencies:

```bash
cd 1.Install-Reactjs
npm install
```

---

## **Step 4: Run the Development Server**
Start the app locally:

```bash
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173) in your browser.
You should see the default Vite + React page.

---

## **Step 5: Test Your Setup**
Edit src/App.jsx to display a custom message:

```bash
function App() {
  return <h1>Hello React Learning!</h1>;
}

export default App;
```

Save the file and refresh the browser. You should see your message appear.

---

## **Step 6: Project Structure Overview**

```bash
1.Install-Reactjs/
├─ index.html       # Entry point of the app
├─ package.json     # Project dependencies & scripts
├─ vite.config.js   # Vite configuration
└─ src/
   ├─ main.jsx      # React entry point, renders App component
   ├─ App.jsx       # Main App component
   └─ assets/       # Images, icons, and other assets
```

Key Points:
- main.jsx is where React hooks into the DOM.
- App.jsx is your root component.
- Additional components will go inside src/components/ in later concepts.

---
