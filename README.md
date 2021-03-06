# Faraway

[![Codeship Status for idkjay/faraway](https://app.codeship.com/projects/2cccf0a0-ee3a-0138-dedd-1a088a1a4525/status?branch=master)](https://app.codeship.com/projects/413439)

Travelling is fun! Paying more than you need to is not. Faraway helps users find the cheapest flights as quick as possible along with some basic information about the destination country. Users will also be able to create simple planners to help plan their next vacation. Update or delete them if needed.

Live site: https://faraway.herokuapp.com/ (currently not paying extra dynos on Heroku so it might take some time to load the site up, I apologize for that)

![screenshot1](https://i.imgur.com/jvdwy9d.png)
![screenshot2](https://i.imgur.com/1zo0LL0.png)

## Technologies

* Ruby 2.6.5
* Rails 5.2.3
* React 16.8.0
* Devise
* [Bulma 0.8.0](https://bulma.io/)
* [Kiwi API](https://docs.kiwi.com/)
* [Unsplash API](https://unsplash.com/documentation)
* [Restcountries API](https://restcountries.eu/)

## Setup

To set up this app, download or clone this repo and run the following commands in your terminal in the exact order:
* ```yarn install```
* ```bundle exec bundle install```
* ```bundle exec rake db:create```
* ```bundle exec rake db:migrate && bundle exec rake db:rollback && bundle exec rake db:migrate```
* ```bundle exec rake db:seed```
* ```yarn run start```
* ```new tab```
* ```bundle exec rails s```
* ```navigate your browser to localhost:3000```

## Testing

There are two types of tests in this project: RSpec testing (for unit and controller testing) and Enzyme testing.

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

* **Jordan Chu** - [idkjay](https://github.com/idkjay)


