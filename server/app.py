from repository.model import database
from repository import actor
from domain.custom_model import (Actor)
from fastapi import FastAPI


app = FastAPI(
    title="Brothers Finance API",
    description='',
    version="0.0.1",
    license_info={
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
)


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


@app.post("/actor")
async def create_actor(item: Actor):
    repo = actor.Actor(database)

    return await repo.save_actor(item)

@app.get("/actors")
async def get_actors():
    repo = actor.Actor(database)
    return await repo.get_list()