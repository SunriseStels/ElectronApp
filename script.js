var dropFileForm = document.getElementById("drop");
var fileLabelText = document.getElementById("drop-label");
var droppedFiles;

function overrideDefault(event) {
   event.preventDefault();
   event.stopPropagation();
}

function fileHover() {
   dropFileForm.classList.add("fileHover");
}

function fileHoverEnd() {
   dropFileForm.classList.remove("fileHover");
}

function addFiles(event) {
   droppedFiles = event.dataTransfer.files;
   showFiles(droppedFiles);
}

function showFiles(files) {
   if (files.length > 1) {
      fileLabelText.innerText = files.length + " files selected";
   } else {
      fileLabelText.innerText = files[0].name;
   }
}