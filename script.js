function search() {
    var parent1 = document.getElementById("parent1").value;
    var parent2 = document.getElementById("parent2").value;
    var resultText = document.getElementById("result-text");
    var result = search_web(parent1, parent2);

    resultText.innerHTML = result;
}

function search_web(parent1, parent2) {
    var childBreedData = {
        "Common": {"Common": [95, 4.8, 0.2, 0, 0], "Uncommon": [52.5, 44.9, 2.5, 0.1, 0], "Rare": [47.6, 7.3, 42.6, 2.4, 0.1], "Epic": [47.5, 2.5, 5.1, 42.5, 2.4], "Legendary": [47.5, 2.4, 0.2, 4.9, 45]},
        "Uncommon": {"Common": [52.5, 44.9, 2.5, 0.1, 0], "Uncommon": [10, 85, 4.8, 0.2, 0], "Rare": [5.1, 47.4, 44.9, 2.5, 0.1], "Epic": [5, 42.6, 7.4, 42.6, 2.4], "Legendary": [5, 42.5, 2.5, 5, 45]},
        "Rare": {"Common": [47.6, 7.3, 42.6, 2.4, 0.1], "Uncommon": [5.1, 47.4, 44.9, 2.5, 0.1], "Rare": [0.2, 9.8, 85, 4.8, 0.2], "Epic": [0.1, 5, 47.5, 44.9, 2.5], "Legendary": [0.1, 4.9, 42.6, 7.3, 45.1]},
        "Epic": {"Common": [47.5, 2.5, 5.1, 42.5, 2.4], "Uncommon": [5, 42.5, 2.5, 5, 45], "Rare": [0.1, 5, 47.5, 44.9, 2.5], "Epic": [0, 0.2, 10, 85, 4.8], "Legendary": [0, 0.1, 5.1, 47.4, 47.4]},
        "Legendary": {"Common": [47.5, 2.4, 0.2, 4.9, 45], "Uncommon": [95, 4.8, 0.2, 0, 4], "Rare": [0.1, 4.9, 42.6, 7.3, 45.1], "Epic": [0, 0.1, 5.1, 47.4, 47.4], "Legendary": [0, 0, 0.2, 9.8, 90]}
    };

    var a = childBreedData[parent1][parent2];

    var commonColor = 'gray';
    var uncommonColor = 'green';
    var rareColor = 'blue';
    var epicColor = 'purple';
    var legendaryColor = 'orange';

    var resultString = `
        <span style="color: ${commonColor};">\tCommon: \t${a[0]}%</span><br>
        <span style="color: ${uncommonColor};">\tUncommon: \t${a[1]}%</span><br>
        <span style="color: ${rareColor};">\tRare: \t${a[2]}%</span><br>
        <span style="color: ${epicColor};">\tEpic: \t${a[3]}%</span><br>
        <span style="color: ${legendaryColor};">\tLegendary: \t${a[4]}%</span><br>
    `;

    return resultString;
}
