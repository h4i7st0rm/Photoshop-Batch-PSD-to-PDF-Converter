// input files location
var inputFolder = Folder.selectDialog("Choose the folder that contains psd files");
var inputFiles = inputFolder.getFiles("*.psd");

// output files location
var outputFolder = Folder.selectDialog("Choose the folder to save files to");

// SET the options for saving pdf files
var PDFOptions = new PDFSaveOptions();
PDFOptions.PDFCompatibility = PDFCompatibility.PDF13;

for (var i = 0; i < inputFiles.length; i++) {
    open(inputFiles[i]);

    // Extract the base name without the extension
    var baseName = inputFiles[i].name.replace(/\.[^\.]+$/, "");

    // Set the key for the "No" button (key code for 'n' is 110)
    var keyState = ScriptUI.environment.keyboardState;
    keyState.keyName = "n";

    // Simulate a key press to automatically select "No"
    var result = app.activeDocument.saveAs(
        new File(outputFolder + "/" + baseName + ".pdf"),
        PDFOptions
    );

    // Close the document without saving changes
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

alert("All psd Files have been converted to PDF!");
