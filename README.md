[![Codeship Status for idkjay/faraway](https://app.codeship.com/projects/d12a94b0-2e53-0138-3455-56b7d5cdb6a3/status?branch=master)](https://app.codeship.com/projects/384824)

# Faraway

Travelling is fun! Paying more than you need to is not. Faraway helps users find the cheapest flights as quick as possible along with some basic information about the destination country. Users will also be able to create simple planners to help plan their next vacation. Update or delete them if needed.

Heroku Link: https://faraway.herokuapp.com/

## Technologies

* Ruby 2.6.5
* Rails 5.2.3
* React 16.8.0
* Bulma CSS 0.8.0

## Getting Started

To set up this app, download or clone this repo and run the following commands in your terminal in the exact order:
* yarn install
* bundle exec bundle install
* bundle exec rake db:create
* bundle exec rake db:migrate && bundle exec rake db:rollback && bundle exec rake db:migrate
* bundle exec rake db:seed
* yarn run start
* new tab
* bundle exec rails s
* Navigate your browser to localhost:3000

## Running the tests

There are two types of tests in this project: RSpec testing and Enzyme testing.

To run Rspec testing, first prepare the database with:
```
bundle exec rake db:test:prepare
```
and then run:
```
bundle exec rspec
```

To run Enzyme testing:
```
yarn run test
```

## Author

* **Jordan Chu** - *Initial work* - [idkjay](https://github.com/idkjay)


## Acknowledgments

* Thanks to Launch Academy



