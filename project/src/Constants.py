from enum import Enum
#Default level location
LEVELDIR = "./Levels/"

#Default dungeon row/col
SIZE = 5

#Dungeon tile translation Enum (for saving)
class Tiles(Enum):
    VOID = 0
    TUNNEL = 1
    ENEMY = 2
    TREASURE = 3
