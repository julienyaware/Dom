const darkLightMode = () => {
    document.body.classList.toggle("dark-mode");
}

const citySearch = () => {
    const cityTable = document.getElementById('citiesTable');
    const tableRow = cityTable.getElementsByTagName('tr')
    const inputCity = document.getElementById('searchInput');
    const filterCity = inputCity.value.toUpperCase();

    for (let i = 0; i < tableRow.length; i++) {
        let tabelData = tableRow[i].getElementsByTagName("td")[0];
        if (tabelData) {
            let txtValue = tabelData.textContent || tabelData.innerText;
            if (txtValue.toUpperCase().indexOf(filterCity) > -1) {
                tableRow[i].style.display = "";
            } else {
                tableRow[i].style.display = "none";
            }
        }
    }
}


const sortTable = () => {
    const cityTable = document.getElementById('citiesTable');
    let switchUp
    let i
    let rearrangeRows = true
    while (rearrangeRows) {
        rearrangeRows = false
        let tableRows = cityTable.rows
        for (i = 1; i < (tableRows.length - 1); i++) {
            switchUp = false;
            rowOne = tableRows[i].getElementsByTagName("td")[0];
            rowTwo = tableRows[i + 1].getElementsByTagName("td")[0];
            if (rowOne.innerHTML.toLowerCase() > rowTwo.innerHTML.toLowerCase()) {
                switchUp = true;
                break;
            }
        }
        if (switchUp) {
            tableRows[i].parentNode.insertBefore(tableRows[i + 1], tableRows[i]);
            rearrangeRows = true;
        }
    }
}