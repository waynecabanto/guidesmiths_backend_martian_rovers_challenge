//run if next command is 'F/f'
const checkWorldHistory = (param_world, param_rover) => { 
    //get array and check current position. if current position == edge and it's 1, dont continue, else dead.
    if(param_world[param_rover.curr_pos_x][param_rover.curr_pos_y] === 0){
        param_world[param_rover.curr_pos_x][param_rover.curr_pos_y] = 1;
        param_rover.lost = true;
        return {
            result_world: param_world,
            result_rover: param_rover
        };
    }

    //rover doesnt do anything and ignores F command
    return {
        result_world: param_world,
        result_rover: param_rover
    };
}

exports.checkWorldHistory = checkWorldHistory;