var db = firebase.database();
var refCompanies = db.ref('companies');

var companies = new Array;

$(document).ready(function(){
    refCompanies.on('value', gotData, errData);
    function gotData(data){
        var companies = data.val();
        var keys = Object.keys(companies);
        for(var i = 0; i < keys.length; i++){
            var k = keys[i];
            $('#selectCompany').append(
                '<option value="'+ companies[k].name +'">'+ companies[k].name +'</option>');
        } 
    }
    function errData(err){
        console.log('Error!');
        console.log(err);
    } 
});

function submitClick(){
    var date = document.getElementById('date');
    var selectCompany = document.getElementById("selectCompany");
    var input3 = document.getElementById("input3");
    var submitBtn = document.getElementById("submitBtn");

    var postData = {
        company : selectCompany.value,
        date : date.value
    }
    db.ref().child('weighings').push().set(postData);

    window.alert('Submitted');
};