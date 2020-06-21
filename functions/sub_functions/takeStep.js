const moveForward = require('./moveForward');

const takeStep = (param_rover) => {
    //the rover moves forward without a problem
    switch(param_rover.curr_direction){
        //add or substract current position based on the direction that the rover is facing
        case 'E': 
            var dir = moveForward.moveForward('E');
            param_rover.curr_pos_x = param_rover.curr_pos_x + dir.x;
            param_rover.curr_pos_y = param_rover.curr_pos_y + dir.y;
            return param_rover;
        case 'W': 
            var dir = moveForward.moveForward('W');
            param_rover.curr_pos_x += dir.x;
            param_rover.curr_pos_y += dir.y;
            return param_rover;
        case 'S': 
            var dir = moveForward.moveForward('S');
            param_rover.curr_pos_x += dir.x;
            param_rover.curr_pos_y += dir.y;
            return param_rover;
        case 'N': 
            var dir = moveForward.moveForward('N');
            param_rover.curr_pos_x += dir.x;
            param_rover.curr_pos_y += dir.y;
            return param_rover;

    }
}

exports.takeStep = takeStep;