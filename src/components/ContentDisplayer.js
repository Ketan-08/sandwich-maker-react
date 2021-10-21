import React from 'react'
import '../App.css'
import bread from './bread.jfif'
import tomato from './tomato.jfif'
import cucumber from './cucumber.jfif'
import cheese from './cheese.jfif'
import { putData } from './config'




    // const mongoose = require('mongoose');
    // const { Schema } = mongoose
    
    // main().catch(err => console.log(err));
    
    // async function main() {
    //   await mongoose.connect('mongodb://localhost:27017/Info');
    //   console.log("Database Connected");
    
    //   const infoSchema = new Schema({
    //     Name: String,
    //     x: Number,
    //     y: Number
    
    //   });
    
    //   const Info = mongoose.model('items', infoSchema);
    
    //   let newItem = new Info({ Name: "Anshuman OPOP" });
    //   console.log(newItem.Name);
    //   newItem.save();
    
    
    // }


function ContentDisplayer(props) {




    let array = [];


    let myObj = {
        Name: '',
        x: 0,
        y: 0
    }




    const startDrag = (ev) => {
        console.log('Hello Drag');
        myObj.Name = ev.target.id;
        ev.dataTransfer.setData("img", ev.target.id);
    }
    function allowDrop(ev) {
        ev.preventDefault();
    }
    function drop(ev) {
        console.log('Hello Drop');
        myObj.x = ev.clientX;
        myObj.y = ev.clientY;
        console.log(myObj);
        array.push(myObj);

        ev.preventDefault();
        let data = ev.dataTransfer.getData("img");
        ev.target.appendChild(document.getElementById(data));
    }


    const saveBtn = () => {
        console.log(array);
        putData(array);
        alert('Sucessfully Saved');

        // window.location.reload();
    }


    return (
        <>
            <h1 className='text-center m-5'>Make Your Own Sandwich</h1>
            <div className='body'>

                <div id="content" onDrop={drop} onDragOver={allowDrop}>
                    <h2 className='text-center'>Ingridients:</h2>
                    <img src={bread} alt="bread" draggable="true" onDragStart={startDrag} id="bread1" />
                    <img src={tomato} alt="tomato" draggable="true" onDragStart={startDrag} id="tomato" />
                    <img src={cucumber} alt="cucumber" draggable="true" onDragStart={startDrag} id="cucumber" />
                    <img src={cheese} alt="cheese" draggable="true" onDragStart={startDrag} id="cheese1" />
                    <img src={bread} alt="bread" draggable="true" onDragStart={startDrag} id="bread2" />
                    <img src={cheese} alt="cheese" draggable="true" onDragStart={startDrag} id="cheese2" />
                </div>


                <div id="drop" onDrop={drop} onDragOver={allowDrop}>
                    <h2>Design your Sandwich:</h2>
                </div>
            </div>
            <button className='btn btn-primary' onClick={saveBtn}>Save My Sandwich &rarr;</button>
        </>

    )




}

export default ContentDisplayer
