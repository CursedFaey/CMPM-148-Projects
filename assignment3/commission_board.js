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

function save_commission(){
    if (com_num < 1){
        commission_databank.push(output);
        //console.log(commission_databank);
        com_num += 1;
        current_com = 0;
    }else{
        for (let i = 0; i < com_num; i++){
            if (output == commission_databank[i]){return;}
        }
        commission_databank.push(output);
        //console.log(commission_databank);
        com_num++;
        current_com = (com_num - 1);
    }
    io.write_into_element(output, "saved_data");
}

function move_left(){
    current_com = 0;
    io.write_into_element(commission_data_save, "saved_data");
}

function move_right(){
    io.write_into_element(commission_data_save, "saved_data");
}