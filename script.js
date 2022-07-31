var first_name = getlabel("label", "for", "firstname", "First Name");
var br1 = linebreak("br");
var first_name_input = getinput("input", "type", "text", "id", "first name");
var br2 = linebreak("br");
var last_name = getlabel("label", "for", "lastname", "Last Name");
var br3 = linebreak("br");
var last_name_input = getinput("input", "type", "text", "id", "last name");
var br4 = linebreak("br");
var email_id = getlabel("label", "for", "email", "Email ID");
var br5 = linebreak("br");
var email_id_input = getinput("input", "type", "email", "id", "Email");
var br6 = linebreak("br");
var phone_number = getlabel("label", "for", "phonenumber", "Phone Number");
var br7 = linebreak("br");
var phone_number_input = getinput("input", "type", "tel", "id", "phone number");

document.body.append(first_name,br1,first_name_input,br2,last_name,br3,last_name_input,br4,
    email_id,br5,email_id_input,br6,phone_number,br7,phone_number_input);

function getlabel(tagname, atrname, atrvalue, content) {
    var heading = document.createElement(tagname);
    heading.setAttribute("atrname", "atrvalue");
    heading.innerHTML = content;
    return heading;
}

function getinput(tagname, atrname, atrvalue, idname, idvalue) {
    var reply = document.createElement(tagname);
    reply.setAttribute("atrname", "atrvalue");
    reply.setAttribute("idname", "idvalue");
    return reply;
}

function linebreak(tagname) {
    var breaker = document.createElement(tagname);
    return breaker;
}

function clickme(){
console.log(first_name_input.value);
console.log(last_name_input.value);
console.log(email_id_input.value);
console.log(phone_number_input.value);
}