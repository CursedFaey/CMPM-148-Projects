// Creates a commission from the City of Valantis (or current city) that has its own unique commission name, details, people to talk to, leads, and rewards
const commission_databank = [];
current_com = 0;
com_num = 0;
output = "";
function build_commission(){
    // Commission generation
    output = "<b>Commission: ";
    commission_data = {
        "task"      : ["a", "b"],

        "person"    : ["Commissioner: #name#", "Commissioner: #namecraft#", "Commissioner: Anonymous", "Commissioner: Anonymous"],
        "name"      : ["#real.capitalize# #reallast.capitalize#"],
        "namecraft" : ["#first.capitalize# #last.capitalize#"],
        "first"     : ["#one##two##three##four#", "#one##two##three#", "#real#", "#real#", "#real#"],
        "last"      : ["#one##two##three##four#", "#one##two##three#", "#element##elelast#", "#element##elelast#", "#element##elelast#", "#reallast#", "#reallast#", "#reallast#"],
        "real"      : ["Agnes", "Hollie", "Harmony", "Elijah", "Varun", "Kazuha", "Percy", "Saul", "Junae", "Leilani", "Bjorn", "Selene", "Robin", "Lucille"],
        "reallast"  : ["Knox", "Mercado", "Garcia", "Steele", "Shepard", "Bauer", "Lloyd", "Valentine", "Chen", "Alvarez", "Riggs", "Herring", "King", "Cannon"],
        "element"   : ["frost", "fire", "stone", "breeze", "rain", "smoke", "earth", "ice"],
        "elelast"   : ["shaker", "flame", "storm", "wave"],
        "one"       : ["a", "al", "au", "br", "bo", "di", "ma", "ka", "ro", "ni", "ly", "vo", "ya", "er", "et", "gha", "fri", "jo"],
        "two"       : ["tu", "po", "da", "th", "lm", "wo", "va", "gr", "ch", "pi", "gh"],
        "three"     : ["ack", "-ack", "or", "-or", "le", "-le", "br", "-br", "ch", "-ch", "bo", "-bo", "a", "-a", "gha", "-gha", "fri", "-fri"],
        "four"      : ["tu", "po", "da", "th", "lm", "wo", "va", "gr", "ch", "pi", "gh", "vo", "er", "ni", "ro", "bo", "di", "al", "a", "et"],

        "story"     : ["a", "b"],
        "prey"      : ["a", "b"],
        "treasure"  : ["a", "b"],
        "lost"      : ["a", "b"],
        "deliver"   : ["a", "b"],
        "sleuth"    : ["a", "b"],

        "leads"     : ["a", "b"],
        "sector"    : ["a", "b"],

        "rewards"   : ["a", "b"],

        "origin"    : "#task#</b> <br><br> #person# <br><br> #story# <br><br> #leads# <br><br> #rewards#"
    }
    output += grammars.GenerationSimple(commission_data) + "</b>";

    io.write_into_element(output, "commission");
    console.log(output);
}

// saves a commission if you haven't saved it already
function save_commission(){
    if(output == ""){return;
    }else if(com_num < 1){
        commission_databank.push(output);
        //console.log(commission_databank);
        com_num++;
        //console.log(com_num);
        current_com = 0;
    }else{
        for (let i = 0; i < com_num; i++){
            if (output == commission_databank[i]){return;}
        }
        commission_databank.push(output);
        //console.log(commission_databank);
        com_num++;
        //console.log(com_num);
        current_com = (com_num - 1);
    }
    io.write_into_element("~~~~~~~~~~~~~#" + (current_com + 1) + "~~~~~~~~~~~~~<br>" + output, "saved_data");
}

// moves left to other saved commissions
function move_left(){
    if(output == ""){return;
    }else if(current_com > 0){
        current_com--;
    }
    io.write_into_element("~~~~~~~~~~~~~#" + (current_com + 1) + "~~~~~~~~~~~~~<br>" + commission_databank[current_com], "saved_data");
}

//moves right to recently saved commissions
function move_right(){
    if(output == ""){return;
    }else if(current_com < com_num - 1){
        current_com++;
    }
    io.write_into_element("~~~~~~~~~~~~~#" + (current_com + 1) + "~~~~~~~~~~~~~<br>" + commission_databank[current_com], "saved_data");
}