const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


//imported functions
const checkWorld = require('./functions/checkWorld');
const createWorld = require('./functions/createWorld');
const changeDirection = require('./functions/changeDirection');
const executeForward = require('./functions/executeForward');


//middleware
app.use(cors()); 
app.use(bodyParser.json());


//GET
app.get('/', (req,res) => {
    res.send('We are on home.');
});

//POST
app.post('/', (req,res) => {

    //build world
    var world_row = req.body.world.x;
    var world_col = req.body.world.y;
    var continue_build = checkWorld.checkWorld(world_row, world_col);
    var all_rovers = [];
    if (continue_build)
    {
        var world = createWorld.createWorld(world_row, world_col);

        //rovers start exploring
        var userInput = req.body.userInput;
        var i;
        var rover = {
            curr_pos_x: 0,
            curr_pos_y: 0,
            curr_direction: '',
            lost: false
        };

        //go through all the rovers
        for(i = 0; i < userInput.length; i++){
            //here we allocate the initial position of the rover
            console.log('userinput index: ' + i);
            rover.curr_pos_x = userInput[i].start_pos.x;
            rover.curr_pos_y = userInput[i].start_pos.y;
            rover.curr_direction = userInput[i].start_pos.direction;
            rover.lost = false;
            

            //check data
            console.log("check param from start: direction:" +rover.curr_direction+" x:"+rover.curr_pos_x+" y:"+rover.curr_pos_y);
            //get command data
            var command_length = userInput[i].movement.length; 
            var command_string = userInput[i].movement;
             
            var j;

            //we execute each command in the string one by one
            for(j = 0; j < command_length; j++){
                var command = command_string.charAt(j);

                switch(command){
                    case "L":
                    case "R": //if L or R
                        var str = changeDirection.changeDirection(rover.curr_direction, command);
                        rover.curr_direction = str;
                        break;
                    case "F":
                        executeForward.executeForward(world, rover, world_row, world_col);
                        break;
                }
                console.log("command: "+command);
                console.log("x: " + rover.curr_pos_x + ", y: " + rover.curr_pos_y +", direction: " + rover.curr_direction
                +", lost: " + rover.lost);
                
            }//end for command string
            
            

            //we save current rover before moving on to the next
            all_rovers.push(rover);
        }

        res.send({all_rovers,world});
    }else{
        res.send("World coordinates should be lower than 50.");
    }
});

/*app.get('/:curr_dir/:where_to_go', (req,res) => {
    let curr_dir = req.params.curr_dir;
    let where_to_go = req.params.where_to_go;
    let x = processor.changeDirection(curr_dir,where_to_go);
    res.send(curr_dir+where_to_go+': ' + x);
});*/

/*app.get('/:world_x/:world_y', (req,res) => {
    let world_x = req.params.world_x;
    let world_y = req.params.world_y;
    let x = processor.checkWorld(world_x, world_y);
    res.send('Lower than 50? ' + x);
});*/



const PORT = process.env.PORT || 3000;
//start server
app.listen(PORT, () => {
    console.log("Server is up and listening on:" + PORT);
});