const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({ path: ".env" });

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB");
    console.log(err);

    process.exit(1);
  });

const employeeSchema = new mongoose.Schema({
  name: String,
  emp_id: String,
  address: String,
  city: String,
  country: String,
  zip: String,
  contactMethods: [{ contact_method: String, value: String }],
});

const Employee = mongoose.model("Employee", employeeSchema);

app.get("/api/employees", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.get("/api/employees/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
});

app.post("/api/employees", async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json(employee);
});

app.delete("/api/employees/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.send("Employee deleted");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
