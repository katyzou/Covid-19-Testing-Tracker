from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

#connect to mongo
client = MongoClient("")


@app.route('/')
def hello_world():
    return 'Covid-19 Testing Scheduler'


