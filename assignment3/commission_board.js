// Creates a commission from the City of Valantis (or current city) that has its own unique commission name, details, people to talk to, leads, and rewards
const commission_databank = [];
current_com = 0;
com_num = 0;
output = "";
function build_commission(){
    // Commission generation
    output = "<b>Commission: ";
    commission_data = {
        "name"      : ["a", "b"],
        "details"   : ["a", "b"],
        "origin"    : "#name# - #details#"
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