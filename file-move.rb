folder_path = "./rename/"
Dir.glob(folder_path + "*").sort.each do |f|
  filename = File.basename(f, File.extname(f))
  puts filename.to_i
end
