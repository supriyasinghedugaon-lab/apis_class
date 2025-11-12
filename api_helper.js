const exp = require("express"); /// express import kiye h
const app = exp(); /// express object creatation

app.use(exp.json()) ///json uses

let arrayUser = [
    {
        "id": 1, 
        "name": "supriya",
        "age": 22
    },
    {
        "id": 2,
        "name": "aman",
        "age": 24
    }
];

app.get("/userData", (serverRequest, serverResponse) => {
    serverResponse.status(200).json(arrayUser);
});

app.post("/newUserAdd", (userServerRequest, userServerResponse) => {//condtion lgana h ki koi bhi feild empty nahi rahna chahiye jo kis conditional statement ke help se hoga
    const newData = userServerRequest.body;
    arrayUser.push(newData);
    userServerResponse.status(201).json(arrayUser);
});

//update 

app.put("/updateData/:id", (updateRequest, updateResponse) => {
    const id  = updateRequest.params.id;   ////////////// {id}=updateRequest.params; 
    const { name, age } = updateRequest.body;
    const indexId = arrayUser.findIndex(i => i.id == id); /// arrayUser.findIndex(i => i.id == parseInt(id));

    // Check if user exists
    if (indexId === -1) {
        return updateResponse.status(404).json({ message: "User not found" });
    }
    // Update user data
    arrayUser[indexId].name = name;
    arrayUser[indexId].age = age;

    updateResponse.status(200).json({
        message: "User updated successfully",
    });
});


//delete (delete api method use)

app.delete("/userDelete/:id",(Request,Response)=>{
    const id=Request.params.id;
    const indexId=arrayUser.findIndex(a=>a.id==id);
    if(indexId== -1){
        return Response.json({message:"not deleted"})
    }
    arrayUser.splice(indexId,1)
    return Response.json({message:"deleted successful"});
})





// let arr=[
//     {
//     "id": 1,
//     "name":"Supriya",
//     "age": 22,
//     "batch": "Node js"
// },
//   {
//     "id": 2,
//     "name":"Aditya",
//     "age": 20,
//     "batch": "Js" 
// },
//   {
//     "id": 3,
//     "name":"Aman",
//     "age": 24,
//     "batch": "Node js"
// },
//   {
//     "id": 4,
//     "name":"Khushboo",
//     "age": 20,
//     "batch": "Java"
// },
//   {
//     "id": 5,
//     "name":"Supriya",
//     "age": 20,
//     "batch": "Java"
// },
//   {
//     "id": 6,
//     "name":"Saloni",
//     "age": 20,
//     "batch": "Js"
// },
//   {
//     "id": 7,
//     "name":"Nibha",
//     "age": 22,
//     "batch": "js"
// },
//   {
//     "id": 8,
//     "name":"Nagma",
//     "age": 22,
//     "batch": "Flutter"
// },
//   {
//     "id": 9,
//     "name":"Hena",
//     "age": 22,
//     "batch": "Flutter"
// },
//   {
//     "id": 10,
//     "name":"Puja",
//     "age": 22,
//     "batch": "Flutter"
// },
//   {
//     "id": 11,
//     "name":"Amrita",
//     "age": 22,
//     "batch": "Flutter"
// },
//   {
//     "id": 12,
//     "name":"Sohit",
//     "age": 22,
//     "batch": "java"
// },
//   {
//     "id": 13,
//     "name":"Manjit",
//     "age": 21,
//     "batch": "Js"
// },
//   {
//     "id": 14,
//     "name":"Suman",
//     "age": 22,
//     "batch": "js"
// },
//   {
//     "id": 15,
//     "name":"Raushan",
//     "age": 20,
//     "batch": "js"
// },
//   {
//     "id": 16,
//     "name":"Anjali",
//     "age": 20,
//     "batch": "Node js"
// },
//   {
//     "id": 17,
//     "name":"Rauki",
//     "age": 21,
//     "batch": "Node js"
// },
//   {
//     "id": 18,
//     "name":"Rishu",
//     "age": 22,
//     "batch": "Node js"
// },
//   {
//     "id": 19,
//     "name":"Guddu",
//     "age": 22,
//     "batch": "Node js"
// },
// {
//     "id": 20,
//     "name":"Kaish",
//     "age": 22,
//     "batch": "Node js"
// },
// ];

// let productData=[
//     {
//     "id": 1,
//     "name": "smart watch",
//     "price": 1000,
// },
//    {
//     "id": 2,
//     "name": "hp laptop",
//     "price": 50000,
// },
//    {
//     "id": 3,
//     "name": "lenovo",
//     "price": 70000,
// },
//  {
//     "id": 4,
//     "name": "vivo t4 x 5g",
//     "price": 14000,
// },
//  {
//     "id": 5,
//     "name": "Asus",
//     "price": 70000,
// }
// ];

// let familyData=[
//     {
//         "Name":"Baban Singh",
//         "age": 60,
//         "education": "Graduate",

// },
//  {
//         "Name":"Anita Devi",
//         "age": 50,
//         "education": "null",

// },
//  {
//         "Name":"Anku Kumari",
//         "age": 28,
//         "education": "Graduate",

// },
//  {
//         "Name":"Khushboo Kumari",
//         "age": 25,
//         "education": "Graduate",

// },
//  {
//         "Name":"Prince Kumar",
//         "age": 24,
//         "education": "Graduate",

// },
//  {
//         "Name":"Supriya Kumari",
//         "age": 22,

//         "education": "Graduate",

// }
// ];

// let schoolData=[
//     {
//     "name": "Reshmi",
//     "age": 18,

// },
// {
//     "name": "Putul",
//     "age": 18,

// },
// {
//     "name": "Komal",
//     "age": 18,

// },
// {
//     "name": "Ritika",
//     "age": 18,

// },
// {
//     "name": "Priya",
//     "age": 18,

// }
// ];





// app.get("/School",(serverRequest,serverResponse)=>{
//     serverResponse.status(200).json(schoolData);
// });


// app.get("/Family",(serverRequest,serverResponse)=>{
//     serverResponse.status(200).json(familyData);
// });

// app.get("/Product",(serverRequest,serverResponse)=>{
//     serverResponse.status(200).json(productData);
// });

// app.get("/Edugaon",(serverRequest,serverResponse)=>{
//     serverResponse.status(200).json(arr);
// });


app.listen(3000, () => {
    console.log("server is successfully runing");
});