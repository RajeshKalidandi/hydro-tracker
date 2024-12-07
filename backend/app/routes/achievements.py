from fastapi import APIRouter, HTTPException
from typing import List
from app.schemas.achievement import Achievement

router = APIRouter(prefix="/api/achievements", tags=["achievements"])

# Temporary achievements data
achievements = [
    {
        "id": 1,
        "title": "Hydration Rookie",
        "description": "Track your water intake for 3 days straight",
        "progress": 100,
        "completed": True,
        "color": "green"
    },
    {
        "id": 2,
        "title": "Consistency King",
        "description": "Complete your daily goal for 7 days",
        "progress": 70,
        "completed": False,
        "color": "purple"
    }
]

@router.get("/", response_model=List[Achievement])
async def get_achievements():
    return achievements

@router.get("/{achievement_id}", response_model=Achievement)
async def get_achievement(achievement_id: int):
    achievement = next(
        (a for a in achievements if a["id"] == achievement_id),
        None
    )
    if not achievement:
        raise HTTPException(status_code=404, detail="Achievement not found")
    return achievement
