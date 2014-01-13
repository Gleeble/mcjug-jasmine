function countChars(text) {
    text = text.toUpperCase();

    var counts = {};
    for (var idx in text) {
        var char = text[idx];
        counts[char] = counts[char] ? ++counts[char] : 1;
    }

    var output = "<ul>";

    var keys = Object.keys(counts).sort();

    keys.forEach(function(key){
        output += "<li>"+ key + ":" + counts[key] +"</li>";
    });

    document.getElementById("output").innerHTML = output + "</ul>";
}