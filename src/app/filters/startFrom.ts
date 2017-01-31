let TableFilters = () => {
    return (input, start) => {
        if (input !== undefined && input !== null) {

            start = parseInt(start);
            if (_.isNumber(start)) {

                return input.slice(start);
            }

            return input;
        } else {
            return [];
        }
    };
};

export default TableFilters;
