var arrayData = new Array()
var archivo = new XMLHttpRequest()
var fileRuta = 'db.txt'

archivo.open("GET", fileRuta, false)
archivo.send(null)
var txt = archivo.responseText

for (var i = 0; i < txt.length; i++) {
    arrayData.push(txt[i])
}
arrayData.forEach(function(data) {
    console.log(data)
})