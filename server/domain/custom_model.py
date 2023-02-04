from typing import *
from pydantic import BaseModel

class Actor(BaseModel):
    name: str
    email: str
    photo: Optional[str]
    birth_date: Optional[str]
    genre: Optional[str]