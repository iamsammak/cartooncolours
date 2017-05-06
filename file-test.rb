folder_path = './rename/'
Dir.glob(folder_path + "*").sort.each do |f|
  filename = File.basename(f, File.extname(f))
  puts filename
  slice_index = filename.index("-")
  puts filename[(slice_index + 1)..(filename.length)]
end
