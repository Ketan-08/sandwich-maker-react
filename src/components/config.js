const mongoose = require('mongoose');
const { Schema } = mongoose



export const putData = () => {

  

  main().catch(err => console.log(err));

  async function main() {
    await mongoose.connect('mongodb://localhost:27017/Info');
    console.log("Database Connected");

    const infoSchema = new Schema({
      Name: String,
      x: Number,
      y: Number

    });

    const Info = mongoose.model('items', infoSchema);

    let newItem = new Info({ Name: "Anshuman Bot" });
    console.log(newItem.Name);
    newItem.save();


  }

}


