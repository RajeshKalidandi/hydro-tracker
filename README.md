# HydroTracker - Water Intake Tracking App

> **🚧 Project Status: Development Paused**  
> This project is currently paused as of December 7, 2023. The basic structure and features have been implemented, but further development is on hold. Feel free to explore the code and contribute!

A modern web application for tracking daily water intake with features like achievements, analytics, and reminders.

## Current Implementation Status

✅ Completed:
- Basic project structure (Frontend & Backend)
- Frontend UI components with Chakra UI
- Water intake tracking functionality
- Achievement system structure
- Basic API endpoints

⏳ Pending:
- Database integration
- User authentication
- Persistent data storage
- Mobile responsiveness improvements
- Testing implementation
- Deployment setup

## Project Structure

```
hydro-tracker/
├── backend/                 # FastAPI Backend
│   ├── app/
│   │   ├── routes/         # API route handlers
│   │   ├── schemas/        # Pydantic models
│   │   └── __init__.py
│   ├── main.py            # FastAPI application entry point
│   └── requirements.txt    # Python dependencies
│
└── frontend/               # React Frontend
    ├── public/            # Static files
    ├── src/
    │   ├── api/          # API client and endpoints
    │   ├── components/   # Reusable React components
    │   ├── pages/        # Page components
    │   ├── store/        # State management (Zustand)
    │   ├── types/        # TypeScript type definitions
    │   └── theme.ts      # Chakra UI theme customization
    └── package.json      # Node.js dependencies
```

## Features

- 💧 Track daily water intake
- 📊 Visual progress tracking
- 🏆 Achievement system
- 📱 Responsive design
- 🎯 Daily goals
- 📈 Progress analytics

## Tech Stack

### Frontend
- React with TypeScript
- Chakra UI for components
- Framer Motion for animations
- Zustand for state management
- Axios for API calls
- Vite for development

### Backend
- FastAPI (Python)
- Pydantic for data validation
- SQLAlchemy (coming soon)
- PostgreSQL (coming soon)

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   source venv/bin/activate  # Unix/macOS
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the server:
   ```bash
   python -m uvicorn main:app --reload
   ```
   The API will be available at http://localhost:8000

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
   The app will be available at http://localhost:5173

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000
```

## Development

### Running Tests
```bash
# Frontend
npm run test

# Backend
pytest
```

### Linting
```bash
# Frontend
npm run lint
npm run lint:fix

# Backend
flake8
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Repository

This project is hosted on GitHub: [https://github.com/RajeshKalidandi/hydro-tracker](https://github.com/RajeshKalidandi/hydro-tracker)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

Special thanks to all contributors who have helped shape this project. While development is currently paused, we welcome any feedback or contributions through GitHub issues and pull requests.
