def begin_renaming
  puts "Renaming files..."

  count = 0

  # folder_path = "./rename/"
  puts "Enter the folder path. ex. './folder_path/' "
  folder_path = gets.chomp
  puts folder_path

  Dir.glob(folder_path + "*").sort.each do |f|
    filename = File.basename(f, File.extname(f))
    next unless filename.include?("_")
    slice_idx = filename.index("_")
    new_filename = filename[0...slice_idx]
    if new_filename.length == 1
      new_filename = "00" + new_filename
    elsif new_filename.length == 2
      new_filename = "0" + new_filename
    end
    # File.rename(f, folder_path + new_filename + File.extname(f))
    puts new_filename
    count += 1
  end

  puts "Renaming complete. #{count} files renamed."
end

def begin_move
  puts "Beginning move"
end

def start
  loop do
    puts "Rename or move?"
    input = gets.chomp

    begin_renaming if input == "rename"

    begin_move if input == "move"

    break if input == "exit"
  end
  puts "Complete"
end

start
