//values given to rover to move forward
const moveForward = (param_curr_dir) => {
    switch(param_curr_dir){
        case 'E':
            return {
                x: 1,
                y: 0
            };
        case 'W':
            return{
                x: -1,
                y: 0
            };
        case 'S':
            return{
                x: 0,
                y: -1
            };
        case 'N':
            return{
                x: 0,
                y: 1
            };
        default:
            return{
                x: 0,
                y: 0
            }
    }
}

exports.moveForward = moveForward;