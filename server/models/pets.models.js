const mongoose = require('mongoose')
//making a new schema instance from the mongoose.Schema() object constructor
const PetSchema = new mongoose.Schema(
    {   name: {
        type : String,
        required : [true, "{PATH} must be present🆎🆎🆎"],
        minLength : [3, '{PATH} must be at least 3 characters']
    },
        type: {
            type : String,
            required : [true, "{PATH} must be present🆎🆎🆎"],
            minLength : [3, '{PATH} must be at least 3 characters']
        },
        description: {
            type : String,
            required : [true, "{PATH} must be present🆎🆎🆎"],
            minLength : [3, '{PATH} must be at least 3 characters']},
        // like:{
        //     type: Number,
        //     defaultValue: 0,
        // },
        skills: {
                type: [String]
              }
    },{timestamps: true}
);

module.exports = mongoose.model('Pet', PetSchema);
