game.print_board()
#reward: [gold, stats, potions]
if game.win:
  print(f"Wins the game|{{\"Level\": {game.player_level}, \"HP\": {game.player_hp},\"MaxHP\": {game.player_max_hp}, \"MP\": {game.player_mp},  \"MaxMP\": {game.player_max_mp}, \"Strength\": {game.player_str}, \"Dexterity\": {game.player_dex}, \"Luck\": {game.player_luck}, \"Intellegence\": {game.player_int}, \"Vitality\": {game.player_vit}, \"Agility\": {game.player_agil}}}|{{\"win\": true, \"reward\": {{\"gold\": {game.reward_count}}}, \"name\": \"{game.boardfile_name}\"}}")
else:
  print(f"Lose the game|{{\"Level\": {game.player_level}, \"HP\": {game.player_hp},\"MaxHP\": {game.player_max_hp}, \"MP\": {game.player_mp}, \"MaxMP\": {game.player_max_mp}, \"Strength\": {game.player_str}, \"Dexterity\": {game.player_dex}, \"Luck\": {game.player_luck}, \"Intellegence\": {game.player_int}, \"Vitality\": {game.player_vit}, \"Agility\": {game.player_agil}}}|{{\"win\": false, \"reward\": {{\"gold\": {game.reward_count}}}, \"name\": \"{game.boardfile_name}\"}}")