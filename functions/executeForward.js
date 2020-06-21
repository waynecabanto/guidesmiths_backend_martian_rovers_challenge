const takeStep = require('./sub_functions/takeStep');
const checkWorldHistory = require('./sub_functions/checkWorldHistory');
const edgeChecker = require('./sub_functions/edgeChecker');

const executeForward = (param_world, param_rover, param_world_row, param_world_col) => {

    /*here we check if the rover is on the edge. if yes, then it calls checkWorldHistory():  */
    var checkEdge = edgeChecker.edgeChecker(param_rover, param_world_row, param_world_col);
    if(checkEdge){
        /*this checks if the current position is 1 or 0, 
        if it's 0, then the rover is lost. if it's 1, then it ignores the command.*/
        checkWorldHistory.checkWorldHistory(param_world, param_rover);
    }else {
        //take step if it's not on the edge
        takeStep.takeStep(param_rover);
    }
}

exports.executeForward = executeForward;