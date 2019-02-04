var firstName
var lastName
var streetAddress
var locationCity
var locationState
var zipCode
var emailAddress
var phoneNumber
var careerObjective
var resumeSkill
var resumeSkillDesc

function updateResume() {
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

    // Get Objective Value
    careerObjective = document.getElementById('objective').value;

    // Add Name
    document.getElementById("resumeName").innerHTML = firstName + ' ' + lastName;

    // Add Address
    document.getElementById("resumeAddress").innerHTML = streetAddress + ', ' + locationCity + ', ' + locationState + ', ' + zipCode;

    // Add Contact
    document.getElementById("resumeContact").innerHTML = emailAddress + ' | ' + phoneNumber;

    // Add Objective 
    document.getElementById("resumeObjective").innerHTML =
    careerObjective;
}

function addSkill() {
    resumeSkill = document.getElementById('skillName').value;
    resumeSkillDesc = document.getElementById('skillDescription').value;

    document.getElementById("resumeSkill").innerHTML +=
    '<li>' + '<b>' + resumeSkill + '</b> - ' + resumeSkillDesc + '</li>';
}