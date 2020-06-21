
//checks if the rover is on the edge and it's facing the edge
const edgeChecker = (param_rover, param_world_row, param_world_col) => {
    if((param_rover.curr_pos_y === 0) && (param_rover.curr_direction === "S")) return true;
    else if((param_rover.curr_pos_x === param_world_col-1) && (param_rover.curr_direction === "E")) return true;
    else if((param_rover.curr_pos_y === param_world_row-1) && (param_rover.curr_direction === "N")) return true;
    else if((param_rover.curr_pos_x === 0) && (param_rover.curr_direction === "W")) return true;
    else return false;
}



exports.edgeChecker = edgeChecker;