from config.model import main
from domain.custom_model import (UserModel)
from repository import users as user_repo
from services import users as user_service
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

@app.post("/actor", status_code=201)
async def create_user(item: UserModel):
    model_repo = user_repo.Users(session)
    user_svc = user_service.Users(session, model_repo)
    return await user_svc.create_user(item)

@app.get("/actors", status_code=200)
async def get_actors():
    model_repo = user_repo.Users(session)
    user_svc = user_service.Users(session, model_repo)
    return await user_svc.get_all_users()