puts "Renaming files..."
count = 0

# File.rename(f, folder_path + "/" + filename.capitalize + File.extname(f))

folder_path = "./rename/"
Dir.glob(folder_path + "*").sort.each do |f|
  filename = File.basename(f, File.extname(f))
  if filename.include?("-")
    slice_idx = filename.index("-")
    new_filename = filename[(slice_idx + 1)..(filename.length)]
    File.rename(f, folder_path + new_filename + File.extname(f))
    count += 1
  end
end

puts "Renaming complete. #{count} files renamed."
