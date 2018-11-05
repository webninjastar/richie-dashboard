from models import UserModel
from flask import Flask, request, jsonify
import json
import uuid
from datetime import datetime

app = Flask(__name__)
#app.debug = True 

def create_id():
    return str(uuid.uuid4())

@app.route('/user',methods=['POST'])
def user_save():
    user_id = create_id()
    try:
        if request.method == 'POST':
            data = request.get_json()
            if not UserModel.exists():
                UserModel.create_table(read_capacity_units=1, write_capacity_units=1,wait=True)
            user = UserModel(user_name=data.get("user_name"),
                             verified=data.get("verified"),
                             name=data.get("name"),
                             first_name=data.get("first_name"),
                             last_name=data.get("last_name"),
                             user_id=user_id,
                             email=data.get("email"),
                             updated_at=datetime.utcnow(),
                             created_at=datetime.utcnow())
            user.save()
            return json.dumps(data),201
    except Exception as e:
        return {'error':'Unable to save the user - {}'.format(e)},500


@app.route('/user/<user_id>', methods=['GET','PUT','DELETE'])
def user_get(user_id):
    try:
        if request.method == 'GET':
            user = UserModel.get(user_id)
            user_dict = user.__dict__
            return jsonify(user_dict),200
        elif request.method == 'PUT':
            data = request.get_json()
            user = UserModel.get(user_id)
            user.update(actions=[UserModel.user_name.set(data.get("user_name")),
                                UserModel.verified.set(data.get("verified")),
                                UserModel.name.set(data.get("name")),
                                UserModel.first_name.set(data.get("first_name")),
                                UserModel.last_name.set(data.get("last_name")),
                                UserModel.email.set(data.get("email")),
                                UserModel.updated_at.set(datetime.utcnow())])
            return jsonify({"message":"successfully updated"}),200
        elif request.method == "DELETE":
            user = UserModel.get(user_id)
            user.delete()
            return jsonify({"message":"successfully deleted"}),200
    except Exception as e:
        return {'error': 'Unable to save the user - {}'.format(e)}, 500

if __name__ == '__main__':
    app.run()
