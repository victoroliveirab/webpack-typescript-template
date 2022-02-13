import { format } from 'util';

export default function greeting(name = 'stranger') {
  return format('Hello, %s!', name);
}

// This file is not imported anywhere, so will not be added to final index.js
