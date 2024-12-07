from pydantic import BaseModel

class Achievement(BaseModel):
    id: int
    title: str
    description: str
    progress: int
    completed: bool
    color: str

    class Config:
        from_attributes = True
