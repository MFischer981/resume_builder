function printPage() {
    window.print();
}

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
    // Get Skill Value
    resumeSkill = document.getElementById('skillName').value;
    resumeSkillDesc = document.getElementById('skillDescription').value;

    // Add Skill
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

    if (document.getElementById('currentJob').checked) {
        document.getElementById('resumeJob').innerHTML +=
            '<li>' + '<b>' + positionName + '</b>' + ' (' + positionStartMonth + ' ' + positionStartYear + ' - ' + 'Present)' + '<br>' + '<i>' + positionCompany + '</i><br>' + positionDesc + '</li>'
    } else {
        document.getElementById('resumeJob').innerHTML +=
            '<li>' + '<b>' + positionName + '</b>' + ' (' + positionStartMonth + ' ' + positionStartYear + ' - ' + positionEndMonth + ' ' + positionEndYear + ')' + '<br>' + '<i>' + positionCompany + '</i><br>' + positionDesc + '</li>'
    }

}

var educationType
var educationField
var educationCollege
var educationGPA
var educationStartMonth
var educationStartYear
var educationEndMonth
var educationEndYear
var educationDesc

function addEducation() {
    educationType = document.getElementById('degreeType').value;
    educationField = document.getElementById('degreeField').value;
    educationCollege = document.getElementById('degreeCollege').value;
    educationGPA = document.getElementById('degreeGPA').value;

    educationStartMonth = document.getElementById('degreeStartMonth').value;
    educationStartYear = document.getElementById('degreeStartYear').value;

    educationEndMonth = document.getElementById('degreeEndMonth').value;
    educationEndYear = document.getElementById('degreeEndYear').value;
    educationDesc = document.getElementById('degreeDesc').value;

    if (document.getElementById('includeGPA').checked) {
        document.getElementById('resumeEducation').innerHTML +=
            '<li><b>' + educationCollege + '</b>' + ' (' + educationStartMonth + ' ' + educationEndYear + ' - ' + educationEndMonth + ' ' + educationEndYear + ')<br>' + educationType + ' ' + educationField + ' (' + educationGPA + ' GPA)<br>' + educationDesc + '</li>'
    } else {
        document.getElementById('resumeEducation').innerHTML +=
            '<li><b>' + educationCollege + '</b>' + ' (' + educationStartMonth + ' ' + educationEndYear + ' - ' + educationEndMonth + ' ' + educationEndYear + ')<br>' + educationType + ' ' + educationField + '<br>' + educationDesc + '</li>';
    }
}

var certifyName
var certifyIssuer
var certifyIssueMonth
var certifyIssueYear
var certifyExpireMonth
var certifyExpireYear

function addCertificate() {
    certifyName = document.getElementById('certificateName').value;
    certifyIssuer = document.getElementById('certificateIssuer').value;
    certifyIssueMonth = document.getElementById('certificateIssueMonth').value;
    certifyIssueYear = document.getElementById('certificateIssueYear').value;
    certifyExpireMonth = document.getElementById('certificateExpireMonth').value;
    certifyExpireYear = document.getElementById('certificateExpireYear').value;

    document.getElementById('resumeCertification').innerHTML +=
        '<li>' + certifyName + ', ' + certifyIssuer + '<br>' + '(' + certifyIssueMonth + ' ' + certifyIssueYear + ' - ' + certifyExpireMonth + ' ' + certifyExpireYear + ')</li>'
}