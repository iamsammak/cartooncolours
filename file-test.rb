# testing rename files
# folder_path = './rename/'
# Dir.glob(folder_path + "*").sort.each do |f|
#   filename = File.basename(f, File.extname(f))
#   puts filename
#   slice_index = filename.index("-")
#   puts filename[(slice_index + 1)..(filename.length)]
# end


# move files root folder into rename folder
Dir.glob("./" + "*").sort.each do |f|
  file_type = File.extname(f)
  if file_type == ".svg"
    File.rename(f, "./rename/" + f)
  end
end
