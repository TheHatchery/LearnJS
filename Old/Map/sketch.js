

function setup() {
  createCanvas(640, 400);

  //REMOVE TO ASYNC FUNCTION
  loadFile();
  console.log(loadedTable);
  // loadImage('map.png', img => {
  //   image(img, 10, 10);
  // });
}

function draw() {
  //background(220);

}

//SETUP WITH PROMISE LIKE PREVIOUS LOADING TEXT FILE
//Remeber that function onFileload only runs when the table is loaded its a callback
//so can use same approach. The await loadFile in an async function
let loadedTable;
function loadFile() {
  // Load the table from file
  loadedTable = loadTable('locations.tsv', 'csv', onFileload);
  function onFileload() {
    text("Table loaded successfully...", 20, 100);
    
    // Display through the table
    for (let r = 0; r < loadedTable.getRowCount(); r++) {
      for (let c = 0; c < loadedTable.getColumnCount(); c++) {
        text(loadedTable.getString(r, c), 
              20 + c * 200, 150 + r * 20);
      }
    }
    return loadedTable;
  }
}
