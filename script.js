
    function createGrid(x) {
    for(var rows = 0; rows < x; rows++) {
    for(var columns = 0; columns < x; columns++) {
    $("#container").append("<div class='grid'></div>");
    };
  };
    $(".grid").width(700/x);
    $(".grid").height(550/x);
    };
    function clearGrid() {
    $(".grid").remove();
    };

    function refreshGrid() {
    var z = prompt("how many boxes per side?");
    clearGrid();
    createGrid(z);
    };

    function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    $(".rainbow").click(function() {
    getRandomRgb();
    }); 

    $(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
    $(this).css('background', getRandomRgb());
    });

    $(".darken").click(function() {
    clearGrid();
    createGrid(16);
    $(".grid").mouseover(function() {
    $(this).css('background-color', 'black');
    });
  });

    $(".newGrid").click(function() {
    refreshGrid();
    $(".grid").mouseover(function() {
    $(this).css('background', getRandomRgb());
    });
  });
    $(".rainbow").click(function() {
    clearGrid();
    createGrid(16);
    $(".grid").mouseover(function() {
    $(this).css('background', getRandomRgb());
    });
  });
});

