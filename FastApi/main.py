from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend to access FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # safer than "*"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Root route ----------
@app.get("/")
def read_root():
    return {"message": "Welcome to Smart Serve API!"}

# ---------- Services route ----------
@app.get("/api/services")
def get_services():
    return {
        "services": [
            {"name": "Cafe Management", "description": "Manage your cafe operations efficiently."},
            {"name": "Menu Ordering", "description": "Handle online and offline orders easily."},
            {"name": "Catering", "description": "Manage event catering services smoothly."}
        ]
    }

# ---------- Cafe route ----------
@app.get("/api/cafe")
def get_cafe():
    return {
        "name": "Smart Serve Cafe",
        "status": "Open",
        "special": "Cappuccino",
        "location": "Hyderabad"
    }

# ---------- About Us route ----------
@app.get("/api/aboutus")
def get_about_us():
    about_us_data = {
        "title": "About Smart Serve",
        "description": (
            "Smart Serve is your one-stop solution for all your food and beverage needs. "
            "We offer cafe management, SaaS solutions, and event catering services."
        ),
        "team": [
            {"name": "John Doe", "role": "CEO"},
            {"name": "Jane Smith", "role": "CTO"},
            {"name": "Alice Brown", "role": "Head of Marketing"}
        ]
    }
    return {"aboutus": about_us_data}
