function findWinner() {
    let input = document.getElementById('mage-list').value;

    if (input === '') {
        alert('Provide some input!');
        return;
    }

    let mageList = input.split('\n');

    let validMageList = [];

    mageList.forEach(function(mage) {
        if (checkMage(mage, 'Paralyze')) validMageList.push(mage);
    });

    let winner = validMageList[Math.floor(Math.random() * validMageList.length)];

    document.getElementById('winner').value=winner;

}

function checkMage(mage, discount) {
    let splitByTab = mage.split('\t');

    if (splitByTab.length < 2) return false;

    // Check Mage
    if (splitByTab[1] === "ASCENDANT" || splitByTab[1] === "ERADICATION" || splitByTab[1] === "NETHER" ||
        splitByTab[1] === "PHANTASM" || splitByTab[1] === "VERDANT") {

    
        // Check Alliance
        if (splitByTab[8] === "FH" || splitByTab[8] === "A" || splitByTab[8] === "X") return false;

        if (splitByTab[7] === 'AI' || splitByTab[7] === "NAP" || splitByTab[7] === "ALLY") return false;

        if (discount.trim() !== "" && splitByTab[6].trim() === discount.trim()) return false;
    }


    return true;
}


function clearInput(element) {
    // Check if the textarea value is the initial placeholder text
    if (element.value === "Paste ranking list." || element.value === "Winner will be shown here.") {
        // Clear the textarea value
        element.value = "";
    }
    // Remove the onclick event handler after the first click
    element.onclick = null;
}