import {sortableElement} from 'react-sortable-hoc';

const SortableElement = sortableElement(({children}) => {
    return children;
});

export default SortableElement;