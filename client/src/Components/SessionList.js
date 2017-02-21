import React from 'react';
import GameSession from './GameSessionCard';
import NoSessions from './NoSessions';
import * as ReactBootstrap from "react-bootstrap";
var Badge = ReactBootstrap.Badge;

const SessionList = props => {

  const results = props.data;
  const resultsLength = results.length;
  let sessions;
  if (results.length) {
    sessions = results.map(session => <GameSession title={session.title} platform={session.platform} key={session._id} game={session.game} description={session.description} region={session.region} updatedAt={session.updatedAt} postedBy={session.postedBy}/>);
    console.log(sessions);
  } else {
    sessions = <NoSessions />
  }

  return(
    <ul className="gif-list">
      <h1 className ="session-header">Recent Sessions</h1><Badge className="results-badge">{resultsLength}</Badge>
      {sessions}
    </ul>
  );
}

export default SessionList;
