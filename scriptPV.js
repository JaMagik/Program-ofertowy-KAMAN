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
   
}

loadImageDataForPV(); // Poprawione na właściwą nazwę funkcji

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

function getPVTableContent(powerRange) {
    let tableContent = '';
    const powerPerPanel = 0.455; // Moc jednego panelu w kW
    const totalPower = powerRange * powerPerPanel; // Całkowita moc paneli

    // Teraz będziemy używać konstrukcji switch
    switch (true) {
        case (totalPower > 9.2):
            // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
      <td>Canadian Solar 21 sztuk ( 9,55 kWp)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Falownik FOXESS T10</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
  <td>3</td>
  <td>Konstrukcja montażowa CORAB</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
      </tbody>
  </table>
            `;
            break;

            case (totalPower > 8.8):
                // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
          <td>Canadian Solar 20 sztuk ( 9,1 kWp)</td>
          <td>szt.</td>
          <td>1</td>
      </tr>
      <tr>
          <td>2</td>
          <td>Falownik FOXESS T10</td>
          <td>szt.</td>
          <td>1</td>
      </tr>
      <tr>
      <td>3</td>
      <td>Konstrukcja montażowa CORAB</td>
      <td>szt.</td>
      <td>1</td>
    </tr>
    <tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
          </tbody>
      </table>
                `;
                break;

                case (totalPower > 8.5):
            // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
      <td>Canadian Solar 19 sztuk ( 8,65 kWp)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Falownik FOXESS T8</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
  <td>3</td>
  <td>Konstrukcja montażowa CORAB</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
      </tbody> 
  </table>
            `;
            break;

            case (totalPower > 7.8 ):
            // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
      <td>Canadian Solar 18 sztuk ( 8,19 kWp)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Falownik FOXESS T8</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
  <td>3</td>
  <td>Konstrukcja montażowa CORAB</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
      </tbody>
  </table>
            `;
            break;

            case (totalPower > 7.4):
            // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
      <td>Canadian Solar 17 sztuk ( 7,735 kWp)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Falownik FOXESS T8</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
  <td>3</td>
  <td>Konstrukcja montażowa CORAB</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
      </tbody>
  </table>
            `;
            break;

            case (totalPower > 6.9):
            // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
      <td>Canadian Solar 16 sztuk ( 7,28 kWp)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Falownik FOXESS T8</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
  <td>3</td>
  <td>Konstrukcja montażowa CORAB</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
      </tbody>
  </table>
            `;
            break;

            case (totalPower > 6.5):
            // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
      <td>Canadian Solar 15 sztuk ( 6,825 kWp)</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Falownik FOXESS T8</td>
      <td>szt.</td>
      <td>1</td>
  </tr>
  <tr>
  <td>3</td>
  <td>Konstrukcja montażowa CORAB</td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
      </tbody>
  </table>
            `;
            break;

            case (totalPower > 6):
                // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
          <td>Canadian Solar 14 sztuk ( 6,37 kWp)</td>
          <td>szt.</td>
          <td>1</td>
      </tr>
      <tr>
          <td>2</td>
          <td>Falownik FOXESS T6</td>
          <td>szt.</td>
          <td>1</td>
      </tr>
      <tr>
      <td>3</td>
      <td>Konstrukcja montażowa CORAB</td>
      <td>szt.</td>
      <td>1</td>
    </tr>
    <tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
          </tbody>
      </table>

      
                `;
                break;

                case (totalPower > 5.6):
                    // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
              <td>Canadian Solar 13 sztuk ( 5,915 kWp)</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Falownik FOXESS T6</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
          <td>3</td>
          <td>Konstrukcja montażowa CORAB</td>
          <td>szt.</td>
          <td>1</td>
        </tr>
        <tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
              </tbody>
          </table>
                    `;
                    break;

                    case (totalPower > 5.2):
                        // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
                  <td>Canadian Solar 12 sztuk ( 5,46 kWp)</td>
                  <td>szt.</td>
                  <td>1</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Falownik FOXESS T6</td>
                  <td>szt.</td>
                  <td>1</td>
              </tr>
              <tr>
              <td>3</td>
              <td>Konstrukcja montażowa CORAB</td>
              <td>szt.</td>
              <td>1</td>
            </tr>
            <tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
                  </tbody>
              </table>
        
              
                        `;
                        break;       
                        
                        case (totalPower > 4.7):
                            // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
                      <td>Canadian Solar 11 sztuk ( 5,005 kWp)</td>
                      <td>szt.</td>
                      <td>1</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Falownik FOXESS T6</td>
                      <td>szt.</td>
                      <td>1</td>
                  </tr>
                  <tr>
                  <td>3</td>
                  <td>Konstrukcja montażowa CORAB</td>
                  <td>szt.</td>
                  <td>1</td>
                </tr>
                <tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
                      </tbody>
                  </table>
            
                  
                            `;
                            break;   
                            
                            case (totalPower > 4.2):
                                // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
                          <td>Canadian Solar 10 sztuk ( 4,55 kWp)</td>
                          <td>szt.</td>
                          <td>1</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Falownik FOXESS T4</td>
                          <td>szt.</td>
                          <td>1</td>
                      </tr>
                      <tr>
                      <td>3</td>
                      <td>Konstrukcja montażowa CORAB</td>
                      <td>szt.</td>
                      <td>1</td>
                    </tr>
                    <tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
                          </tbody>
                      </table>
                                `;
                                break;          
                                case (totalPower > 3.9):
                                // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
                          <td>Canadian Solar 9 sztuk ( 4,09 kWp)</td>
                          <td>szt.</td>
                          <td>1</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Falownik FOXESS T4</td>
                          <td>szt.</td>
                          <td>1</td>
                      </tr>
                      <tr>
                      <td>3</td>
                      <td>Konstrukcja montażowa CORAB</td>
                      <td>szt.</td>
                      <td>1</td>
                    </tr>
                    <tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
                          </tbody>
                      </table>
                                `;
                                break;      
                                case (totalPower > 3.3):
                                // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
                          <td>Canadian Solar 8 sztuk ( 3,64 kWp)</td>
                          <td>szt.</td>
                          <td>1</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Falownik FOXESS T4</td>
                          <td>szt.</td>
                          <td>1</td>
                      </tr>
                      <tr>
                      <td>3</td>
                      <td>Konstrukcja montażowa CORAB</td>
                      <td>szt.</td>
                      <td>1</td>
                    </tr>
                    <tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
                          </tbody>
                      </table>
                                `;
                                break;                       
                                case (totalPower > 2.9):
                                    // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
                              <td>Canadian Solar 7 sztuk ( 3,185 kWp)</td>
                              <td>szt.</td>
                              <td>1</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>Falownik FOXESS T4</td>
                              <td>szt.</td>
                              <td>1</td>
                          </tr>
                          <tr>
                          <td>3</td>
                          <td>Konstrukcja montażowa CORAB</td>
                          <td>szt.</td>
                          <td>1</td>
                        </tr>
                        <tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
                              </tbody>
                          </table>
                                    `;
                                    break;     
                                    case (totalPower > 2.4):
                                // Logika dla mniejszej liczby paneli (przykładowe wartości)
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
                          <td>Canadian Solar 6 sztuk ( 2,73 kWp)</td>
                          <td>szt.</td>
                          <td>1</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Falownik FOXESS T4</td>
                          <td>szt.</td>
                          <td>1</td>
                      </tr>
                      <tr>
                      <td>3</td>
                      <td>Konstrukcja montażowa CORAB</td>
                      <td>szt.</td>
                      <td>1</td>
                    </tr>
                    <tr>
  <td>4</td>
  <td>ZGŁOSZENIE MIKRO-INSTALACJI DO OPERATORA SIECI </td>
  <td>szt.</td>
  <td>1</td>
</tr>
<tr>
  <td>5/td>
  <td> MONTAŻ SYSTEMU </td>
  <td>szt.</td>
  <td>1</td>
</tr>
                          </tbody>
                      </table>
                                `;
                                break;                       
                  
    
             

        default:
            // Logika dla większej liczby paneli
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
            </tbody>
        </table>
            `;
            break;
    }

    return tableContent;
} //



async function generatePVPDF() {
    const offerNumber = generateOfferNumber();
    const userName = document.getElementById('userName').value; // Poprawione z userName na clientName
    const powerRange = parseInt(document.getElementById('powerRange').value); // Pobierz wartość jako liczbę
    const installationType = document.getElementById('installationType').value;
    const pricePV = document.getElementById('pricePV').value;


    


    let backgroundImage = getFirstPageBackgroundImage(installationType);
    let tableContent = getPVTableContent(powerRange); // Załóżmy, że powerRange to liczba paneli
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
    <div id="page-second-price" style="background-image: url('${imageFOX2}');">
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
    <div id="page-second" style="background-image: url('${imageFOXDS}');">
    </div>
    </div>
    `;

    const FourthPageContent = `
    <div id="page">
    <div id="page-second" style="background-image: url('${imageFOXDS2}');">
    </div>
    </div>
    `;
    const FiftPageContent = `
    <div id="page">
    <div id="page-second" style="background-image: url('${imageCSDS1}');">
    </div>
    </div>
    `;
    const sixthPageContent = `
    <div id="page">
    <div id="page-second" style="background-image: url('${imageCSDS2}');">
    </div>
    </div>
    `;
    const seventhPageContent = `
    <div id="page-last" style="background-image: url('${imageLastPV}');">
    </div>
    `;

    const content = firstPageContent + secondPageContent + thirdPageContent + FourthPageContent + FiftPageContent + sixthPageContent + seventhPageContent;

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

