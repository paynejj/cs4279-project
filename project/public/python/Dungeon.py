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
    def move(self, row, col):
        if (self.canMove(row, col)):
            self.player_row = row
            self.player_col = col
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
      if self.player_row == self.exit[0] and self.player_col == self.exit[1]:
        self.win = True
        self.reward_count = rand.randint(int(self.rows * self.cols),int(self.rows * self.cols * self.difficulty))
        return True
      else:
        self.reward_count = -rand.randint(1,int(self.rows * self.cols * self.difficulty))
        return False

game = Game(f"{filename}")