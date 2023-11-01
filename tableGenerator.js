


function generateTable() {
  
  var pdfType = document.getElementById('pdfType').value;
  var power = document.getElementById('powerOptions').value;
  var tableContent = getTableContentByType(pdfType, power);
  document.getElementById('table-container').innerHTML = tableContent;
}

function getTableContentByType(pdfType, power) {
  switch(pdfType) {
    case "Toshiba":
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
            <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 11 KW 1101HRW-E 1101XWH**W-E</td>
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
            <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 200L KOSPEL</td>
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
      } else if (power === '11 kW') {
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
            <td> JEDNOSTKA WEWNĘTRZNA TOSHIBA 11 KW 1101HRW-E 1101XWH**W-E</td>
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
            <td>ZASOBNIK CIEPŁEJ WODY UŻYTKOWEJ 200L KOSPEL</td>
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
    case "Mitsubishi":
      if (power === '12 kW') {
        // Tabela dla Mitsubishi 12 kW
        tableContent = '...'; // Tutaj wstaw kod HTML dla tabeli
      } // itd. dla innych mocy
      break;
    case "ATLANTIC":
      // Analogicznie dla ATLANTIC
      break;
  }
  return tableContent;
  
}


export { generateTable };
