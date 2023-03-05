from config.model import User

class Users:
    def __init__(self, repo, model_repo) -> None:
        self.repo = repo
        self.model_repo = model_repo
        
    async def get_all_users(self):
        users = User.objects.all()
        return [user for user in users]

    async def create_user(self, data: object):
        user = User(**dict(data))
        return user.save()
