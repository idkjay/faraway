file = File.read("airports.json")
airport_data = JSON.parse(file)

airports = []
airport_data.each do |airport|
  x = Airport.create(
    name: airport["name"],
    code: airport["code"],
    city: airport["city"]
  )
  airports << x
end
