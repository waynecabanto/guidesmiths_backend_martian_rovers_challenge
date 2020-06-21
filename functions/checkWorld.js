//checks world dimensions if it's lower than 50x50
const checkWorld = (world_x, world_y) => {
    return (world_x < 50 && world_y < 50) ? true : false;
}


exports.checkWorld = checkWorld;