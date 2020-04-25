const json = {
  "title": "Find and schedule available appointments near you",
  "pages": [
   {
    "name": "scheduler",
    "elements": [
     {
      "type": "checkbox",
      "name": "prescreen",
      "title": "Pre-screen Questions",
      "isRequired": true,
      "choices": [
       {
        "value": "item1",
        "text": "Are you experiencing coughing and/or fevers?"
       },
       {
        "value": "item2",
        "text": "Are you predisposed to health risks?"
       },
       {
        "value": "item3",
        "text": "Are you over the age of 65 or more?"
       }
      ]
     },
     {
      "type": "dropdown",
      "name": "locations",
      "title": "Free testing locations",
      "isRequired": true,
      "choices": [
       {
        "value": "item1",
        "text": "San Mateo"
       },
       {
        "value": "item2",
        "text": "San Diego"
       },
       {
        "value": "item3",
        "text": "Las Vegas"
       }
      ]
     },
     {
      "type": "dropdown",
      "name": "availDate",
      "title": "Available Dates",
      "isRequired": true,
      "hasOther": true,
      "choices": [
       {
        "value": "item1",
        "text": "Saturday April 25, 2020"
       },
       {
        "value": "item2",
        "text": "Sunday April 26, 2020"
       },
       {
        "value": "item3",
        "text": "Monday April 27, 2020"
       }
      ],
      "otherText": "Tuesday April 28, 2020"
     },
     {
      "type": "dropdown",
      "name": "availTime",
      "title": "Available Times",
      "isRequired": true,
      "choices": [
       {
        "value": "item1",
        "text": "11:00 am"
       },
       {
        "value": "item2",
        "text": "12:00 pm"
       },
       {
        "value": "item3",
        "text": "1:00 pm"
       },
       {
        "value": "item4",
        "text": "2:00 pm"
       }
      ]
     },
     {
      "type": "text",
      "name": "first_name",
      "title": "First Name",
      "isRequired": true
     },
     {
      "type": "text",
      "name": "lastName",
      "title": "Last Name",
      "isRequired": true
     },
     {
      "type": "text",
      "name": "email",
      "title": "Email ",
      "isRequired": true,
      "inputType": "email"
     },
     {
      "type": "text",
      "name": "phone",
      "title": "Phone number",
      "isRequired": true,
      "inputType": "number"
     },
     {
      "type": "text",
      "name": "dob",
      "title": "Date of Birth (MM/DD/YYYY)",
      "isRequired": true,
      "inputType": "date",
      "max": "2999-12-31"
     },
     {
      "type": "text",
      "name": "address",
      "title": "Address",
      "isRequired": true
     },
     {
      "type": "text",
      "name": "city",
      "title": "City",
      "isRequired": true
     },
     {
      "type": "text",
      "name": "state",
      "title": "State",
      "isRequired": true
     },
     {
      "type": "text",
      "name": "zipcode",
      "title": "Zip Code",
      "isRequired": true
     }
    ]
   }
  ],
  "showPageTitles": false,
  "showQuestionNumbers": "off"
 }

   export default json;