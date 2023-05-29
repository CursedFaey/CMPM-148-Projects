// Creates a commission from the City of Valantis (or current city) that has its own unique commission name, details, people to talk to, leads, and rewards
const commission_databank = [];
current_com = 0;
com_num = 0;
output = "";
saved = false;
function build_commission(){
    // Commission generation
    output = "<b>Commission: ";
    commission_data = {
        // Commission name generator
        "setTask"   : ["[taskName:Bounty Hunters Wanted][story:#[object:#bountyObj#][#setPronouns#]taskBounty#]", "[taskName:Stolen Item][story:#[object:#theftObj#]taskTheft#]", "[taskName:Missing Person][story:#[object:#missingObj#][#setPronouns#]taskSearch#]"],

        // person generator
        "person"    : ["#name#", "#namecraft#", "Anonymous"],
        "name"      : ["#real.capitalize# #reallast.capitalize#"],
        "namecraft" : ["#first.capitalize# #last.capitalize#"],
        "first"     : ["#one##two##three##four#", "#one##two##three#", "#real#", "#real#", "#real#"],
        "last"      : ["#one##two#d#three##four#", "#one##two##three#", "#element##elelast#", "#element##elelast#", "#element##elelast#", "#reallast#", "#reallast#", "#reallast#"],
        "real"      : ["Agnes", "Hollie", "Harmony", "Elijah", "Varun", "Kazuha", "Percy", "Saul", "Junae", "Leilani", "Bjorn", "Selene", "Robin", "Lucille"],
        "reallast"  : ["Knox", "Mercado", "Garcia", "Steele", "Shepard", "Bauer", "Lloyd", "Valentine", "Chen", "Alvarez", "Riggs", "Herring", "King", "Cannon"],
        "element"   : ["frost", "fire", "stone", "breeze", "rain", "smoke", "earth", "ice"],
        "elelast"   : ["shaker", "flame", "storm", "wave"],
        "one"       : ["a", "al", "au", "br", "bo", "di", "ma", "ka", "ro", "ni", "ly", "vo", "ya", "er", "et", "gha", "fri", "jo"],
        "two"       : ["tu", "po", "da", "th", "lm", "wo", "va", "gr", "ch", "pi", "gh"],
        "three"     : ["ack", "-ack", "or", "-or", "le", "-le", "br", "-br", "ch", "-ch", "bo", "-bo", "a", "-a", "gha", "-gha", "fri", "-fri"],
        "four"      : ["tu", "po", "da", "th", "lm", "wo", "va", "gr", "ch", "pi", "gh", "vo", "er", "ni", "ro", "bo", "di", "al", "a", "et"],

        // gender generator
        "setPronouns": ["[pthey:they][pthem:them][ptheir:their]", "[pthey:he][pthem:him][ptheir:his]", "[pthey:she][pthem:her][ptheir:hers]"],
        
        ///////////// tasks ("story")
        //Bounty
        "bountyObj" : ["#name#", "#namecraft#", "The #legend.capitalize# #legend1.capitalize#", "The #legend.capitalize# #legend1.capitalize#"],
        "legend"    : ["shadowy", "glacial", "hellish", "galvanic", "silent", "one-eyed", "blind", "magic"],
        "legend1"   : ["fist", "blade", "one", "rat", "assassin", "warlock", "creature", "killer"],

        "taskBounty": ["I'm searching for #object# <br> #pthey.capitalize# got too #comfy# and #deed# one too many times <br> It is time for #ptheir# #reign# of #terror# to end <br> I need someone to bring me #ptheir# #proof# as proof"],
        "comfy"     : ["comfortable", "cocky", "unreliable", "messy"],
        "deed"      : ["killed", "stole", "messed up"],
        "reign"     : ["reign", "life", "legacy"],
        "terror"    : ["terror", "death", "mistakes"],
        "proof"     : ["head", "hand", "ring"],
        //Stolen Item
        "theftObj"  : ["#magicEle# ring", "#magicEle# sword", "#magicEle# focus", "heirloom #treasure#"],
        "magicEle"  : ["storm", "chilling", "fae", "magic", "draconic", "obsidian"],
        "treasure"  : ["ring", "sword", "key", "music box", "staff"],

        "taskTheft" : ["Someone stole my #object# <br> It is very #important# to #someone# and I need help finding it <br> The thief left #traces# around my place but I am #excuse#"],
        "important" : ["valuable", "important", "special"],
        "someone"   : ["me", "my partner", "my family", "my work", "my magic"],
        "traces"    : ["traces of elemental fire", "traces of elemental water", "traces of elemental air", "traces of elemental earth", "metal scraps", "motes of abyssal magic", "motes of fae magic"],
        "excuse"    : ["frightened of them", "too busy to look myself", "injured from the encounter"],

        //Missing Person
        "missingObj": ["#name#", "#namecraft#"],

        "taskSearch": ["My #relation# #object# #sign# <br> #pthey.capitalize# usually #stay# but I haven't #seen# #pthem# in a while <br> I am worried for #pthem#"],
        "relation"  : ["friend", "coworker", "partner", "classmate"],
        "sign"      : ["hasn't been answering my messages", "left while they were working", "got drunk and hasn't been heard from since"],
        "stay"      : ["go to local taverns", "go for walks around #sectorType# at night", "work in #sectorType#"],
        "seen"      : ["seen", "heard", "talked to"],
        /////////////

        //leads
        "leads"     : ["You can find me in #sector# to learn more. #locate#", "You might be able to ask around in #sector# to learn more."],
        "locate"    : ["I'll be hanging around taverns in the sector.", "I'll be wearing #clothes# around the shops.", "I'll be waiting at my place at #address#."],
        "clothes"   : ["a #color# jacket", "#color# shoes", "A #color# hat"],
        "color"     : ["red", "black", "blue", "beige", "purple", "dark green"],
        "address"   : ["Sector Residency: #num3##num2##num2##num2##num2#"],
        "sectorType": ["Earth Sector #sectorNum#", "Air Sector #sectorNum#", "Fire Sector #sectorNum#", "Water Sector #sectorNum#"],
        "sectorNum" : ["1", "2", "3", "4", "5"],

        //rewards
        "rewards"   : ["#num1##num2##num2# gold"],
        "num1"      : ["1", "2", "3", "4"],
        "num2"      : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        "num3"      : ["1", "2", "3", "4", "5", "6", "7", "8", "9"],

        "commission": ["#taskName#</b> <br><br> Commissioner: #person# <br><br> #story# <br><br> Leads: #[sector:#sectorType#]leads# <br><br> Reward: #rewards#"],
        "origin"    : ["#[#setTask#]commission#"]
    }
    output += grammars.GenerationSimple(commission_data) + "</b>";

    io.write_into_element(output, "commission");
    console.log(output);
}

// saves a commission if you haven't saved it already
function save_commission(){
    saved = true;
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
    if(saved == false){return;
    }else if(current_com > 0){
        current_com--;
    }
    io.write_into_element("~~~~~~~~~~~~~#" + (current_com + 1) + "~~~~~~~~~~~~~<br>" + commission_databank[current_com], "saved_data");
}

//moves right to recently saved commissions
function move_right(){
    if(saved== false){return;
    }else if(current_com < com_num - 1){
        current_com++;
    }
    io.write_into_element("~~~~~~~~~~~~~#" + (current_com + 1) + "~~~~~~~~~~~~~<br>" + commission_databank[current_com], "saved_data");
}