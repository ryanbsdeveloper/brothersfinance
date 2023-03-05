import typing

class BaseRepository:
    def __init__(self) -> None:
        super().__init__()

    async def save(self, entity: str, data: dict) -> None:
        """Salvar dados no banco."""
        return await asyncio.get_running_loop().run_in_executor(None, func, *args)