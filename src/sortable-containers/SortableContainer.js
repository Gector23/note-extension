import {sortableContainer} from 'react-sortable-hoc';

const SortableContainer = sortableContainer(({children}) => {
    return children;
});

export default SortableContainer;