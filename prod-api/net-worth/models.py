from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, UnicodeSetAttribute, UTCDateTimeAttribute, BooleanAttribute,NumberAttribute


class UserModel(Model):
    """
    A DynamoDB Net-Worth
    """
    class Meta:
        table_name = 'net_worth_tab'
        region = 'us-east-1'
    net_worth_id = UnicodeAttribute(hash_key=True)    
    total = NumberAttribute()
    previous_week = NumberAttribute()
    previous_month = NumberAttribute()
    previous_year = NumberAttribute()
    previous_day = NumberAttribute()
    user_id = UnicodeAttribute()
    updated_at = UTCDateTimeAttribute()
    created_at = UTCDateTimeAttribute()
