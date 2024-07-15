const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('Connected DB'))
.catch(()=> console.error('Not Connected DB', err))

//SCHEMA

const  courseSchema = new mongoose.Schema({
    name: String,
    creator: {type:String, required:true},
    publishDate : {type:Date, default:Date.now},
    isPublished: Boolean,
    rating: Number
});

const courseModel = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new courseModel({
        name: 'Pythhon',
        creator: 'Aditi',
        isPublished : true,
        rating: 4
    });
    try{
        await course.validate();
        // const result = await course.save()
        // console.log(result)
    } catch(error) {
        console.log(error.message)
    }  
}
createCourse();

// comparision operator
// eq(equal), gt(greter than), gte(greater than and equal to), lt. lte, in, not in

// Logical Operator
// or, and

// async function getCourses(){
//     // const courses = await courseModel.find({creator:'Sam'}).select({name: 1})
//     // const courses = await courseModel.find({rating: {$gte: 4.5}}).select({name: 1})
//     const courses = await courseModel.find({rating: {$in : [3, 4, 4.5]}}).select({name: 1})
//     .and([ {creator: 'Aditi'}, {rating:5} ] )
//     console.log(courses)
// }
// getCourses();

// async function updateCourse(id){
//     let course = await courseModel.findById(id)

//     if(!course) return;

//     course.name = 'Python'
//     course.creator = 'Steve'
//     const updatedCourse = await course.save()
//     console.log(updatedCourse)
// }
// updateCourse('669396d0bda532a083a084bc')



// DELETING 
// async function deleteCourse(id){
//     const course = await courseModel.findByIdAndDelete(id);
//     console.log(course)
// }
// deleteCourse('669396d0bda532a083a084bc')

