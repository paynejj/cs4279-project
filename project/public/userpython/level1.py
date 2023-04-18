def DungeonTraversal(visited, node, queue): #function for BFS
  visited.add(node)
  queue.append(node)

  while queue:          # Creating loop to visit each node
    m = queue.pop(0) 

    for x,y in [(0,1), (1,0), (-1,0), (0,-1)]:
      moveX, moveY = (x+m[0],y+m[1])
      checkmove = game.move(moveX, moveY)
      if checkmove[0] == moveX and checkmove[1] == moveY and (moveX, moveY) not in visited:
        visited.add((moveX, moveY))
        queue.append((moveX, moveY))

DungeonTraversal(set(), (game.player_row, game.player_col), [])