

class APIFeatures{
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        // making copy of  query
        const queryObj = {...this.queryString};
        const excludeFields = ['page', 'limit', 'sort', 'fields'];
        // loop through the excludeFields and delete them
        excludeFields.forEach(element => {
            delete queryObj[element];
        });
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        
        this.query=this.query.find(JSON.parse(queryStr));
        return this;
    }
    limitFields() {
        this.query = this.query.select('-__v');
        return this;
    }



    // class ends here
}

module.exports = APIFeatures