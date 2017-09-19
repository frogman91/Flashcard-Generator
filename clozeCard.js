ClozeCard = function(text, cloze) {
    if (this instanceof ClozeCard) {
        this.cloze = cloze;
        
        // Check the text for the cloze
        if (text.indexOf(cloze) < 0) {
            console.log("Error, cloze not in text");
            this.partial = "Error occurred";
        }
        else { // The cloze was found in the text
             var name = cloze;
            // Create the partial text
            this.partial = text.replace(cloze, " ......"); 

            // Set the answer to be the last name
            this.cloze = name;
        }
    }
    else {
        return new ClozeCard(text, cloze);
    }
}

module.exports = ClozeCard;