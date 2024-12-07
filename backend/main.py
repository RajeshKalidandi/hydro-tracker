from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime, date
from typing import List, Optional
import uvicorn

app = FastAPI(title="HydroTracker API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class WaterIntake(BaseModel):
    amount: float
    timestamp: datetime
    type: str  # e.g., "water", "tea", "coffee"
    notes: Optional[str] = None

class UserGoal(BaseModel):
    daily_target: float
    current_streak: int
    last_updated: date

# Temporary storage (replace with database later)
water_logs = []
user_goals = {}

@app.get("/")
async def read_root():
    return {"message": "Welcome to HydroTracker API"}

@app.post("/water-intake/")
async def log_water_intake(intake: WaterIntake):
    water_logs.append(intake)
    return {"status": "success", "message": "Water intake logged successfully"}

@app.get("/water-intake/today")
async def get_today_intake():
    today = date.today()
    today_logs = [
        log for log in water_logs 
        if log.timestamp.date() == today
    ]
    total_intake = sum(log.amount for log in today_logs)
    return {
        "total_intake": total_intake,
        "logs": today_logs,
        "unit": "ml"
    }

@app.post("/goals/")
async def set_daily_goal(goal: UserGoal):
    user_goals["default"] = goal
    return {"status": "success", "message": "Goal set successfully"}

@app.get("/goals/")
async def get_daily_goal():
    if "default" not in user_goals:
        raise HTTPException(status_code=404, detail="No goal set")
    return user_goals["default"]

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
