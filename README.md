# Covid-19-Testing-Tracker
https://devpost.com/software/covid-19-testing-scheduler-and-status-checker

MLH Student Hackathon submission: Covid-19 testing appointment scheduler and result status checker. 

## Get Started

Project level commands

First set up a venv in server

```
cd server
python3 -m venv ./venv
```

This will install all dependencies in server and client

```
npm install
```

This will start the server and client up for development

```
npm start
```

Client: `http://localhost:3000/`
Server: `http://localhost:5000/`

## Server

`main.py` is the main file

### Activate Venv

```
cd server
source venv/bin/activate
```

### Deactivate Venv (rarely needed)

```
deactivate
```

Docker machine on GCP: https://docs.docker.com/machine/drivers/gce/

## Cient

`App.js` is react root
