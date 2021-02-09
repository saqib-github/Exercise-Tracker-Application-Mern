const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://babar007:saqib786@cluster0.dvwes.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection
.once("open", () => console.log("connected"))
.on("error", () =>{
    console.log("error", error);
})