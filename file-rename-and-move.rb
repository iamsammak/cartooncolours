def begin_renaming
  puts "Renaming files..."

  count = 0

  # folder_path = "./rename/"
  puts "Enter the folder path. ex. './folder_path/' "
  folder_path = gets.chomp
  puts "Is this the correct folder path: `#{folder_path}`?"
  correct = gets.chomp
  return if correct == "no"

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

    File.rename(f, folder_path + new_filename + File.extname(f))
    count += 1
  end

  puts "Renaming complete. #{count} files renamed."
end

def begin_move
  puts "Beginning move"
  current_folder_path = ""
  new_folder_path = ""

  loop do
    puts "What is the current folder path?"
    current_folder_path = gets.chomp
    # ./rename/

    puts "Is this correct `#{current_folder_path}` ?"
    first_check = gets.chomp
    next if first_check == "no"

    puts "What will be the new folder path?"
    new_folder_path = gets.chomp
    # ./images/master-svg/

    puts "Is this correct `#{new_folder_path}` ?"
    second_check = gets.chomp
    next if second_check == "no"

    Dir.glob(current_folder_path + "*").sort.each do |f|
      filename = File.basename(f)
      File.rename(f, new_folder_path + filename)
    end

    break
  end

  puts "Move complete. Files moved from `#{current_folder_path}` to `#{new_folder_path}`"
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
