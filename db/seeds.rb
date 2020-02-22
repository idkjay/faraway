file = File.read("airports.json")
airport_data = JSON.parse(file)

airports = []
airport_data.each do |airport|
  new_airport = Airport.create(
    country: airport["country"],
    state: airport["state"],
    city: airport["city"],
    name: airport["name"],
    code: airport["code"]
  )
  airports << new_airport
end
