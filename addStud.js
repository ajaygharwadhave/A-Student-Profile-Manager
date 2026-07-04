// STEP:4 AAPN DIRECT BUTTON VARTI CLICK KARAT HOTO TYANE AAPLYA LA DATA THODI NA YENAR AAHE.
// TYA SATHI REFERENCE GHEUN ".addEventListener()" LAVAYCHA.
// AANI TYA CHA AATA AAPLA HA STEP:1 - STEP:3 PURNA PASTE KARYCHI


document.getElementById("submit_bTn").addEventListener("click", () => {
    // Step:1 PHILE REFERENCE GHYA CHA OF INPUTs CHA
    let uName = document.getElementById("uName");
    let seatNo = document.getElementById("seatNo");
    let eNg = document.getElementById("Eng");
    let mAth = document.getElementById("Math");
    let sCi = document.getElementById("Sci");

    // STEP8:NO EMPTY DATA SHOULD BE ACCEPTED AS AN INPUT.
    if (uName.value === "" || seatNo.value === "" || eNg.value === "" || mAth.value === "" || sCi.value === "") {
        alert("PLEASE FILL THE VALID DETAILS");
        return;
    }

    // Step:2 CREATE AN EMPTY OBJECT & THEN ADD VALUE IN IT.
    let studObj = {};
    studObj.Name = uName.value;
    studObj.SeatNo = seatNo.value;
    studObj.English = eNg.value;
    studObj.Maths = mAth.value;
    studObj.Science = sCi.value;

    //STEP:3 DISPLAY THE COLLECTED DATA FOR CROSS CHECKING
    // console.log();

    // Step5 :DEFINE FOR THE LOCAL STORAGE 
    // const addDatatoLocalstorage = () => {
    //     return localStorage.setItem("studData", JSON.stringify(studObj));
    // }
    // STEP4:WE HAVE CALLED WITHOUT DEFINING
    // addDatatoLocalstorage();

    // STEP 9:CREATE AN EMPTY ARRAY 
    let allStud = [];
    let presentData = localStorage.getItem("studData");

    if (presentData !== null) {
        allStud = JSON.parse(presentData);
    }
    // STEP 12:IF THE DATA ALREADY PRESENT ON LOCAL STORAGE.
    let existingStudent = allStud.find((stud) => stud.Name === studObj.Name);
    if (existingStudent) {
        alert("Details Already Exists");
        console.log(existingStudent);
    } else {
        // STEP:13 MOVE BELOW CODE INTO THIS ELSE STATEMENT
        allStud.push(studObj);
        localStorage.setItem("studData", JSON.stringify(allStud));
        console.log(allStud);
        alert("Submitted Successfully..!");
    }
    //  allStud.push(studObj);
    //     localStorage.setItem("studData", JSON.stringify(allStud));
    //     console.log(allStud);
    //     alert("Submitted Successfully..!")
});

// IMPORTANT NOTE:AAPN 2 SEPERATE SEPERATE JAVASCRIPT FILES BANU YAAT. 