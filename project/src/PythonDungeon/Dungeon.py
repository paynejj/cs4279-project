import os
class Game:
    def __init__(self, board_file):
        with open(board_file, "r") as file:
            contents = file.readlines()
            rows, cols = map(int, contents[0].split())
            difficulty, gold_reward = map(int, contents[1].split())
            player_row, player_col = map(int, contents[2].split())
            board = []
            for i in range(3, len(contents)):
                row = list(map(int, contents[i].split()))
                board.append(row)
        self.board = board
        self.rows = rows
        self.cols = cols
        self.difficulty = difficulty
        self.gold_reward = gold_reward
        self.player_row = player_row
        self.player_col = player_col
        self.boardfile_name = board_file
        self.turn_count = 0
        
    def print_board(self):
        for row in self.board:
          for val in row:
            print(val, end=" ")
          print()
    
    def validate_board(self):
    # Open the original board file for reading
        with open(self.boardfile_name, "r") as file:
          # Read the contents of the file
          contents = file.readlines()
          # Extract the board dimensions
          rows, cols = map(int, contents[0].split())
          # Extract the difficulty and gold reward
          difficulty, gold_reward = map(int, contents[1].split())
          # Extract the player coordinate
          player_row, player_col = map(int, contents[2].split())
          # Extract the board array
          board = []
          for i in range(3, len(contents)):
            row = list(map(int, contents[i].split()))
            board.append(row)

        # Check if the current game state matches the original file
        if self.rows != rows or self.cols != cols:
          return False
        if self.difficulty != difficulty or self.gold_reward != gold_reward:
          return False
        if self.player_row != player_row or self.player_col != player_col:
          return False
        if self.board != board:
          return False
        return True
        
    def get_player_pos(self):
        return (self.player_row, self.player_col)
    
    def set_player_pos(self, row, col):
        self.player_row = row
        self.player_col = col
    
    

game = Game("board.txt")
game.print_board()

is_valid = game.validate_board()

if is_valid:
  print("The game object matches the original file!")
else:
  print("The game object does not match the original file.")