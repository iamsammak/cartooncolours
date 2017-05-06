puts "Renaming files..."
count = 0

# File.rename(f, folder_path + "/" + filename.capitalize + File.extname(f))

folder_path = "./rename/"
Dir.glob(folder_path + "*").sort.each do |f|
  # filename = File.basename(f, File.extname(f))
  # File.rename(f, folder_path + filename.capitalize + File.extname(f))
end

puts "Renaming complete. #{count} files renamed."
