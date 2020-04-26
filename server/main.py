from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient
import sys

app = Flask(__name__)
CORS(app)

#connect to mongo
client = MongoClient("mongodb+srv://katyzou:abcde123@cluster0-mrgpe.gcp.mongodb.net/test?ssl=true&ssl_cert_reqs=CERT_NONE&retryWrites=true&w=majority")
db = client['db']

@app.route('/')
def hello_world():
    return 'Covid-19 Testing Scheduler'

@app.route('/schedule', methods=['POST'])
def schedule():
    newSchedule = request.json
    newSchedule['status'] = 'Negative'
    db['schedules'].insert_one(newSchedule)
    print('schedule', newSchedule, file=sys.stderr)
    return 'success'

@app.route('/status', methods=['POST'])
def status():
    newStatus = request.json
    db.schedules.find( { _id: } )
    print('status', request.json, file=sys.stderr)
    return 'success'
