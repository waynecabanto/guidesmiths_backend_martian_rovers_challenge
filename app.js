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
        const rover = {
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
            
            

            console.log('ROVER DATA BEFORE PUSHING TO ALL_ROVERS: ');
            console.log("x: " + rover.curr_pos_x + ", y: " + rover.curr_pos_y +", direction: " + rover.curr_direction
                +", lost: " + rover.lost);

            //we save current rover before moving on to the next
            all_rovers.push({
                curr_pos_x: rover.curr_pos_x, 
                curr_pos_y: rover.curr_pos_y, 
                curr_direction: rover.curr_direction, 
                lost: rover.lost
            });
        }

        //reply to API Request with world data
        //res.send({all_rovers,world});

        //reply to API Request without world data
        res.send({all_rovers});
    }else{
        res.send("World coordinates should be lower than 50.");
    }
});


const PORT = process.env.PORT || 3000;
//start server
app.listen(PORT, () => {
    console.log("Server is up and listening on:" + PORT);
});