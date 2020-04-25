from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

#connect to mongo
client = MongoClient("mongodb+srv://katyzou:abcde123@cluster0-mrgpe.gcp.mongodb.net/test?retryWrites=true&w=majority")


@app.route('/')
def hello_world():
    return 'Covid-19 Testing Scheduler'


