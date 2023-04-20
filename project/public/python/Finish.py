game.print_board()
#reward: [gold, stats, potions]
if game.win:
  print(f"Wins the game|{game.player_hp}|{{\"win\": true, \"reward\": {{\"gold\": {game.reward_count}}}, \"name\": \"{game.boardfile_name}\"}}")
else:
  print(f"Lose the game|{game.player_hp}|{{\"win\": false, \"reward\": {{\"gold\": {game.reward_count}}}, \"name\": \"{game.boardfile_name}\"}}")