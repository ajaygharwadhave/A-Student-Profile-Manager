


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
    let presentData = getDatafromLocalstorage();
    console.log(presentData);


    // STEP 11: SUBSTITUE THIS ENTIRE BELOW CODE IN A "FOR OF LOOP"

    for (let studObj of presentData) {
        // NOW INSIDE THIS A NEW DIV/SECTION WILL BE CREATED USING JS
        let newSection = document.createElement("section");
        // AND NOW DEFINE THE CLASS FOR THE SAME "SECTION"
        newSection.classList.add("subSection");

        newSection.innerHTML = `
        <div class="fullDiv">
            <div class="head">
                <h2 class="sName">Name: ${studObj.Name}</h2>
                <h2 id="seatNo">Seat No:${studObj.SeatNo}</h2>
                <div class="userSub">
                    <p class="marks">English:${studObj.English}</p>
                    <p class="marks">Maths:${studObj.Maths}</p>
                    <p class="marks">Science:${studObj.Science}</p>
                    <p class="marks">Total Marks:${studObj.Total}</p>
                    <p class="marks">Grade:${studObj.Grade}</p>
                    <p class="marks">Percentage:${studObj.Percentage}</p>
                </div>
            </div>
            <button class="deleteBtn" id="delete">DELETE</button>
        </div>

            `;
        studDetail.appendChild(newSection);


        // DELETION
        let deleteBtns = document.querySelectorAll(".deleteBtn");

        deleteBtns.forEach((deleteBtn) => {
            deleteBtn.addEventListener("click", () => {
                if (confirm("Do you really want to delete?")) {
                    // Remove the parent section
                    let updatedData = presentData.filter(stud => stud.SeatNo !== studObj.SeatNo);
                    localStorage.setItem("studData", JSON.stringify(updatedData));

                    studDetail.innerHTML="";
                    displayLocalstorageData();
                }
            });
        });

    }

}
displayLocalstorageData();

// STEP 14:TAKING THE REFERENCE OF INPUT & FIND BUTTON
let searchValue = document.getElementById("searchValue");
let findBtn = document.getElementById("find_btn");

findBtn.addEventListener("click", () => {
    // STEP:15 INPUTED VALUE JE YETE TILA STORE KARYCHA IN A VARIABLE
    let inputEnter = searchValue.value;
    let allStuddata = JSON.parse(localStorage.getItem("studData"));

    let findValue = allStuddata.find((stud) => String(inputEnter) === stud.SeatNo);
    if (findValue) {
        alert("Student Exists")
    }
    else {
        alert("Student Don't Exists..!")
    }
});

findDatafromPresentdata();
