# testing rename files
# folder_path = './rename/'
# Dir.glob(folder_path + "*").sort.each do |f|
#   filename = File.basename(f, File.extname(f))
#   puts filename
#   # slice_index = filename.index("_")
#   # puts filename[(slice_index + 1)..(filename.length)]
#   slice_index = filename.index("-")
#   puts filename[0...slice_index]
# end

# move files root folder into rename folder
# Dir.glob("./" + "*").sort.each do |f|
#   file_type = File.extname(f)
#   if file_type == ".svg"
#     File.rename(f, "./rename/" + f)
#   end
# end

# appending pokemon name to svg file names
require_relative 'pokemon_list' # OR require './pokemon_list'

folder_path = "./images/master-svg/"
Dir.glob(folder_path + "*").sort.each do |f|
  filename = File.basename(f, File.extname(f))

  puts filename
end
