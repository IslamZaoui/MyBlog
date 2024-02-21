import * as utils from './utils';
import * as db from './db';
import * as posts from './posts';
import * as shallow from './shallow';

export default { ...utils, ...db, ...posts, ...shallow };
