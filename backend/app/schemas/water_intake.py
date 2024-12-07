from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class WaterIntakeBase(BaseModel):
    amount: float
    type: str
    notes: Optional[str] = None

class WaterIntakeCreate(WaterIntakeBase):
    pass

class WaterIntake(WaterIntakeBase):
    id: int
    timestamp: datetime

    class Config:
        from_attributes = True
