file = File.read("airports.json")
airport_data = JSON.parse(file)

airport_data.each do |airport|
  Airport.create({
    name: airport[:name],
    code: airport[:code]
  })
end
