# AAROHI - Women Empowerment Platform

A comprehensive platform designed to empower women through education, health resources, mental wellness support, and emergency assistance.

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)
```bash
# Run the development startup script
python start_dev.py
```

This will automatically:
- Install all dependencies
- Start the Flask backend on http://localhost:5000
- Start the React frontend on http://localhost:5173

### Option 2: Manual Setup

#### Backend Setup
```bash
cd Backend
pip install -r requirements.txt
python app.py
```

#### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

## 📁 Project Structure

```
AAROHI/
├── Backend/                 # Flask API Server
│   ├── app/
│   │   ├── routes/         # API endpoints
│   │   ├── utils/          # Utilities and data
│   │   └── __init__.py     # Flask app configuration
│   ├── app.py              # Main Flask application
│   └── requirements.txt    # Python dependencies
├── Frontend/               # React TypeScript Application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service layer
│   │   └── contexts/      # React contexts
│   ├── package.json       # Node.js dependencies
│   └── vite.config.ts     # Vite configuration
└── start_dev.py           # Development startup script
```

## 🔧 API Endpoints

### Education
- `GET /api/education` - Get scholarships and learning resources

### Health
- `GET /api/health` - Get health services and resources

### Mental Health
- `GET /api/mental-health` - Get mental health resources

### Stories
- `GET /api/stories` - Get inspirational stories
- `POST /api/stories` - Submit a new story

### Emergency
- `GET /api/emergency` - Get emergency contacts
- `POST /api/emergency/trigger` - Trigger emergency alert

## 🌟 Features

### Frontend
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Design**: Works on all devices
- **Real-time Data**: Fetches data from backend APIs
- **Loading States**: Proper loading and error handling
- **Filtering**: Category and skill-based filtering

### Backend
- **RESTful API**: Clean, structured API endpoints
- **CORS Support**: Configured for frontend integration
- **Error Handling**: Proper error responses
- **Modular Structure**: Organized with blueprints

## 🔗 Backend-Frontend Connection

The application uses a proxy configuration in Vite to forward API calls from the frontend to the backend:

```typescript
// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      secure: false,
    },
  },
}
```

This allows the frontend to make API calls to `/api/*` endpoints, which are automatically forwarded to the Flask backend running on port 5000.

## 🛠️ Development

### Adding New API Endpoints

1. Create a new route file in `Backend/app/routes/`
2. Register the blueprint in `Backend/app/__init__.py`
3. Add corresponding API service method in `Frontend/src/services/api.ts`
4. Update the frontend page to use the new API

### Adding New Frontend Pages

1. Create a new page component in `Frontend/src/pages/`
2. Add the route in `Frontend/src/App.tsx`
3. Add navigation link in `Frontend/src/components/Navbar.tsx`

## 📱 Available Pages

- **Home**: Landing page with overview
- **Education**: Scholarships and learning resources
- **Health**: Health services and resources
- **Stories**: Inspirational stories from women
- **Legal**: Legal resources and information
- **Help**: Emergency contacts and support

## 🚨 Emergency Features

- **Floating Panic Button**: Quick access to emergency contacts
- **Emergency Contacts**: Direct access to helplines
- **One-tap Calling**: Immediate connection to emergency services

## 🎨 UI/UX Features

- **Gradient Backgrounds**: Beautiful purple-pink gradients
- **Card-based Layout**: Clean, organized information display
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Proper contrast and keyboard navigation
- **Mobile-first**: Responsive design for all screen sizes

## 🔒 Security Features

- **CORS Configuration**: Proper cross-origin resource sharing
- **Input Validation**: Backend validation for all inputs
- **Error Handling**: Graceful error handling and user feedback

## 🚀 Deployment

### Backend Deployment
- Deploy to platforms like Heroku, Railway, or AWS
- Set environment variables for production
- Configure CORS origins for production domain

### Frontend Deployment
- Build the project: `npm run build`
- Deploy to platforms like Vercel, Netlify, or AWS S3
- Update API base URL for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please open an issue in the repository.

---

**AAROHI** - Empowering women through technology and community support. 