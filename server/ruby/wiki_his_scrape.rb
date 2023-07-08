require 'csv'
require 'open-uri'
require 'nokogiri'

# Read CSV file
csv = CSV.read('./server/python/csvs/historical_figures.csv', headers: true)

# Loop over each row (person)
csv.each do |row|
  # Fetch the name
  name = row['name']

  # Format the name for use in the Wikipedia URL
  formatted_name = name.gsub(' ', '_')

  # Open Wikipedia page
  doc = Nokogiri::HTML(URI.open("https://en.wikipedia.org/wiki/#{formatted_name}"))

  # Extract keywords from the page
  body_content = doc.css('#bodyContent')
  paragraphs = body_content.css('p')

  # Collect all words in the first three paragraphs
  keywords = paragraphs[0..2].map(&:text).join(' ').split(' ')

  # Save keywords to CSV
  CSV.open('keywords.csv', 'a') do |csv|
    csv << [name, *keywords]
  end
end
