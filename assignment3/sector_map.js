// creates a map of the sectors of Valantis (or current city) with their unique names
sector_data_save = "";
function build_sectors(){
    // City Name
    output = "<b>Valantis:</b> <br><br>"
    
    // Air Sectors
    output += "Air Sectors: <br> <ol>";
    sector_data_air = {
        "name"      : ["#adj# Gardens of #person#", "#subject# of Summer", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#",],
        "form"      : ["#adj# #subject# of #person#", "The #adj# #subject#", "#adj# #subject#", "The #noun# of #adj# #nouns#"],
        "adj"       : ["Windy", "Stormy", "Starry", "Summer", "Zephyr", "Gale", "Twisted", "Sunbeam"],
        "nouns"     : ["Towers", "Skyports", "Cathedrals", "Hills", "Courts"],
        "noun"      : ["Landing", "Court", "Promenade"],
        "subject"   : ["#noun#", "#noun#", "#noun#", "#nouns#", "#nouns#", "#nouns#", "#nouns#", "#nouns#",],
        "person"    : ["Avandra", "Elaine", "Lucian", "Apollo"],
        "details"   : ["", "", "","- #rumors#"],
        "rumors"    : ["known for #special#", "Most of the #people# in the sector #verb# here", "Stay away from the #danger# here", "A popular place to #relax#"],
        "people"    : ["aristocrats", "workers", "general populace", "travelers", "mages", "guards", "bards", "clerics"],
        "verb"      : ["work", "live", "sleep", "eat", "linger", "shop"],
        "danger"    : ["thieves", "lurking monsters", "mages", "drunkards", "shadows"],
        "relax"     : ["drink at taverns", "look for a fight", "find entertainment", "find answers", "shop for magic items"],
        "special"   : ["their #influence# influenced architecture", "the most beautiful views in the city", "housing the most influential people in the city"],
        "influence" : ["Fey", "Celestial", "Elven"], 
        "origin"    : "#name# #details#"
    }
    for (let i = 1; i < 6; i++){
        output += "Sector #" + i + ": " + grammars.GenerationSimple(sector_data_air) + "<br>";
    }
    output += "</ol>";

    // Earth Sectors
    output += "Earth Sectors: <br> <ol>";
    sector_data_earth = {
        "name"      : ["#person# Jade Circlet", "Shimmering #subject#", "#adj# Valley", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#",],
        "form"      : ["#person# #noun# of #adj# #nouns#", "The #adj# #subject#", "#adj# #subject#", "#person# #adj# #subject#"],
        "adj"       : ["Shattered", "Buried", "Verdant", "Blossoming", "Steel", "Runic", "Crystal", "Overgrown"],
        "nouns"     : ["Gardens", "Tunnels", "Machines", "Statues", "Canopies"], 
        "noun"      : ["Menagerie", "Crossroad", "Garden"],
        "subject"   : ["#noun#", "#noun#", "#noun#", "#nouns#", "#nouns#", "#nouns#", "#nouns#", "#nouns#",],
        "person"    : ["Kioshi's", "Iris's", "Ambrose's", "Dahlia's"],
        "details"   : ["", "", "","- #rumors#"],
        "rumors"    : ["known for #special#", "Most of the #people# in the sector #verb# here", "Stay away from the #danger# here", "A popular place to #relax#"],
        "people"    : ["aristocrats", "workers", "general populace", "travelers", "druids", "bards", "mages"],
        "verb"      : ["work", "live", "sleep", "eat", "linger", "shop"],
        "danger"    : ["thieves", "lurking monsters", "mages", "drunkards", "shadows"],
        "relax"     : ["drink at taverns", "look for a fight", "find entertainment", "find answers", "shop for magic items"],
        "special"   : ["outsiders getting lost in this sector", "being the most attuned to magic in the city", "being the safest sector to live in"],
        "origin"    : "#name# #details#"
    }
    for (let i = 1; i < 6; i++){
        output += "Sector #" + i + ": " + grammars.GenerationSimple(sector_data_earth) + "<br>";
    }
    output += "</ol>";

    // Fire Sectors
    output += "Fire Sectors: <br> <ol>";
    sector_data_fire = {
        "name"      : ["The #adj# Fair", "#noun# of Wreathed Embers", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#",],
        "form"      : ["#person# #noun# of #adj# #nouns#", "The #adj# #subject#", "#adj# #subject#", "#person# #adj# #subject#"],
        "adj"       : ["Rekindling", "Molting", "Ember", "Fuming", "Scorching", "Melted", "Fiery", "Shocking"],
        "nouns"     : ["Furnaces", "Statues", "Embers", "Alleyways", "Plazas"],
        "noun"      : ["Factory", "Carnival", "Arena"],
        "subject"   : ["#noun#", "#noun#", "#noun#", "#nouns#", "#nouns#", "#nouns#", "#nouns#", "#nouns#",],
        "person"    : ["Viktor's", "Savita's", "Nina's", "Ignacio's"],
        "details"   : ["", "", "","- #rumors#"],
        "rumors"    : ["known for #special#", "Most of the #people# in the sector #verb# here", "Stay away from the #danger# here", "A popular place to #relax#"],
        "people"    : ["aristocrats", "workers", "general populace", "travelers", "mages", "warriors", "fighters"],
        "verb"      : ["work", "live", "sleep", "eat", "linger", "shop"],
        "danger"    : ["thieves", "lurking monsters", "mages", "drunkards", "shadows"],
        "relax"     : ["drink at taverns", "look for a fight", "find entertainment", "find answers", "shop for magic items"],
        "special"   : ["its dangerous working conditions", "being The Place for entertainment", "having the best food in the city"],
        "origin"    : "#name# #details#"
    }
    for (let i = 1; i < 6; i++){
        output += "Sector #" + i + ": " + grammars.GenerationSimple(sector_data_fire) + "<br>";
    }
    output += "</ol>";

    // Water Sectors
    output += "Water Sectors: <br> <ol>";
    sector_data_water = {
        "name"      : ["Promenade of #adj# Waves", "#noun# of Gilded #nouns#", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#", "#form#",],
        "form"      : ["#adj# #subject# of #person#", "The #adj# #subject#", "#adj# #subject#", "The #subject# of #adj# #person#"],
        "adj"       : ["Sunken", "Floating", "Chilly", "Torrential", "Briny", "Frozen", "Subzero", "Misty"],
        "nouns"     : ["Waves", "Waterfalls", "Geysers", "Docks", "Beaches"],
        "noun"      : ["Fountain", "River", "Lighthouse"],
        "subject"   : ["#noun#", "#noun#", "#noun#", "#nouns#", "#nouns#", "#nouns#", "#nouns#", "#nouns#",],
        "person"    : ["Priscilla", "Adrian", "Blackwell", "Maya"],
        "details"   : ["", "", "","- #rumors#"],
        "rumors"    : ["known for #special#", "known for #special#", "Most of the #people# in the sector #verb# here", "Stay away from the #danger# here", "A popular place to #relax#"],
        "people"    : ["aristocrats", "workers", "general populace", "travelers", "guards", "bards"],
        "verb"      : ["work", "live", "sleep", "eat", "linger", "shop"],
        "danger"    : ["thieves", "lurking monsters", "mages", "drunkards", "shadows"],
        "relax"     : ["drink at taverns", "look for a fight", "find entertainment", "find answers", "shop for magic items"],
        "special"   : ["having the best places to shop at", "having #influence# go missing here", "where the undercity does most of its dealings"],    
        "influence" : ["mages", "bards", "workers"],
        "origin"    : "#name# #details#"
    }
    for (let i = 1; i < 6; i++){
        output += "Sector #" + i + ": " + grammars.GenerationSimple(sector_data_water) + "<br>";
    }
    output += "</ol>";
    sector_data_save = output;
    io.write_into_element(output, "sectors");
}

function save_sectors(){
    io.write_into_element("<i>Copy text below into clipboard to transfer sectors to Commission Board</i><br>" + sector_data_save, "saved_data");
}