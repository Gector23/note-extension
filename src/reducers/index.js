import { combineReducers} from 'redux';
import folders from './folders';
import notes from './notes';

const noteApp = combineReducers({
    folders,
    notes
});

export default noteApp;