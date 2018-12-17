# api testing coding challenge

### Environment
- postgres version (PostgreSQL) 11.1
- yarn version 1.10.1

### Installation

Install Postgres: 
`brew install postgresql`

Install all packages: 
`yarn`

Create PostgresDB Locally: 
`createdb api-challenge`

Seed DB: 
`npm run seed`

Run App: 
`npm run start`

Run API Tests:
`npm run apiTests`

View Results in Reporter:
`open mochawesome-report/mochawesome.html`

### Testing Scenario: 

Your client has decided to open a store and sell various products. They'd like to allow their customers to rate each product. With this offering your client is releasing two new API endpoints.  

### Instructions: 

1. Write tests to validate the ratings for various products. 
2. Write tests to validate reviews for various products.
3. Make suggestions for code improvements or make improvements to the code as you see fit. 

### API Testing Notes
- Written in Javascript
- Using node-fetch, mocha and chai
- Using Mochawesome for reporting

### Challenge Notes
- There aren't any requirements specified for ratings
    - what makes a valid rating?
    - I used the db schema as a starting point and added my own assumptions in order to be able to add different testing scenarios
    - I wrote tests with the following assumptions for ratings
        - A rating cannot be lower than zero
        - A rating cannot be higher than 5
        - A rating must be an integer

- There aren't any requirements specified for reviews
    - what makes a valid review?
    - I used the db schema as a starting point and added my own assumptions in order to be able to add different testing scenarios
    - I wrote tests with the following assumptions for reviews
        - A review should have a rating
        - A review can have a user_id
        - A review can have a product_id
        - A review should have review_text

- I added tests to verify status codes


