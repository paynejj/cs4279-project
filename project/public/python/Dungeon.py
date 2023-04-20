import json
import random as rand
class Game:
    def __init__(self, board_file, stats):
        level = json.loads(board_file)
        playerstats = json.loads(stats)
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
        self.player_hp = int(playerstats["HP"])
        self.player_mp = int(playerstats["MP"])
        self.player_max_hp = int(playerstats["MaxHP"])
        self.player_max_mp = int(playerstats["MaxMP"])
        self.player_level = int(playerstats["Level"])
        self.player_str = int(playerstats["Strength"])
        self.player_dex = int(playerstats["Dexterity"])
        self.player_luck = int(playerstats["Luck"])
        self.player_int = int(playerstats["Intellegence"])
        self.player_vit = int(playerstats["Vitality"])
        self.player_agil = int(playerstats["Agility"])
        
    def print_board(self):
        for row in self.board:
          for val in row:
            print(val, end=" ")
          print()
    def move(self, row, col):
        if (self.canMove(row, col)):
            self.player_row = row
            self.player_col = col
            if self.board[self.player_row][self.player_col] == 4 or self.board[self.player_row][self.player_col] == 6 or self.board[self.player_row][self.player_col] == 5:
              self.player_hp = self.player_hp - 1
              self.player_mp -= 1
        return (self.player_row, self.player_col)

    def canMove(self, row, col):
        if (row < 0 or col < 0):
          return False
        if (row >= self.rows or col >= self.cols): 
          return False
        return (self.board[row][col]!= 0 and not self.player_win())

    def get_player_pos(self):
        return (self.player_row, self.player_col)
  
    def player_win(self):
      if self.player_row == self.exit[0] and self.player_col == self.exit[1] and self.player_hp > 0:
        self.win = True
        self.reward_count = rand.randint(int(self.rows * self.cols),int(self.rows * self.cols * self.difficulty))
        self.player_max_hp += rand.randint(1, self.difficulty)
        self.player_max_mp += rand.randint(1, self.difficulty)
        self.player_level += rand.randint(1, self.difficulty)
        self.player_str += rand.randint(1, self.difficulty)
        self.player_dex += rand.randint(1, self.difficulty)
        self.player_luck += rand.randint(1, self.difficulty)
        self.player_int += rand.randint(1, self.difficulty)
        self.player_vit += rand.randint(1, self.difficulty)
        self.player_agil += rand.randint(1, self.difficulty)
        return True
      else:
        self.reward_count = -rand.randint(1,int(self.rows * self.cols * self.difficulty))
        return False

game = Game(f"{filename}", f"{newstats}")