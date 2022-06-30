import { Grid as GridWrapper, GridContent } from './GridStyle';
const Grid = ({ children }) => {
    return (
        <GridContent>
            <GridWrapper>{children}</GridWrapper>
        </GridContent>
    );
};

export default Grid;
