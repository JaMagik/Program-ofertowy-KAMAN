document.getElementById('generatePhotovoltaicsPdfButton').addEventListener('click', generatePVPDF);



// Załaduj obrazy
let imageLastPV;
let imageCSDS2;
let imageCSDS1;
let imageFOXDS2;
let imageFOXDS;
let imageFOX2;
let imageDach1;
let imageGrunt1;
let imageBase63;
let imageSungrow2;
let imageSungrowDS1;
let imageSungrowDS2;
let imageMVSTORAGE;
let imageMVSTORAGE1;
let imageMVSTORAGE2;
let imageMVSTORAGE3;
let imageMVSTORAGEMAIN;
let imageFronius;
let imageFroniusDS1;
let imageFroniusDS2;
let inverterModel;
let panelDescription;
let imageZNFox;
let imageZNHybrid;
let imageZNHybridWithStorage;
let imageZNFronius;
let panelType;
let ZNDs1;
let ZNDs2;
let ZNDs3;
let JIDs1;
let JIDs2;
let JIFox;
let imageJIHybrid;
let imageJIStorage;
let imageJIFronius;
let JADs1;
let JADs2;
let imageJAFox;
let imageJAHybrid;
let imageJAStorage;
let imageJAFronius;
let FOXHybCanadian;
let FoxHybZN;
let FoxHybJa;
let FoxHybJin;
let FoxStorageCanadian;
let FoxStorageZN;
let FoxStorageJa;
let FoxStorageJin;
let FoxHybDS1;
let FoxHybDS2;
let FoxStorageDS1;
let FoxStorageDS2;




async function loadImageDataForPV() {
    const imagesModule = await import('./imagesPV.js');
    const imagesModule1 = await import('./images.js');

    imageLastPV = imagesModule.imageLastPV;
    imageCSDS2 = imagesModule.imageCSDS2;
    imageCSDS1 = imagesModule.imageCSDS1;
    imageFOXDS2 = imagesModule.imageFOXDS2;
    imageFOXDS = imagesModule.imageFOXDS;
    imageFOX2 = imagesModule.imageFOX2;
    imageDach1 = imagesModule.imageDach1;
    imageGrunt1 = imagesModule.imageGrunt1;
    imageBase63 = imagesModule1.imageBase63;
    imageSungrow2 = imagesModule.imageSungrow2;
    imageSungrowDS1 = imagesModule.imageSungrowDS1;
    imageSungrowDS2 = imagesModule.imageSungrowDS2;
    imageMVSTORAGE = imagesModule.imageMVSTORAGE;
    imageMVSTORAGE1 = imagesModule.imageMVSTORAGE1;
    imageMVSTORAGE2 = imagesModule.imageMVSTORAGE2;
    imageMVSTORAGE3 = imagesModule.imageMVSTORAGE3;
    imageMVSTORAGEMAIN = imagesModule.imageMVSTORAGEMAIN;
    imageFronius = imagesModule.imageFronius;
    imageFroniusDS1 = imagesModule.imageFroniusDS1;
    imageFroniusDS2 = imagesModule.imageFroniusDS2;
    imageZNFox = imagesModule.imageZNFox;
    imageZNHybrid = imagesModule.imageZNHybrid;
    imageZNHybridWithStorage = imagesModule.imageZNHybridWithStorage;
    imageZNFronius = imagesModule.imageZNFronius;
    ZNDs1 = imagesModule.ZNDs1;
    ZNDs2 = imagesModule.ZNDs2; 
    ZNDs3 = imagesModule.ZNDs3;
    JIDs1 = imagesModule.JIDs1;
    JIDs2 = imagesModule.JIDs2;
    JIFox = imagesModule.JIFox;
    imageJIHybrid = imagesModule.imageJIHybrid;
    imageJIStorage = imagesModule.imageJIStorage;
    imageJIFronius = imagesModule.imageJIFronius;
    JADs1 = imagesModule.JADs1;
    JADs2 = imagesModule.JADs2;
    imageJAFox = imagesModule.imageJAFox;
    imageJAFronius = imagesModule.imageJAFronius;
    imageJAStorage = imagesModule.imageJAStorage;
    imageJAHybrid = imagesModule.imageJAHybrid;
    FOXHybCanadian = imagesModule.FOXHybCanadian;
    FoxHybZN = imagesModule.FoxHybZN;
    FoxHybJa = imagesModule.FoxHybJa;
    FoxHybJin = imagesModule.FoxHybJin;
    FoxStorageCanadian = imagesModule.FoxStorageCanadian;
    FoxStorageZN = imagesModule.FoxStorageZN;
    FoxStorageJa = imagesModule.FoxStorageJa;
    FoxStorageJin = imagesModule.FoxStorageJin;
    FoxHybDS1 = imagesModule.FoxHybDS1;
    FoxHybDS2 = imagesModule.FoxHybDS2;
    FoxStorageDS1 = imagesModule.FoxStorageDS1;
    FoxStorageDS2 = imagesModule.FoxStorageDS2;

}

loadImageDataForPV(); // Poprawione na właściwą nazwę funkcji

function getInverterImage(inverterType, panelType) {

    
    switch (inverterType) {
        case "standard":
            switch (panelType) {
                case "zn-shine":
                    return imageZNFox;
                case "canadian":
                    return imageFOX2;
                    case "jinko 475":
                    return JIFox;
                    case "jasolar":
                    return imageJAFox;
                // Domyślny obraz dla standardowego falownika
            }
            break;
        case "hybrid":
            switch (panelType) {
                case "zn-shine":
                    return imageZNHybrid;
                case "canadian":
                    return imageSungrow2;
                    case "jinko 475":
                    return imageJIHybrid;
                    case "jasolar":
                    return imageJAHybrid;
                    
                 // Domyślny obraz dla falownika hybrydowego
            }
            break;

            case "hybridFOX":
            switch (panelType) {
                case "zn-shine":
                    return FoxHybZN;
                case "canadian":
                    return FOXHybCanadian;
                    case "jinko 475":
                    return FoxHybJin;
                    case "jasolar":
                    return FoxHybJa;
                    
                 // Domyślny obraz dla falownika hybrydowego
            }
        case "hybridWithStorage":
            switch (panelType) {
                case "zn-shine":
                    return imageZNHybridWithStorage;
                case "canadian":
                    return imageMVSTORAGEMAIN;
                    case "jinko 475":
                    return imageJIStorage;
                    case "jasolar":
                    return imageJAStorage;
                // Domyślny obraz dla hybrydy z magazynem
            }

            case "hybridWithStorageFOX":
            switch (panelType) {
                case "zn-shine":
                    return FoxStorageZN;
                case "canadian":
                    return FoxStorageCanadian;
                    case "jinko 475":
                    return FoxStorageJin;
                    case "jasolar":
                    return FoxStorageJin;
                // Domyślny obraz dla hybrydy z magazynem
            }
            break;
        case "fronius":
            switch (panelType) {
                case "zn-shine":
                    return imageZNFronius;
                case "canadian":
                    return imageFronius;
                    case "jinko 475":
                        return imageJIFronius;
                        case "jasolar":
                            return imageJAFronius;
                        // Domyślny obraz dla Fronius
            }
            break;
     // Domyślny obraz dla nieznanego typu falownika
    }
}

function getThirdPage(inverterType) {
    switch(inverterType) {
        case "standard":
            return imageFOXDS; // Zmienna z obrazem dla standardowego falownika
        case "hybrid":
            return imageSungrowDS1; // Zmienna z obrazem dla falownika hybrydowego
            case "fronius":
                return imageFroniusDS1;
    
    case "hybridWithStorage":
    return imageSungrowDS1;
    
    case "hybridWithStorageFOX":
        return FoxHybDS1;

        case "hybridFOX":
            return FoxHybDS1;

    }
    
}

function getFifthPage(panelType) {
    switch(panelType) {
        case "canadian":
            return imageCSDS1; // Zmienna z obrazem dla standardowego falownika
        case "zn-shine":
            return ZNDs1; 
         case "jinko 475":
            return JIDs1;
            case "jasolar":
            return JADs1;
            // Zmienna z obrazem dla falownika hybrydowego
    }
    
}

function getSixthPage(panelType) {
    switch(panelType) {
        case "canadian":
            return imageCSDS2; // Zmienna z obrazem dla standardowego falownika
        case "zn-shine":
            return ZNDs2; 
            case "jinko 475":
            return JIDs2;
            case "jasolar":
            return JADs2;
            // Zmienna z obrazem dla falownika hybrydowego
    }
    
}

function getFourthPage(inverterType) {
    switch(inverterType) {
        case "standard":
            return imageFOXDS2; // Zmienna z obrazem dla standardowego falownika
        case "hybrid":
            return imageSungrowDS2; // Zmienna z obrazem dla falownika hybrydowego
        case "hybridWithStorage":
    return imageSungrowDS2;
    case "fronius":
                return imageFroniusDS2;
                case "hybridWithStorageFOX":
        return FoxHybDS2;

        case "hybridFOX":
            return FoxHybDS1;
    }
}

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

function getFirstPageBackgroundImage(installationType) {
    if(installationType === 'dach') {
        return imageDach1;
    } else if(installationType === 'grunt') {
        return imageGrunt1; // Zaktualizowane na imageGrunt1
    }
    return null; // lub jakiś domyślny obraz, jeśli potrzebujesz
}




function createTableContent(panelDescription, inverterType, includeEnergyStorage, panelType) {
    let inverterModel;
    switch(inverterType) {
        case 'hybrid':
        case 'hybridWithStorage':
            inverterModel = 'Sungrow';
        case 'fronius':
            inverterModel = 'Fronius';
            break;
        default:
            inverterModel = 'FOXESS';
    }

    let panelName;
    switch(panelType) {
        case 'zn-shine':
            panelName = 'Panele fotowoltaiczne Zn-Shine SOLAR Bifacjal 450 Wp';
            break;
        case 'canadian':
            panelName = 'Panele fotowoltaiczne Canadian Solar 455 Wp';
            break;
            case 'jinko 475':
            panelName = 'Panele fotowoltaiczne JINKO Solar 475 Wp';
            break;
            case 'jasolar':
            panelName = 'Panele fotowoltaiczne JA SOLAR 460 Wp';
            break;
        default:
            panelName = 'Standardowy panel';
    }

    let numberOfPanels;
    let descriptionParts = panelDescription.match(/(.+)\s(\d+)\s(.+)/);
    if (descriptionParts) {
        panelName += ' ' + descriptionParts[1];
        numberOfPanels = descriptionParts[2];
    }

    let tableContent = `
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
                <td>${panelName}</td>
                <td>szt.</td>
                <td>${panelDescription}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Falownik ${inverterModel}</td>
                <td>szt.</td>
                <td>1</td>
            </tr>`;

    if (includeEnergyStorage) {
        tableContent += `
            <tr>
                <td>3</td>
                <td>Magazyn energii PYLONTECH/FOXESS</td>
                <td>szt.</td>
                <td>1</td>
            </tr>`;
    }

    tableContent += `
            <tr>
                <td>${includeEnergyStorage ? '4' : '3'}</td>
                <td>Konstrukcja montażowa CORAB</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>${includeEnergyStorage ? '5' : '4'}</td>
                <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>${includeEnergyStorage ? '6' : '5'}</td>
                <td>MONTAŻ SYSTEMU</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>`;

    return tableContent;
}








async function generatePVPDF() {


    const offerNumber = generateOfferNumber();
    const userName = document.getElementById('userName').value; // Poprawione z userName na clientName
    const powerRange = parseInt(document.getElementById('powerRange').value); // Pobierz wartość jako liczbę
    const installationType = document.getElementById('installationType').value;
    const pricePV = document.getElementById('pricePV').value;
    const inverterTypeSelect = document.getElementById('inverterType');
    const inverterType = inverterTypeSelect.options[inverterTypeSelect.selectedIndex].value;
    const panelTypeSelect = document.getElementById('panelType');
    const panelType = panelTypeSelect.options[panelTypeSelect.selectedIndex].value;
    

    
    console.log('Power Range:', powerRange);
    console.log('Inverter Type:', inverterType);
    console.log('Installation Type:', installationType);

    panelDescription = powerRange + (panelType === 'canadian' ? '' : '');

    

    let secondPageBackgroundImage = getInverterImage(inverterType, panelType);
    let thirdPageBackgroundImage = getThirdPage(inverterType);
    let fourthPageBackgroundImage = getFourthPage(inverterType);
    let fifthPageBackgroundImage = getFifthPage (panelType);
    let SixthPageBackgroundImage = getSixthPage (panelType);



    

 
    let backgroundImage = getFirstPageBackgroundImage(installationType);

    let tableContent = createTableContent(panelDescription, inverterType, inverterType === 'hybridWithStorage' || 'hybridWithStorageFox', panelType);

    let content = '';

    // Załóżmy, że powerRange to liczba paneli
// Jeśli masz już zdefiniowane funkcje odpowiedzialne za generowanie treści PDF (np. createPDFContent),
// upewnij się, że są one tutaj prawidłowo wywołane z odpowiednimi argumentami.


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
        <span id="device-name">Wycena instalacji fotowoltaicznej</span>
      </div>

    </div>
    <div id="bottom-page">
        <div id="bottom-top-left">
            <span>Przygotowano dla:</span>
        </div>
        <div id="bottom-top-right">
            <span id="userName">${userName}</span>
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
    <div id="page-second-price" style="background-image: url('${secondPageBackgroundImage}');">
            <div id="table">
            ${tableContent}
            </div>
            <div id="pricePVPDF">
                <span>CENA KOŃCOWA INSTALACJI: ${pricePV} zł ( brutto 8% VAT )</span>
            </div>
    </div>
    </div>
    `;

    const thirdPageContent = `
    <div id="page">
    <div id="page-second" style="background-image: url('${thirdPageBackgroundImage}');">
    </div>
    </div>
    `;

    const FourthPageContent = `
    <div id="page">
    <div id="page-second" style="background-image: url('${fourthPageBackgroundImage}');">
    </div>
    </div>
    `;
    const FiftPageContent = `
    <div id="page">
    <div id="page-second" style="background-image: url('${fifthPageBackgroundImage}');">
    </div>
    </div>
    `;
    const sixthPageContent = `
    <div id="page">
    <div id="page-second" style="background-image: url('${SixthPageBackgroundImage}');">
    </div>
    </div>
    `;

    const seventhPageContent = `
    <div id="page-last" style="background-image: url('${imageLastPV}');">
    </div>
    `;
 
 

        const storageImage1 = imageMVSTORAGE;
        const storageImage2 = imageMVSTORAGE1;
        const storageImage3 = imageMVSTORAGE2;
        const storageImage4 = imageMVSTORAGE3;
        const ZNLast = ZNDs3;
        const FoxStorage1 = FoxStorageDS1; 
        const FoxStorage2 = FoxStorageDS2; 



        const storagePageContent1 = `<div id="page" style="background-image: url('${storageImage1}');"></div>`;
        const storagePageContent2 = `<div id="page" style="background-image: url('${storageImage2}');"></div>`;
        const storagePageContent3 = `<div id="page" style="background-image: url('${storageImage3}');"></div>`;
        const storagePageContent4 = `<div id="page" style="background-image: url('${storageImage4}');"></div>`;
        const LastZN = `<div id="page" style="background-image: url('${ZNLast}');"></div>`;
        const FSTOR1 = `<div id="page" style="background-image: url('${FoxStorage1}');"></div>`;
        const FSTOR2 = `<div id="page" style="background-image: url('${FoxStorage2}');"></div>`;




        if (inverterType === 'hybridWithStorage') {
            if (panelType === 'zn-shine') {
                // Użyj treści specyficznej dla hybrydy z magazynem energii i paneli ZN-Shine
                content = firstPageContent + secondPageContent + thirdPageContent + FourthPageContent + FiftPageContent + sixthPageContent + LastZN+ storagePageContent1 + storagePageContent2 + storagePageContent3 + storagePageContent4 + seventhPageContent;
            } else {
                // Użyj standardowej treści dla hybrydy z magazynem energii
                content = firstPageContent + secondPageContent + thirdPageContent + FourthPageContent + FiftPageContent + sixthPageContent + storagePageContent1 + storagePageContent2 + storagePageContent3 + storagePageContent4 + seventhPageContent;
            }
        }
        
        else if (inverterType === 'hybridWithStorageFOX') {
            if (panelType === 'zn-shine') {
                // Treść specyficzna dla hybrydy FOX z magazynem energii i paneli ZN-Shine
                content = firstPageContent + secondPageContent + thirdPageContent + FourthPageContent + FiftPageContent + sixthPageContent + LastZN + FSTOR1+FSTOR2 + seventhPageContent;
            } else {
                // Standardowa treść dla hybrydy FOX z magazynem energii
                content = firstPageContent + secondPageContent + thirdPageContent + FourthPageContent + FiftPageContent + sixthPageContent +FSTOR1 + FSTOR2 + seventhPageContent;
            }
        }
        
        else {
            if (panelType === 'zn-shine') {
                // Użyj treści specyficznej dla paneli ZN-Shine
                content = firstPageContent + secondPageContent + thirdPageContent + FourthPageContent + FiftPageContent + sixthPageContent + LastZN+ seventhPageContent;

            } else {
                // Użyj standardowej treści
                content = firstPageContent + secondPageContent + thirdPageContent + FourthPageContent + FiftPageContent + sixthPageContent + seventhPageContent;

            }
        }
    
       
const opt = {
    margin: 0,
    filename: `Oferta_${userName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

// Użyj html2pdf do konwersji treści HTML na PDF i zainicjuj pobieranie
html2pdf().from(content).set(opt).save();
}




