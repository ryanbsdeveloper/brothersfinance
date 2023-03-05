from uuid import uuid4
from urllib.parse import urlparse
from config import config
from cassandra.cqlengine import columns
from cassandra.cqlengine.models import Model
from cassandra.cluster import Cluster
from cassandra.cqlengine.management import sync_table
from cassandra.cqlengine import connection
from aiocassandra import aiosession
from datetime import datetime


class User(Model):
    __table_name__ = 'users'

    id = columns.UUID(primary_key=True, default=uuid4)
    name = columns.Text(required=True)
    email = columns.Text(required=True)
    photo = columns.Text()
    birth_date = columns.Text()
    genre = columns.Text()
    created_at = columns.Text(default=datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
    modified_at = columns.Text()

    def __repr__(self):
        return f"<User(id={self.id}, name='{self.name}', email='{self.email}', photo='{self.photo}', birth_date='{self.photo}', genre='{self.photo}', created_at='{self.photo}', modified_at='{self.photo}')>"

def main():
    url = urlparse(config.DATABASE_URL)
    connection.setup([url.hostname], 'brothers_finance')

    _class = [User]
    [sync_table(cl) for cl in _class]
    
    # auth_provider = PlainTextAuthProvider(username=url.username, password=url.password)
    cluster = Cluster([url.hostname], port=url.port)
    
    session = cluster.connect()
    connection.register_connection('brothers_finance', session=session)
    return aiosession(session)