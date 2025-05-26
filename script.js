document.getElementById('generatePdfButton').addEventListener('click', generatePDF);

let imageBaseViessmanZEW;
let imageBaseViessmanWEW;
let imageBaseGalmetWEW;
let imageBaseMitsubishiCylinder;
let imageBase56;
let imageBaseForAtlantic;
let imageBaseForToshiba;
let imageBase57;
let imageBase59;
let imageBase61;
let imageBase63;
let imageBase64;
let imageBaseGalmetZEW; 
let imageBaseHeizWEW;
let imageBaseHeizZEW;
let imageBaseHeizDS1;
let imageBaseHeizDS2;
let MitsubishiHydroboxDS1;
let MitsubishiHydroboxDS2;
let MitsubishiZubadanDS1;
let MitsubishiZubadanDS2;
let MitsubishiZubadanDS3;
let MitsubishiCylinderDS1;
let MitsubishiCylinderDS2;
let MitsubishiEcoDS1;
let MitsubishiEcoDS2;
let ViesDS1;
let ViesDS2;
let ViesDS3;
let ViesDS4;
let ViesDS5;
let ViesDS6;
let ViesDS7;
let ViesDS8;
let TSDS1;
let TSDS2;
let TSDS3;
let TSDS4;
let ATLFIRST1;
let ATLFIRST2;
let ATLFIRST3;
let ATLFIRST4;
let ATLSECOND1;
let ATLSECOND2;
let ATLSECOND3;
let ATLSECOND4;
let G2MET1;
let G2MET2;
let G2MET3;
let G2MET4;
let G1MET1;
let G1MET2;
let G1MET3;
let G1MET4;
let meet;
let MitsHR1;
let MitsHR2;
let MitsHR3;
let MitsAP1;
let MitsAP2;
let MitsubishiAPZew;
let MitsubishiHRZew;
let MitsubishiAP;
let MitsubishiHR;
let Lazar1;
let Lazar2;
let LazarDS1;
let LazarDS2;
let LazarDS3;
let LazarDS4;
let LazarDS5;
let LazarDS6;
let RX21DS1;
let RX21DS2;
let RX26DS1;
let RX26DS2;
let RX35DS1;
let RX35DS2;
let RX53DS1;
let RX53DS2;
let R1;
let R2;
let KTS1;
let KTS2;
let KTSDS1;
let KTSDS2;
let KKLUX1;
let KKLUX2;
let KKLUXDS1;
let KKLUXDS2;
let KKLUXDS3;
let KKLUXDS4;  
let KKLUXDS5;
let KKPELLET1;
let KKPELLET2;
let KKPELLETDS;
let KDLX1;
let KDLX2;
let KDLXDS;
let MHP1;
let MHPDS1;
let MHPDS2;
let ATLHB2DS1;
let ATLHB2DS2;
let ATLHB2DS3;
let ATLHB2DS4;
let ATLHB1;
let ATLHB2;
let ATLHBL1;
let ATLHBL2;
let ATLANTICDS1;
let ATLANTICDS2;
let DrSlim1;
let DrSlim2;
let DrSlimds1;
let DrSlimds2;
let DrPlus1;
let DrPlus2;
let DrPlusds1;
let DrPlusds2;
let DrSlimN1;
let DrSlimN2;
let DrSlimNds1;
let DrSlimNds2;
let Nibe12S1;
let Nibe12S2;
let Nibe12DS1;
let Nibe12DS2;
let Midea1;
let Midea2;
let MideaDS1;
let MideaDS2;
let KAISAI1;
let KAISAI2;
let KAISAIDS1;
let KAISAIDS2;
let QMPELL1;
let QMPELL2;
let QMPELLDS1;
let QMPELLDS2;
let PUZCDS1;
let PUZCDS2;




async function loadImageData() {
    const imagesModule = await import('./images.js');

    imageBaseForToshiba = imagesModule.imageBaseForToshiba;
    imageBaseForAtlantic = imagesModule.imageBaseForAtlantic;
    imageBase56 = imagesModule.imageBase56;
    imageBase57 = imagesModule.imageBase57;
    imageBase59 = imagesModule.imageBase59;
    imageBase61 = imagesModule.imageBase61;
    imageBase63 = imagesModule.imageBase63;
    imageBase64 = imagesModule.imageBase64;
    imageBaseMitsubishiCylinder = imagesModule.imageBaseMitsubishiCylinder;
    imageBaseGalmetWEW = imagesModule.imageBaseGalmetWEW;
    imageBaseGalmetZEW = imagesModule.imageBaseGalmetZEW;
    imageBaseHeizWEW = imagesModule.imageBaseHeizWEW;
    imageBaseHeizZEW = imagesModule.imageBaseHeizZEW;
    imageBaseViessmanWEW = imagesModule.imageBaseViessmanWEW;
    imageBaseViessmanZEW = imagesModule.imageBaseViessmanZEW;
    imageBaseHeizDS1 = imagesModule.imageBaseHeizDS1;
    imageBaseHeizDS2 = imagesModule.imageBaseHeizDS2;
    MitsubishiHydroboxDS1 = imagesModule.MitsubishiHydroboxDS1;
    MitsubishiHydroboxDS2 = imagesModule.MitsubishiHydroboxDS2;
    MitsubishiZubadanDS1 = imagesModule.MitsubishiZubadanDS1;
    MitsubishiZubadanDS2 = imagesModule.MitsubishiZubadanDS2;
    MitsubishiZubadanDS3 = imagesModule.MitsubishiZubadanDS3;
    MitsubishiCylinderDS1 = imagesModule.MitsubishiCylinderDS1;
    MitsubishiCylinderDS2 = imagesModule.MitsubishiCylinderDS2;
    MitsubishiEcoDS1 = imagesModule.MitsubishiEcoDS1;
    MitsubishiEcoDS2 = imagesModule.MitsubishiEcoDS2;
    ViesDS1 = imagesModule.ViesDS1;
    ViesDS2 = imagesModule.ViesDS2;
    ViesDS3 = imagesModule.ViesDS3;
    ViesDS4 = imagesModule.ViesDS4;
    ViesDS5 = imagesModule.ViesDS5;
    ViesDS6 = imagesModule.ViesDS6;
    ViesDS7 = imagesModule.ViesDS7;
    ViesDS8 = imagesModule.ViesDS8;
    TSDS1 = imagesModule.TSDS1;
    TSDS2 = imagesModule.TSDS2;
    TSDS3 = imagesModule.TSDS3;
    TSDS4 = imagesModule.TSDS4;
    ATLFIRST1 = imagesModule.ATLFIRST1;
    ATLFIRST2 = imagesModule.ATLFIRST2;
    ATLFIRST3 = imagesModule.ATLFIRST3;
    ATLFIRST4 = imagesModule.ATLFIRST4;
    ATLSECOND1 = imagesModule.ATLSECOND1;
    ATLSECOND2 = imagesModule.ATLSECOND2;
    ATLSECOND3 = imagesModule.ATLSECOND3;
    ATLSECOND4 = imagesModule.ATLSECOND4;
    G2MET1 = imagesModule.G2MET1;
    G2MET2 = imagesModule.G2MET2;
    G2MET3 = imagesModule.G2MET3;
    G2MET4 = imagesModule.G2MET4;
    G1MET1 = imagesModule.G2MET1;
    G1MET2 = imagesModule.G2MET1;
    G1MET3 = imagesModule.G2MET1;
    G1MET4 = imagesModule.G2MET1;
    meet = imagesModule.meet;
    MitsHR1 = imagesModule.MitsHR1;
    MitsHR2 = imagesModule.MitsHR2;
    MitsHR3 = imagesModule.MitsHR3;
    MitsAP1 = imagesModule.MitsAP1;
    MitsAP2 = imagesModule.MitsAP2;
    MitsubishiAPZew = imagesModule.MitsubishiAPZew;
    MitsubishiHRZew = imagesModule.MitsubishiHRZew;
    MitsubishiAP = imagesModule.MitsubishiAP;
    MitsubishiHR = imagesModule.MitsubishiHR;
    LazarDS1 = imagesModule.LazarDS1;
    LazarDS2 = imagesModule.LazarDS2;
    LazarDS3 = imagesModule.LazarDS3;
    LazarDS4 = imagesModule.LazarDS4;
    LazarDS5 = imagesModule.LazarDS5;
    LazarDS6 = imagesModule.LazarDS6;
    Lazar1 = imagesModule.Lazar1;
    Lazar2 = imagesModule.Lazar2;
    RX21DS1 = imagesModule.RX21DS1;
    RX21DS2 = imagesModule.RX21DS2;
    RX26DS1 = imagesModule.RX26DS1;
    RX35DS1 = imagesModule.RX35DS1;
    RX35DS2 = imagesModule.RX35DS2;
    RX53DS1 = imagesModule.RX53DS1;
    RX53DS2 = imagesModule.RX53DS2;
    R1 = imagesModule.R1;
    R2 = imagesModule.R2;
    KTS1 = imagesModule.KTS1;
    KTS2 = imagesModule.KTS2;
    KTSDS1 = imagesModule.KTSDS1;
    KTSDS2 = imagesModule.KTSDS2;
    KKLUX1 = imagesModule.KKLUX1;
    KKLUX2 = imagesModule.KKLUX2;
    KKLUXDS1 = imagesModule.KKLUXDS1;
    KKLUXDS2 = imagesModule.KKLUXDS2;
    KKLUXDS3 = imagesModule.KKLUXDS3;
    KKLUXDS4 = imagesModule.KKLUXDS4;
    KKLUXDS5 = imagesModule.KKLUXDS5;
    KKPELLET1 = imagesModule.KKPELLET1;
     KKPELLET2 = imagesModule.KKPELLET2;
    KKPELLETDS = imagesModule.KKPELLETDS;
    KDLX1 = imagesModule.KDLX1;
    KDLX2 = imagesModule.KDLX2;
    KDLXDS = imagesModule.KDLXDS;
    MHP1 = imagesModule.MHP1;
    MHPDS1 = imagesModule.MHPDS1;
    MHPDS2 = imagesModule.MHPDS2;
    ATLHB2DS1 = imagesModule.ATLHB2DS1;
    ATLHB2DS2 = imagesModule.ATLHB2DS2;
    ATLHB2DS3 = imagesModule.ATLHB2DS3;
    ATLHB2DS4 = imagesModule.ATLHB2DS4;
    ATLHB1 = imagesModule.ATLHB1;
    ATLHB2 = imagesModule.ATLHB2;
    ATLHBL1 = imagesModule.ATLHBL1;
    ATLHBL2 = imagesModule.ATLHBL2;
    ATLANTICDS1 = imagesModule.ATLANTICDS1;
    ATLANTICDS2 = imagesModule.ATLANTICDS2;
    DrSlim1 = imagesModule.DrSlim1;
    DrSlim2 = imagesModule.DrSlim2;
    DrSlimds1 = imagesModule.DrSlimds1;
    DrSlimds2 = imagesModule.DrSlimds2;
    DrPlus1 = imagesModule.DrPlus1;
    DrPlus2 = imagesModule.DrPlus2;
    DrPlusds1 = imagesModule.DrPlusds1;
    DrPlusds2 = imagesModule.DrPlusds2;
    DrSlimN1 = imagesModule.DrSlimN1;
    DrSlimN2 = imagesModule.DrSlimN2;
    DrSlimNds1 = imagesModule.DrSlimNds1;
    DrSlimNds2 = imagesModule.DrSlimNds2;
    Nibe12S1 = imagesModule.Nibe12S1;
    Nibe12S2 = imagesModule.Nibe12S2;
    Nibe12DS1 = imagesModule.Nibe12DS1;
    Nibe12DS2 = imagesModule.Nibe12DS2;
    MideaDS1 = imagesModule.MideaDS1;
    MideaDS2 = imagesModule.MideaDS2;
    Midea1 = imagesModule.Midea1;
    Midea2 = imagesModule.Midea2;
    KAISAI1 = imagesModule.KAISAI1;
    KAISAI2 = imagesModule.KAISAI2;
    KAISAIDS1 = imagesModule.KAISAIDS1;
    KAISAIDS2 = imagesModule.KAISAIDS2;
    QMPELL1 = imagesModule.QMPELL1;
    QMPELL2 = imagesModule.QMPELL2;
    QMPELLDS1 = imagesModule.QMPELLDS1;
    QMPELLDS2 = imagesModule.QMPELLDS2;
    PUZCDS1 =imagesModule.PUZCDS1;
    PUZCDS2 = imagesModule.PUZCDS2;
} 


loadImageData();

function generateOfferNumber() {
    const date = new Date();
    const month = date.getMonth() + 1; // Miesiące są indeksowane od 0
    const year = date.getFullYear();
    let offerNumber = localStorage.getItem('offerNumber');

    if (!offerNumber) {
        offerNumber = 1;
    } else {
        offerNumber = parseInt(offerNumber) + 1;
    }

    localStorage.setItem('offerNumber', offerNumber);
    return `Numer oferty: ${offerNumber}/${month}/${year}`;
}


function getInverterImage(inverterType) {
    switch(inverterType) {
        case "standard":
            return imageFOX2; // Zmienna z obrazem dla standardowego falownika
        case "hybrid":
            return imageHybridInverter; // Zmienna z obrazem dla falownika hybrydowego
    }
}

function getSecondPageBackgroundImageByType(pdfType) {

    var selectedPower = document.getElementById('powerOptions').value;

    if (pdfType === "ATLANTIC-HYDROBOX") {
        if (selectedPower === '6 kW' || selectedPower === '8 kW' || selectedPower === '10 kW') {
            return ATLHBL2; // Zmienna dla mocy 6-10 kW
        } else if (selectedPower === '14 kW' || selectedPower === '15 kW' || selectedPower === '17 kW') {
            return ATLHB2; // Zmienna dla mocy 14-17 kW
        } else {
            return ATLHB2; // Domyślny obraz dla ATLANTIC-HYDROBOX, jeśli power nie jest określone
        }
    }

    switch(pdfType) {
        case "Mitsubishi-cylinder":
            return imageBase61;
        case "Mitsubishi-ecoinverter":
            return imageBase61;
            case "Mitsubishi-ecoinverter-hydrobox":
            return imageBase61;
        case "Mitsubishi-hp":
            return MHP1;
        case "Mitsubishi-hydrobox":
            return imageBase61;
            case "Mitsubishi-hydrobox-PUZ":
            return imageBase61;
            case "Mitsubishi-hydrobox-PUZ-1F":
            return imageBase61;
            case "Mitsubishi-cylinder-PUZ":
            return imageBase61;
            case "Mitsubishi-cylinder-PUZ-1F":
            return imageBase61;
            case "Mitsubishi-hydrobox-1f":
            return imageBase61;
        case "Toshiba 3F":
            return imageBaseForToshiba;
        case "Toshiba 1F":
            return imageBaseForToshiba;
        case "ATLANTIC":
            return imageBase56;
        case "GALMET-PRIMA":
            return imageBaseGalmetZEW;
        case "HEIZTECHNIK":
            return imageBaseHeizZEW;
        case "VIESSMANN":
            return imageBaseViessmanZEW;
        case "MITSUBISHI AY":
            return MitsubishiAPZew;
        case "MITSUBISHI HR":
            return MitsubishiHRZew;   
        case "LAZAR":
            return Lazar2;
            case "KAISAI":
            return KAISAI2;
        case "ROTENSO":
            return R1;
            case "MIDEA":
            return Midea2;
        case "Kotlospaw Slimko Plus":
            return KTS2;
        case "KAMEN-KOMPAKT-LUX":
            return KKLUX2;
        case "KAMEN-PELLET-KOMPAKT":
            return KKPELLET2;
        case "KAMEN-DRX":
            return KDLX2;
            case "DREWKO-HYBRID":
            return DrSlim2;
            case "Kotlospaw drewko plus palnik easy ROT":
                return DrPlus2;
                case "Kotlospaw drewko plus palnik REVO":
                return DrPlus2;
                case "NIBE12":
                return Nibe12S1;
                case "Kotlospaw slimko plus niski":
                    return DrSlimN2;
                    case "QMPELL":
                    return QMPELL2;
                    
        default:
            
            return null; // lub jakiś domyślny obraz, jeśli potrzebujesz
    }
}

function getBackgroundImageByType(pdfType) {

    var selectedPower = document.getElementById('powerOptions').value;

    if (pdfType === "ATLANTIC-HYDROBOX") {
        if (selectedPower === '6 kW' || selectedPower === '8 kW' || selectedPower === '10 kW') {
            return ATLHBL1; // Zmienna dla mocy 6-10 kW
        } else if (selectedPower === '14 kW' || selectedPower === '15 kW' || selectedPower === '17 kW') {
            return ATLHB1; // Zmienna dla mocy 14-17 kW
        } else {
            return ATLHB1; // Domyślny obraz dla ATLANTIC-HYDROBOX, jeśli power nie jest określone
        }
    } else if (pdfType === "Mitsubishi-cylinder") {
        return imageBaseMitsubishiCylinder;
    } else if (pdfType === "Mitsubishi-ecoinverter") {
        return imageBaseMitsubishiCylinder;
    }
    else if (pdfType === "Mitsubishi-ecoinverter-hydrobox") {
        return imageBase64;
    } else if (pdfType === "Mitsubishi-hydrobox") {
        return imageBase64;
    }
    else if (pdfType === "Mitsubishi-hydrobox-PUZ") {
        return imageBase64;
    }
    else if (pdfType === "Mitsubishi-hydrobox-PUZ-1F") {
        return imageBase64;
    }
     else if (pdfType === "Mitsubishi-cylinder-PUZ") {
        return imageBaseMitsubishiCylinder;
    }

else if (pdfType === "Mitsubishi-cylinder-PUZ-1F") {
        return imageBaseMitsubishiCylinder;
    }
    else if (pdfType === "Mitsubishi-hydrobox-1f") {
        return imageBase64;
    } 
    else if (pdfType === "Mitsubishi-hp") {
        return imageBase64;
    } else if (pdfType === "Toshiba 3F") {
        return imageBase57;
    } else if (pdfType === "Toshiba 1F") {
        return imageBase57;
    } else if (pdfType === "ATLANTIC") {
        return imageBaseForAtlantic;
    } else if (pdfType === "GALMET-PRIMA") {
        return imageBaseGalmetWEW;
    } else if (pdfType === "HEIZTECHNIK") {
        return imageBaseHeizWEW;
    } else if (pdfType === "VIESSMANN") {
        return imageBaseViessmanWEW;
    } else if (pdfType === "MITSUBISHI AY") {
        return MitsubishiAP;
    } else if (pdfType === "MITSUBISHI HR") {
        return MitsubishiHR;
    } else if (pdfType === "LAZAR") {
        return Lazar1;
    } else if (pdfType === "KAISAI") {
        return KAISAI1;
    } else if (pdfType === "ROTENSO") {
        return R2;
    } 
    else if (pdfType === "QMPELL") {
        return QMPELL1;
    }else if (pdfType === "Kotlospaw Slimko Plus") {
        return KTS1;
    } else if (pdfType === "KAMEN-KOMPAKT-LUX") {
        return KKLUX1;
    } else if (pdfType === "KAMEN-PELLET-KOMPAKT") {
        return KKPELLET1;
    } else if (pdfType === "KAMEN-DRX") {
        return KDLX1;
        
    } 
    else if (pdfType === "DREWKO-HYBRID") {
        return DrSlim1;
        
    }  else if (pdfType === "MIDEA") {
        return Midea1;
        
    } 
    else if (pdfType === "NIBE12") {
        return Nibe12S2;
        
    } 
    else if (pdfType === "Kotlospaw drewko plus palnik easy ROT") {
        return DrPlus1;
        
    }
    else if (pdfType === "Kotlospaw drewko plus palnik REVO") {
        return DrPlus1;
        
    }
    else if (pdfType === "Kotlospaw slimko plus niski") {
        return DrSlimN1;
        
    }else {
        return null; // lub jakiś domyślny obraz, jeśli potrzebujesz
    }
}



function generatePDF() {
    const tankCapacity = document.getElementById('tankCapacity').value;
    const bufferCapacity = document.getElementById('bufferCapacity').value;
    const offerNumber = generateOfferNumber();
    console.log(offerNumber); 
    const userNamePC = document.getElementById('userNamePC').value;
    const pdfType = document.getElementById('pdfType').value;
    const power = document.getElementById('powerOptions').value; // Pobranie wartości mocy
    const priceInput = document.getElementById("price");
    const pdfPriceValue = priceInput.value;



    const HeizDS1 = `<div id="page" style="background-image: url('${imageBaseHeizDS1}');"></div>`;
    const HeizDS2 = `<div id="page" style="background-image: url('${imageBaseHeizDS2}');"></div>`;
    const MitsHydDS1 = `<div id="page" style="background-image: url('${MitsubishiHydroboxDS1}');"></div>`;
    const MitsHydDS2 = `<div id="page" style="background-image: url('${MitsubishiHydroboxDS2}');"></div>`;
    const MitsZubDS1 = `<div id="page" style="background-image: url('${MitsubishiZubadanDS1}');"></div>`;
    const MitsZubDS2 = `<div id="page" style="background-image: url('${MitsubishiZubadanDS2}');"></div>`;
    const MitsZubDS3 = `<div id="page" style="background-image: url('${MitsubishiZubadanDS3}');"></div>`;
    const MitsCylDS1 = `<div id="page" style="background-image: url('${MitsubishiCylinderDS1}');"></div>`;
    const MitsCylDS2 = `<div id="page" style="background-image: url('${MitsubishiCylinderDS2}');"></div>`;
    const MitsEcoDS1 = `<div id="page" style="background-image: url('${MitsubishiEcoDS1}');"></div>`;
    const MitsEcoDS2 = `<div id="page" style="background-image: url('${MitsubishiEcoDS2}');"></div>`;
    const Vies1 = `<div id="page" style="background-image: url('${ViesDS1}');"></div>`;
    const Vies2 = `<div id="page" style="background-image: url('${ViesDS2}');"></div>`;
    const Vies3 = `<div id="page" style="background-image: url('${ViesDS3}');"></div>`;
    const Vies4 = `<div id="page" style="background-image: url('${ViesDS4}');"></div>`;
    const Vies5 = `<div id="page" style="background-image: url('${ViesDS5}');"></div>`;
    const Vies6 = `<div id="page" style="background-image: url('${ViesDS6}');"></div>`;
    const Vies7 = `<div id="page" style="background-image: url('${ViesDS7}');"></div>`;
    const Vies8 = `<div id="page" style="background-image: url('${ViesDS8}');"></div>`;
    const TOS1 = `<div id="page" style="background-image: url('${TSDS1}');"></div>`;
    const TOS2 = `<div id="page" style="background-image: url('${TSDS2}');"></div>`;
    const TOS3 = `<div id="page" style="background-image: url('${TSDS3}');"></div>`;
    const TOS4 = `<div id="page" style="background-image: url('${TSDS4}');"></div>`;
    const ATLF1 = `<div id="page" style="background-image: url('${ATLFIRST1}');"></div>`;
    const ATLF2 = `<div id="page" style="background-image: url('${ATLFIRST2}');"></div>`;
    const ATLS1 = `<div id="page" style="background-image: url('${ATLSECOND1}');"></div>`;
    const ATLS2 = `<div id="page" style="background-image: url('${ATLSECOND2}');"></div>`;
    const GLF1= `<div id="page" style="background-image: url('${G2MET1}');"></div>`;
    const GLF2= `<div id="page" style="background-image: url('${G2MET2}');"></div>`;
    const GLF3= `<div id="page" style="background-image: url('${G2MET3}');"></div>`;
    const GLF4= `<div id="page" style="background-image: url('${G2MET4}');"></div>`;
    const GLS1= `<div id="page" style="background-image: url('${G1MET1}');"></div>`;
    const GLS2= `<div id="page" style="background-image: url('${G1MET2}');"></div>`;
    const GLS3= `<div id="page" style="background-image: url('${G1MET3}');"></div>`;
    const GLS4= `<div id="page" style="background-image: url('${G1MET4}');"></div>`;
    const MHR1= `<div id="page" style="background-image: url('${MitsHR1}');"></div>`;
    const MHR2= `<div id="page" style="background-image: url('${MitsHR2}');"></div>`;
    const MHR3= `<div id="page" style="background-image: url('${MitsHR3}');"></div>`;
    const MAP1= `<div id="page" style="background-image: url('${MitsAP1}');"></div>`; 
    const MAP2= `<div id="page" style="background-image: url('${MitsAP2}');"></div>`;
    const L1= `<div id="page" style="background-image: url('${LazarDS1}');"></div>`;
    const L2= `<div id="page" style="background-image: url('${LazarDS2}');"></div>`;
    const L3= `<div id="page" style="background-image: url('${LazarDS3}');"></div>`;
    const L4= `<div id="page" style="background-image: url('${LazarDS4}');"></div>`;
    const L5= `<div id="page" style="background-image: url('${LazarDS5}');"></div>`;
    const L6= `<div id="page" style="background-image: url('${LazarDS6}');"></div>`;
    const RX21DS11 = `<div id="page" style="background-image: url('${RX21DS1}');"></div>`;
    const RX21DS12 = `<div id="page" style="background-image: url('${RX21DS2}');"></div>`;
    const RX35DS11 = `<div id="page" style="background-image: url('${RX35DS1}');"></div>`;
    const RX35DS12 = `<div id="page" style="background-image: url('${RX35DS2}');"></div>`; 
    const RX53DS51 = `<div id="page" style="background-image: url('${RX53DS1}');"></div>`;
    const RX53DS52 = `<div id="page" style="background-image: url('${RX53DS2}');"></div>`;
    const K1 = `<div id="page" style="background-image: url('${KTSDS1}');"></div>`;
    const K2 = `<div id="page" style="background-image: url('${KTSDS2}');"></div>`;

    const KMLUX1 = `<div id="page" style="background-image: url('${KKLUXDS1}');"></div>`;
    const KMLUX2 = `<div id="page" style="background-image: url('${KKLUXDS2}');"></div>`;
    const KMLUX3 = `<div id="page" style="background-image: url('${KKLUXDS3}');"></div>`;
    const KMLUX4 = `<div id="page" style="background-image: url('${KKLUXDS4}');"></div>`;
    const KMLUX5 = `<div id="page" style="background-image: url('${KKLUXDS5}');"></div>`;
    
    const KKPELLET = `<div id="page" style="background-image: url('${KKPELLETDS}');"></div>`;
    const KKDRX = `<div id="page" style="background-image: url('${KDLXDS}');"></div>`;

    const HPDS1 = `<div id="page" style="background-image: url('${MHPDS1}');"></div>`;
    const HPDS2 = `<div id="page" style="background-image: url('${MHPDS2}');"></div>`;

    const ATHB1 = `<div id="page" style="background-image: url('${ATLHB2DS1}');"></div>`;
    const ATHB2 = `<div id="page" style="background-image: url('${ATLHB2DS2}');"></div>`;

    const ATLANTICHYDDS1 = `<div id="page" style="background-image: url('${ATLANTICDS1}');"></div>`;
    const ATLANTICHYDDS2 = `<div id="page" style="background-image: url('${ATLANTICDS2}');"></div>`;

    const DR1 = `<div id="page" style="background-image: url('${DrSlimds1}');"></div>`;
    const DR2 = `<div id="page" style="background-image: url('${DrSlimds2}');"></div>`;

    
    const DP1 = `<div id="page" style="background-image: url('${DrPlusds1}');"></div>`;
    const DP2 = `<div id="page" style="background-image: url('${DrPlusds2}');"></div>`;

    const DRN1 = `<div id="page" style="background-image: url('${DrSlimNds1}');"></div>`;

    const DRN2 = `<div id="page" style="background-image: url('${DrSlimNds2}');"></div>`;

    const N12DS1 = `<div id="page" style="background-image: url('${Nibe12DS1}');"></div>`;
    
    const N12DS2 = `<div id="page" style="background-image: url('${Nibe12DS2}');"></div>`;
    
    const MDS1= `<div id="page" style="background-image: url('${MideaDS1}');"></div>`;
    const MDS2= `<div id="page" style="background-image: url('${MideaDS2}');"></div>`;

    const KS1 = `<div id="page" style="background-image: url('${KAISAIDS1}');"></div>`;
    const KS2 = `<div id="page" style="background-image: url('${KAISAIDS2}');"></div>`;

    const Q1 = `<div id="page" style="background-image: url('${QMPELLDS1}');"></div>`;
    const Q2 = `<div id="page" style="background-image: url('${QMPELLDS2}');"></div>`;

    const CDS1 = `<div id="page" style="background-image: url('${PUZCDS1}');"></div>`;
    const CDS2 = `<div id="page" style="background-image: url('${PUZCDS2}');"></div>`;






    let tableHtml = getAdditionalOptionsTable (pdfType, bufferCapacity, tankCapacity);
    let tableContent = getTableContentByType(pdfType, power, bufferCapacity, tankCapacity);
    let backgroundImage = getBackgroundImageByType(pdfType);
    let secondPageBackgroundImage = getSecondPageBackgroundImageByType(pdfType);

    let content = "";


    


    const firstPageContent = `
    <div id="page">
        <div id="top-page" style="background-image: url('${backgroundImage}');">
            <div id="top-top-page">
                <div id="offer-number">${offerNumber}</div>
                <div id="logo">
                <img src="${imageBase63}" width="40%">
                </div>
            </div>
            <div id="top-bottom-page">
            <span id="device-name">${pdfType}</span>
          </div>

        </div>
        <div id="bottom-page">
            <div id="bottom-top-left">
                <span>Przygotowano dla:</span>
            </div>
            <div id="bottom-top-right">
                <span id="userNamePC">${userNamePC}</span>
            </div>
            <div id="bottom-bottom-left">
                <span>Kontakt do opiekuna oferty:</span>
            </div>
            <div id="bottom-bottom-right">
                <span id="number">884 996 055</span>
            </div>
        </div>
    </div>
`;
    const secondPageContent = `
    <div id="page">
    <div id="page-second" style="background-image: url('${secondPageBackgroundImage}');">
            <div id="table">
            ${tableContent}
            </div>
            <div id="price">
                <span>CENA KOŃCOWA INSTALACJI: ${pdfPriceValue} zł</span>
            </div>
    </div>
    </div>
    `;

    const thirdPageContent = `
    <div id="page">
        <div id="page-third">
            <div id="header">
                <h1>Opcje dodatkowe</h1>
            </div>
            <div id="table-container">
                ${tableHtml}
            </div>
            <div id="opcje-dodatkowe">
                <p id="Dodatek">UWAGI: Opcje Dodatkowe nie są wymagane przez Producentów* do pracy instalacji i o ich zasadności każdorazowo należy konsultować się z Opiekunem Handlowym lub Doradcą Technicznym</p>
            </div>
        </div>
    </div>
`;

const MeetUsContent =   
`
<div id = "next" style="background-image: url('${meet}'); background-size:cover; " >
<div id= "page-meet" >
<div id="useful-links">
<h1 id="welcome">
<a href="https://www.google.com/search?q=kaman+instalacje+oze+opinie&oq=kaman+instalacje+OZE+OPINIE&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOdIBCDM2NDFqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x471779eb89052609:0x61dfc57d59116c9,1,,,,"> Znajdź nas na mapie <i class="fas fa-external-link-alt"></i></a>

</h1>
<!-- Tutaj możesz dodać przydatne linki -->
<h2> Przydatne linki </h2>
<a href="https://kaman.eu/dokumenty-do-pobrania/">Dokumenty, które możesz potrzebować <i class="fas fa-external-link-alt"></i></a>
<a href="https://kaman.eu/dotacje/"> Informacje o dofinansowaniach <i class="fas fa-external-link-alt"></i></a>
<a href="https://kaman.eu/opcje-dodatkowe-pc/"> Informacje na temat opcji dodatkowych <i class="fas fa-external-link-alt"></i></a>
<a href="https://kaman.eu/realizacje/"> Nasze realizacje <i class="fas fa-external-link-alt"></i></a>

</div>
<h3 id="meet"> Poznaj nas lepiej </>
<div id="social-media-links">

</br>
<a href="https://www.facebook.com/kamaninstalacjeoze" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
<a href="https://www.instagram.com/kaman.eu/?igshid=YmMyMTA2M2Y%3D" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
<a href="https://www.tiktok.com/@kaman.eu" target="_blank" title="LinkedIn"><i class="fab fa-tiktok"></i></a>
</div>
</div>
</div>
</div>
`;


const FourthPageContent = `
    <div id="page">
        <div id="top-page" style="background-image: url('${imageBase59}');">
    </div>
`;

  //  const content = firstPageContent + secondPageContent + thirdPageContent + FourthPageContent;

  

  if (pdfType === 'HEIZTECHNIK') {
    // Dodaj strony dla magazynu energii
    content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+ HeizDS1 + HeizDS2 + FourthPageContent;
} 
else if (pdfType === 'Mitsubishi-hydrobox') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+MitsHydDS1+MitsHydDS2+MitsZubDS1+MitsZubDS2+MitsZubDS3+FourthPageContent;
}
else if (pdfType === 'Mitsubishi-hydrobox-PUZ') 
    {
        // Dodaj standardowe strony
        content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+MitsHydDS1+MitsHydDS2+MitsZubDS1+MitsZubDS2+MitsZubDS3+FourthPageContent;
    }
    else if (pdfType === 'Mitsubishi-hydrobox-PUZ-1F') 
    {
        // Dodaj standardowe strony
        content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+MitsHydDS1+MitsHydDS2+MitsZubDS1+MitsZubDS2+MitsZubDS3+FourthPageContent;
    }
    else if (pdfType === 'Mitsubishi-cylinder-PUZ') 
    {
        // Dodaj standardowe strony
        content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+CDS1+CDS2+FourthPageContent;
    }
     else if (pdfType === 'Mitsubishi-cylinder-PUZ-1F') 
    {
        // Dodaj standardowe strony
        content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+CDS1+CDS2+FourthPageContent;
    }
else if (pdfType === 'Mitsubishi-hydrobox-1f') 
    {
        // Dodaj standardowe strony
        content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+MitsHydDS1+MitsHydDS2+MitsZubDS1+MitsZubDS2+MitsZubDS3+FourthPageContent;
    }
else if (pdfType === 'LAZAR') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent+ thirdPageContent+L1+L2+L3+L4+L5+L6+MeetUsContent+FourthPageContent;
}

else if (pdfType === 'KAMEN-KOMPAKT-LUX') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent+ thirdPageContent+KMLUX1+KMLUX2+KMLUX3+KMLUX4+KMLUX5+MeetUsContent+FourthPageContent;
}

else if (pdfType === 'KAMEN-PELLET-KOMPAKT') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent+ thirdPageContent+KMLUX1+KMLUX2+KMLUX3+KMLUX4+KKPELLET+MeetUsContent+FourthPageContent;
}
else if (pdfType === 'Kotlospaw drewko plus palnik easy ROT') 
    {
        // Dodaj standardowe strony
        content = firstPageContent + secondPageContent+ thirdPageContent+DP1+DP2+MeetUsContent+FourthPageContent;
    }

    else if (pdfType === 'Kotlospaw drewko plus palnik REVO') 
        {
            // Dodaj standardowe strony
            content = firstPageContent + secondPageContent+ thirdPageContent+DP1+DP2+MeetUsContent+FourthPageContent;
        }
    else if (pdfType === 'Kotlospaw slimko plus niski') 
        {
            // Dodaj standardowe strony
            content = firstPageContent + secondPageContent+ thirdPageContent+DRN1+DRN2+MeetUsContent+FourthPageContent;
        }

else if (pdfType === 'KAMEN-DRX') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent+ thirdPageContent+KMLUX1+KMLUX2+KMLUX3+KMLUX4+KKDRX+MeetUsContent+FourthPageContent;
}
else if (pdfType === 'DREWKO-HYBRID') 
    {
        // Dodaj standardowe strony
        content = firstPageContent + secondPageContent+ thirdPageContent+DR1+DR2+MeetUsContent+FourthPageContent;
    }
    else if (pdfType === 'QMPELL') 
        {
            // Dodaj standardowe strony
            content = firstPageContent + secondPageContent+ thirdPageContent+Q1+Q2+MeetUsContent+FourthPageContent;
        }

    else if (pdfType === 'NIBE12') 
        {
            // Dodaj standardowe strony
            content = firstPageContent + secondPageContent+ thirdPageContent+N12DS1+N12DS2+MeetUsContent+FourthPageContent;
        }
        else if (pdfType === 'KAISAI') 
            {
                // Dodaj standardowe strony
                content = firstPageContent + secondPageContent+ thirdPageContent+KS1+KS2+MeetUsContent+FourthPageContent;
            }
        else if (pdfType === 'MIDEA') 
            {
                // Dodaj standardowe strony
                content = firstPageContent + secondPageContent+ thirdPageContent+MDS1+MDS2+MeetUsContent+FourthPageContent;
            }

else if (pdfType === 'ATLANTIC') {
    var selectedPower = document.getElementById('powerOptions').value;
    
    if (selectedPower === '15 kW', '17 kW') {
      content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent + ATLS1+ ATLS2+ FourthPageContent;
    } else if (selectedPower === '10 kW' || selectedPower === '8 kW' || selectedPower === '6 kW') {
      content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+ATLF1+ ATLF2+ FourthPageContent;
    } 
    // Dodaj więcej warunków dla innych mocy
    // ...
  }

    
 else if (pdfType === 'ATLANTIC-HYDROBOX') {
    var selectedPower = document.getElementById('powerOptions').value;
    
    if (selectedPower === '14 kW' || selectedPower === '15 kW' || selectedPower === '17 kW') {
        content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent + ATHB1 + ATHB2 + FourthPageContent;
    } else if (selectedPower === '10 kW' || selectedPower === '8 kW' || selectedPower === '6 kW') {
        content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent + ATLANTICHYDDS1 + ATLANTICHYDDS2 + FourthPageContent;
    }
}

  else if (pdfType === 'ROTENSO') {
    var selectedPower = document.getElementById('powerOptions').value;
    
    if (selectedPower === '2,1 kW' || selectedPower === '2,6 kW') {
      content = firstPageContent + secondPageContent  + MeetUsContent + RX21DS11+ RX21DS12+ FourthPageContent;
    } else if (selectedPower === '3,5 kW') {
      content = firstPageContent + secondPageContent  + MeetUsContent+RX35DS11+ RX35DS12+ FourthPageContent;
    } 
    else if (selectedPower === '5,3 kW') {
        content = firstPageContent + secondPageContent  + MeetUsContent+RX53DS51+ RX53DS52+ FourthPageContent;
      } 
    // Dodaj więcej warunków dla innych mocy
    // ...
  }

  else if (pdfType === 'GALMET-PRIMA') {
    var selectedPower = document.getElementById('powerOptions').value;
    
    if (selectedPower === '12 kW') {
      content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+ GLF4+ GLF3+ GLF2+ GLF1+ FourthPageContent;
    } else if (selectedPower === '10 kW' || selectedPower === '8 kW' || selectedPower === '6 kW') {
      content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+GLS1+ GLS2+GLS3+GLS4+FourthPageContent;
    } 
    // Dodaj więcej warunków dla innych mocy
    // ...
  }

  else if (pdfType === 'MITSUBISHI HR') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent + MHR1+ MHR2+ MHR3+MeetUsContent+FourthPageContent;
}
else if (pdfType === 'Kotlospaw Slimko Plus') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent +thirdPageContent+ K2+K1+MeetUsContent+FourthPageContent;
}
else if (pdfType === 'MITSUBISHI AY') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent + MAP1+MAP2+MeetUsContent+FourthPageContent;
  
}

else if (pdfType === 'Mitsubishi-cylinder') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+ MitsCylDS1+MitsCylDS2+MitsZubDS1+MitsZubDS2+MitsZubDS3+FourthPageContent;
}

else if (pdfType === 'VIESSMANN') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+ Vies1+Vies2+Vies3+Vies4+Vies5+Vies6+Vies7+Vies8+FourthPageContent;
}
else if (pdfType === 'Toshiba 3F') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+ TOS1 + TOS2 + TOS3 + TOS4 + FourthPageContent;
}
else if (pdfType === 'Toshiba 1F') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+TOS1 + TOS2 + TOS3 + TOS4 + FourthPageContent;
}

else if (pdfType === 'Mitsubishi-ecoinverter') 
{
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+MitsEcoDS1+MitsEcoDS2+MitsZubDS1+MitsZubDS2+MitsZubDS3+FourthPageContent;
}
else if (pdfType === 'Mitsubishi-ecoinverter-hydrobox') 
    {
        // Dodaj standardowe strony
        content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+MitsEcoDS1+MitsEcoDS2+MitsZubDS1+MitsZubDS2+MitsZubDS3+FourthPageContent;
    }
else if (pdfType === 'Mitsubishi-hp') 
    {
        // Dodaj standardowe strony
        content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+HPDS1+HPDS2+FourthPageContent;
    }
    

else {
    // Dodaj standardowe strony
    content = firstPageContent + secondPageContent + thirdPageContent + MeetUsContent+ FourthPageContent;
}

    const opt = {
        margin: 0,
        filename: `${userNamePC}_Oferta.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(content).set(opt).save();
}

function getTableContentByType(pdfType, power, bufferCapacity, tankCapacity) {

    let tableContent = '';
    let bufferRow = '';
    let tankRow= '';
    
    //Bufor
    if(bufferCapacity === 'none'){
        bufferRow = ` 
            
            <td>Brak bufora</td>
            <td>szt.</td>
            <td>0</td>
        `;
    } 
    else if (bufferCapacity === 'sprzeglo') {
        bufferRow = `
            <td>Sprzęgło hydrauliczne</td>
            <td>szt.</td>
            <td>1</td>
        `;
        
    }
    else {
        bufferRow = `
            <td>Bufor (sprzęgło hydrauliczne) ${bufferCapacity}l + osprzęt</td>
            <td>szt.</td>
            <td>1</td>
        `;
    }

    //CWU
    if(tankCapacity === 'none'){
        tankRow = ` 
            <td>Brak zasobnika ciepłej wody użytkowej</td>
            <td>szt.</td>
            <td>0</td>
        `;
    } else if ( tankCapacity === '200-L') {
        tankRow = `
            <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ ${tankCapacity} ZE STALI NIERDZEWNEJ</td>
            <td>szt.</td>
            <td>1</td>
        `;
    }
        else if ( tankCapacity === '250-L') {
            tankRow = `
                <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ ${tankCapacity} ZE STALI NIERDZEWNEJ</td>
                <td>szt.</td>
                <td>1</td>
            `;
    } 
    else if ( tankCapacity === '300-L') {
        tankRow = `
            <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ ${tankCapacity} ZE STALI NIERDZEWNEJ</td>
            <td>szt.</td>
            <td>1</td>
        `;
}
    else {
        tankRow = `
            <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ ${tankCapacity}L</td>
            <td>szt.</td>
            <td>1</td>
        `;
    }
    

    switch(pdfType) {

        case "Mitsubishi-ecoinverter":
        if (power === '8 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
      <tr>
      <th>Numer</th>
      <th>Nazwa towaru</th>
      <th>Miara</th>
      <th>Ilość</th>
  </tr>
  <tr>
      <td>1</td>
      <td>JEDNOSTKA WEWNĘTRZNA EHSD-YM9D</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>JEDNOSTKA ZEWNĘTRZNA SUZ-SWM80VA</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>3</td>
      ${tankRow}
  </tr>
  <tr>
        <td>4</td>
        ${bufferRow}
    </tr>;
  <tr>
      <td>5</td>
      <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>6</td>
      <td>Grupa bezpieczeństwa CWU (6bar)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>7</td>
      <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>8</td>
      <td>Pompa obiegowa do instalacji grzewczej LFP ( z osprzętem )</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>9</td>
      <td>MIEDŹ CHŁODNICZA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>10</td>
      <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>11</td>
      <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>12</td>
      <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
      </tbody>
  </table>
  `;
  break;




  







        }
        else if (power === '6 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
      <tr>
      <th>Numer</th>
      <th>Nazwa towaru</th>
      <th>Miara</th>
      <th>Ilość</th>
  </tr>
  <tr>
      <td>1</td>
      <td>JEDNOSTKA WEWNĘTRZNA EHSD-YM9D</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>JEDNOSTKA ZEWNĘTRZNA SUZ-SWM60VA</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>3</td>
      ${tankRow}
  </tr>
  <tr>
        <td>4</td>
        ${bufferRow}
    </tr>;
  <tr>
      <td>5</td>
      <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>6</td>
      <td>Grupa bezpieczeństwa CWU (6bar)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>7</td>
      <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>8</td>
      <td>Pompa obiegowa do instalacji grzewczej LFP ( z osprzętem )</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>9</td>
      <td>MIEDŹ CHŁODNICZA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>10</td>
      <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>11</td>
      <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>12</td>
      <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  
      </tbody>
  </table>
  `};
  break;

  case "Mitsubishi-ecoinverter-hydrobox":
        if (power === '8 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
      <tr>
      <th>Numer</th>
      <th>Nazwa towaru</th>
      <th>Miara</th>
      <th>Ilość</th>
  </tr>
  <tr>
      <td>1</td>
      <td>JEDNOSTKA WEWNĘTRZNA EHSD-YM9D</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>JEDNOSTKA ZEWNĘTRZNA SUZ-SWM80VA</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
        <td>3</td>
        ${bufferRow}
    </tr>;
     <tr>
        <td>4</td>
        ${tankRow}
    </tr>;
  <tr>
  
      <td>5</td>
      <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>6</td>
      <td>Grupa bezpieczeństwa CWU (6bar)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>7</td>
      <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>8</td>
      <td>Pompa obiegowa do instalacji grzewczej LFP ( z osprzętem )</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>9</td>
      <td>MIEDŹ CHŁODNICZA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>10</td>
      <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>11</td>
      <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>12</td>
      <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  
      </tbody>
  </table>
  `;
  break;




  







        }
        else if (power === '6 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
      <tr>
      <th>Numer</th>
      <th>Nazwa towaru</th>
      <th>Miara</th>
      <th>Ilość</th>
  </tr>
  <tr>
      <td>1</td>
      <td>JEDNOSTKA WEWNĘTRZNA EHSD-YM9D</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>JEDNOSTKA ZEWNĘTRZNA SUZ-SWM60VA</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
 
  <tr>
        <td>3</td>
        ${bufferRow}
    </tr>;
  <tr>
  <tr>
        <td>4</td>
        ${tankRow}
    </tr>;
 <tr>
  
      <td>5</td>
      <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>6</td>
      <td>Grupa bezpieczeństwa CWU (6bar)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>7</td>
      <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>8</td>
      <td>Pompa obiegowa do instalacji grzewczej LFP ( z osprzętem )</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>9</td>
      <td>MIEDŹ CHŁODNICZA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>10</td>
      <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>11</td>
      <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>12</td>
      <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
  
      </tbody>
  </table>
  `};
  break;





  case "MIDEA":
    if (power === '12 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>JEDNOSTKA WEWNĘTRZNA MIDEA M-THERMAL SPLIT 12 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  <td>JEDNOSTKA ZEWNĘTRZNA M-THERMAL SPLIT</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>3</td>
  ${tankRow}
</tr>
<tr>
    <td>4</td>
    ${bufferRow}
</tr>;
<tr>
  <td>5</td>
  <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>Grupa bezpieczeństwa CWU (6bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>Pompa obiegowa do instalacji grzewczej ( z osprzętem )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>9</td>
  <td>MIEDŹ CHŁODNICZA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>10</td>
  <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>11</td>
  <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
  </tbody>
</table>
`;
break;










    }

    else if (power === '8 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
  <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>JEDNOSTKA WEWNĘTRZNA MIDEA M-THERMAL SPLIT 8 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  <td>JEDNOSTKA ZEWNĘTRZNA M-THERMAL SPLIT</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>3</td>
  ${tankRow}
</tr>
<tr>
    <td>4</td>
    ${bufferRow}
</tr>;
<tr>
  <td>5</td>
  <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>Grupa bezpieczeństwa CWU (6bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>Pompa obiegowa do instalacji grzewczej ( z osprzętem )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>9</td>
  <td>MIEDŹ CHŁODNICZA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>10</td>
  <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>11</td>
  <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
  </tbody>
 
  </table>
  `;
  break;
    }
    else if (power === '10 kW') {
      tableContent = `
  <table id="customTable" border="1">
    <tbody>
  <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>JEDNOSTKA WEWNĘTRZNA MIDEA M-THERMAL SPLIT 10 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  <td>JEDNOSTKA ZEWNĘTRZNA M-THERMAL SPLIT</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>3</td>
  ${tankRow}
</tr>
<tr>
    <td>4</td>
    ${bufferRow}
</tr>;
<tr>
  <td>5</td>
  <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>Grupa bezpieczeństwa CWU (6bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>Pompa obiegowa do instalacji grzewczej ( z osprzętem )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>9</td>
  <td>MIEDŹ CHŁODNICZA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>10</td>
  <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>11</td>
  <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
  </tbody>
</table>
`}

;
break;



case "KAISAI":
    if (power === '12 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>JEDNOSTKA WEWNĘTRZNA KAISAI ARCTIC SPLIT 10 KW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  <td>JEDNOSTKA ZEWNĘTRZNA KAISAI ARCTIC SPLIT 10 KW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>3</td>
  ${tankRow}
</tr>
<tr>
    <td>4</td>
    ${bufferRow}
</tr>;
<tr>
  <td>5</td>
  <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>Grupa bezpieczeństwa CWU (6bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>Pompa obiegowa do instalacji grzewczej ( z osprzętem )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>9</td>
  <td>MIEDŹ CHŁODNICZA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>10</td>
  <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>11</td>
  <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
  </tbody>
</table>
`;
break;










    }

    else if (power === '10 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
  <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>JEDNOSTKA WEWNĘTRZNA KAISAI ARCTIC SPLIT 10 KW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  <td>JEDNOSTKA ZEWNĘTRZNA KAISAI ARCTIC SPLIT 10 KW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>3</td>
  ${tankRow}
</tr>
<tr>
    <td>4</td>
    ${bufferRow}
</tr>;
<tr>
  <td>5</td>
  <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>Grupa bezpieczeństwa CWU (6bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>Pompa obiegowa do instalacji grzewczej ( z osprzętem )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>9</td>
  <td>MIEDŹ CHŁODNICZA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>10</td>
  <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>11</td>
  <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
  </tbody>
 
  </table>
  `;
  break;
    }

;
break;



  case "Mitsubishi-hp":
    if (power === '6 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>JEDNOSTKA WEWNĘTRZNA MITSUBISHI SUZ HYPER HEATING 6 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  <td>JEDNOSTKA ZEWWEWNĘTRZNA MITSUBISHI SUZ HYPER HEATING 6 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>3</td>
  ${tankRow}
</tr>
<tr>
    <td>4</td>
    ${bufferRow}
</tr>;
<tr>
  <td>5</td>
  <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>Grupa bezpieczeństwa CWU (6bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>Pompa obiegowa do instalacji grzewczej LFP ( z osprzętem )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>9</td>
  <td>MIEDŹ CHŁODNICZA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>10</td>
  <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>11</td>
  <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>12</td>
  <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
  </tbody>
</table>
`;
break;


    }
    else if (power === '4 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
    <th>Numer</th>
    <th>Nazwa towaru</th>
    <th>Miara</th>
    <th>Ilość</th>
  </tr>
  <tr>
    <td>1</td>
    <td>JEDNOSTKA WEWNĘTRZNA MITSUBISHI SUZ HYPER HEATING 4 kW</td>
    <td>szt.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>JEDNOSTKA ZEWWEWNĘTRZNA MITSUBISHI SUZ HYPER HEATING 4 kW</td>
    <td>szt.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    ${tankRow}
  </tr>
  <tr>
      <td>4</td>
      ${bufferRow}
  </tr>;
  <tr>
    <td>5</td>
    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
    <td>kpl.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Grupa bezpieczeństwa CWU (6bar)</td>
    <td>szt.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Grupa bezpieczeństwa C.0 (2.5 bar)</td>
    <td>szt.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Pompa obiegowa do instalacji grzewczej LFP ( z osprzętem )</td>
    <td>szt.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>9</td>
    <td>MIEDŹ CHŁODNICZA</td>
    <td>kpl.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>10</td>
    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
    <td>szt.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>11</td>
    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
    <td>szt.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>12</td>
    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
    <td>kpl.</td>
    <td>1</td>
  </tr>
    </tbody>
  </table>
  `;
  break;
  
  
      }

  case "KAMEN-KOMPAKT-LUX":


  if (power === '20 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towarVu</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC PELLETOWY KAMEN KOMPAKT LUX 20 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }



  else if (power === '17 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC PELLETOWY KAMEN KOMPAKT LUX 17 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }


  else if (power === '12 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC PELLETOWY KAMEN KOMPAKT LUX 12 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }



  case "QMPELL":


  if (power === '8 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towarVu</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC PELLETOWY QMPELL EVO 8 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }



  else if (power === '12 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC PELLETOWY QMPELL EVO 12 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }


  else if (power === '18 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC PELLETOWY QMPELL EVO 18 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }

















  case "KAMEN-DRX":


  if (power === '20 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towarVu</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC KAMEN DRX 20 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }



  else if (power === '15 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC KAMEN DRX 15 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }


  else if (power === '11 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC KAMEN DRX 11 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }




  case "KAMEN-PELLET-KOMPAKT":


  if (power === '50 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towarVu</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC PELLETOWY KAMEN PELLET KOMPAKT 50 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }



  else if (power === '25 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC PELLETOWY KAMEN PELLET KOMPAKT 25 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }


  else if (power === '20 kW') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC PELLETOWY KAMEN PELLET KOMPAKT 20 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
  }


















  case "Kotlospaw Slimko Plus":


    if (power === '25 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS 25 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }



    else if (power === '20 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS  20 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;

    </tbody>
</table>
`;
break;
    }


    else if (power === '16 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS  16 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }



    else if (power === '12 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS 12 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;

}



else if (power === '8 kW') {
    tableContent = `
<table id="customTable" border="1">
<tbody>
<tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS 8 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
${tankRow}
</tr>
<tr>
<td>3</td>
<td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
<td>kpl.</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>PODŁĄCZENIE KOMINOWE</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>REGULATOR BEZPRZEWODOWY</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
    <td>9</td>
    ${bufferRow}
</tr>;
</tbody>
</table>
`;
break;

    }





    case "DREWKO-HYBRID":


    if (power === '24 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW DREWKO HYBRID 24 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }



    else if (power === '18 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW DREWKO HYBRID 18 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;

    </tbody>
</table>
`;
break;
    }


    else if (power === '12 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW DREWKO HYBRID 12 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }













    case "Kotlospaw slimko plus niski":


    if (power === '35 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS NISKI 35 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }



    else if (power === '30 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS NISKI 30 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;

    </tbody>
</table>
`;
break;
    }


    else if (power === '12 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS NISKI 12 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }

    else if (power === '25 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS NISKI 25 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }

    else if (power === '20 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS NISKI 20 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }

    else if (power === '16 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS NISKI 16 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }

    else if (power === '8 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW SLIMKO PLUS NISKI 8 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }

    case "Kotlospaw drewko plus palnik easy ROT":


    if (power === '24 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW DREWKO PLUS 24 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }



    else if (power === '18 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW DREWKO PLUS 18 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;

    </tbody>
</table>
`;
break;
    }


    else if (power === '12 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW DREWKO PLUS 12 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }



    case "Kotlospaw drewko plus palnik REVO":


    if (power === '24 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW DREWKO PLUS 24 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }



    else if (power === '18 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW DREWKO PLUS 18 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;

    </tbody>
</table>
`;
break;
    }


    else if (power === '12 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>PIEC PELLETOWY KOTŁOSPAW DREWKO PLUS 12 kW</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }












  case "LAZAR":
    if (power === '11 kW/150') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>LAZAR 11 kW/150L</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`;
break;
    }


    else if (power === '22 kW/150') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>LAZAR 22 kW/150L</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }


    else if (power === '22 kW/240') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>LAZAR 22 kW/240L</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }



    else if (power === '22 kW/440') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>LAZAR 22 kW/440L</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }


    else if (power === '15 kW/150') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>LAZAR 15 kW/150L</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }



    else if (power === '15 kW/240') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>LAZAR 15 kW/240L</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
    }

else if (power === '15 kW/440') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>LAZAR 15 kW/440L</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;

}
    else if (power === '11 kW/440') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>LAZAR 11 kW/440L</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
    </tbody>
</table>
`;
break;
      } 
    else if (power === '11 kW/240') {
      tableContent = `
  <table id="customTable" border="1">
  <tbody>
  <tr>
  <th>Numer</th>
  <th>Nazwa towaru</th>
  <th>Miara</th>
  <th>Ilość</th>
</tr>
<tr>
  <td>1</td>
  <td>LAZAR 11 kW/240L</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>2</td>
  ${tankRow}
</tr>
<tr>
  <td>3</td>
  <td>ELEMENTY PODŁĄCZENIOWE HYDRAULICZNE ORAZ ELEKTRYCZNE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>GRUPA BEZPIECZEŃSTWA CWU ( 6 BAR )</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5</td>
  <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 BAR )</td>
  <td>kpl.</td>
  <td>1</td>
</tr>
<tr>
  <td>6</td>
  <td>PODŁĄCZENIE KOMINOWE</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>7</td>
  <td>REGULATOR BEZPRZEWODOWY</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>8</td>
  <td>MONTAŻ, DOJAZD, URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWANIA</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
        <td>9</td>
        ${bufferRow}
    </tr>;
  </tbody>
</table>
`};
break;












  case "Mitsubishi AP":
        if (power === '4,2 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
      <tr>
      <th>Numer</th>
      <th>Nazwa towaru</th>
      <th>Miara</th>
      <th>Ilość</th>
  </tr>
  <tr>
      <td>1</td>
      <td>JEDNOSTKA WEWNĘTRZNA EHSD-YM9D</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>JEDNOSTKA ZEWNĘTRZNA SUZ-SWM60VA</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>3</td>
      ${tankRow}
  </tr>
  <tr>
      <td>4</td>
      ${bufferRow}
  </tr>
      </tbody>
  </table>
  `;
  break;
        }
        else if (power === '3,5 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
      <tr>
      <th>Numer</th>
      <th>Nazwa towaru</th>
      <th>Miara</th>
      <th>Ilość</th>
  </tr>
  <tr>
      <td>1</td>
      <td>JEDNOSTKA WEWNĘTRZNA EHSD-YM9D</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>JEDNOSTKA ZEWNĘTRZNA SUZ-SWM60VA</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>3</td>
      ${tankRow}
  </tr>
  <tr>
      <td>4</td>
      ${bufferRow}
  </tr>
      </tbody>
  </table>
  `};
  break;
        

        case "Toshiba 1F":
        if (power === '11 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 11 KW 1F 1101HRW-E 1101XWH**W-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 11 KW 1101HRW-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              ${tankRow}
          </tr>
          <tr>
              <td>4</td>
              ${bufferRow}
          </tr>
          <tr>
              <td>5</td>
              <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Grupa bezpieczeństwa CWU (6bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>MIEDŹ CHŁODNICZA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>9</td>
              <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>10</td>
              <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        }
        else if (power === '8 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 8 KW 1F 1101HRW-E 1101XWH**W-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 8 KW 1101HRW-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              ${tankRow}
          </tr>
          <tr>
              <td>4</td>
              ${bufferRow}
          </tr>
          <tr>
              <td>5</td>
              <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Grupa bezpieczeństwa CWU (6bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>MIEDŹ CHŁODNICZA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>9</td>
              <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>10</td>
              <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        } 
        else if (power === '8 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 8 KW 1F 1101HRW-E 1101XWH**W-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 8 KW 1101HRW-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              ${tankRow}
          </tr>
          <tr>
              <td>4</td>
              ${bufferRow}
          </tr>
          <tr>
              <td>5</td>
              <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Grupa bezpieczeństwa CWU (6bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>MIEDŹ CHŁODNICZA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>9</td>
              <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>10</td>
              <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        } else if (power === '6 kW') {
    tableContent = `
<table id="customTable" border="1">
<tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 6 KW 1F 1101HRW-E 1101XWH**W-E</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 6 KW 1101HRW-E</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>3</td>
        ${tankRow}
    </tr>
    <tr>
        <td>4</td>
        ${bufferRow}
    </tr>
    <tr>
        <td>5</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>7</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`};
break;

case "MITSUBISHI AY":
        if (power === '4,2 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi AY 4,2 kW</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi AY 4,2 kW</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              <td> Miedź chłodnicza </td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>4</td>
              <td> Elementy podłączeniowe </td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>5</td>
              <td> Montaż i uruchomienie systemu </td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        } 
        else if (power === '3,5 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
        <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td> Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi AY 3,5 kW</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi AY 3,5 kW</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>3</td>
        <td> Miedź chłodnicza </td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td> Elementy podłączeniowe </td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>5</td>
        <td> Montaż i uruchomienie systemu </td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
        </tbody>
    </table>
    `;
    break;
          } 
        
        else if (power === '2,5 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
      <tr>
      <th>Numer</th>
      <th>Nazwa towaru</th>
      <th>Miara</th>
      <th>Ilość</th>
  </tr>
  <tr>
      <td>1</td>
      <td> Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi AY 2,5 kW</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi AY 2,5 kW</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>3</td>
      <td> Miedź chłodnicza </td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>4</td>
      <td> Elementy podłączeniowe </td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>5</td>
      <td> Montaż i uruchomienie systemu </td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
      </tbody>
  </table>
  `;
  break;
        } else if (power === '2 kW') {
    tableContent = `
<table id="customTable" border="1">
<tbody>
<tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td> Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi AY 2 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi AY 2 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>3</td>
<td> Miedź chłodnicza </td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td> Elementy podłączeniowe </td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td> Montaż i uruchomienie systemu </td>
<td>kpl.</td>
<td>1</td>
</tr>
</tbody>
</table>
`};
break;



case "ROTENSO":
        if (power === '5,3 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> Klimatyzator pokojowy jednostka wewnętrzna ROTENSO  5,3 kW</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Klimatyzator pokojowy jednostka wewnętrzna ROTENSO 5,3 kW</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              <td> Miedź chłodnicza </td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>4</td>
              <td> Elementy podłączeniowe </td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>5</td>
              <td> Montaż i uruchomienie systemu </td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        } 
        else if (power === '3,5 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
        <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td> Klimatyzator pokojowy jednostka wewnętrzna ROTENSO 3,5 kW</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Klimatyzator pokojowy jednostka wewnętrzna ROTENSO 3,5 kW</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>3</td>
        <td> Miedź chłodnicza </td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td> Elementy podłączeniowe </td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>5</td>
        <td> Montaż i uruchomienie systemu </td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
        </tbody>
    </table>
    `;
    break;
          } 
        
        else if (power === '2,6 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
      <tr>
      <th>Numer</th>
      <th>Nazwa towaru</th>
      <th>Miara</th>
      <th>Ilość</th>
  </tr>
  <tr>
      <td>1</td>
      <td> Klimatyzator pokojowy jednostka wewnętrzna ROTENSO 2,6 kW</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Klimatyzator pokojowy jednostka wewnętrzna ROTENSO 2,6 kW</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>3</td>
      <td> Miedź chłodnicza </td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>4</td>
      <td> Elementy podłączeniowe </td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>5</td>
      <td> Montaż i uruchomienie systemu </td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
      </tbody>
  </table>
  `;
  break;
        } else if (power === '2,1 kW') {
    tableContent = `
<table id="customTable" border="1">
<tbody>
<tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td> Klimatyzator pokojowy jednostka wewnętrzna ROTENSO 2,1 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>Klimatyzator pokojowy jednostka wewnętrzna ROTENSO 2,1 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>3</td>
<td> Miedź chłodnicza </td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td> Elementy podłączeniowe </td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td> Montaż i uruchomienie systemu </td>
<td>kpl.</td>
<td>1</td>
</tr>
</tbody>
</table>
`};
break;





























case "MITSUBISHI HR":
        if (power === '4,2 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi HR 4,2 kW</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi HR 4,2 kW</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              <td> Miedź chłodnicza </td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>4</td>
              <td> Elementy podłączeniowe </td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>5</td>
              <td> Montaż i uruchomienie systemu </td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        } 
        else if (power === '3,5 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
        <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td> Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi HR 3,5 kW</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi HR 3,5 kW</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>3</td>
        <td> Miedź chłodnicza </td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td> Elementy podłączeniowe </td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>5</td>
        <td> Montaż i uruchomienie systemu </td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
        </tbody>
    </table>
    `;
    break;
          } 
        
        else if (power === '2,5 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
      <tr>
      <th>Numer</th>
      <th>Nazwa towaru</th>
      <th>Miara</th>
      <th>Ilość</th>
  </tr>
  <tr>
      <td>1</td>
      <td> Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi HR 2,5 kW</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi HR 2,5 kW</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>3</td>
      <td> Miedź chłodnicza </td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>4</td>
      <td> Elementy podłączeniowe </td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>5</td>
      <td> Montaż i uruchomienie systemu </td>
      <td>kpl.</td>
      <td>1</td>
  </tr>
      </tbody>
  </table>
  `;
  break;
        } else if (power === '2 kW') {
    tableContent = `
<table id="customTable" border="1">
<tbody>
<tr>
<th>Numer</th>
<th>Nazwa towaru</th>
<th>Miara</th>
<th>Ilość</th>
</tr>
<tr>
<td>1</td>
<td> Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi HR 2 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>Klimatyzator pokojowy jednostka wewnętrzna Mitsubishi HR 2 kW</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>3</td>
<td> Miedź chłodnicza </td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td> Elementy podłączeniowe </td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td> Montaż i uruchomienie systemu </td>
<td>kpl.</td>
<td>1</td>
</tr>
</tbody>
</table>
`};
break;


case "Toshiba 3F":
        if (power === '11 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 11 KW 3F 1101HRW-E 1101XWH**W-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 11 KW 1101HRW-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              ${tankRow}
          </tr>
          <tr>
              <td>4</td>
              ${bufferRow}
          </tr>
          <tr>
              <td>5</td>
              <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Grupa bezpieczeństwa CWU (6bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>MIEDŹ CHŁODNICZA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>9</td>
              <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>10</td>
              <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        } 
        else if (power === '14 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
            <tr>
                <th>Numer</th>
                <th>Nazwa towaru</th>
                <th>Miara</th>
                <th>Ilość</th>
            </tr>
            <tr>
                <td>1</td>
                <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 14 KW 3F 1101HRW-E 1101XWH**W-E</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>s
                <td>2</td>
                <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 14 KW 1101HRW-E</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>3</td>
                ${tankRow}
            </tr>
            <tr>
                <td>4</td>
                ${bufferRow}
            </tr>
            <tr>
                <td>5</td>
                <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                <td>kpl.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Grupa bezpieczeństwa CWU (6bar)</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>7</td>
                <td>MIEDŹ CHŁODNICZA</td>
                <td>kpl.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>8</td>
                <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>9</td>
                <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>10</td>
                <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                <td>kpl.</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
    `;
    break;
          } 
        
        else if (power === '8 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 8 KW 3F 1101HRW-E 1101XWH**W-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 8 KW 1101HRW-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              ${tankRow}
          </tr>
          <tr>
              <td>4</td>
              ${bufferRow}
          </tr>
          <tr>
              <td>5</td>
              <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Grupa bezpieczeństwa CWU (6bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>MIEDŹ CHŁODNICZA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>9</td>
              <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>10</td>
              <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        } else if (power === '6 kW') {
    tableContent = `
<table id="customTable" border="1">
<tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 6 KW 3F 1101HRW-E 1101XWH**W-E</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 6 KW 1101HRW-E</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>3</td>
        ${tankRow}
    </tr>
    <tr>
        <td>4</td>
        ${bufferRow}
    </tr>
    <tr>
        <td>5</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>7</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`};
break;







case "NIBE12":
        if (power === '12 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> POMPA GRUNTOWA NIBE 12 kW F1245</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td> CENTRALA WENTYLACYJNA Z ODZYSKIEM CIEPŁĄ</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              ${tankRow}
          </tr>
          <tr>
              <td>4</td>
              ${bufferRow}
          </tr>
          <tr>
              <td>5</td>
              <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Grupa bezpieczeństwa CWU (6bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>MIEDŹ CHŁODNICZA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>9</td>
              <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>10</td>
              <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        } 
        else if (power === '10 kW') {
            tableContent = `
        <table id="customTable" border="1">
       <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> POMPA GRUNTOWA NIBE 10 kW F1245</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td> CENTRALA WENTYLACYJNA Z ODZYSKIEM CIEPŁĄ</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              ${tankRow}
          </tr>
          <tr>
              <td>4</td>
              ${bufferRow}
          </tr>
          <tr>
              <td>5</td>
              <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Grupa bezpieczeństwa CWU (6bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>MIEDŹ CHŁODNICZA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>9</td>
              <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>10</td>
              <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
    </table>
    `;
    break;
          } 
     else if (power === '8 kW') {
    tableContent = `
<table id="customTable" border="1">
<tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> POMPA GRUNTOWA NIBE 8 kW F1245</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td> CENTRALA WENTYLACYJNA Z ODZYSKIEM CIEPŁĄ</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              ${tankRow}
          </tr>
          <tr>
              <td>4</td>
              ${bufferRow}
          </tr>
          <tr>
              <td>5</td>
              <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Grupa bezpieczeństwa CWU (6bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>MIEDŹ CHŁODNICZA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>9</td>
              <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>10</td>
              <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
</table>
`};
break;














      case "Toshiba 3F":
        if (power === '11 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 11 KW 3F 1101HRW-E 1101XWH**W-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 11 KW 1101HRW-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              ${tankRow}
          </tr>
          <tr>
              <td>4</td>
              ${bufferRow}
          </tr>
          <tr>
              <td>5</td>
              <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Grupa bezpieczeństwa CWU (6bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>MIEDŹ CHŁODNICZA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>9</td>
              <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>10</td>
              <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        } 
        else if (power === '14 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
            <tr>
                <th>Numer</th>
                <th>Nazwa towaru</th>
                <th>Miara</th>
                <th>Ilość</th>
            </tr>
            <tr>
                <td>1</td>
                <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 14 KW 3F 1101HRW-E 1101XWH**W-E</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>s
                <td>2</td>
                <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 14 KW 1101HRW-E</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>3</td>
                ${tankRow}
            </tr>
            <tr>
                <td>4</td>
                ${bufferRow}
            </tr>
            <tr>
                <td>5</td>
                <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                <td>kpl.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Grupa bezpieczeństwa CWU (6bar)</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>7</td>
                <td>MIEDŹ CHŁODNICZA</td>
                <td>kpl.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>8</td>
                <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>9</td>
                <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>10</td>
                <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                <td>kpl.</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
    `;
    break;
          } 
        
        else if (power === '8 kW') {
          tableContent = `
      <table id="customTable" border="1">
      <tbody>
          <tr>
              <th>Numer</th>
              <th>Nazwa towaru</th>
              <th>Miara</th>
              <th>Ilość</th>
          </tr>
          <tr>
              <td>1</td>
              <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 8 KW 3F 1101HRW-E 1101XWH**W-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 8 KW 1101HRW-E</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              ${tankRow}
          </tr>
          <tr>
              <td>4</td>
              ${bufferRow}
          </tr>
          <tr>
              <td>5</td>
              <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Grupa bezpieczeństwa CWU (6bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>MIEDŹ CHŁODNICZA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>GRUPA BEZPIECZEŃSTWA C.O (3 bar)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>9</td>
              <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>10</td>
              <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
              <td>kpl.</td>
              <td>1</td>
          </tr>
      </tbody>
  </table>
  `;
  break;
        } else if (power === '6 kW') {
    tableContent = `
<table id="customTable" border="1">
<tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 6 KW 3F 1101HRW-E 1101XWH**W-E</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>JEDNOSTKA ZEWNĘTRZNA TOSHIBA 6 KW 1101HRW-E</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>3</td>
        ${tankRow}
    </tr>
    <tr>
        <td>4</td>
        ${bufferRow}
    </tr>
    <tr>
        <td>5</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>7</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`};
break;


      case "Mitsubishi-cylinder":
        if (power === '14 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
                            <tr>
                                <th>Numer</th>
                                <th>Nazwa towaru</th>
                                <th>Miara</th>
                                <th>Ilość</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Ecodan | Zubadan Inverter | Split | 14,0kW, 400V, R32 PUD-SHWM140YAA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ecodan | moduł wew. 300 litrów | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHST20D-VM60</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Elementy hydrauliczne i elektryczne do pompy ciepła</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                ${bufferRow}
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>MIEDŹ CHŁODNICZA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                        </tbody>
    </table>
    `;
    
        }
        else if (power === '12 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
                            <tr>
                                <th>Numer</th>
                                <th>Nazwa towaru</th>
                                <th>Miara</th>
                                <th>Ilość</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Ecodan | Zubadan Inverter | Split | 12,0kW, 400V, R32 PUD-SHWM120YAA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ecodan | moduł wew. 200 litrów | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHST20D-VM60</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Elementy hydrauliczne i elektryczne do pompy ciepła</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                ${bufferRow}
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>MIEDŹ CHŁODNICZA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                        </tbody>
    </table>
    `;
    
        }
        
        else if (power === '6 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
                            <tr>
                                <th>Numer</th>
                                <th>Nazwa towaru</th>
                                <th>Miara</th>
                                <th>Ilość</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Ecodan | Zubadan Inverter | Split | 6,0kW, 400V, R32 PUD-SHWM60YAA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Ecodan | moduł wew. 200 litrów | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHST20D-VM60</td>
                            <td>szt.</td>
                            <td>1</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                ${bufferRow}
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>MIEDŹ CHŁODNICZA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                        </tbody>
    </table>
    `;
    
            break;
        }

        
        else if (power === '10 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
                        <tr>
                            <th>Numer</th>
                            <th>Nazwa towaru</th>
                            <th>Miara</th>
                            <th>Ilość</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ecodan | Zubadan Inverter | Split | 10,0kW, 400V, R32 PUD-SHWM100YAA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Ecodan | moduł wew. 200 litrów | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHST20D-VM60</td>
                        <td>szt.</td>
                        <td>1</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            ${bufferRow}
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Grupa bezpieczeństwa CWU (6bar)</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>MIEDŹ CHŁODNICZA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                    </tbody>
</table>
`;

        break;
    } else if (power === '8 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
                        <tr>
                            <th>Numer</th>
                            <th>Nazwa towaru</th>
                            <th>Miara</th>
                            <th>Ilość</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ecodan | Zubadan Inverter | Split | 8,0kW, 400V, R32 PUD-SHWM80YAA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Ecodan | moduł wew. 200 litrów | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                        <td>szt.</td>
                        <td>1</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            ${bufferRow}
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Grupa bezpieczeństwa CWU (6bar)</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>MIEDŹ CHŁODNICZA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                    </tbody>
</table>
`};




        break;

        case "Mitsubishi-hydrobox":
        if (power === '12 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
                            <tr>
                                <th>Numer</th>
                                <th>Nazwa towaru</th>
                                <th>Miara</th>
                                <th>Ilość</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Ecodan | Zubadan Inverter | Split | 12,0kW, 400V, R32 PUD-SHWM120YAA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                ${tankRow}
                            </tr>
                            <tr>
                                <td>4</td>
                                ${bufferRow}
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>MIEDŹ CHŁODNICZA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                        </tbody>
    </table>
    `;
    
        } 
else if (power === '14 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
                        <tr>
                            <th>Numer</th>
                            <th>Nazwa towaru</th>
                            <th>Miara</th>
                            <th>Ilość</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ecodan | Zubadan Inverter | Split | 14,0kW, 400V, R32 PUD-SHWM140YAA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            ${tankRow}
                        </tr>
                        <tr>
                            <td>4</td>
                            ${bufferRow}
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Grupa bezpieczeństwa CWU (6bar)</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>MIEDŹ CHŁODNICZA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                    </tbody>
</table>
`;

        break;
    } 
            
        else if (power === '10 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
                        <tr>
                            <th>Numer</th>
                            <th>Nazwa towaru</th>
                            <th>Miara</th>
                            <th>Ilość</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ecodan | Zubadan Inverter | Split | 10,0kW, 400V, R32 PUD-SHWM100YAA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            ${tankRow}
                        </tr>
                        <tr>
                            <td>4</td>
                            ${bufferRow}
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Grupa bezpieczeństwa CWU (6bar)</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>MIEDŹ CHŁODNICZA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                    </tbody>
</table>
`;

        break;
    } else if (power === '8 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
                        <tr>
                            <th>Numer</th>
                            <th>Nazwa towaru</th>
                            <th>Miara</th>
                            <th>Ilość</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ecodan | Zubadan Inverter | Split | 8,0kW, 400V, R32 PUD-SHWM80YAA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            ${tankRow}
                        </tr>
                        <tr>
                            <td>4</td>
                            ${bufferRow}
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Grupa bezpieczeństwa CWU (6bar)</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>MIEDŹ CHŁODNICZA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                    </tbody>
</table>

`;

        break;

     } else if (power === '6 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
                            <tr>
                                <th>Numer</th>
                                <th>Nazwa towaru</th>
                                <th>Miara</th>
                                <th>Ilość</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Ecodan | Zubadan Inverter | Split | 6,0kW, 400V, R32 PUD-SHWM60YAA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                ${tankRow}
                            </tr>
                            <tr>
                                <td>4</td>
                                ${bufferRow}
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>MIEDŹ CHŁODNICZA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                        </tbody>
    </table>
    
    `};
    
            break;
        




            case "Mitsubishi-hydrobox-PUZ":
                if (power === '12 kW') {
                    tableContent = `
                <table id="customTable" border="1">
                <tbody>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa towaru</th>
                                        <th>Miara</th>
                                        <th>Ilość</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Ecodan | Zubadan Inverter | Split | 12,0kW, 400V, R32 PUZ-SHWM120YAA EHST20D-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERSF-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        ${tankRow}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        ${bufferRow}
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>MIEDŹ CHŁODNICZA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
            </table>
            `;
            
                } 
        else if (power === '14 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Ecodan | Zubadan Inverter | Split | 14,0kW, 400V, R32 PUZ-SHWM140YAA EHST20D-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERSF-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        `;
        
                break;
            } 
                    
                else if (power === '10 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                  <td>Ecodan | Zubadan Inverter | Split | 10,0kW, 400V, R32 PUZ-SHWM100YAA EHST20D-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERSF-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        `;
        
                break;
            } else if (power === '8 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                  <td>Ecodan | Zubadan Inverter | Split | 8,0kW, 400V, R32 PUZ-SHWM80YAA EHST20D-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERSF-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        
        `;
        
                break;
        
             } else if (power === '6 kW') {
                    tableContent = `
                <table id="customTable" border="1">
                <tbody>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa towaru</th>
                                        <th>Miara</th>
                                        <th>Ilość</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Ecodan | Zubadan Inverter | Split | 6,0kW, 400V, R32 PUZ-SHWM60YAA EHST20D-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERSF-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        ${tankRow}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        ${bufferRow}
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>MIEDŹ CHŁODNICZA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
            </table>
            
            `};
            
                    break;






 case "Mitsubishi-hydrobox-PUZ-1F":
                if (power === '10 kW') {
                    tableContent = `
                <table id="customTable" border="1">
                <tbody>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa towaru</th>
                                        <th>Miara</th>
                                        <th>Ilość</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Ecodan | Zubadan Inverter | Split | 10,0kW, 400V, R32 PUZ-SHWM100VAA EHST20D-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERSF-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        ${tankRow}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        ${bufferRow}
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>MIEDŹ CHŁODNICZA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
            </table>
            `;
            
                } 
                    

                   else if (power === '12 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                  <td>Ecodan | Zubadan Inverter | Split | 8,0kW, 400V, R32 PUZ-SHWM120VAA EHST20D-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERSF-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        
        `;
        
                break;
        
             }
              
         else if (power === '8 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                  <td>Ecodan | Zubadan Inverter | Split | 8,0kW, 400V, R32 PUZ-SHWM80VAA EHST20D-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERSF-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        
        `;
        
                break;
        
             } else if (power === '6 kW') {
                    tableContent = `
                <table id="customTable" border="1">
                <tbody>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa towaru</th>
                                        <th>Miara</th>
                                        <th>Ilość</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Ecodan | Zubadan Inverter | Split | 6,0kW, 400V, R32 PUZ-SHWM60VAA EHST20D-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ecodan | Hydrobox | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERSF-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        ${tankRow}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        ${bufferRow}
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>MIEDŹ CHŁODNICZA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
            </table>
            
            `};
            
                    break;










                      case "Mitsubishi-cylinder-PUZ":
                if (power === '12 kW') {
                    tableContent = `
                <table id="customTable" border="1">
                <tbody>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa towaru</th>
                                        <th>Miara</th>
                                        <th>Ilość</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Ecodan | Zubadan Inverter | Split | 12,0kW, 400V, R32 PUZ-SHWM120YAA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ecodan | Cylinder | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERST20F-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        ${tankRow}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        ${bufferRow}
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>MIEDŹ CHŁODNICZA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
            </table>
            `;
            
                } 
        else if (power === '14 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Ecodan | Zubadan Inverter | Split | 14,0kW, 400V, R32 PUZ-SHWM140YAA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan | Cylinder | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERST20F-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        `;
        
                break;
            } 
                    
                else if (power === '10 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                  <td>Ecodan | Zubadan Inverter | Split | 10,0kW, 400V, R32 PUZ-SHWM100YAA EHST20D-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan | Cylinder | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERST20F-YM9ED</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        `;
        
                break;
            } else if (power === '8 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                  <td>Ecodan | Zubadan Inverter | Split | 8,0kW, 400V, R32 PUZ-SHWM80YAA EHST20D-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                     <td>Ecodan | Cylinder | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERST20F-YM9ED</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        
        `;
        
                break;
        
             } else if (power === '6 kW') {
                    tableContent = `
                <table id="customTable" border="1">
                <tbody>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa towaru</th>
                                        <th>Miara</th>
                                        <th>Ilość</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Ecodan | Zubadan Inverter | Split | 6,0kW, 400V, R32 PUZ-SHWM60YAA EHST20D-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                         <td>Ecodan | Cylinder | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERST20F-YM9ED</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        ${tankRow}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        ${bufferRow}
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>MIEDŹ CHŁODNICZA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
            </table>
            
            `};
            
                    break;
                


                          case "Mitsubishi-cylinder-PUZ-1F":
                if (power === '12 kW') {
                    tableContent = `
                <table id="customTable" border="1">
                <tbody>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa towaru</th>
                                        <th>Miara</th>
                                        <th>Ilość</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Ecodan | Zubadan Inverter | Split | 12,0kW, 400V, R32 PUZ-SHWM120VAA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ecodan | Cylinder | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERST20F-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        ${tankRow}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        ${bufferRow}
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>MIEDŹ CHŁODNICZA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
            </table>
            `;
            
                } 
    
                    
                else if (power === '10 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                  <td>Ecodan | Zubadan Inverter | Split | 10,0kW, 400V, R32 PUZ-SHWM100VAA EHST20D-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan | Cylinder | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERST20F-YM9ED</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        `;
        
                break;
            } else if (power === '8 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                  <td>Ecodan | Zubadan Inverter | Split | 8,0kW, 400V, R32 PUZ-SHWM80VAA EHST20D-YM9E</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                     <td>Ecodan | Cylinder | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERST20F-YM9ED</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        
        `;
        
                break;
        
             } else if (power === '6 kW') {
                    tableContent = `
                <table id="customTable" border="1">
                <tbody>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa towaru</th>
                                        <th>Miara</th>
                                        <th>Ilość</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Ecodan | Zubadan Inverter | Split | 6,0kW, 400V, R32 PUZ-SHWM60VAA EHST20D-YM9E</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                         <td>Ecodan | Cylinder | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie ERST20F-YM9ED</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        ${tankRow}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        ${bufferRow}
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>MIEDŹ CHŁODNICZA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
            </table>
            
            `};
            
                    break;
                
                
        


            case "Mitsubishi-hydrobox-1f":
                if (power === '12 kW') {
                    tableContent = `
                <table id="customTable" border="1">
                <tbody>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa towaru</th>
                                        <th>Miara</th>
                                        <th>Ilość</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Ecodan 1F | Zubadan Inverter | Split | 12,0kW, 230V, R32 PUD-SHWM120YAA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ecodan 1F | Hydrobox | Split | grz. 6/9 kW, 230V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        ${tankRow}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        ${bufferRow}
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>MIEDŹ CHŁODNICZA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
            </table>
            `;
            
                } 
        else if (power === '14 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Ecodan 1F | Zubadan Inverter | Split | 14,0kW, 230V, R32 PUD-SHWM140YAA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan 1F| Hydrobox | Split | grz. 6/9 kW, 230V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        `;
        
                break;
            } 
                    
                else if (power === '10 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Ecodan 1F | Zubadan Inverter | Split | 10,0kW, 230V, R32 PUD-SHWM100YAA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan 1F | Hydrobox | Split | grz. 6/9 kW, 230V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        `;
        
                break;
            } else if (power === '8 kW') {
                tableContent = `
            <table id="customTable" border="1">
            <tbody>
                                <tr>
                                    <th>Numer</th>
                                    <th>Nazwa towaru</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Ecodan 1F| Zubadan Inverter | Split | 8,0kW, 230V, R32 PUD-SHWM80YAA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Ecodan 1F | Hydrobox | Split | grz. 6/9 kW, 230V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    ${tankRow}
                                </tr>
                                <tr>
                                    <td>4</td>
                                    ${bufferRow}
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MIEDŹ CHŁODNICZA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                    <td>szt.</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                    <td>kpl.</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
        </table>
        
        `;
        
                break;
        
             } else if (power === '6 kW') {
                    tableContent = `
                <table id="customTable" border="1">
                <tbody>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Nazwa towaru</th>
                                        <th>Miara</th>
                                        <th>Ilość</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Ecodan 1F | Zubadan Inverter | Split | 6,0kW, 230V, R32 PUD-SHWM60YAA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ecodan 1F | Hydrobox | Split | grz. 6/9 kW, 3x239V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        ${tankRow}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        ${bufferRow}
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>MIEDŹ CHŁODNICZA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>REGULATOR BEZPRZEWODOWY MITSUBISHI PAR-WT</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                        <td>szt.</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                        <td>kpl.</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
            </table>
            
            `};
            
                    break;
                







        
      case "ATLANTIC":
        if (power === '15 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
        <tr>
            <th>Numer</th>
            <th>Nazwa towaru</th>
            <th>Miara</th>
            <th>Ilość</th>
        </tr>
        <tr>
            <td>1</td>
            <td>ATLANTIC EXTENSA AI DUO 15 KW 3F</td>
            <td>szt.</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2</td>
            ${bufferRow}
        </tr>
        <tr>
            <td>3</td>
            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
            <td>kpl.</td>
            <td>1</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Grupa bezpieczeństwa CWU (6bar)</td>
            <td>szt.</td>
            <td>1</td>
        </tr>
        <tr>
        <td>5</td>
        <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
            <td>6</td>
            <td>KABEL GRZEWCZY</td>
            <td>kpl.</td>
            <td>1</td>
        </tr>
        <tr>
            <td>7</td>
            <td>MIEDŹ CHŁODNICZA</td>
            <td>kpl.</td>
            <td>1</td>
        </tr>
        <tr>
            <td>8</td>
            <td>SONDA POGODOWA</td>
            <td>szt.</td>
            <td>1</td>
        </tr>
        <tr>
            <td>9</td>
            <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
            <td>szt.</td>
            <td>1</td>
        </tr>
        <tr>
            <td>10</td>
            <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
            <td>kpl.</td>
            <td>1</td>
        </tr>
    </tbody>
    </table>
    `;
    

        } else if (power === '10 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td>ATLANTIC EXTENSA AI DUO 10 KW 1F</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
        <td>2</td>
        ${bufferRow}
    </tr>
    <tr>
        <td>3</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
    <td>5</td>
    <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
        <td>6</td>
        <td>KABEL GRZEWCZY</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>7</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>SONDA POGODOWA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>10</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`;

        break;
    } 
    
    else if (power === '17 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td>ATLANTIC EXTENSA AI DUO 17 KW 3F</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
        <td>2</td>
        ${bufferRow}
    </tr>
    <tr>
        <td>3</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
    <td>5</td>
    <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
        <td>6</td>
        <td>KABEL GRZEWCZY</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>7</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>SONDA POGODOWA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>10</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`;

        break;
    }
    
    
    
    else if (power === '6 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
                        <tr>
                            <th>Numer</th>
                            <th>Nazwa towaru</th>
                            <th>Miara</th>
                            <th>Ilość</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ATLANTIC EXTENSA AI DUO 6 KW 1F</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                            <td>2</td>
                            ${bufferRow}
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Grupa bezpieczeństwa CWU (6bar)</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
                        <td>szt.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                            <td>6</td>
                            <td>KABEL GRZEWCZY</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>MIEDŹ CHŁODNICZA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>SONDA POGODOWA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                    </tbody>
</table>
`};



case "ATLANTIC-HYDROBOX":
    if (power === '15 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td>ATLANTIC EXCELIA AI 15 KW 3F HYDROBOX</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        ${bufferRow}
    </tr>
     <tr>
        <td>3</td>
        ${tankRow}
    </tr>
    <tr>
        <td>4</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
    <td>6</td>
    <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
        <td>7</td>
        <td>KABEL GRZEWCZY</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>SONDA POGODOWA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>10</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>11</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`;


    } else if (power === '10 kW') {
    tableContent = `
<table id="customTable" border="1">
  <tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td>ATLANTIC EXCELIA AI 10 KW HYDROBOX</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        ${bufferRow}
    </tr>
     <tr>
        <td>3</td>
        ${tankRow}
    </tr>
    <tr>
        <td>4</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
    <td>6</td>
    <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
        <td>7</td>
        <td>KABEL GRZEWCZY</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>SONDA POGODOWA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>10</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>11</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`;

    break;
} 

 else if (power === '10 kW') {
    tableContent = `
<table id="customTable" border="1">
<tbody>
<tr>
    <th>Numer</th>
    <th>Nazwa towaru</th>
    <th>Miara</th>
    <th>Ilość</th>
</tr>
<tr>
    <td>1</td>
    <td>ATLANTIC EXCELIA AI 10 KW 1F HYDROBOX</td>
    <td>szt.</td>
    <td>1</td>
</tr>
    <td>2</td>
    ${bufferRow}
</tr>
<tr>
    <td>3</td>
    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>4</td>
    <td>Grupa bezpieczeństwa CWU (6bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
<td>5</td>
<td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
    <td>6</td>
    <td>KABEL GRZEWCZY</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>7</td>
    <td>MIEDŹ CHŁODNICZA</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>8</td>
    <td>SONDA POGODOWA</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>9</td>
    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>10</td>
    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
</tbody>
</table>
`;

    break;
} 


else if (power === '8 kW') {
    tableContent = `
<table id="customTable" border="1">
 <tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td>ATLANTIC EXCELIA AI 8 KW HYDROBOX</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        ${bufferRow}
    </tr>
     <tr>
        <td>3</td>
        ${tankRow}
    </tr>
    <tr>
        <td>4</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
    <td>6</td>
    <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
        <td>7</td>
        <td>KABEL GRZEWCZY</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>SONDA POGODOWA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>10</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>11</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`;

    break;
} 


else if (power === '14 kW') {
    tableContent = `
<table id="customTable" border="1">
 <tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td>ATLANTIC EXCELIA AI 14 KW 3F HYDROBOX</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        ${bufferRow}
    </tr>
     <tr>
        <td>3</td>
        ${tankRow}
    </tr>
    <tr>
        <td>4</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
    <td>6</td>
    <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
        <td>7</td>
        <td>KABEL GRZEWCZY</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>SONDA POGODOWA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>10</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>11</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`;

    break;
} 
else if (power === '8 kW') {
    tableContent = `
<table id="customTable" border="1">
 <tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td>ATLANTIC EXCELIA AI 8 KW HYDROBOX</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        ${bufferRow}
    </tr>
     <tr>
        <td>3</td>
        ${tankRow}
    </tr>
    <tr>
        <td>4</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
    <td>6</td>
    <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
        <td>7</td>
        <td>KABEL GRZEWCZY</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>SONDA POGODOWA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>10</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>11</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`;

    break;
}

else if (power === '17 kW') {
    tableContent = `
<table id="customTable" border="1">
 <tbody>
    <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td>ATLANTIC EXCELIA AI 17 KW 3F HYDROBOX</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        ${bufferRow}
    </tr>
     <tr>
        <td>3</td>
        ${tankRow}
    </tr>
    <tr>
        <td>4</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Grupa bezpieczeństwa CWU (6bar)</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
    <td>6</td>
    <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
        <td>7</td>
        <td>KABEL GRZEWCZY</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>MIEDŹ CHŁODNICZA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>SONDA POGODOWA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>10</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>11</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
</tbody>
</table>
`;

    break;
}



else if (power === '6 kW') {
    tableContent = `
<table id="customTable" border="1">
<tbody>
                    <tr>
                        <th>Numer</th>
                        <th>Nazwa towaru</th>
                        <th>Miara</th>
                        <th>Ilość</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>ATLANTIC EXCELIA AI 6 KW 1F HYDROBOX</td>
                        <td>szt.</td>
                        <td>1</td>
                    </tr>
                        <td>2</td>
                        ${bufferRow}
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                        <td>kpl.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Grupa bezpieczeństwa CWU (6bar)</td>
                        <td>szt.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>Grupa bezpieczeńśtwa C.O (2.5 bar)</td>
                    <td>szt.</td>
                    <td>1</td>
                </tr>
                <tr>
                        <td>6</td>
                        <td>KABEL GRZEWCZY</td>
                        <td>kpl.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>MIEDŹ CHŁODNICZA</td>
                        <td>kpl.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>SONDA POGODOWA</td>
                        <td>szt.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                        <td>szt.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                        <td>kpl.</td>
                        <td>1</td>
                    </tr>
                </tbody>
</table>
`};














case "VIESSMANN":
        if (power === '13 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
        <tr>
        <th>Numer</th>
        <th>Nazwa towaru</th>
        <th>Miara</th>
        <th>Ilość</th>
    </tr>
    <tr>
        <td>1</td>
        <td>POMPA CIEPŁA VITOCAL 150-A typ MONOBLOK A13</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        ${tankRow}
    </tr>
    <tr>
        <td>3</td>
        <td>DWA CZUJNIKI TEM. NTC 10 kOhm</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
    <td>5</td>
    <td>GRUPA BEZPIECZEŃWTWA CWU (6bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
        <td>6</td>
        <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 bar )</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>7</td>
        <td>INTERNET</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>8</td>
        <td>OTULINA NA PRZEWODY HYDRAULICZNE</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>9</td>
        <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>10</td>
        <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>11</td>
        <td>REGULATOR POKOJOWY BEZPRZEWODOWY</td>
        <td>kpl.</td>
        <td>1</td>
    </tr>
                        </tbody>
    </table>
    `;
    
        } else if (power === '10 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
    <th>Numer</th>
    <th>Nazwa towaru</th>
    <th>Miara</th>
    <th>Ilość</th>
</tr>
<tr>
    <td>1</td>
    <td>POMPA CIEPŁA VITOCAL 150-A typ MONOBLOK A10</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>2</td>
    ${tankRow}
</tr>
<tr>
    <td>3</td>
    <td>DWA CZUJNIKI TEM. NTC 10 kOhm</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>4</td>
    <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
<td>5</td>
<td>GRUPA BEZPIECZEŃWTWA CWU (6bar)</td>
<td>szt.</td>
<td>1</td>
</tr>
<tr>
    <td>6</td>
    <td>GRUPA BEZPIECZEŃSTWA C.O ( 2.5 bar )</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>7</td>
    <td>INTERNET</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>8</td>
    <td>OTULINA NA PRZEWODY HYDRAULICZNE</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>9</td>
    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>10</td>
    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>11</td>
    <td>REGULATOR POKOJOWY BEZPRZEWODOWY</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
                    </tbody>
</table>
`};

        break;
     

        case "GALMET-PRIMA":
        if (power === '12 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
                            <tr>
                                <th>Numer</th>
                                <th>Nazwa towaru</th>
                                <th>Miara</th>
                                <th>Ilość</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>GALMET PRIMA 12 KW JEDNOSTKA ZEWNĘTRZNA ORAZ JEDNOSTKA WEWNĘTRZNA ( HYDROBOX )</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                ${tankRow}
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Elementy hydrauliczne i elektryczne do pompy ciepła</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                ${bufferRow}
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>GRUPA BEZPIECZEŃSTWA C.O ( 3 BAR )</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>MIEDŹ CHŁODNICZA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                        </tbody>
    </table>
    `;
    
        } else if (power === '10 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
                        <tr>
                            <th>Numer</th>
                            <th>Nazwa towaru</th>
                            <th>Miara</th>
                            <th>Ilość</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>GALMET PRIMA 10 KW JEDNOSTKA ZEWNĘTRZNA ORAZ JEDNOSTKA WEWNĘTRZNA ( HYDROBOX )</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        ${tankRow}
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            ${bufferRow}
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>GRUPA BEZPIECZEŃŚTWA C.O (3 BAR )</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Grupa bezpieczeństwa CWU (6bar)</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>MIEDŹ CHŁODNICZA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                    </tbody>
</table>
`;

        break;
    } 
    
    
    
    else if (power === '8 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
                        <tr>
                            <th>Numer</th>
                            <th>Nazwa towaru</th>
                            <th>Miara</th>
                            <th>Ilość</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>GALMET PRIMA 8 KW JEDNOSTKA ZEWNĘTRZNA ORAZ JEDNOSTKA WEWNĘTRZNA ( HYDROBOX )</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        ${tankRow}
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            ${bufferRow}
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>GRUPA BEZPIECZEŃŚTWA C.O (3 BAR )</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Grupa bezpieczeństwa CWU (6bar)</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>MIEDŹ CHŁODNICZA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                            <td>kpl.</td>
                            <td>1</td>
                        </tr>
                    </tbody>
</table>
`;

        break;

    }

        else if (power === '6 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
                            <tr>
                                <th>Numer</th>
                                <th>Nazwa towaru</th>
                                <th>Miara</th>
                                <th>Ilość</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>GALMET PRIMA 6 KW JEDNOSTKA ZEWNĘTRZNA ORAZ JEDNOSTKA WEWNĘTRZNA ( HYDROBOX )</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            ${tankRow}
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>ELEMENTY HYDRAULICZNE I ELEKTRYCZNE DO POMPY CIEPŁA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                ${bufferRow}
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>GRUPA BEZPIECZEŃŚTWA C.O (3 BAR )</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>MIEDŹ CHŁODNICZA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                        </tbody>
    </table>
    `};
    
            break;

        case "HEIZTECHNIK":
        if (power === '14 kW') {
            tableContent = `
        <table id="customTable" border="1">
        <tbody>
                            <tr>
                                <th>Numer</th>
                                <th>Nazwa towaru</th>
                                <th>Miara</th>
                                <th>Ilość</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>POMPA CIEPŁA HEIZTECHNIK 14 KW CALLA VERDE COMFORT Z WBUDOWANYM ZASOBNIKIEM CWU</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CZUJNIK TEMPERATURY</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Elementy hydrauliczne i elektryczne do pompy ciepła</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>INTERNET</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>OTULINA NA PRZEWODY HYDRAULICZNE</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Grupa bezpieczeństwa CWU (6bar)</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>MIEDŹ CHŁODNICZA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
                                <td>kpl.</td>
                                <td>1</td>
                            </tr>
                        </tbody>
    </table>
    `;
    
        } else if (power === '12 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
    <th>Numer</th>
    <th>Nazwa towaru</th>
    <th>Miara</th>
    <th>Ilość</th>
</tr>
<tr>
    <td>1</td>
    <td>POMPA CIEPŁA HEIZTECHNIK 12 KW CALLA VERDE COMFORT Z WBUDOWANYM ZASOBNIKIEM CWU</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>2</td>
    <td>CZUJNIK TEMPERATURY</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>3</td>
    <td>Elementy hydrauliczne i elektryczne do pompy ciepła</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>4</td>
    <td>INTERNET</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>5</td>
    <td>OTULINA NA PRZEWODY HYDRAULICZNE</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>6</td>
    <td>Grupa bezpieczeństwa CWU (6bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>7</td>
    <td>MIEDŹ CHŁODNICZA</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>8</td>
    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>9</td>
    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
    <td>kpl.</td>
    <td>1</td>
                    </tbody>
</table>
`;

        break;
    } else if (power === '9 kW') {
        tableContent = `
    <table id="customTable" border="1">
    <tbody>
    <tr>
    <th>Numer</th>
    <th>Nazwa towaru</th>
    <th>Miara</th>
    <th>Ilość</th>
</tr>
<tr>
    <td>1</td>
    <td>POMPA CIEPŁA HEIZTECHNIK 9 KW CALLA VERDE COMFORT Z WBUDOWANYM ZASOBNIKIEM CWU</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>2</td>
    <td>CZUJNIK TEMPERATURY</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>3</td>
    <td>Elementy hydrauliczne i elektryczne do pompy ciepła</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>4</td>
    <td>INTERNET</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>5</td>
    <td>OTULINA NA PRZEWODY HYDRAULICZNE</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>6</td>
    <td>Grupa bezpieczeństwa CWU (6bar)</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>7</td>
    <td>MIEDŹ CHŁODNICZA</td>
    <td>kpl.</td>
    <td>1</td>
</tr>
<tr>
    <td>8</td>
    <td>STOJAK LUB WIESZAK POD POMPĘ CIEPŁA</td>
    <td>szt.</td>
    <td>1</td>
</tr>
<tr>
    <td>9</td>
    <td>MONTAŻ , DOJAZD , URUCHOMIENIE ORAZ SZKOLENIE UŻYTKOWNIKA</td>
    <td>kpl.</td>
    <td>1</td>
                    </tbody>
</table>
`};

        break;
    }
    return tableContent;
    
  }
  
  function getAdditionalOptionsTable(pdfType) {
    let tableHtml = "";

    switch (pdfType) {
        case "HEIZTECHNIK":
            tableHtml = `
                <table border='1' id="kamanTable">
                <tr>
                <th>Lp.</th>
                <th>Nazwa</th>
                <th>Miara</th>
                <th>Cena</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                <td>szt.</td>
                <td>660zł</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                <td>szt.</td>
                <td>580zł</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                <td>szt.</td>
                <td>650zł</td>
            </tr>
            <tr>
                <td>4</td>
                <td> Zbiornik z stali nierdzewnej</td>
                <td>szt.</td>
                <td>1250zł</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                <td>szt.</td>
                <td>450zł</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Licznik energii elektrycznej 3f</td>
                <td>szt.</td>
                <td>540zł</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                <td>kpl.</td>
                <td>500zł</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                <td>kpl.</td>
                <td>300zł</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                <td>mb.</td>
                <td>55zł</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                <td>kpl.</td>
                <td>500zł</td>
            </tr>
         <tr>
                <td>11</td>
                <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                <td>Kpl</td>
                <td>1400<br> -1950 zł</td>
            </tr>
             <tr>
                <td>12</td>
                <td>UPS 40-55 Ah ( zabezpieczenie układu wodnego na wypadek braku prądu )</td>
                <td>Kpl</td>
                <td>1400 <br> -1950 zł</td>
            </tr>
             <tr>
                <td>13</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                </table>`;
            break;

            case "VIESSMANN":
            tableHtml = `
                <table border='1' id="kamanTable">
                <tr>
                <th>Lp.</th>
                <th>Nazwa</th>
                <th>Miara</th>
                <th>Cena</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                <td>szt.</td>
                <td>660zł</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                <td>szt.</td>
                <td>580zł</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                <td>szt.</td>
                <td>650zł</td>
            </tr>
            <tr>
                <td>4</td>
                <td> Zbiornik z stali nierdzewnej</td>
                <td>szt.</td>
                <td>1250zł</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                <td>szt.</td>
                <td>450zł</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Licznik energii elektrycznej 3f</td>
                <td>szt.</td>
                <td>540zł</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                <td>kpl.</td>
                <td>500zł</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                <td>kpl.</td>
                <td>300zł</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                <td>mb.</td>
                <td>55zł</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                <td>kpl.</td>
                <td>500zł</td>
            </tr>
         <tr>
                <td>11</td>
                <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                <td>Kpl</td>
                <td>1400-1950 zł</td>
            </tr>
             <tr>
                <td>12</td>
                <td>UPS 40-55 Ah ( zabezpieczenie układu wodnego na wypadek braku prądu )</td>
                <td>Kpl</td>
                <td>1400-1950 zł</td>
            </tr>
             <tr>
                <td>13</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                </table>`;
            break;

            case "ATLANTIC":
            tableHtml = `
                <table border='1' id="kamanTable">
                <tr>
        <th>Lp.</th>
        <th>Nazwa</th>
        <th>Miara</th>
        <th>Cena</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
        <td>szt.</td>
        <td>660zł</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
        <td>szt.</td>
        <td>580zł</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
        <td>szt.</td>
        <td>650zł</td>
    </tr>
    <tr>
        <td>4</td>
        <td> Zbiornik z stali nierdzewnej</td>
        <td>szt.</td>
        <td>1250zł</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
        <td>szt.</td>
        <td>450zł</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Licznik energii elektrycznej 3f</td>
        <td>szt.</td>
        <td>540zł</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
        <td>kpl.</td>
        <td>500zł</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
        <td>kpl.</td>
        <td>300zł</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
        <td>mb.</td>
        <td>55zł</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
        <td>kpl.</td>
        <td>500zł</td>
    </tr>

 <tr>
        <td>11</td>
        <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
        <td>Kpl</td>
        <td>1400-1950 zł</td>
    </tr>
<tr>
        <td>12</td>
        <td>ZESTAW PODŁĄCZENIA ZASOBNIKA C.W.U. - umożliwia współpracę z dowolnym wewnęrznym zasobnikiem C.W.U</td>
        <td>Kpl</td>
        <td>1400-1950 zł</td>
    </tr>
        <td>13</td>
        <td>TACA OCIEKOWA - umożliwia odbiór kondensatu</td>
        <td>Kpl</td>
        <td>550 zł</td>
    </tr>
<tr>
        <td>14</td>
        <td>CENTRALKA COZYTOUCH 2 - Umożliwia zdalne sterowanie urządzeniem oraz jego funkcjami za pomocą aplikacji mobilnej </td>
        <td>Kpl</td>
        <td>560 zł</td>
    </tr>
<tr>
        <td>15</td>
        <td>PROGRAMATOR A59 NB - Podstawowy programator z funkcją zmiany trybów pracy ( KOMFORT, ECO ) </td>
        <td>Kpl</td>
        <td>560 zł</td>
    </tr>
<tr>
        <td>16</td>
        <td> ZESTAW HYDRAULICZNY 2 OBIEGI GRZWEWCZE  - umożliwia podłączenia drugiego obiegu grzewczego </td>
        <td>Kpl</td>
        <td>1900 zł</td>
    </tr>
     <tr>
                <td>17</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                </table>`;
            break;


            case "ATLANTIC-HYDROBOX":
                tableHtml = `
                    <table border='1' id="kamanTable">
                    <tr>
            <th>Lp.</th>
            <th>Nazwa</th>
            <th>Miara</th>
            <th>Cena</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
            <td>szt.</td>
            <td>660zł</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
            <td>szt.</td>
            <td>580zł</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
            <td>szt.</td>
            <td>650zł</td>
        </tr>
        <tr>
            <td>4</td>
            <td> Zbiornik z stali nierdzewnej</td>
            <td>szt.</td>
            <td>1250zł</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
            <td>szt.</td>
            <td>450zł</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Licznik energii elektrycznej 3f</td>
            <td>szt.</td>
            <td>540zł</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
            <td>kpl.</td>
            <td>500zł</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
            <td>kpl.</td>
            <td>300zł</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
            <td>mb.</td>
            <td>55zł</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
            <td>kpl.</td>
            <td>500zł</td>
        </tr>
    
     <tr>
            <td>11</td>
            <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
            <td>Kpl</td>
            <td>1400-1950 zł</td>
        </tr>
    <tr>
            <td>12</td>
            <td>ZESTAW PODŁĄCZENIA ZASOBNIKA C.W.U. - umożliwia współpracę z dowolnym wewnęrznym zasobnikiem C.W.U</td>
            <td>Kpl</td>
            <td>1400-1950 zł</td>
        </tr>
            <td>13</td>
            <td>TACA OCIEKOWA - umożliwia odbiór kondensatu</td>
            <td>Kpl</td>
            <td>550 zł</td>
        </tr>
    <tr>
            <td>14</td>
            <td>CENTRALKA COZYTOUCH 2 - Umożliwia zdalne sterowanie urządzeniem oraz jego funkcjami za pomocą aplikacji mobilnej </td>
            <td>Kpl</td>
            <td>560 zł</td>
        </tr>
    <tr>
            <td>15</td>
            <td>PROGRAMATOR A59 NB - Podstawowy programator z funkcją zmiany trybów pracy ( KOMFORT, ECO ) </td>
            <td>Kpl</td>
            <td>560 zł</td>
        </tr>
    <tr>
            <td>16</td>
            <td> ZESTAW HYDRAULICZNY 2 OBIEGI GRZWEWCZE  - umożliwia podłączenia drugiego obiegu grzewczego </td>
            <td>Kpl</td>
            <td>1900 zł</td>
        </tr>
         <tr>
                <td>17</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                    </table>`;
                break;
            case "GALMET-PRIMA":
                tableHtml = `
                    <table border='1' id="kamanTable">
                    <tr>
                    <th>Lp.</th>
                    <th>Nazwa</th>
                    <th>Miara</th>
                    <th>Cena</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                    <td>szt.</td>
                    <td>660zł</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                    <td>szt.</td>
                    <td>580zł</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                    <td>szt.</td>
                    <td>650zł</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td> Zbiornik z stali nierdzewnej</td>
                    <td>szt.</td>
                    <td>1250zł</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                    <td>szt.</td>
                    <td>450zł</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Licznik energii elektrycznej 3f</td>
                    <td>szt.</td>
                    <td>540zł</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                    <td>kpl.</td>
                    <td>500zł</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                    <td>kpl.</td>
                    <td>300zł</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                    <td>mb.</td>
                    <td>55zł</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                    <td>kpl.</td>
                    <td>500zł</td>
                </tr>
             <tr>
                    <td>11</td>
                    <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                    <td>Kpl</td>
                    <td>1400-1950 zł</td>
                </tr>
                 <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                    </table>`;
                break;

                case "MIDEA":
                    tableHtml = `
                        <table border='1' id="kamanTable">
                        <tr>
                        <th>Lp.</th>
                        <th>Nazwa</th>
                        <th>Miara</th>
                        <th>Cena</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                        <td>szt.</td>
                        <td>660zł</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                        <td>szt.</td>
                        <td>580zł</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                        <td>szt.</td>
                        <td>650zł</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td> Zbiornik z stali nierdzewnej</td>
                        <td>szt.</td>
                        <td>1250zł</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                        <td>szt.</td>
                        <td>450zł</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Licznik energii elektrycznej 3f</td>
                        <td>szt.</td>
                        <td>540zł</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                        <td>kpl.</td>
                        <td>500zł</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                        <td>kpl.</td>
                        <td>300zł</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                        <td>mb.</td>
                        <td>55zł</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                        <td>kpl.</td>
                        <td>500zł</td>
                    </tr>
                 <tr>
                        <td>11</td>
                        <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                        <td>Kpl</td>
                        <td>1400-1950 zł</td>
                    </tr>
                     <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                        </table>`;
                    break;


                case "Toshiba 1F":
                    tableHtml = `
                        <table border='1' id="kamanTable">
                        <tr>
                        <th>Lp.</th>
                        <th>Nazwa</th>
                        <th>Miara</th>
                        <th>Cena</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                        <td>szt.</td>
                        <td>660zł</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                        <td>szt.</td>
                        <td>580zł</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                        <td>szt.</td>
                        <td>650zł</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td> Zbiornik z stali nierdzewnej</td>
                        <td>szt.</td>
                        <td>1250zł</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                        <td>szt.</td>
                        <td>450zł</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Licznik energii elektrycznej 3f</td>
                        <td>szt.</td>
                        <td>540zł</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                        <td>kpl.</td>
                        <td>500zł</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                        <td>kpl.</td>
                        <td>300zł</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                        <td>mb.</td>
                        <td>55zł</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                        <td>kpl.</td>
                        <td>500zł</td>
                    </tr>
                 <tr>
                        <td>11</td>
                        <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                        <td>Kpl</td>
                        <td>1400-1950 zł</td>
                    </tr>
                     <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                        </table>`;
                    break;
                    case "Toshiba 3F":
                        tableHtml = `
                            <table border='1' id="kamanTable">
                            <tr>
                            <th>Lp.</th>
                            <th>Nazwa</th>
                            <th>Miara</th>
                            <th>Cena</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                            <td>szt.</td>
                            <td>660zł</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                            <td>szt.</td>
                            <td>580zł</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                            <td>szt.</td>
                            <td>650zł</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td> Zbiornik z stali nierdzewnej</td>
                            <td>szt.</td>
                            <td>1250zł</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                            <td>szt.</td>
                            <td>450zł</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Licznik energii elektrycznej 3f</td>
                            <td>szt.</td>
                            <td>540zł</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                            <td>kpl.</td>
                            <td>500zł</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                            <td>kpl.</td>
                            <td>300zł</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                            <td>mb.</td>
                            <td>55zł</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                            <td>kpl.</td>
                            <td>500zł</td>
                        </tr>
                     <tr>
                            <td>11</td>
                            <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                            <td>Kpl</td>
                            <td>1400-1950 zł</td>
                        </tr>
                         <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                            </table>`;
                        break;


                        case "NIBE12":
                            tableHtml = `
                                <table border='1' id="kamanTable">
                                <tr>
                                <th>Lp.</th>
                                <th>Nazwa</th>
                                <th>Miara</th>
                                <th>Cena</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                <td>szt.</td>
                                <td>660zł</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                <td>szt.</td>
                                <td>580zł</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                <td>szt.</td>
                                <td>650zł</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td> Zbiornik z stali nierdzewnej</td>
                                <td>szt.</td>
                                <td>1250zł</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                <td>szt.</td>
                                <td>450zł</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Licznik energii elektrycznej 3f</td>
                                <td>szt.</td>
                                <td>540zł</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                <td>kpl.</td>
                                <td>500zł</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                <td>kpl.</td>
                                <td>300zł</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                <td>mb.</td>
                                <td>55zł</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                <td>kpl.</td>
                                <td>500zł</td>
                            </tr>
                         <tr>
                                <td>11</td>
                                <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                <td>Kpl</td>
                                <td>1400-1950 zł</td>
                            </tr>
                             <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                </table>`;
                            break;
        
                        case "Mitsubishi-ecoinverter":
                            tableHtml = `
                                <table border='1' id="kamanTable">
                                <tr>
                                <th>Lp.</th>
                                <th>Nazwa</th>
                                <th>Miara</th>
                                <th>Cena</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                <td>szt.</td>
                                <td>660zł</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                <td>szt.</td>
                                <td>580zł</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                <td>szt.</td>
                                <td>650zł</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td> Zbiornik z stali nierdzewnej</td>
                                <td>szt.</td>
                                <td>1250zł</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                <td>szt.</td>
                                <td>450zł</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Licznik energii elektrycznej 3f</td>
                                <td>szt.</td>
                                <td>540zł</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                <td>kpl.</td>
                                <td>500zł</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                <td>kpl.</td>
                                <td>300zł</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                <td>mb.</td>
                                <td>55zł</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                <td>kpl.</td>
                                <td>500zł</td>
                            </tr>
                         <tr>
                                <td>11</td>
                                <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                <td>Kpl</td>
                                <td>1400-1950 zł</td>
                            </tr>
                             <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                </table>`;
                            break;

                            case "Mitsubishi-hp":
                                tableHtml = `
                                    <table border='1' id="kamanTable">
                                    <tr>
                                    <th>Lp.</th>
                                    <th>Nazwa</th>
                                    <th>Miara</th>
                                    <th>Cena</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                    <td>szt.</td>
                                    <td>660zł</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                    <td>szt.</td>
                                    <td>580zł</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                    <td>szt.</td>
                                    <td>650zł</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td> Zbiornik z stali nierdzewnej</td>
                                    <td>szt.</td>
                                    <td>1250zł</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                    <td>szt.</td>
                                    <td>450zł</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Licznik energii elektrycznej 3f</td>
                                    <td>szt.</td>
                                    <td>540zł</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                    <td>kpl.</td>
                                    <td>500zł</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                    <td>kpl.</td>
                                    <td>300zł</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                    <td>mb.</td>
                                    <td>55zł</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                    <td>kpl.</td>
                                    <td>500zł</td>
                                </tr>
                             <tr>
                                    <td>11</td>
                                    <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                    <td>Kpl</td>
                                    <td>1400-1950 zł</td>
                                </tr>
                                 <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                    </table>`;
                                break;

                            case "Kotlospaw Slimko Plus":
                                tableHtml = `
                               <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Druga strefa grzewcza z podmieszaniem do podłogówki (pompa obiegowa, siłownik , zawór trzydrogowy, osprzęt) </td>
                                            <td>szt.</td>
                                            <td> 1350 zł </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Zbiornik CWU 300 L</td>
                                            <td>szt.</td>
                                            <td>700 zł </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Zasobnik CWU ze stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>2200 zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Zbiornik buforowy 200l</td>
                                            <td>szt.</td>
                                            <td> 2000 zł 
                                             </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Demontaż starego źródła ciepła</td>
                                            <td>szt.</td>
                                            <td>500 zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Regulator pokojowy (dodatkowy do sterowania drugą strefą grzewczą) </td>
                                            <td>szt.</td>
                                            <td>450 zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>560 zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>650 zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Reduktor ciśnienia (wody użytkowej)</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                    
                                            </table>`;
                                break;


                                case "Kotlospaw drewko plus palnik easy ROT":
                                    tableHtml = `
                                       <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Druga strefa grzewcza z podmieszaniem do podłogówki (pompa obiegowa, siłownik , zawór trzydrogowy, osprzęt) </td>
                                            <td>szt.</td>
                                            <td> 1350 zł </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Zbiornik CWU 300 L</td>
                                            <td>szt.</td>
                                            <td>700 zł </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Zasobnik CWU ze stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>2200 zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Zbiornik buforowy 200l</td>
                                            <td>szt.</td>
                                            <td> 2000 zł 
                                             </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Demontaż starego źródła ciepła</td>
                                            <td>szt.</td>
                                            <td>500 zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Regulator pokojowy (dodatkowy do sterowania drugą strefą grzewczą) </td>
                                            <td>szt.</td>
                                            <td>450 zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>560 zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>650 zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Reduktor ciśnienia (wody użytkowej)</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                    
                                            </table>`;
                                    break;
    

                                    case "Kotlospaw drewko plus palnik REVO":
                                        tableHtml = `
                                         <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Druga strefa grzewcza z podmieszaniem do podłogówki (pompa obiegowa, siłownik , zawór trzydrogowy, osprzęt) </td>
                                            <td>szt.</td>
                                            <td> 1350 zł </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Zbiornik CWU 300 L</td>
                                            <td>szt.</td>
                                            <td>700 zł </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Zasobnik CWU ze stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>2200 zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Zbiornik buforowy 200l</td>
                                            <td>szt.</td>
                                            <td> 2000 zł 
                                             </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Demontaż starego źródła ciepła</td>
                                            <td>szt.</td>
                                            <td>500 zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Regulator pokojowy (dodatkowy do sterowania drugą strefą grzewczą) </td>
                                            <td>szt.</td>
                                            <td>450 zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>560 zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>650 zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Reduktor ciśnienia (wody użytkowej)</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                    
                                            </table>`;
                                        break;
        




                                    case "Kotlospaw slimko plus niski":
                                        tableHtml = `
                                            <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Druga strefa grzewcza z podmieszaniem do podłogówki (pompa obiegowa, siłownik , zawór trzydrogowy, osprzęt) </td>
                                            <td>szt.</td>
                                            <td> 1350 zł </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Zbiornik CWU 300 L</td>
                                            <td>szt.</td>
                                            <td>700 zł </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Zasobnik CWU ze stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>2200 zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Zbiornik buforowy 200l</td>
                                            <td>szt.</td>
                                            <td> 2000 zł 
                                             </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Demontaż starego źródła ciepła</td>
                                            <td>szt.</td>
                                            <td>500 zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Regulator pokojowy (dodatkowy do sterowania drugą strefą grzewczą) </td>
                                            <td>szt.</td>
                                            <td>450 zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>560 zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>650 zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Reduktor ciśnienia (wody użytkowej)</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                    
                                            </table>`;
                                        break;
        
    

                            case "LAZAR":
                                tableHtml = `
                                    <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Druga strefa grzewcza z podmieszaniem do podłogówki (pompa obiegowa, siłownik , zawór trzydrogowy, osprzęt) </td>
                                            <td>szt.</td>
                                            <td> 1350 zł </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Zbiornik CWU 300 L</td>
                                            <td>szt.</td>
                                            <td>700 zł </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Zasobnik CWU ze stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>2200 zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Zbiornik buforowy 200l</td>
                                            <td>szt.</td>
                                            <td> 2000 zł 
                                             </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Demontaż starego źródła ciepła</td>
                                            <td>szt.</td>
                                            <td>500 zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Regulator pokojowy (dodatkowy do sterowania drugą strefą grzewczą) </td>
                                            <td>szt.</td>
                                            <td>450 zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>560 zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>650 zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Reduktor ciśnienia (wody użytkowej)</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                    
                                            </table>`;
                                break;





                            case "KAMEN-DRX":
                                tableHtml = `
                                   <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Druga strefa grzewcza z podmieszaniem do podłogówki (pompa obiegowa, siłownik , zawór trzydrogowy, osprzęt) </td>
                                            <td>szt.</td>
                                            <td> 1350 zł </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Zbiornik CWU 300 L</td>
                                            <td>szt.</td>
                                            <td>700 zł </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Zasobnik CWU ze stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>2200 zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Zbiornik buforowy 200l</td>
                                            <td>szt.</td>
                                            <td> 2000 zł 
                                             </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Demontaż starego źródła ciepła</td>
                                            <td>szt.</td>
                                            <td>500 zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Regulator pokojowy (dodatkowy do sterowania drugą strefą grzewczą) </td>
                                            <td>szt.</td>
                                            <td>450 zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>560 zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>650 zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Reduktor ciśnienia (wody użytkowej)</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                    
                                            </table>`;
                                break;




                            

                            case "KAMEN-PELLET-KOMPAKT":
                                tableHtml = `
                                    <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Druga strefa grzewcza z podmieszaniem do podłogówki (pompa obiegowa, siłownik , zawór trzydrogowy, osprzęt) </td>
                                            <td>szt.</td>
                                            <td> 1350 zł </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Zbiornik CWU 300 L</td>
                                            <td>szt.</td>
                                            <td>700 zł </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Zasobnik CWU ze stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>2200 zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Zbiornik buforowy 200l</td>
                                            <td>szt.</td>
                                            <td> 2000 zł 
                                             </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Demontaż starego źródła ciepła</td>
                                            <td>szt.</td>
                                            <td>500 zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Regulator pokojowy (dodatkowy do sterowania drugą strefą grzewczą) </td>
                                            <td>szt.</td>
                                            <td>450 zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>560 zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>650 zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Reduktor ciśnienia (wody użytkowej)</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                    
                                            </table>`;
                                break;
                           









                            case "KAMEN-KOMPAKT-LUX":
                                tableHtml = `
                                   <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Druga strefa grzewcza z podmieszaniem do podłogówki (pompa obiegowa, siłownik , zawór trzydrogowy, osprzęt) </td>
                                            <td>szt.</td>
                                            <td> 1350 zł </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Zbiornik CWU 300 L</td>
                                            <td>szt.</td>
                                            <td>700 zł </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Zasobnik CWU ze stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>2200 zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Zbiornik buforowy 200l</td>
                                            <td>szt.</td>
                                            <td> 2000 zł 
                                             </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Demontaż starego źródła ciepła</td>
                                            <td>szt.</td>
                                            <td>500 zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Regulator pokojowy (dodatkowy do sterowania drugą strefą grzewczą) </td>
                                            <td>szt.</td>
                                            <td>450 zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>560 zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>650 zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Reduktor ciśnienia (wody użytkowej)</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                    
                                            </table>`;
                                break;





                                case "DREWKO-HYBRID":
                                tableHtml = `
                                   <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Druga strefa grzewcza z podmieszaniem do podłogówki (pompa obiegowa, siłownik , zawór trzydrogowy, osprzęt) </td>
                                            <td>szt.</td>
                                            <td> 1350 zł </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Zbiornik CWU 300 L</td>
                                            <td>szt.</td>
                                            <td>700 zł </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Zasobnik CWU ze stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>2200 zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Zbiornik buforowy 200l</td>
                                            <td>szt.</td>
                                            <td> 2000 zł 
                                             </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Demontaż starego źródła ciepła</td>
                                            <td>szt.</td>
                                            <td>500 zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Regulator pokojowy (dodatkowy do sterowania drugą strefą grzewczą) </td>
                                            <td>szt.</td>
                                            <td>450 zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>560 zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>650 zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Reduktor ciśnienia (wody użytkowej)</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                    
                                            </table>`;
                                break;



                                case "QMPELL":
                                tableHtml = `
                                 <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Druga strefa grzewcza z podmieszaniem do podłogówki (pompa obiegowa, siłownik , zawór trzydrogowy, osprzęt) </td>
                                            <td>szt.</td>
                                            <td> 1350 zł </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Zbiornik CWU 300 L</td>
                                            <td>szt.</td>
                                            <td>700 zł </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Zasobnik CWU ze stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>2200 zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Zbiornik buforowy 200l</td>
                                            <td>szt.</td>
                                            <td> 2000 zł 
                                             </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Demontaż starego źródła ciepła</td>
                                            <td>szt.</td>
                                            <td>500 zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Regulator pokojowy (dodatkowy do sterowania drugą strefą grzewczą) </td>
                                            <td>szt.</td>
                                            <td>450 zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>560 zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>650 zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Reduktor ciśnienia (wody użytkowej)</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                    
                                            </table>`;
                                break;
                           




                                case "Mitsubishi-ecoinverter-hydrobox":
                                    tableHtml = `
                                        <table border='1' id="kamanTable">
                                        <tr>
                                        <th>Lp.</th>
                                        <th>Nazwa</th>
                                        <th>Miara</th>
                                        <th>Cena</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                        <td>szt.</td>
                                        <td>660zł</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                        <td>szt.</td>
                                        <td>580zł</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                        <td>szt.</td>
                                        <td>650zł</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td> Zbiornik z stali nierdzewnej</td>
                                        <td>szt.</td>
                                        <td>1250zł</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                        <td>szt.</td>
                                        <td>450zł</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Licznik energii elektrycznej 3f</td>
                                        <td>szt.</td>
                                        <td>540zł</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                        <td>kpl.</td>
                                        <td>300zł</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                        <td>mb.</td>
                                        <td>55zł</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                 <tr>
                                        <td>11</td>
                                        <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                        <td>Kpl</td>
                                        <td>1400-1950 zł</td>
                                    </tr>
                                     <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                        </table>`;
                                    break;


                                    case "KAISAI":
                                        tableHtml = `
                                            <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>660zł</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>580zł</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                            <td>szt.</td>
                                            <td>650zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td> Zbiornik z stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>1250zł</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                            <td>szt.</td>
                                            <td>450zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Licznik energii elektrycznej 3f</td>
                                            <td>szt.</td>
                                            <td>540zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                            <td>kpl.</td>
                                            <td>300zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                            <td>mb.</td>
                                            <td>55zł</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                     <tr>
                                            <td>11</td>
                                            <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                            <td>Kpl</td>
                                            <td>1400-1950 zł</td>
                                        </tr>
                                         <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                            </table>`;
                                        break;






                        
                            case "Mitsubishi-cylinder":
                                tableHtml = `
                                    <table border='1' id="kamanTable">
                                    <tr>
                                    <th>Lp.</th>
                                    <th>Nazwa</th>
                                    <th>Miara</th>
                                    <th>Cena</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                    <td>szt.</td>
                                    <td>660zł</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                    <td>szt.</td>
                                    <td>580zł</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                    <td>szt.</td>
                                    <td>650zł</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td> Zbiornik z stali nierdzewnej</td>
                                    <td>szt.</td>
                                    <td>1250zł</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                    <td>szt.</td>
                                    <td>450zł</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Licznik energii elektrycznej 3f</td>
                                    <td>szt.</td>
                                    <td>540zł</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                    <td>kpl.</td>
                                    <td>500zł</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                    <td>kpl.</td>
                                    <td>300zł</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                    <td>mb.</td>
                                    <td>55zł</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                    <td>kpl.</td>
                                    <td>500zł</td>
                                </tr>
                             <tr>
                                    <td>11</td>
                                    <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                    <td>Kpl</td>
                                    <td>1400-1950 zł</td>
                                </tr>
                                 <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                    </table>`;
                                break;


                                  case "Mitsubishi-hydrobox-PUZ-1F":
                                    tableHtml = `
                                        <table border='1' id="kamanTable">
                                        <tr>
                                        <th>Lp.</th>
                                        <th>Nazwa</th>
                                        <th>Miara</th>
                                        <th>Cena</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                        <td>szt.</td>
                                        <td>660zł</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                        <td>szt.</td>
                                        <td>580zł</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                        <td>szt.</td>
                                        <td>650zł</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td> Zbiornik z stali nierdzewnej</td>
                                        <td>szt.</td>
                                        <td>1250zł</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                        <td>szt.</td>
                                        <td>450zł</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Licznik energii elektrycznej 3f</td>
                                        <td>szt.</td>
                                        <td>540zł</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                        <td>kpl.</td>
                                        <td>300zł</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                        <td>mb.</td>
                                        <td>55zł</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                 <tr>
                                        <td>11</td>
                                        <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                        <td>Kpl</td>
                                        <td>1400-1950 zł</td>
                                    </tr>
                                     <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                        </table>`;
                                    break;



                                case "Mitsubishi-hydrobox-PUZ":
                                    tableHtml = `
                                        <table border='1' id="kamanTable">
                                        <tr>
                                        <th>Lp.</th>
                                        <th>Nazwa</th>
                                        <th>Miara</th>
                                        <th>Cena</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                        <td>szt.</td>
                                        <td>660zł</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                        <td>szt.</td>
                                        <td>580zł</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                        <td>szt.</td>
                                        <td>650zł</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td> Zbiornik z stali nierdzewnej</td>
                                        <td>szt.</td>
                                        <td>1250zł</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                        <td>szt.</td>
                                        <td>450zł</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Licznik energii elektrycznej 3f</td>
                                        <td>szt.</td>
                                        <td>540zł</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                        <td>kpl.</td>
                                        <td>300zł</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                        <td>mb.</td>
                                        <td>55zł</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                 <tr>
                                        <td>11</td>
                                        <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                        <td>Kpl</td>
                                        <td>1400-1950 zł</td>
                                    </tr>
                                     <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                        </table>`;
                                    break;

                                     case "Mitsubishi-cylinder-PUZ":
                                    tableHtml = `
                                        <table border='1' id="kamanTable">
                                        <tr>
                                        <th>Lp.</th>
                                        <th>Nazwa</th>
                                        <th>Miara</th>
                                        <th>Cena</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                        <td>szt.</td>
                                        <td>660zł</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                        <td>szt.</td>
                                        <td>580zł</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                        <td>szt.</td>
                                        <td>650zł</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td> Zbiornik z stali nierdzewnej</td>
                                        <td>szt.</td>
                                        <td>1250zł</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                        <td>szt.</td>
                                        <td>450zł</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Licznik energii elektrycznej 3f</td>
                                        <td>szt.</td>
                                        <td>540zł</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                        <td>kpl.</td>
                                        <td>300zł</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                        <td>mb.</td>
                                        <td>55zł</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                 <tr>
                                        <td>11</td>
                                        <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                        <td>Kpl</td>
                                        <td>1400-1950 zł</td>
                                    </tr>
                                     <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                        </table>`;
                                    break;
                                      case "Mitsubishi-cylinder-PUZ-1F":
                                    tableHtml = `
                                        <table border='1' id="kamanTable">
                                        <tr>
                                        <th>Lp.</th>
                                        <th>Nazwa</th>
                                        <th>Miara</th>
                                        <th>Cena</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                        <td>szt.</td>
                                        <td>660zł</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                        <td>szt.</td>
                                        <td>580zł</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                        <td>szt.</td>
                                        <td>650zł</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td> Zbiornik z stali nierdzewnej</td>
                                        <td>szt.</td>
                                        <td>1250zł</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                        <td>szt.</td>
                                        <td>450zł</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Licznik energii elektrycznej 3f</td>
                                        <td>szt.</td>
                                        <td>540zł</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                        <td>kpl.</td>
                                        <td>300zł</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                        <td>mb.</td>
                                        <td>55zł</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                 <tr>
                                        <td>11</td>
                                        <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                        <td>Kpl</td>
                                        <td>1400-1950 zł</td>
                                    </tr>
                                     <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                        </table>`;
                                    break;
                           
                                case "Mitsubishi-hydrobox":
                                    tableHtml = `
                                        <table border='1' id="kamanTable">
                                        <tr>
                                        <th>Lp.</th>
                                        <th>Nazwa</th>
                                        <th>Miara</th>
                                        <th>Cena</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                        <td>szt.</td>
                                        <td>660zł</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                        <td>szt.</td>
                                        <td>580zł</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                        <td>szt.</td>
                                        <td>650zł</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td> Zbiornik z stali nierdzewnej</td>
                                        <td>szt.</td>
                                        <td>1250zł</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                        <td>szt.</td>
                                        <td>450zł</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Licznik energii elektrycznej 3f</td>
                                        <td>szt.</td>
                                        <td>540zł</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                        <td>kpl.</td>
                                        <td>300zł</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                        <td>mb.</td>
                                        <td>55zł</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                        <td>kpl.</td>
                                        <td>500zł</td>
                                    </tr>
                                 <tr>
                                        <td>11</td>
                                        <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                        <td>Kpl</td>
                                        <td>1400-1950 zł</td>
                                    </tr>
                                     <tr>
                <td>12</td>
                <td>Wykonanie studni chłonnej</td>
                <td>Kpl</td>
                <td>800 <br> -1600 zł</td>
            </tr>
                                        </table>`;
                                    break;
                        

                                    case "Mitsubishi-hydrobox-1f":
                                        tableHtml = `
                                            <table border='1' id="kamanTable">
                                            <tr>
                                            <th>Lp.</th>
                                            <th>Nazwa</th>
                                            <th>Miara</th>
                                            <th>Cena</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Pompa do cyrkulacji z osprzętem i regulatorem czasowym</td>
                                            <td>szt.</td>
                                            <td>660zł</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Separator zanieczyszczeń magnetyczny (odmulnik)</td>
                                            <td>szt.</td>
                                            <td>580zł</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Pompa obiegowa do instalacji C.0 (LFP/WILO) z osprzętem</td>
                                            <td>szt.</td>
                                            <td>650zł</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td> Zbiornik z stali nierdzewnej</td>
                                            <td>szt.</td>
                                            <td>1250zł</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Dodatkowy sterownik do zarządznia do drugą strefą</td>
                                            <td>szt.</td>
                                            <td>450zł</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Licznik energii elektrycznej 3f</td>
                                            <td>szt.</td>
                                            <td>540zł</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Kabel grzewczy z termostatem ( istnieje możliwość podpięcia do kanalizacji lub drenażu po wcześniejszych oględzinach i potwierdzeniu przez montera ) </td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Wykonanie podbudowy ( fundamentu ) pod pompę ciepła: krawężniki przemysłowe ułożone na podsypce betonowej minimum B20 na głębokość 30-40 cm ( górna krawedź ułożona na równo z gruntem chłonnym)</td>
                                            <td>kpl.</td>
                                            <td>300zł</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Doprowadzenie kabla siłowego do pompy ciepła ( liczone gdy odległość kabla zasilającego o odpowiednim przekroju jest większa niż 10 mb )</td>
                                            <td>mb.</td>
                                            <td>55zł</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Demontaż starego źródła ciepła - polega na odłączeniu kotła od instalacji C.O i odsunięciu go tak aby nie przeszkadzał przy montażu pompy ciepła ( w tym samym pomieszczeniu ). Istnieje możliwość wywiezienia go poza pomieszczenie w którym był zamontowany jeżeli będzie to możliwe za pomocą wózka paletowego ( tzn. powierzchnia musi być równa bez progów i odpowiedniej szerokośći )</td>
                                            <td>kpl.</td>
                                            <td>500zł</td>
                                        </tr>
                                     <tr>
                                            <td>11</td>
                                            <td>BUFOR (SPRZĘGŁO HYDRAULICZNE) 40-140L + OSPRZĘT</td>
                                            <td>Kpl</td>
                                            <td>1400-1950 zł</td>
                                        </tr>
                                         <tr>
                    <td>12</td>
                    <td>Wykonanie studni chłonnej</td>
                    <td>Kpl</td>
                    <td>800 <br> -1600 zł</td>
                </tr>
                                            </table>`;
                                        break;
                            
    }

    return tableHtml;
}
