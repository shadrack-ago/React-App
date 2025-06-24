[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19846276&assignment_repo_type=AssignmentRepo)
# PLP Task Manager

A modern task management application built with React.js and Tailwind CSS, featuring component architecture, state management with hooks, and API integration.

## 🚀 Features

### ✅ Task Management
- Create, edit, and delete tasks
- Mark tasks as completed/incomplete
- Filter tasks by status (All, Active, Completed)
- Persistent storage using localStorage
- Real-time task statistics

### 🌐 API Integration
- Fetch data from JSONPlaceholder API
- Display posts and users with pagination
- Search functionality for posts
- Loading and error states
- Responsive data grid layout

### 🎨 UI/UX Features
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **Smooth Animations**: CSS transitions and hover effects
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 🛠️ Technical Features
- **React Router**: Client-side routing with active link highlighting
- **Custom Hooks**: useLocalStorage for data persistence
- **Context API**: Theme management across components
- **Component Architecture**: Reusable, modular components
- **State Management**: React hooks for local and global state

## 📋 Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-shadrack-ago.git
   cd week-3-react-js-assignment-shadrack-ago
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button component with variants
│   ├── Card.jsx        # Card layout component
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   ├── Footer.jsx      # Footer with links
│   ├── Layout.jsx      # Main layout wrapper
│   ├── TaskManager.jsx # Task management component
│   └── ApiData.jsx     # API data display component
├── pages/              # Page components
│   └── Home.jsx        # Landing page
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.js # localStorage persistence hook
│   └── useApiData.js   # API data management hook
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management context
├── api/                # API integration
│   └── apiService.js   # API service functions
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## 🎯 Component Overview

### Core Components

- **Button**: Reusable button with multiple variants (primary, secondary, danger)
- **Card**: Container component for content layout
- **Navbar**: Navigation with theme toggle and active link highlighting
- **Footer**: Footer with links and contact information
- **Layout**: Main layout wrapper with Navbar and Footer

### Feature Components

- **TaskManager**: Complete task management with CRUD operations
- **ApiData**: API data display with search and pagination
- **Home**: Landing page with feature overview

### Custom Hooks

- **useLocalStorage**: Persists data in localStorage
- **useApiData**: Manages API data fetching with loading/error states

## 🌐 API Integration

The application integrates with the JSONPlaceholder API to demonstrate:

- **Posts API**: Fetch and display blog posts
- **Users API**: Fetch and display user information
- **Search**: Filter posts by title
- **Pagination**: Navigate through large datasets
- **Error Handling**: Graceful error states and retry functionality

## 🎨 Styling

Built with **Tailwind CSS** featuring:

- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Complete dark theme support
- **Custom Components**: Reusable utility classes
- **Animations**: Smooth transitions and hover effects
- **Typography**: Consistent text styling

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 📱 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Task Manager
![Task Manager](screenshots/tasks.png)

### API Data
![API Data](screenshots/api.png)

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **ESLint** - Code linting

## 📝 Assignment Requirements Met

✅ **Project Setup**
- React application with Vite
- Tailwind CSS configuration
- Project structure with components, pages, hooks, context, and API folders
- React Router for navigation

✅ **Component Architecture**
- Reusable Button component with variants
- Card component for content layout
- Navbar component with navigation and theme toggle
- Footer component with links
- Layout component with Navbar and Footer

✅ **State Management and Hooks**
- TaskManager with CRUD operations
- useState for component state
- useEffect for side effects
- useContext for theme management
- Custom useLocalStorage hook

✅ **API Integration**
- JSONPlaceholder API integration
- Data fetching with loading states
- Error handling
- Pagination
- Search functionality

✅ **Tailwind CSS Styling**
- Responsive design for all screen sizes
- Dark/light mode toggle
- Utility classes for layout, spacing, typography
- Custom animations and transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Shadrack Ago**
- GitHub: [@shadrack-ago](https://github.com/shadrack-ago)

## 🙏 Acknowledgments

- PLP MERN Stack Development Course
- React.js Documentation
- Tailwind CSS Documentation
- JSONPlaceholder for API data 