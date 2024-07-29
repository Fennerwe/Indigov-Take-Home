# crm-api
This is the main REST api. It's written using ExpressJS and uses the `crm-models` package in the monorepo to interact with the database.

# scripts
- `start-local`: starts the api locally on localhost:3000
- `format`: formats the files
- `test`: runs unit tests using Jest
- `build`: builds the api for deployment

# Endpoints
The following endpoints are available:

- GET '/health': health check endpoint
- POST '/constituents': Takes in a constituent's contact info and creates a new constituent. If a constituent already exists with the same email, it updates that constituent instead.
    - Example request body:
    ```
    {
        "constituentData": {
            "firstName": "Bob",
            "lastName": "Ross",
            "email": "bob_ross@painting.com",
            "phone": "555-555-5555"
        },
        "address": {
            "street1": "123 Random St",
            "city": "San Francisco",
            "state": "CA",
            "zip": 12345
        }
    }
    ```
- GET '/constituents': Returns a list of all constituents
- GET '/constituents/export': Takes a start and end date as query parameters in the format 'YYYY-MM-DD' and returns a CSV file of all of the constituents who were created between those dates.
    - Example request: `localhost:3000/constituents/export?startDate=2024-07-20&endDate=2024-07-30`
