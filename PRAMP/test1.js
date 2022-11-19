
var flatDictionary;


function flattenDictionary(dict) {

    flatDictionary = {};
    myHelperFun("", dict, flatDictionary);

    return flatDictionary
}



function myHelperFun(initValue, dict, flatDictioinary) {

    for (let key in dict) {

        let value = dict[key];

        if (typeof value != 'object') {

            if (key === "" || initValue === "") {
                flatDictionary[initValue + key] = value;
            } else {
                flatDictionary[initValue + "." + key] = value;
            }

        }
        else {

            if (key === "" || initValue === "") {
                myHelperFun(initValue + key, value, flatDictionary);
            } else {
                myHelperFun(initValue + "." + key, value, flatDictionary);
            }

        }

    }
}



