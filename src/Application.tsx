import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import CharacterPage from './pages/Character/CharacterPage';
import CharactersPage from './pages/Characters/CharactersPage';

const Application = () => {
  return (
    <Switch>
      <Route path="/characters/:characterId" component={CharacterPage} />
      <Route path="/characters" component={CharactersPage} />
      <Redirect to="/characters" />
    </Switch>
  );
};

export default Application;
