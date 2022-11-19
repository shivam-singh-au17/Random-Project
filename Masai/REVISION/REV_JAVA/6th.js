var items = ['a', 'f', 'e', 'a', 'c', 'q', 'f', 'a'];
var items_obj = {}

for (var i = 0; i < items.length; i++) {
    var key = items[i];
    if (items_obj[key] == undefined) {
        items_obj[key] = 1;
    } else {
        var prev_count = items_obj[key];
        items_obj[key] = prev_count + 1;
    }
    // console.log(items_obj);
}

for (key in items_obj) {
    if (items_obj[key] == 1) {
        console.log(key)
    }
}
