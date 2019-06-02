const fs = require('fs')
const path = require('path')
/*const _ = require('lodash')
*/
function parseFile(filePath) {
	
  let output = new Promise((resolve, reject) => {
    fs.readFile(filePath, function(err, data) {
    if (err) reject( err )
    content = data.toString().split(/(?:\r\n|\r|\n)/g).map(function(line) {
      return line.trim()
    })/*.filter(Boolean)*/
  console.log(content);
    /*resolve(processFile(content))*/
  })
})
  return output
}
if (require.main === module) {
  let dir = path.join(__dirname, '../ReadFiles/public')
  let files = fs.readdirSync(dir) // gives all the files
  let promises = files.map(file => parseFile(path.join(dir, file))) // gives an array of promises for each file
  Promise.all(promises).then(console.log) // Uses Promise.all and resolves all supplied promises with their results. 
  // WIN
}



