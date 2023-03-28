from dataclasses import dataclass

@dataclass
class Level:
    name: str
    map: list[list[int]]
    rewards: str
    playerStart: tuple[int, int]