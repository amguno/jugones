var madrid = {
  id: '1',
  name: 'Real Madrid',
  shortName: 'Mad',
  shield: '//as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png',
  money: 1000
}

var barcelona = {
  id: '2',
  name: 'Barcelona',
  shortName: 'Barça',
  shield: '//as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png',
  money: 900
}

var atletico = {
  id: '3',
  name: 'Atérico de Madrid',
  shortName: 'Atético',
  shield: '//as01.epimg.net/img/comunes/fotos/fichas/equipos/large/42.png',
  money: 700
}


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

const getTeamById = (id) => {
  if(id === "1"){
    return madrid;
  }
  else if(id === "2"){
    return barcelona;
  }
  else if(id === "3"){
    return atletico;
  }
}

const getPlayers = (madrid, barcelona, atletico, positionsString) => {
  let m = JSON.parse(JSON.stringify(madrid));
  let b = JSON.parse(JSON.stringify(barcelona));
  let a = JSON.parse(JSON.stringify(atletico));

  m.players.map(player => {
      player.position = positionsString[player.position];
      player.teamId = m.id;
  });

  b.players.map(player => {
    player.position = positionsString[player.position];
    player.teamId = b.id;
  });

  a.players.map(player => {
    player.position = positionsString[player.position];
    player.teamId = a.id;
  });

  return [...m.players, ...b.players, ...a.players];
}

module.exports = {
  getPlayer,
  getPlayers,
  getTeamById
}
