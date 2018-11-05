from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, JSONAttribute, ListAttribute, UTCDateTimeAttribute, BooleanAttribute,NumberAttribute


class UserModel(Model):
    """
    A DynamoDB Net-Worth
    """
    class Meta:
        table_name = 'goals_tab'
        region = 'us-east-1'
    budget_id = UnicodeAttribute(hash_key=True)
    # budget = ListAttribute()
    balances = JSONAttribute()
    updated_at = UTCDateTimeAttribute()
    created_at = UTCDateTimeAttribute()
