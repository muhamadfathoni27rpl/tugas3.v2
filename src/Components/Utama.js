import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Beranda from './Beranda';
import ListA from './ListAgenda';
import ListK from './ListKeranjang';

const Utama = () => (
    <Switch>
        <Route exact path="/"           component={Beranda} />
        <Route path="/list_agenda"      component={ListA} />
        <Route path="/list_keranjang"   component={ListK} />
    </Switch>
)

export default Utama;