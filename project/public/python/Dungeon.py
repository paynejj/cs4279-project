import json
import random as rand
class Game:
    def __init__(self, board_file):
        level = json.loads(board_file)
        self.board = level["map"]
        self.rows = level["rows"]
        self.cols = level["cols"]
        self.difficulty = level["difficulty"]
        self.gold_reward = level["reward"]
        self.player_row = level["start"][0]
        self.player_col = level["start"][1]
        self.boardfile_name = level["name"]
        self.exit = level["exit"]
        self.win = False
        self.reward_count = 0
        
    def print_board(self):
        for row in self.board:
          for val in row:
            print(val, end=" ")
          print()

    def move_character(self, move):
        if move == 'UP' and self.player_col < self.cols:
          self.player_col += 1
        elif move == 'DOWN' and self.player_col < 0:
          self.player_col -= 1
        elif move == 'LEFT' and self.player_col < self.rows:
          self.player_row -= 1
        elif move == 'RIGHT' and self.player_col < 0:
          self.player_row += 1
        self.player_win()

    def get_player_pos(self):
        return (self.player_row, self.player_col)
  
    def player_win(self):
      self.player_row = self.exit[0]
      self.player_col = self.exit[1]
      if self.player_row == self.exit[0] and self.player_col == self.exit[1]:
        self.win = True
        self.reward_count = rand.randint(int(self.rows * self.cols),int(self.rows * self.cols * self.difficulty))
      else:
        self.reward_count = -rand.randint(1,int(self.rows * self.cols * self.difficulty))

game = Game(f"{filename}")
game.print_board()
game.player_win()
#reward: [gold, stats, potions]
if game.win:
  print(f"Wins the game|'reward': ['gold': {game.reward_count}]")
else:
  print(f"Lose the game|'reward': ['gold': {game.reward_count}]")