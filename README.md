# JSONPlace

A modern full-stack web application that provides a proxy interface to the JSONPlaceholder API with enhanced CRUD operations and a React-based frontend viewer. This project consists of a Node.js/Express backend API and a React/TypeScript Progressive Web App (PWA) frontend.

## 🚀 Features

### Backend API
- **RESTful API Proxy**: Seamless proxy to JSONPlaceholder API
- **Full CRUD Operations**: Create, Read, Update, Delete operations for all resources
- **Resource Support**: Posts, Comments, Albums, Photos, Todos, and Users
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes
- **CORS Enabled**: Cross-origin resource sharing for frontend integration

### Frontend PWA
- **Progressive Web App**: Installable web application with service worker support
- **Resource Viewer**: Browse and view JSONPlaceholder resources with clean UI
- **CRUD Interface**: Interactive forms for creating, editing, and deleting posts
- **Responsive Design**: Mobile-first responsive design
- **Routing**: Client-side routing with React Router
- **TypeScript**: Full TypeScript support for better development experience

## 📦 Project Structure

```
JSONPlace/
├── backend/                 # Node.js/Express API server
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── services/        # Business logic services
│   │   ├── routes/          # Express routes
│   │   ├── http/            # HTTP client utilities
│   │   └── middlewares/     # Express middlewares
│   └── package.json
├── frontend/                # React TypeScript PWA
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── api/             # API client
│   │   └── main.tsx         # Application entry point
│   ├── public/              # Static assets and PWA manifest
│   └── package.json
└── README.md
```

## 🛠️ Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The backend will be available at `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 🚀 Usage

### API Endpoints

The backend provides the following endpoints:

#### GET Resources
- `GET /api/posts` - List all posts
- `GET /api/comments` - List all comments
- `GET /api/albums` - List all albums
- `GET /api/photos` - List all photos
- `GET /api/todos` - List all todos
- `GET /api/users` - List all users

#### GET Single Resource
- `GET /api/{resource}/{id}` - Get a specific resource by ID

#### Create Resource
- `POST /api/{resource}` - Create a new resource

#### Update Resource
- `PUT /api/{resource}/{id}` - Full update of a resource
- `PATCH /api/{resource}/{id}` - Partial update of a resource

#### Delete Resource
- `DELETE /api/{resource}/{id}` - Delete a resource

### Frontend Features

1. **Home Page**: Overview and navigation to different sections
2. **Resource Lists**: Browse posts, comments, albums, photos, todos, and users
3. **Resource Details**: View detailed information for individual resources
4. **CRUD Interface**: Create, edit, and delete posts with a dedicated interface
5. **PWA Support**: Install as a native app on supported devices

## 🔧 Configuration

### Backend Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3000
JSONPLACEHOLDER_BASE=https://jsonplaceholder.typicode.com
```

### Frontend Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_BASE=http://localhost:3000/api
```

## 🏗️ Building for Production

### Backend Production Build

```bash
cd backend
npm start
```

### Frontend Production Build

```bash
cd frontend
npm run build
```

This creates a `dist` folder with the optimized production build.

## 🧪 Development

### Code Quality

The project includes ESLint configuration for code quality:

```bash
# Frontend linting
cd frontend
npm run lint
```

### Available Scripts

#### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌐 API Documentation

### Supported Resources

- **posts**: Blog posts with title, body, and userId
- **comments**: Comments with postId, name, email, and body
- **albums**: Photo albums with title and userId
- **photos**: Photos with albumId, title, url, and thumbnailUrl
- **todos**: Todo items with userId, title, and completed status
- **users**: User profiles with name, username, email, and address

### Example API Calls

```bash
# Get all posts
curl http://localhost:3000/api/posts

# Get a specific post
curl http://localhost:3000/api/posts/1

# Create a new post
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"New Post","body":"Post content","userId":1}'

# Update a post
curl -X PUT http://localhost:3000/api/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Post","body":"Updated content","userId":1}'

# Delete a post
curl -X DELETE http://localhost:3000/api/posts/1
```

## 🚀 Deployment

### Backend Deployment

The backend can be deployed to any Node.js hosting service:

1. Build the application
2. Set environment variables
3. Start with `npm start`

### Frontend Deployment

The frontend can be deployed to any static hosting service:

1. Build with `npm run build`
2. Deploy the `dist` folder
3. Configure the API base URL

### Environment-Specific Configuration

Make sure to update the API base URL in the frontend environment variables for production:

```env
VITE_API_BASE=https://your-api.domain.com/api
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) - The upstream API this project proxies
- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Express](https://expressjs.com/) - Backend framework

## ✨ Acknowledgments

- JSONPlaceholder for providing the fake REST API
- React and Vite teams for excellent development tools
- The open source community for inspiration and best practices