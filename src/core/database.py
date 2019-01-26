from sqlalchemy.orm import sessionmaker

from src.models import Emails, Tweets, Users
from src.core.helpers import create_db_connection, load_env_vals


__all__ = [
    "add_word_to_db",
    "get_all_emails",
    "get_latest_word",
    "get_word_by_date"
]


def __connect_to_db_sqlalchemy():
    # Connect to the database
    config = load_env_vals()
    _, db = create_db_connection(config)

    # Make a database session
    Session = sessionmaker(bind=db)
    return Session()


def get_all_emails() -> list:
    # Get all the emails
    session = __connect_to_db_sqlalchemy()
    all_emails = session.query(Emails).all()
    session.close()
    return all_emails


def get_latest_word():
    return Tweets.query.order_by(Tweets.date.desc()).first_or_404()


def get_word_by_date(date: str):
    return Tweets.query.filter(Tweets.date.startswith(date)).first_or_404()


def add_user_to_db(user_dict: dict):
    """Add a user to the database."""
    user = Users(
        uid=user_dict["uid"],
        handle=user_dict["handle"]
    )
    session = __connect_to_db_sqlalchemy()
    session.add(user)
    session.commit()
    session.close()


def add_word_to_db(tweet: dict):
    """Add a word to the database."""
    word = Tweets(
        tweet_id=tweet["tweet_id"],
        date=tweet["date"],
        uid=tweet["uid"],
        content=tweet["content"],
        word=tweet["word"]
    )
    session = __connect_to_db_sqlalchemy()
    session.add(word)
    session.commit()
    session.close()
