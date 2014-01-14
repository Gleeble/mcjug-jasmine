function countChars(text) {
    text = text.toUpperCase();

    var counts = {};
    for (var idx in text) {
        var char = text[idx];
        counts[char] = counts[char] ? ++counts[char] : 1;
    }

    return counts;
}

function displayCounts(charCountMap) {
    var output = "<ul>";

    var keys = Object.keys(charCountMap).sort();

    keys.forEach(function(key){
        output += "<li>"+ key + ":" + charCountMap[key] +"</li>";
    });

    document.getElementById("output").innerHTML = output + "</ul>";
}