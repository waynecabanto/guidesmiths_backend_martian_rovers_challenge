const changeDirection = (param_curr_dir, lor) => {
    //var where_to_go = param_curr_dir + lor;

    switch(param_curr_dir){
        case 'E':
            return lor === "L" ? "N" : "S";
        case 'N':
            return lor === "L" ? "W" : "E";
        case 'W':
            return lor === "L" ? "S" : "N";
        case 'S':
            return lor === "L" ? "E" : "W";
        default:
            return param_curr_dir;
    }
}

exports.changeDirection = changeDirection;