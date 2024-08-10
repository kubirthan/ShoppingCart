class ApiFeatures {
    constructor(query, queryStr){
        this.query = query
        this.queryStr = queryStr
    }

    search() {
        let keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            }
        } : {}

        this.query.find({...keyword})
        return this
    }

    filter() {
        const queryStrCopy = {...this.queryStr}


        //removing fields from query
        const removeFields = ['keyword', 'limit', 'page']
        removeFields.forEach( field => delete queryStrCopy[field])


        

        let queryStr = JSON.stringify(queryStrCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)/g, match => `$${match}`)

        

        this.query.find(JSON.parse(queryStr))

        return this
    }
}

module.exports = ApiFeatures