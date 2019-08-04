const getPlayer = (playerId, teams) =>  {
  var player
  var team = teams.find(t => {
    player = t.players.find(p => p.id === playerId)
    return player
  })

  if (player && team) {
    return { player, teamId: team.id }
  }

  return false
}

const getPlayers = (players, positionsString) => {
  let p = JSON.parse(JSON.stringify(players));
  p.map(player => {
      player.position = positionsString[player.position]
    }
  )
  return p;
}

module.exports = {
  getPlayer,
  getPlayers
}
