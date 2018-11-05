from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, UnicodeSetAttribute, UTCDateTimeAttribute, BooleanAttribute


class UserModel(Model):
    """
    A DynamoDB User
    """
    class Meta:
        table_name = 'user_tab'
        region = 'us-east-1'
    user_name = UnicodeAttribute()
    verified = BooleanAttribute(default=False)
    name = UnicodeAttribute(null=True)
    first_name = UnicodeAttribute(null=True)
    last_name = UnicodeAttribute(null=True)
    updated_at = UTCDateTimeAttribute()
    user_id = UnicodeAttribute(hash_key=True)
    email = UnicodeAttribute()
    created_at = UTCDateTimeAttribute()

