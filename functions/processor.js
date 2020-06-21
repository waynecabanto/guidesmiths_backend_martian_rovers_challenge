//import { where } from "../models/UserInput";

//const { where } = require("../models/UserInput");
const test = require("./test");

const changeDirection = (curr_dir, lor) => {
    var where_to_go = curr_dir + lor;

    switch(curr_dir){
        case 'E':
            return lor === "L" ? "N" : "S";
        case 'N':
            return lor === "L" ? "W" : "E";
        case 'W':
            return lor === "L" ? "S" : "N";
        case 'S':
            return lor === "L" ? "E" : "W";
        default:
            return curr_dir;
    }
}


//reads next command on string
const nextCommand = (command_string, next) => {
    return command_string.charAt(next);
}


//checks world dimensions if it's lower than 50x50
const checkWorld = (world_x, world_y) => {
    return (world_x < 50 && world_y < 50) ? true : false;
}


//run if next command is 'F/f'
const checkWorldHistory = (world, rover) => { 
    //get array and check current position. if current position == edge and it's 1, dont continue, else dead.
    if(world[rover.curr_pos_x][rover.curr_pos_y] === 0){
        world[rover.curr_pos_x][rover.curr_pos_y] = 1;
        rover.lost = true;
        return {
            world: world,
            rover: rover
        };
    }

    return {
        world: world,
        rover: rover
    };
}

const createWorld = (row_max, col_max) => {
    var world = new Array(row_max);

    for (var i = 0; i < world.length; i++) {
    world[i] = new Array(col_max);
    }

    for(var i = 0; i < row_max; i++){
        for(var j = 0; j < col_max; j++){
            world[i][j] = 0;
        }
    }
    
    return world;
}

const executeForward = (world, rover, world_row, world_col) => {

    //var rovert = rover;
    //alert(rover.curr_pos_x);
    
    var checkEdge = test.edgeChecker(rover, world_row, world_col);
    //return checkEdge;
    if(/*edgeChecker(rover, world_row, world_col)*/checkEdge){
        const {rworld, rrover} = checkWorldHistory(world, rover);
        return {
            world: rworld,
            rover: rrover
        };
    }else {
        //take step if it's not on the edge
        const rrover = takeStep(rover);
        return {
             world:  world,
             rover:  rrover
        };
    }
}

const takeStep = (rover) => {
    //the rover moves forward without a problem
    switch(rover.curr_direction){
        //add or substract current position based on the direction that the rover is facing
        case 'E': 
            var dir = moveForward('E');
            rover.curr_pos_x += dir.x;
            rover.curr_pos_y += dir.y;
            return rover;
        case 'W': 
            var dir = moveForward('W');
            rover.curr_pos_x += dir.x;
            rover.curr_pos_y += dir.y;
            return rover;
        case 'S': 
            var dir = moveForward('S');
            rover.curr_pos_x += dir.x;
            rover.curr_pos_y += dir.y;
            return rover;
        case 'N': 
            var dir = moveForward('N');
            rover.curr_pos_x += dir.x;
            rover.curr_pos_y += dir.y;
            return rover;

    }
}




//values given to rover to move forward
const moveForward = (curr_dir) => {
    switch(curr_dir){
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

exports.changeDirection = changeDirection;
exports.checkWorld = checkWorld;
exports.createWorld = createWorld;
exports.nextCommand = nextCommand;
exports.executeForward = executeForward;