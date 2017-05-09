POKEMON_NAMES = [
  "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
  "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
  "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata",
  "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu",
  "sandshrew", "sandslash", "nidoran♀", "nidorina", "nidoqueen", "nidoran♂",
  "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales",
  "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume",
  "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth",
  "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe",
  "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra",
  "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell",
  "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem",
  "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton",
  "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk",
  "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee",
  "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute",
  "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung",
  "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan",
  "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime",
  "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp",
  "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon",
  "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl",
  "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair",
  "dragonite", "mewtwo", "mew"
]

POKEMON_HASH = {}
(1..151).each do |n|
  POKEMON_HASH[n] = POKEMON_NAMES[n - 1]
end

# User Interface
puts "Are you looking up one or many?"
input = gets.chomp

if input == "all"
  puts POKEMON_HASH
elsif input == "1"
  puts "Pokemon id?"
  poke_id = gets.chomp.to_i
  puts "Pokemon #{poke_id} is: #{POKEMON_HASH[poke_id]}"
else
  puts "Enter the start"
  start_idx = gets.chomp.to_i
  puts "Enter the end_idx"
  end_idx = gets.chomp.to_i

  puts "Pokemon #{start_idx} to #{end_idx}:"
  (start_idx..end_idx).each do |n|
    puts POKEMON_HASH[n]
  end
end
