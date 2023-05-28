// creates a map of the sectors of Valantis (or current city) with their unique names
function scan_sectors(){
    // Air Sectors
    output = "Air Sectors: <br> <ol>";
    sector_data = {
        "name"      : ["", ""],
        "details"   : ["", ""],
        "origin"    : "#name# - #details#"
    }
    for (let i = 0; i < 5; i++){
        output += "<li>" + grammars.GenerationSimple(territory_data) + "</li>";
    }
    output += "</ol>";

    // Earth Sectors
    output = "Earth Sectors: <br> <ol>";
    sector_data = {
        "name"      : ["", ""],
        "details"   : ["", ""],
        "origin"    : "#name# - #details#"
    }
    for (let i = 0; i < 5; i++){
        output += "<li>" + grammars.GenerationSimple(territory_data) + "</li>";
    }
    output += "</ol>";

    // Fire Sectors
    output = "Fire Sectors: <br> <ol>";
    sector_data = {
        "name"      : ["", ""],
        "details"   : ["", ""],
        "origin"    : "#name# - #details#"
    }
    for (let i = 0; i < 5; i++){
        output += "<li>" + grammars.GenerationSimple(territory_data) + "</li>";
    }
    output += "</ol>";

    // Water Sectors
    output = "Water Sectors: <br> <ol>";
    sector_data = {
        "name"      : ["", ""],
        "details"   : ["", ""],
        "origin"    : "#name# - #details#"
    }
    for (let i = 0; i < 5; i++){
        output += "<li>" + grammars.GenerationSimple(territory_data) + "</li>";
    }
    output += "</ol>";
    io.write_into_element(output, "sectors");
}