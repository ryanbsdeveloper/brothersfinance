from cassandra.cqlengine.models import Model

class Users():
    def __init__(self, repo, db: Model) -> None:
        self.repo = repo
        self.db = db

    async def get_list(self):
        """Get all values the unknow model."""

        users = self.db.objects.all()
        return [user for user in users]

    async def save_actor(self, user: Model):
        """Save item."""
        new_user = self.db.create(**dict(user))
        return new_user
    
