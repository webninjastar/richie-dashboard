from models import UserModel
from flask import Flask, request, jsonify
import json
import uuid
from datetime import datetime

app = Flask(__name__)
#app.debug = True 


@app.route('/income', methods=['POST'])
def net_worth_save():
    try:
        if request.method == 'POST':
            data = request.get_json()
            print (data)
            print (type(data))
            if not UserModel.exists():
                UserModel.create_table(read_capacity_units=1, write_capacity_units=1,wait=True)
            income_data = UserModel(income=data,
                                  created_at=datetime.utcnow(),
                                  updated_at=datetime.utcnow())
            income_data.save()
            return jsonify(data),201
    except Exception as e:
        return {'error':'Unable to save the net-worth - {}'.format(e)},500

if __name__ == '__main__':
    app.run()
