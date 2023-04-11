import json
from Constants import *

class DungeonBoard:

    def __init__(self, levelName: str = "default.json"):
        """initialize the dungeon for a given level, or blank"""
        self._level: Level = json.loads(LEVELDIR + '${levelName}.json')
        self._map: list[list[int]] = self._level.map
        self._player: tuple[int, int] = self._level.playerStart

    def move(self, pos: tuple[int, int]):
        """Attempt to move the player to given coordinate [row,col].
        Returns post-call position"""
        if (0 <= pos[0] < len(self._map)):
            if (0 <= pos[1] < len(self._map[0])): 
                self._player = pos
        return self._player

    def setMap(self, map: list[int]):
        self._map = map

    def getMap(self):
        return self._map

    def getPlayer(self):
        return self._player
