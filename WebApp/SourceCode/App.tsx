import * as React from 'react';
import {render} from 'react-dom';

import '../UI/css/css.css';

const appNode = document.getElementById('app');

import Routes from './Routes';

render(<Routes/>, appNode);