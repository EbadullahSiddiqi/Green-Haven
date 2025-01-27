# Building the Green Haven Nursery Website

This document explains how the Green Haven Nursery website was built using **React JS** and how the design principles were implemented to create a stunning, responsive, and user-friendly website. Let’s dive into the process step by step!

---

## Tech Stack
- **Frontend Framework**: React JS
- **Styling**: TailwindCSS for utility-first styling
- **Form Handling**: React Hook Form for lightweight, controlled forms
- **Routing**: React Router for seamless navigation
- **Maps Integration**: Google Maps Embed API for displaying location
- **Deployment**: Vercel for hosting and CI/CD

---

## Development Process

### 1. Setting Up the Project
1. **Initialize React App**:
   ```bash
   npx create-react-app green-haven
   cd green-haven
   ```

2. **Install Dependencies**:
   - TailwindCSS:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init
     ```
   - React Router:
     ```bash
     npm install react-router-dom
     ```
   - React Hook Form:
     ```bash
     npm install react-hook-form
     ```

3. **TailwindCSS Configuration**:
   - Add the `content` paths in `tailwind.config.js`:
     ```javascript
     module.exports = {
       content: ["./src/**/*.{js,jsx,ts,tsx}"],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```
   - Include Tailwind in `src/index.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

### 2. Project Structure
To maintain scalability and readability, the following folder structure was used:
```
src/
├── components/        # Reusable components (e.g., Navbar, Footer, Button)
├── pages/             # Page-level components (e.g., Home, About, Products)
├── assets/            # Images and other static assets
├── App.js             # Main App Component with Routes
├── index.css          # Global styles with Tailwind
└── index.js           # Entry point
```

---

## Key Components & Design

### 1. **Navbar**
- **Functionality**: Fixed to the top, responsive hamburger menu for mobile.
- **Design**: Used Tailwind’s flexbox utilities to create a clean layout with:
  - Logo on the left
  - Navigation links on the right

### 2. **Hero Section**
- **Purpose**: Catch attention immediately with a visually stunning background.
- **Implementation**:
  - Used a `div` with `bg-cover` and `bg-center` to apply a hero image.
  - Overlaid a heading and buttons using `absolute` positioning.
- **Styling**:
  ```javascript
  <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/path-to-image.jpg')` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold">Bring Nature Home</h1>
      <button className="mt-4 bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600">Explore Products</button>
    </div>
  </div>
  ```

### 3. **About Us Section**
- **Design**:
  - Used a two-column grid with text on the left and an image on the right.
  - Added subtle hover effects to images for interactivity.
- **Styling**:
  ```javascript
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
    <div>
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-600">At Green Haven, we believe in bringing nature closer to your home...</p>
    </div>
    <img src="/path-to-about-image.jpg" alt="About Green Haven" className="rounded-lg shadow-lg" />
  </div>
  ```

### 4. **Product Listings**
- **Functionality**: Displayed a grid of products with hover effects to reveal additional details.
- **Implementation**:
  - Used a responsive grid layout with Tailwind’s `grid` utilities.
  - Created reusable `ProductCard` components for modularity.
  ```javascript
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
  ```

### 5. **Contact Form**
- **Purpose**: Allow users to reach out.
- **Implementation**:
  - Built using React Hook Form for validation.
  - Styled with Tailwind’s `flex` and `space-y` utilities.
  ```javascript
  <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
    <input
      {...register("name", { required: true })}
      className="w-full p-2 border rounded mb-4"
      placeholder="Your Name"
    />
    <textarea
      {...register("message", { required: true })}
      className="w-full p-2 border rounded mb-4"
      placeholder="Your Message"
    ></textarea>
    <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Send</button>
  </form>
  ```

---

## Deployment
1. **Build the Project**:
   ```bash
   npm run build
   ```
2. **Deploy on Vercel**:
   - Push the project to GitHub.
   - Import the repository to Vercel.
   - Configure the project and deploy.

---

## Design Principles

### **Consistency**
- Maintained consistent typography and color scheme (green, brown, white) to reflect the theme.

### **Responsiveness**
- Used Tailwind’s responsive utilities (`sm:`, `md:`, `lg:`) to ensure a seamless experience on all devices.

### **Interactivity**
- Added hover effects and animations for buttons, images, and links to create a polished look.

---

This project demonstrates modern web development practices, leveraging React JS and TailwindCSS for a fast, responsive, and visually appealing website. By focusing on modular components and clean design, the Green Haven Nursery website is both functional and aesthetically pleasing.
