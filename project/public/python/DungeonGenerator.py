import random as rand
import json 

def populate_board(player_row, player_col, rows, cols, difficulty):
    num_gold_spaces = int(rows * cols * difficulty / 10)
    enemy_gold_spaces = int(rows * cols * difficulty / 20)
    board = [["0" for _ in range(cols)] for _ in range(rows)]
    while True:
        exit_row = rand.randint(0, rows - 1)
        exit_col = rand.randint(0, cols - 1)
        if exit_row != player_row or exit_col != player_col:
            break
    board[exit_row][exit_col] = "2"
    for i in range(num_gold_spaces):
        while True:
            gold_row = rand.randint(0, rows - 1)
            gold_col = rand.randint(0, cols - 1)
            if (gold_row != player_row or gold_col != player_col) and (gold_row != exit_row or gold_col != exit_col):
                break
        board[gold_row][gold_col] = "3"

    for i in range(enemy_gold_spaces):
        while True:
            enemy_row = rand.randint(0, rows - 1)
            enemy_col = rand.randint(0, cols - 1)
            if (enemy_row != player_row or enemy_col != player_col) and (enemy_row != exit_row or enemy_col != exit_col) and (board[enemy_row][enemy_col] != "3"):
                break
        board[gold_row][gold_col] = "4"
    return board

def generate_levels():
    size = rand.randint(1,10)
    rows, cols = size, size
    difficulty = rand.randint(1,10)

    gold_reward = rand.randint(50, 100)
    gold_reward = gold_reward * difficulty

    player_row, player_col = (rand.randint(1,10), rand.randint(1,10))
    board = populate_board(player_row, player_col, rows, cols, difficulty)

    valid_spaces = ["0","1","2", "3", "4"]

    new_filename = f"{rand.randint(1,10)}.txt"

    rand.shuffle(valid_spaces)
    name = "test" + str(rand.randint(50,1000))

    dict = {"name": name, "start":[player_row, player_col], "difficulty": difficulty, "reward": gold_reward, "rows": rows, "cols": cols, "map": board}

    return json.dumps(dict)
print(generate_levels())