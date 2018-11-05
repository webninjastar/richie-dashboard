from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, JSONAttribute, ListAttribute, UTCDateTimeAttribute, BooleanAttribute,NumberAttribute


class UserModel(Model):
    """
    A DynamoDB Net-Worth
    """
    class Meta:
        table_name = 'goals_tab'
        region = 'us-east-1'
    goal_id = UnicodeAttribute(hash_key=True)
    # goals = ListAttribute()
    balances = JSONAttribute()
    name = UnicodeAttribute()
    account_id = UnicodeAttribute()
    account_type = UnicodeAttribute()
    subtype = UnicodeAttribute()
    goal_type = UnicodeAttribute()
    updated_at = UTCDateTimeAttribute()
    created_at = UTCDateTimeAttribute()
