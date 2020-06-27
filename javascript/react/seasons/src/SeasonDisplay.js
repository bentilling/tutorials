import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    iconName: 'sun',
    message: 'Get Outside!'
  },
  winter: {
    iconName: 'snowflake',
    message: 'Wrap up warm!'
  }
}

const getSeason = (lat, month) => {
  if (month > 3 && month < 9) { 
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { iconName, message } = seasonConfig[season];

  return (
    <div className={ `season-display ${season}` }>
      <i className={ `massive icon-left ${iconName} icon` }></i>
      <h1>{ message }</h1>
      <i className={ `massive  icon-right ${iconName} icon` }></i>
    </div>
  )
}

export default SeasonDisplay;
