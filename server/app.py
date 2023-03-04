from config.model import main
from config.model import (User)
from domain.custom_model import (UserModel)
from repository import users
from fastapi import FastAPI
from pydantic import BaseModel

session = main()

app = FastAPI(
    title="Brothers Finance API",
    description='',
    version="0.0.1",
    license_info={
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
)

@app.post("/actor")
async def create_actor(item: UserModel):
    repo = users.Users(session, User)
    return await repo.save_actor(item)

@app.get("/actors")
async def get_actors():
    repo = users.Users(session, User)
    return await repo.get_list()