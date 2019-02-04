var firstName
var lastName
var streetAddress
var locationCity
var locationState
var zipCode
var emailAddress
var phoneNumber


function updateInfo() {
    // Get Name Values
    firstName = document.getElementById('fname').value;
    lastName = document.getElementById('lname').value;

    // Get Address Values
    streetAddress = document.getElementById('address').value;
    locationCity = document.getElementById('city').value;
    locationState = document.getElementById('state').value;
    zipCode = document.getElementById('zipcode').value;

    // Get Contact Values
    emailAddress = document.getElementById('email').value;
    phoneNumber = document.getElementById('phone').value;

    // Add Name
    document.getElementById("resumeName").innerHTML = firstName + ' ' + lastName;

    // Add Address
    document.getElementById("resumeAddress").innerHTML = streetAddress + ', ' + locationCity + ', ' + locationState + ', ' + zipCode;

    // Add Contact
    document.getElementById("resumeContact").innerHTML = emailAddress + ' | ' + phoneNumber;
}

var careerObjective

function updateObjective() {
    // Get Objective Value
    careerObjective = document.getElementById('objective').value;

    // Add Objective 
    document.getElementById("resumeObjective").innerHTML =
        careerObjective;
}

var resumeSkill
var resumeSkillDesc

function addSkill() {
    resumeSkill = document.getElementById('skillName').value;
    resumeSkillDesc = document.getElementById('skillDescription').value;

    document.getElementById("resumeSkill").innerHTML +=
        '<li>' + '<b>' + resumeSkill + '</b> - ' + resumeSkillDesc + '</li>';
}

var positionName
var positionCompany
var positionStartMonth
var positionStartYear
var positionEndMonth
var positionEndYear
var positionDesc

function addJob() {
    positionName = document.getElementById('jobName').value;
    positionCompany = document.getElementById('jobCompany').value;
    positionStartMonth = document.getElementById('jobStartMonth').value;
    positionStartYear = document.getElementById('jobStartYear').value;
    positionEndMonth = document.getElementById('jobEndMonth').value;
    positionEndYear = document.getElementById('jobEndYear').value;
    positionDesc = document.getElementById('jobDesc').value;

    document.getElementById('resumeJob').innerHTML +=
        '<li>' + '<b>' + positionName + '</b>' + ' (' + positionStartMonth + ' ' + positionStartYear + ' - ' + positionEndMonth + ' ' + positionEndYear + ')' + '<br>' + '<i>' + positionCompany + '</i><br>' + positionDesc + '</li>'
}