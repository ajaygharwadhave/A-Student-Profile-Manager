// STEP 14:FOR SEARCHING THE VALUE FROM THE DATA
// const searchSeatNo = () =>{
//     let searchValue = document.getElementById("searchInput").value.trim();

//     let allStudentCards = document.querySelectorAll(".subSection");


// }


// NOTE:aata jo aapla local storage varcha data ahe tya la aaplya la on Screen aanycha.

const displayLocalstorageData = () => {

    // STEP 6: TAKING REF. OF ID="studDetail" AS AN OUTPUT SECTION.
    let studDetail = document.getElementById("studDetail");

    // STEP:7 GET THE PRESENT LOCALSTORAGE DATA 
    const getDatafromLocalstorage = () => {
        return JSON.parse(localStorage.getItem("studData"));
        // YAAT AAPLA LOCAL STORAGE VAAR CHA DATA YETO
    }

    // STEP 10:REPLACE "studObj" = "allStud"
    let allStud = getDatafromLocalstorage();
    console.log(allStud);


    // STEP 11: SUBSTITUE THIS ENTIRE BELOW CODE IN A "FOR OF LOOP"

    for (let studObj of allStud) {
        // NOW INSIDE THIS A NEW DIV/SECTION WILL BE CREATED USING JS
        let newSection = document.createElement("section");
        // AND NOW DEFINE THE CLASS FOR THE SAME "SECTION"
        newSection.classList.add("subSection");

        newSection.innerHTML = `
            <div class="fullDiv">
            <div class="head">
            <h2 class="sName">Name: ${studObj.Name}</h2>
            <h2 id="seatNo">Seat No:${studObj.SeatNo}</h2>
            </div>
            <div class="marks_body">
            <p>English:${studObj.English}</p>
            <p>Maths:${studObj.Maths}</p>
            <p>Science:${studObj.Science}</p>
            </div>
            </div>
            `;
        studDetail.appendChild(newSection);
    }
}
displayLocalstorageData();

// STEP 15:TAKING THE REFERENCE OF INPUT & FIND BUTTON
let searchValue = document.getElementById("searchValue");
let findBtn = document.getElementById("find_btn");

findBtn.addEventListener("click", () => {
    // STEP:16 INPUTED VALUE JE YETE TILA STORE KARYCHA IN A VARIABLE
    let inputEnter = searchValue.value;
    let allStuddata = JSON.parse(localStorage.getItem("studData"));

    let findValue = allStuddata.find((stud)=>String(inputEnter) === stud.SeatNo);
    if(findValue){
        alert("Student Exists")
    }
    else{
        alert("Student Don't Exists..!")
    }
});

findDatafromPresentdata();