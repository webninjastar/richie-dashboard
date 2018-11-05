from models import UserModel
from flask import Flask, request, jsonify
import json
import uuid
from datetime import datetime

app = Flask(__name__)
#app.debug = True 

def create_id():
    return str(uuid.uuid4())

@app.route('/net-worth', methods=['POST'])
def net_worth_save():
    net_worth_id = create_id()
    try:
        if request.method == 'POST':
            data = request.get_json()
            if not UserModel.exists():
                UserModel.create_table(read_capacity_units=1, write_capacity_units=1,wait=True)
            net_worth = UserModel(total=data.get("total"),
                             previous_week=data.get("previous_week"),
                             previous_month=data.get("previous_month"),
                             previous_year=data.get("previous_year"),
                             previous_day=data.get("previous_day"),
                             user_id=data.get("user_id"),
                             net_worth_id=net_worth_id,
                             updated_at=datetime.utcnow(),
                             created_at=datetime.utcnow())
            net_worth.save()
            return jsonify(data),201
    except Exception as e:
        return {'error':'Unable to save the net-worth - {}'.format(e)},500


@app.route('/net-worth/<net_worth_id>', methods=['GET','PUT','DELETE'])
def net_worth_get(net_worth_id):
    # try:
    if request.method == 'GET':
        user = UserModel.get(net_worth_id)
        user_dict = user.__dict__
        return jsonify(user_dict),200
    elif request.method == 'PUT':
        data = request.get_json()
        user = UserModel.get(net_worth_id)
        user.update(actions=[UserModel.total.set(data.get("total")),
                    UserModel.previous_day.set(data.get("previous_day")),
                    UserModel.previous_week.set(data.get("previous_week")),
                    UserModel.previous_month.set(data.get("previous_month")),
                    UserModel.previous_year.set(data.get("previous_year")),
                    UserModel.user_id.set(data.get("user_id")),
                    UserModel.updated_at.set(datetime.utcnow())])
        return jsonify({"message":"successfully updated"}),200
    elif request.method == "DELETE":
        user = UserModel.get(net_worth_id)
        user.delete()
        return jsonify({"message":"successfully deleted"}),200
    # except Exception as e:
    #     return {'error': 'Unable to save the user - {}'.format(e)}, 500

if __name__ == '__main__':
    app.run()
