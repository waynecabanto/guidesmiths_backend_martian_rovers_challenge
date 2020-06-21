# Overview of Martian Rovers by Wayne Cabanto


### Deployed link of the project:
https://waynecabanto-martian-rovers.herokuapp.com/

### Assumptions
* The rover's North is faced towards the right hand side. ------>>>
    This assumption is based on the instruction: 
    "The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1)."
* Having North to right, East points downwards and West upwards. Like so:
![alt text](https://github.com/waynecabanto/guidesmiths-backend-rover-challenge/blob/master/compass.jpg?raw=true "Logo Title Text 1")
    
### Sample Input
The world's maximum dimension is 50x50. The input is made by a POST Request through the link above or
through the localhost if deployed locally. 

The inputs (objects) are placed inside an array (userInput:[]). 

{
    "world": {
        "x": 5,
        "y": 5
    },
    "userInput": [
        {
            "start_pos": {
                "x": 1,
                "y": 1,
                "direction": "E"
            },
            "movement": "FFFFFFFF"
        },
        {
            "start_pos": {
                "x": 1,
                "y": 1,
                "direction": "E"
            },
            "movement": "FFFFFFFFRFLF"
        }
    ]
}

### Sample Output
{
    "all_rovers": [
        {
            "curr_pos_x": 4,
            "curr_pos_y": 1,
            "curr_direction": "E",
            "lost": true
        },
        {
            "curr_pos_x": 4,
            "curr_pos_y": 0,
            "curr_direction": "E",
            "lost": true
        }
    ]
}

