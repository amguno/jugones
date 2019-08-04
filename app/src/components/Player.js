import React, { Component } from 'react'
const domain = 'http://localhost:3001'

export default class Player extends Component {
    constructor(){
        super();
        this.state = {
            team: {}
        }
        this.getTeamById = this.getTeamById.bind(this);
    }
    getTeamById = (id) => {
        fetch(`${domain}/team/`+id)
        .then(response => {
          return response.json();
        }).then(team => {
           this.setState({team: team});
        });
    }
    render() {
        const {teamId, name, position, img, url} = this.props.data;
        this.getTeamById(teamId);
        return (
            <section className="player">
                <div className="player_main">
                    <div className="player_img"><img src={img ? img : url ? url : "/avatar.png"}/></div>
                    <div className="player_info">
                        <p>{name} <b>{position}</b></p>
                        <p>{this.state.team.name}</p>
                    </div>
                </div>
                <img className="player_team_shield" src={this.state.team.shield}/>
            </section>
        )
    }
}
