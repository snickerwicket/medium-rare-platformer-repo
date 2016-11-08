var GAME_LEVELS = [
  ["                          x                    xxxxxxxxxxxxx      x                   ",
   "           oo    oo       x                                       x                   ",
   "  oo   xxxxxxxxxxxxxxx    x                           |           x                   ",
   "                    xx    x                                       x                   ",
   " xxx                xx    x                        xxxxxxxx       x                   ",
   " xxx                xx    x                        x              x                   ",
   " xxxxx      oo      xx    x                       xx     |        x               o   ",
   "                    xx    x                       x               x                   ",
   "           xxxx     xx    x                      xx      xxxxxxxxxx               x   ",
   "            xx      xx          x      x         x                             x  x   ",
   "     xx             xx         xx      xx       xx                          x  x  x   ",
   " @  xxxx     y      xx   oo   xxx!!!!!!xxx   y  xx   o   o   o   o   o   x  x  x  x   ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                      xxxx     x                                                ",
   "o                        |     x                                                ",
   "            o                  x      o                                         ",
   "xx                             x                                                ",
   "x o                            x      xxxx                                      ",
   "x    xxxxxxxxxxx               x    xxx   x         o    o                      ",
   "x                     |        x           x  o                                 ",
   "x  o              xxxxxxxxx    xx           x      xxxxxxxxxx    o              ",
   " x                   x         x    o o      xx           xxx   xx     o        ",
   " x                   x         x                           xx          xx      x",
   " xx                  x         x   xxxxx                   xx                  x",
   "  xo                 x    xxxxxx       xx                  xx                  x",
   "  xx                 x     x            xxo o              xx                 xx",
   "  x                  x  o  x             x         =       xx                 xx",
   "  x                  x                   xxxxx             xx     o  o        xx",
   "  x                  x  o                x      =          xx   xxx  xxx     xxx",
   "  x  @       x  x    x                   x                 xx!!!xxx  xxx!!!!!xxx",
   "  xxxxxxxxxxxx!!xxxxxxxxxxxxxxx   xx     xxxxxxxxxxxxx     xxxxxxx oo xxxxxxxxxx",
   "                              x   x                        x       oo           ",
   "                              x!!!x                      xxx       oo           ",
   "                              x!!!x                        xxxxxxxxxxxxxxxxxxxxx",
   "                              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                          ",
   "x             px         x  y                         px                                                          ",
   "x                        x                             x                                                          ",
   "x                        x                             x                                                          ",
   "x                        x=     =        =      =x     x                                                          ",
   "x           y            x                       x     x                                                          ",
   "x           xxxxxxxxx    x                       x     x                                                         d",
   "x           xp      x    x     xxxxxxxxxxxx      x     x      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xx     xx",
   "x                   x    x                       x     x     x                                     x!!!!!!!!!!!!!x", 
   "xk                  x    x                       x     x                                           x!!!!!!!!!!!!!x",
   "xx!!!!x        y    x    x                       x     xx             |                            x!!!!!!!!!!!!!x",
   "xxxxxxxxxxxxxxxx    x    x  =                 =  x     x                                           xxxxxxxxxxxxxxx",
   "x             px    x    x                       x     x           x     =    x      =    x        x              ",
   "x                   x    x    xx    xx     xx    x     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       x              ",
   "x                  kx    x                       x     x                                    x      x              ",
   "x        x   xxxxxxxx    x                       x     x                      |                   xx              ",
   "x        x!!!x           x           =           x     x              |             |             x               ",
   "x        xxxxx           x                       x                                              xxx               ",
   "x        x        xxxxxxxx                       x                            |                 xxx               ",
   "x        x                                     xxx                                            xxxxx               ",
   "x        x                                       x             |                    |         xxxxx               ",
   "x        x                                       x                    |       |             xxxxxxx               ",
   "x        x                                       x         y       y      y      y     y    x                     ",
   "x        x                                       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                     ",
   "x        xy                                     kx                                                                ",
   "x @     kxxxxxxxx                            xxxxx                                                                ",
   "xxxxxxxxxxxxxxxxxxxxxxx       xx      xxx    xxxxx                                                                ",   
   "xxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!xxxxx                                                                "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                             x                                                                ",
   "            x   x  xx  x  x   x     x x x  x x                                                                ",
   "             x x  x  x x  x   x  x  x x xx x x                                                                ",
   "              x   x  x x  x    x x x  x x xx                                                                  ",
   "              x    xx   xx      x x   x x  x x                                                                ",
   "   @                                                                                                 o        ",
   "                                                                                                              ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
