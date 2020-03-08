import {sortableHandle} from 'react-sortable-hoc';

const SortableHandle = sortableHandle(({children}) => {
    return children;
});

export default SortableHandle;