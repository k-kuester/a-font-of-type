//proper mapping between char and point is possible,
//presently chars and coordinates are in correct order

var chars = ['ffi', 'fl', '/', '`', '\'', 
'k', 'e', '1', '2', '3', 
'4', '5', '6', '7', '8', 
'j', 'b', 'c', 'd', 'i', 
's', 'f', 'g', 'ff', '9', 
'?', 'fi', '0', '!', 'l', 
'm', 'n', 'h', 'o', 'y', 
'p', 'w', ',', '  ', '   ', 
'z', 'x', 'v','u', 't', ' ', 
'a', 'r', ';', ':', '      ', 
'q', '.', '-', '$', '--', 
'---', '(', ')', '[', ']', 
'A', 'B', 'C', 'D', 'E', 
'F', 'G', 'H', 'I', 'K', 
'L', 'M', 'N', 'O', 'P',
'Q', 'R', 'S', 'T', 'V', 
'W', 'X', 'Y', 'Z', 'J', 
'U', '&', 'ffl'];

//until line break recognition functional, strings of spacing will be
//placeholders for quads.
//quad:spacebar key - 4:1, 3:2, en:3, em:6

var coordinates = [];

function storeCoordinate(xVal, yVal, arr) {
    arr.push({x: xVal, y: yVal});
}

storeCoordinate(41, 66, coordinates); 
storeCoordinate(89, 61, coordinates); 
storeCoordinate(147, 62, coordinates); 
storeCoordinate(200, 69, coordinates); 
storeCoordinate(255, 68, coordinates);
storeCoordinate(307, 69, coordinates);
storeCoordinate(389, 174, coordinates);
storeCoordinate(483, 74, coordinates);
storeCoordinate(538, 73, coordinates);
storeCoordinate(592, 74, coordinates);

storeCoordinate(645, 73, coordinates);
storeCoordinate(697, 77, coordinates);
storeCoordinate(748, 72, coordinates);
storeCoordinate(805, 68, coordinates);
storeCoordinate(862, 72, coordinates);
storeCoordinate(37, 172, coordinates);
storeCoordinate(94, 226, coordinates);
storeCoordinate(177, 226, coordinates);
storeCoordinate(283, 223, coordinates);
storeCoordinate(510, 220, coordinates);

storeCoordinate(614, 226, coordinates);
storeCoordinate(697, 221, coordinates);
storeCoordinate(748, 222, coordinates);
storeCoordinate(803, 165, coordinates);
storeCoordinate(860, 170, coordinates);
storeCoordinate(43, 271, coordinates);
storeCoordinate(803, 269, coordinates);
storeCoordinate(857, 272, coordinates);
storeCoordinate(41, 371, coordinates);
storeCoordinate(96, 419, coordinates);

storeCoordinate(175, 425, coordinates);
storeCoordinate(287, 420, coordinates);
storeCoordinate(384, 417, coordinates);
storeCoordinate(510, 427, coordinates);
storeCoordinate(597, 425, coordinates);
storeCoordinate(643, 426, coordinates);
storeCoordinate(699, 426, coordinates);
storeCoordinate(749, 425, coordinates);
storeCoordinate(802, 422, coordinates);
storeCoordinate(859, 421, coordinates);

storeCoordinate(40, 472, coordinates);
storeCoordinate(44, 571, coordinates);
storeCoordinate(96, 626, coordinates);
storeCoordinate(177, 625, coordinates);
storeCoordinate(281, 627, coordinates);
storeCoordinate(392, 624, coordinates);
storeCoordinate(515, 621, coordinates);
storeCoordinate(617, 624, coordinates);
storeCoordinate(698, 575, coordinates);
storeCoordinate(750, 571, coordinates);

storeCoordinate(835, 621, coordinates);
storeCoordinate(36, 674, coordinates);
storeCoordinate(698, 672, coordinates);
storeCoordinate(748, 672, coordinates);
storeCoordinate(926, 67, coordinates);
storeCoordinate(990, 69, coordinates);
storeCoordinate(1047, 67, coordinates);
storeCoordinate(1105,70, coordinates);
storeCoordinate(1172, 69, coordinates);
storeCoordinate(1230, 69, coordinates);

storeCoordinate(1294,68, coordinates);
storeCoordinate(926, 201, coordinates);
storeCoordinate(988, 203, coordinates);
storeCoordinate(1052, 200, coordinates);
storeCoordinate(1114, 203, coordinates);
storeCoordinate(1176, 199, coordinates);
storeCoordinate(1230, 200, coordinates);
storeCoordinate(1298, 204, coordinates);
storeCoordinate(928, 366, coordinates);
storeCoordinate(990, 369, coordinates);

storeCoordinate(1051, 368, coordinates);
storeCoordinate(1110, 368, coordinates);
storeCoordinate(1171, 370, coordinates);
storeCoordinate(1236, 371, coordinates);
storeCoordinate(1293, 370, coordinates);
storeCoordinate(927, 539, coordinates);
storeCoordinate(988, 543, coordinates);
storeCoordinate(1052, 537, coordinates);
storeCoordinate(1113, 537, coordinates);
storeCoordinate(1177, 537, coordinates);

storeCoordinate(1234, 535, coordinates);
storeCoordinate(1294, 536, coordinates);
storeCoordinate(929, 667, coordinates);
storeCoordinate(993, 667, coordinates);
storeCoordinate(1047, 668, coordinates);
storeCoordinate(1111, 670, coordinates);
storeCoordinate(1176, 671, coordinates);
storeCoordinate(1231, 672, coordinates);
storeCoordinate(1293, 670, coordinates);


