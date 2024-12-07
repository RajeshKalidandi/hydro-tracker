from fastapi import APIRouter, HTTPException
from typing import List
from datetime import datetime, date
from app.schemas.water_intake import WaterIntake, WaterIntakeCreate

router = APIRouter(prefix="/api/water-intake", tags=["water-intake"])

# Temporary storage (replace with database later)
water_logs = []

@router.post("/", response_model=WaterIntake)
async def log_water_intake(intake: WaterIntakeCreate):
    new_intake = WaterIntake(
        id=len(water_logs) + 1,
        amount=intake.amount,
        timestamp=datetime.now(),
        type=intake.type,
        notes=intake.notes
    )
    water_logs.append(new_intake)
    return new_intake

@router.get("/today", response_model=dict)
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
