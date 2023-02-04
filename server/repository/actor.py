from .sql import SQL

class Actor(SQL):
    def __init__(self, db) -> None:
        super().__init__(db)

    async def get_list(self):
        """Get all values the unknow model."""

        query = """
            SELECT  *
            FROM actor
        """
        data = await self.db.fetch_all(query)
        return data

    async def save_actor(self, data):
        """Save item."""
        
        return await self.save('actor', data=data)
    