puts "Counting files..."

pokemon = Hash.new
(1..151).each do |n|
  pokemon[n] = false
end

folder_path = "./iconset/"
Dir.glob(folder_path + "*").sort.each do |filename|
  filename_to_i = File.basename(filename, File.extname(filename)).to_i
  pokemon[filename_to_i] = true
end

ret = []
pokemon.each do |key, value|
  if value == false
    ret << key
  end
end

ret.each do |num|
  ret << num
  puts "Missing #{num}"
end

puts "Caught em' all" if ret.length.zero?
puts "Complete"
