var canvas = new fabric.canvas("mycanvas");

block_image_width = 30;
block_image_height = 30;

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height =" +block_image_height);
        console.log("when Up arrow key is pressed, x = " player_x + ", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y >=500)
    {
        player_y = player_y - block_image_height;
        console.log("block image height =" +block_image_height);
        console.log("when Down arrow key is pressed, x = " player_x +  ", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >=0)
    {
        player_x = player_x - block_image_width;
        console.log("block image height =" +block_image_height);
        console.log("when Left arrow key is pressed, x = " player_x +  ", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_y <=850)
    {
        player_x = player_x - block_image_height;
        console.log("block image height =" +block_image_width);
        console.log("when Right arrow key is pressed, x = " player_x +  ", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}