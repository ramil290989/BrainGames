#!/usr/bin/env node
import {user} from '../src/cli.js';
import {brainEven} from '../bin/brain-even.js'

console.log('Welcome to the Brain Games!');

var userName = user();
export {userName};

var brain1 = brainEven();