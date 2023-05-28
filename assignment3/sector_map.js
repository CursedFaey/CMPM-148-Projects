// creates a map of the sectors of Valantis (or current city) with their unique names
sector_data_save = "";
function build_sectors(){
    // City Name
    output = "<b>Valantis:</b> <br><br>"
    
    // Air Sectors
    output += "Air Sectors: <br> <ol>";
    sector_data = {
        "name"      : ["a", "b"],
        "details"   : ["a", "b"],
        "origin"    : "#name# - #details#"
    }
    for (let i = 0; i < 5; i++){
        output += "<li>" + grammars.GenerationSimple(sector_data) + "</li>";
    }
    output += "</ol>";

    // Earth Sectors
    output += "Earth Sectors: <br> <ol>";
    sector_data = {
        "name"      : ["a", "b"],
        "details"   : ["a", "b"],
        "origin"    : "#name# - #details#"
    }
    for (let i = 0; i < 5; i++){
        output += "<li>" + grammars.GenerationSimple(sector_data) + "</li>";
    }
    output += "</ol>";

    // Fire Sectors
    output += "Fire Sectors: <br> <ol>";
    sector_data = {
        "name"      : ["a", "b"],
        "details"   : ["a", "b"],
        "origin"    : "#name# - #details#"
    }
    for (let i = 0; i < 5; i++){
        output += "<li>" + grammars.GenerationSimple(sector_data) + "</li>";
    }
    output += "</ol>";

    // Water Sectors
    output += "Water Sectors: <br> <ol>";
    sector_data = {
        "name"      : ["a", "b"],
        "details"   : ["a", "b"],
        "origin"    : "#name# - #details#"
    }
    for (let i = 0; i < 5; i++){
        output += "<li>" + grammars.GenerationSimple(sector_data) + "</li>";
    }
    output += "</ol>";
    sector_data_save = output;
    io.write_into_element(output, "sectors");
}

function save_sectors(){
    io.write_into_element(sector_data_save, "saved_data");
}