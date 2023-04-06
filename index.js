const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

let patients = new Object();
patients["999991234"] = ["Jensen", "Watkins", "425-555-1234"]
patients["999995678"] = ["Patrick", "Bartholomew", "425-555-5678"]

let records = new Object();
records["999991234"] = "Status: Healthy"
records["999995678"] = "Status: Unhealthy"

// Get patient medical records
app.get("/", (req, res) => {

    // Verify patient exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found."})
        return;
    }

    // Verify ssn matches first and last name
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        if (req.body.reasonforvisit === "medicalrecords") {
            // return medical records
            res.status(200).send(records[req.headers.ssn]);
            return;
        }
        else {
            // return error
            res.status(501).send({"msg":"Unable to complete request at this time: " + req.body.reasonforvisit})
            return;
        }
    }
    else {
        res.status(403).send({"msg":"First or Last didn't match SSN."})
    }

    // Return appropriate record
    res.status(200).send({"msg": "HTTP GET - SUCCESS!"})
});

// Create a new patient
app.post("/", (req, res) => {
    // create patient in database
    patients[req.headers.ssn] = [req.headers.firstname, req.headers.lastname, req.headers.phone]
    res.status(200).send({patients})
});

// Update existing patient phone number
app.put("/", (req, res) => {

     // Verify patient exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found."})
        return;
    }

    // Verify ssn matches first and last name
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        // Update the phone number and return the patient info
        patients[req.headers.ssn] = [req.headers.firstname, req.headers.lastname, req.body.phone];
        res.status(200).send(patients[req.headers.ssn]);
        return;
    }
    else {
        res.status(403).send({"msg":"First or Last didn't match SSN. (Trying to update Phone#)"})
    }
});

// Delete patient records
app.delete("/", (req, res) => {

    // Verify patient exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found."})
        return;
    }

    // Verify ssn matches first and last name
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
       // Delete patient and medical records from database

       delete patients[req.headers.ssn]
       delete records[req.headers.ssn]

       res.status(200).send(patients);
       return;
    }
    else {
        res.status(403).send({"msg":"First or Last didn't match SSN. (Trying to delete)"})
    }
});


app.listen(3000);