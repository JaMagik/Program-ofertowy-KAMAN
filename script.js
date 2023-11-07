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


function getSecondPageBackgroundImageByType(pdfType) {
    switch(pdfType) {
        case "Mitsubishi-cylinder":
            return imageBase61;
            case "Mitsubishi-hydrobox":
            return imageBase61; // Zakładam, że masz zdefiniowane zmienne dla każdego typu
        case "Toshiba 3F":
            return imageBaseForToshiba;
            case "Toshiba 1F":
                return imageBaseForToshiba;
        case "ATLANTIC":
            return  imageBase56;
            case "GALMET-PRIMA":
            return  imageBaseGalmetZEW;
            case "HEIZTECHNIK":
            return imageBaseHeizZEW;
            case "VIESSMAN":
                return imageBaseViessmanZEW;
        default:
            return null; // lub jakiś domyślny obraz, jeśli potrzebujesz
    }
}

function getBackgroundImageByType(pdfType) {
    switch(pdfType) {
        case "Mitsubishi-cylinder":
            return imageBaseMitsubishiCylinder;
            case "Mitsubishi-hydrobox":
            return imageBase64;
        case "Toshiba 3F":
            return imageBase57;
            case "Toshiba 1F":
            return imageBase57;
        case "ATLANTIC":
            return imageBaseForAtlantic;
            case "GALMET-PRIMA":
            return imageBaseGalmetWEW;
            case "HEIZTECHNIK":
            return imageBaseHeizWEW;
            case "VIESSMAN":
                return imageBaseViessmanWEW;
            
        default:
            return null; // lub jakiś domyślny obraz, jeśli potrzebujesz
    }
}

function generatePDF() {
    const offerNumber = generateOfferNumber();
    console.log(offerNumber); 
    const userName = document.getElementById('userName').value;
    const pdfType = document.getElementById('pdfType').value;
    const power = document.getElementById('powerOptions').value; // Pobranie wartości mocy
    const priceInput = document.getElementById("price");
    const pdfPriceValue = priceInput.value;
    


    let tableContent = getTableContentByType(pdfType, power);
    let backgroundImage = getBackgroundImageByType(pdfType);
    let secondPageBackgroundImage = getSecondPageBackgroundImageByType(pdfType);


    


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
                <span id="client-name">${userName}</span>
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
                <h1>Opcje dodatkowe Pompy Ciepła</h1>
            </div>
            <div id="table-container">
                ${getAdditionalOptionsTable()}
            </div>
            <div id="opcje-dodatkowe">
                <p id="Dodatek">UWAGI: Opcje Dodatkowe nie są wymagane przez Producentów* do pracy instalacji i o ich zasadności każdorazowo należy konsultować się z Opiekunem Handlowym lub Doradcą Technicznym</p>
            </div>
            <div id="useful-links">
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
`;

const FourthPageContent = `
    <div id="page">
        <div id="top-page" style="background-image: url('${imageBase59}');">
    </div>
`;

    const content = firstPageContent + secondPageContent + thirdPageContent + FourthPageContent;

    const opt = {
        margin: 0,
        filename: `${userName}_Oferta.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(content).set(opt).save();
}

function getTableContentByType(pdfType, power) {

    let tableContent = '';

    switch(pdfType) {
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
              <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 200L </td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>4</td>
              <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
              <td>szt.</td>
              <td>1</td>
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
              <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 200L</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>4</td>
              <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
              <td>szt.</td>
              <td>1</td>
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
        <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 200L</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
        <td>szt.</td>
        <td>1</td>
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
              <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 200L </td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>4</td>
              <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
              <td>szt.</td>
              <td>1</td>
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
                <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 300L</td>
                <td>szt.</td>
                <td>1</td>
            </tr>
            <tr>
                <td>4</td>
                <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                <td>szt.</td>
                <td>1</td>
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
              <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 200L</td>
              <td>szt.</td>
              <td>1</td>
          </tr>
          <tr>
              <td>4</td>
              <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
              <td>szt.</td>
              <td>1</td>
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
        <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 200L</td>
        <td>szt.</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
        <td>szt.</td>
        <td>1</td>
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
                                <td>Ecodan | Zubadan Inverter | Split | 14,0kW, 400V, R32 PUD-SHWM100YAA</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ecodan | moduł wew. 300 litrów | Split | grz. 6/9 kW, 3x400V | naczynie wz. 10L | grzanie EHSD-YM6/9D</td>
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
                                <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                                <td>szt.</td>
                                <td>1</td>
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
                                <td>Ecodan | Zubadan Inverter | Split | 12,0kW, 400V, R32 PUD-SHWM100YAA</td>
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
                                <td>Elementy hydrauliczne i elektryczne do pompy ciepła</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                                <td>szt.</td>
                                <td>1</td>
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
                            <td>Ecodan | Zubadan Inverter | Split | 10,0kW, 400V, R32 PUD-SHWM100YAA</td>
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
                            <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                            <td>szt.</td>
                            <td>1</td>
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
                            <td>Ecodan | Zubadan Inverter | Split | 8,0kW, 400V, R32 PUD-SHWM100YAA</td>
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
                            <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                            <td>szt.</td>
                            <td>1</td>
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
                                <td>Ecodan | Zubadan Inverter | Split | 14,0kW, 400V, R32 PUD-SHWM100YAA</td>
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
                                <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 300L</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                                <td>szt.</td>
                                <td>1</td>
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
                                <td>Ecodan | Zubadan Inverter | Split | 12,0kW, 400V, R32 PUD-SHWM100YAA</td>
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
                                <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 300L</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                                <td>szt.</td>
                                <td>1</td>
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
                            <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 300L</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                            <td>szt.</td>
                            <td>1</td>
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
                            <td>Ecodan | Zubadan Inverter | Split | 8,0kW, 400V, R32 PUD-SHWM100YAA</td>
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
                            <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 300L</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                            <td>szt.</td>
                            <td>1</td>
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
                                <td>Ecodan | Zubadan Inverter | Split | 6,0kW, 400V, R32 PUD-SHWM100YAA</td>
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
                                <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 300L</td>
                                <td>szt.</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                                <td>szt.</td>
                                <td>1</td>
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
            <td>ATLANTIC EXTENSA AI DUO 15 KW 1F</td>
            <td>szt.</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2</td>
            <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
            <td>szt.</td>
            <td>1</td>
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
        <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
        <td>szt.</td>
        <td>1</td>
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
                            <td>ATLANTIC EXTENSA AI DUO 6 KW 1F</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                            <td>2</td>
                            <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                            <td>szt.</td>
                            <td>1</td>
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

case "VIESSMAN":
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
        <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 300L</td>
        <td>szt.</td>
        <td>1</td>
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
    <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 300L</td>
    <td>szt.</td>
    <td>1</td>
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
                                <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 300L</td>
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
                                <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                                <td>szt.</td>
                                <td>1</td>
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
                        <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 200L</td>
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
                            <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                            <td>szt.</td>
                            <td>1</td>
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
                            <td>GALMET PRIMA 8 KW JEDNOSTKA ZEWNĘTRZNA ORAZ JEDNOSTKA WEWNĘTRZNA ( HYDROBOX )</td>
                            <td>szt.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 200L</td>
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
                            <td>BUFFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
                            <td>szt.</td>
                            <td>1</td>
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
  

function getAdditionalOptionsTable() {
    return `
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
        <td>Modem Internetowy (dotyczy pompy ciepła MITSUBISHI )</td>
        <td>szt.</td>
        <td>480zł</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Licznik energii elektrycznej 3f</td>
        <td>szt.</td>
        <td>540zł</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Kabel grzewczy</td>
        <td>kpl.</td>
        <td>500zł</td>
    </tr>
    <tr>
        <td>9</td>
        <td>40cm (górna krawędź krawężnika ułożona na równo z gruntem chłonnym)</td>
        <td>kpl.</td>
        <td>300zł</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Doprowadzenie kabla siłowego do pompy ciepła</td>
        <td>mb.</td>
        <td>55zł</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Demontaż starego źródła ciepła</td>
        <td>kpl.</td>
        <td>500zł</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Ups40-5SAh (zabezpieczenie układu wodnego na wypadek braku prądu)</td>
        <td>kpl.</td>
        <td>1250zł</td>
    </tr>
    <tr>
        <td>13</td>
        <td>BUFOR (SPRZĘGŁO HYDRAULICZNE ) 40-140L + OSPRZET</td>
        <td>kpl.</td>
        <td>1900 zł</td>
    </tr>
</table>

    `;
}
















