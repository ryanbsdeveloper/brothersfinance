import databases
import sqlalchemy
from config import config

database = databases.Database(config.DATABASE_URL)

metadata = sqlalchemy.MetaData()

notes = sqlalchemy.Table(
    "actor",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("name", sqlalchemy.String),
    sqlalchemy.Column("email", sqlalchemy.String),
    sqlalchemy.Column("photo", sqlalchemy.String),
    sqlalchemy.Column("birth_date", sqlalchemy.String),
    sqlalchemy.Column("genre", sqlalchemy.String),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime),
    sqlalchemy.Column("modified_at", sqlalchemy.DateTime)
)


engine = sqlalchemy.create_engine(
    config.DATABASE_URL
)
metadata.create_all(engine)