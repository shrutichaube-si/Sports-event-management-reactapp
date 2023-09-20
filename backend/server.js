const express = require('express')
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

const {Client} = require('pg')
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"postgres", 
    database:"SI_event-management"
})
datas = {}
client.connect()
// for admin
let adminemail = ""
let adminpass = ""
let admindata = {}

async function admincheck(){
    const res = await client.query(`SELECT * FROM "SportzSchema"."AdminInfo" where "Email"='${adminemail}' and password='${adminpass}' `)
     admindata = res.rows[0]
}
app.get('/api',(req,res)=>{
    res.json("hii");
})



app.post("/postreq",(req,res)=>{
    datas = req.body
    console.log("received response")
})

app.post("/admincheck",(req,res)=>{
    adminemail = req.body.email
    adminpass = req.body.password
    admincheck().then(()=>{
    if(admindata==undefined){
        res.send(false);
    }
    else{
        res.send(true);
    }
    
})})


//for employee
let emplemail=""
let emplpass =""
let empldata = {}

async function emplcheck(){
        const res = await client.query(`SELECT * FROM "SportzSchema"."EmployeeLogin" where "Email_Id"='${emplemail}' and "Password"='${emplpass}'`)
        empldata = res.rows[0]
        console.log(empldata)
}

app.post("/emplcheck",(req,res)=>{
    emplemail = req.body.email
    emplpass = req.body.password
    emplcheck().then(()=>{
    if(empldata==undefined){
        res.send(false);
    }
    else{
        res.send(true);
    }
    
})});


// Add Equipment 
//=========================================================================================


app.post("/addsport",(req,res) => {
    
    const Sports = req.body ["Sports"];
    const Equipment = req.body ["Equipment"];
    const Venue = req.body ["Venue"];
    const Duration = req.body ["Duration"];

    console.log("Sports:" + Sports);
    console.log("Equipment" + Equipment);
    console.log("Venue"+ Venue);
    console.log("Duration"+ Duration);

  
    const insertSports = `INSERT INTO "SportzSchema"."AdminEquipment" ("Sports_Name","Equipment_Name","Venue","Duration") VALUES ('${Sports}', '${Equipment}','${Venue}','${Duration}');`
  
    client
    .query(insertSports)
    .then((response) => {
        console.log("Data Saved");
        console.log(response);
    })
    
    .catch((err) => {
        console.log(err);
    });
  
    console.log(req.body);
    res.send("Response Received:" + req.body);
  });

//empl details
app.get("/getsportsinfo",async (req,res)=>{
    const data = await client.query(`SELECT Distinct "Sports_Name" FROM "SportzSchema"."AdminEquipment"`)
    res.send(data.rows)
})

//venue add
app.post("/getvenuesinfo",async(req,res)=>{
    const sport=req.body.sport;
    console.log(req.body)
    const data = await client.query(
        `SELECT Distinct "Venue" FROM "SportzSchema"."AdminEquipment" where "Sports_Name"=$1`,
        [sport]
    )
    res.send(data.rows);
})

// equi add
app.post("/geteqsinfo",async(req,res)=>{
    const sport=req.body.sport
    const venue=req.body.venue
    const data=await client.query(
        `SELECT "Equipment_Name" FROM "SportzSchema"."AdminEquipment" where "Sports_Name"=$1 and "Venue"=$2`,
        [sport,venue]
    )
    res.send(data.rows)
    console.log(data.rows)
})
//duration add
app.post("/getdurinfo",async(req,res)=>{
    const sport=req.body.sport
    const venue=req.body.venue
    const data=await client.query(
        `SELECT "Duration" FROM "SportzSchema"."AdminEquipment" where "Sports_Name"=$1 and "Venue"=$2`,
        [sport,venue]
    )
    res.send(data.rows)
    console.log(data.rows)
})



app.listen(5000, () => console.log("Server on localhost:5000"));