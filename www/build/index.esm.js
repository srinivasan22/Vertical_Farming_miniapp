import './index-d45f6540.js';
import { A as ActiveRouter } from './active-router-71f04f01.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
