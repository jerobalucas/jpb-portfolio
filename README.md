


```
# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and professional experience.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Integration**: Direct email and LinkedIn contact functionality
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Smooth Navigation**: React Router for seamless page transitions
- **Interactive Components**: Engaging user interface elements

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Personal Information
Update the following files with your information:
- Contact details in `src/pages/Contact.jsx`
- Personal information in `src/pages/Home.jsx`
- Social media links and email addresses

### Styling
- Tailwind CSS classes can be modified throughout components
- Custom styles can be added to `src/App.css`

### Content
- Add your projects, skills, and experience in the respective components
- Update images and assets in the `public` folder

## 📧 Contact Integration

The contact section includes:
- **Direct Email**: Opens default email client with pre-filled recipient
- **LinkedIn**: Direct link to LinkedIn profile
- **Contact Form**: (Optional) Can be extended with backend integration

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Popular Platforms

**GitHub Pages:**
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run deploy
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any environment-specific configurations:
```env
VITE_APP_TITLE=Your Portfolio
VITE_CONTACT_EMAIL=your.email@example.com
```

### Router Configuration
The app uses React Router with:
- Home page at `/`
- Automatic redirect to home for invalid routes
- Clean URL structure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Jero Paolo Balucas**
- Email: jeropaolobalucas@gmail.com
- LinkedIn: [linkedin.com/in/jero-paolo-balucas](https://linkedin.com/in/jero-paolo-balucas)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Tailwind CSS for the utility-first CSS framework
- Lucide React for the beautiful icons

---

⭐ Star this repository if you found it helpful!
```
