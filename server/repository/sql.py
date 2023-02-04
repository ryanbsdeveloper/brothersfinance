from datetime import datetime
from collections import namedtuple
from config import config

class SQL:
    def __init__(self, db):
        self.db = db

    async def save(self, entity, data):
        data = __class__.parse_data(data)

        # This is database responsability
        data.pop("id", None)
        data["created_at"] = datetime.now()
        data["modified_at"] = datetime.now()

        query = self.insert(entity.lower(), data)
        last_inserted_id = __class__.last_inserted_id()
        result = await self.db.execute(
            query=f"{query['query']} {last_inserted_id}", values=query["data"]
        )
        return namedtuple("result", ["id"])(result)

    def insert(self, table: str, data: dict) -> dict:
        """Return an INSERT query.

        Args:
            table str: The table name
            data dict: The data to be inserted
        Returns:
            dict['query', 'data']: Dict the query and it's data
        """
        keys = data.keys()
        columns = ",".join(keys)
        columns_replace = ":" + ",:".join(keys)
        query = f"INSERT INTO {table} ({columns}) VALUES ({columns_replace})"
        return {"query": query, "data": data}
    
    @staticmethod
    def parse_data(model_instance):
        data = model_instance.dict(exclude_unset=True)
        for field, meta in model_instance.__fields__.items():
            if field not in data and meta.default is not None:
                data[field] = meta.default
        return data


    @staticmethod
    def last_inserted_id():
        """Determine the correct way to query the last inserted ID.

        See the protocol set in config.DB_URL and determine the correct way to return the
        last inserted ID.

        Only works for PostgreSQL, MySQL and sqlite and assumes there is a ID column in the table.
        """
        protocol = config.DATABASE_URL.split("://")[0]
        last_id_query = {
            "postgres": "RETURNING id",
            "postgresql": "RETURNING id",
            "mysql": ";SELECT LAST_INSERT_ID();",
            "sqlite": ";SELECT last_insert_rowid();",
        }
        return last_id_query.get(protocol) or ""