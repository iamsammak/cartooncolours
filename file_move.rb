# move files from one directory to another

folder_path = "./rename/"
new_folder_path = "./iconset/"

Dir.glob(folder_path + "*").sort.each do |f|
  filename = File.basename(f)
  File.rename(f, new_folder_path + filename)
end
