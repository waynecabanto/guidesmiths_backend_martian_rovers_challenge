
//checks if the rover is on the edge and it's facing the edge
const edgeChecker = (rover, world_row, world_col) => {
    //var roverr = rover;
    if((rover.curr_pos_y === 0) && (rover.curr_direction === "S")) return true;
    else if((rover.curr_pos_x === world_col-1) && (rover.curr_direction === "E")) return true;
    else if((rover.curr_pos_y === world_row-1) && (rover.curr_direction === "N")) return true;
    else if((rover.curr_pos_x === 0) && (rover.curr_direction === "W")) return true;
    else return false;
    //var x = ro.curr_pos_x;
    //return rover;
}



exports.edgeChecker = edgeChecker;