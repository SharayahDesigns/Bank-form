
//---------------------BUTTON FORMAT ------------------
const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
          form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click",() => form.classList.remove('secActive'));


// ---------------Phone Number Format ------------------

function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g,'');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if(phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6,)}-${phoneNumber.slice(6,9)}`;
}

function phoneNumberFormatter() {
  const inputField = document.getElementById('phone-number');
  const formattedInputValue = formatPhoneNumber(inputField.value);
  inputField.value = formattedInputValue;
}


// -----------Social Security Format----------

function formatSocialNumber(value) {
  if (!value) return value;
  const socialNumber = value.replace(/[^\d]/g,'');
  const socialNumberLength = socialNumber.length;
  if (socialNumberLength < 4) return socialNumber;
  if(socialNumberLength < 7) {
    return `${socialNumber.slice(0,3)}-${socialNumber.slice(3)}`;
  }
  return `${socialNumber.slice(0,3)}-${socialNumber.slice(3,5,)}-${socialNumber.slice(5,8)}`;
}

function socialNumberFormatter() {
  const inputField = document.getElementById('social-number');
  const formattedInputValue2 = formatSocialNumber(inputField.value);
  inputField.value = formattedInputValue2;
}



// ----------------State Formatter----------------------------


const inputE1 = docutment.querySelector("#autocomplete-input");
inputE1.addEventListener("submit",onInputChange);

getStateData();
let stateNames = [];

 function getStateData() {
  
  const states = [
{  name: 'Alaska'},
{  name: 'Texas'},
{  name: 'Alabama'},
{  name: 'Arkansas'},
{  name: 'Arizona'},
{  name: 'California'},
{ name: 'Colorado'},
  ];
  return states.name;
 

}
console.log(getStateData)

function onInputChange() {
console.log(inputE1.value)
}
