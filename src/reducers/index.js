import { combineReducers} from 'redux';
import folders from './folders';
import notes from './notes';
import alerts from './alerts';

const noteApp = combineReducers({
    folders,
    notes,
    alerts
});

export default noteApp;