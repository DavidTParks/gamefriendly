import React from 'react';
import GameSession from './GameSessionCard';
import NoSessions from './NoSessions';

const SessionList = props => {

  const results = props.data;
  let sessions;
  if (results.length) {
    sessions = results.map(session => <GameSession title={session.title} key={session._id} game={session.game}/>);
    console.log(sessions);
  } else {
    sessions = <NoSessions />
  }

  return(
    <ul className="session-list">
      {sessions}
    </ul>
  );
}

export default SessionList;
