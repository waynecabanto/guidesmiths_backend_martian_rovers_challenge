const createWorld = (row_max, col_max) => {
    var created_world = new Array(row_max);

    for (var i = 0; i < created_world.length; i++) {
        created_world[i] = new Array(col_max);
    }

    //defaults every places to 0
    for(var i = 0; i < row_max; i++){
        for(var j = 0; j < col_max; j++){
            created_world[i][j] = 0;
        }
    }
    
    return created_world;
}

exports.createWorld = createWorld;