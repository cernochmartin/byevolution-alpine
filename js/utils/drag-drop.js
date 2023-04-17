//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
  dragFile = dropArea.querySelector(".drag-file"),
  button = dropArea.querySelector(".file-input-button"),
  input = dropArea.querySelector(".file-input");

let documentImages = document.querySelector("#document-images");

/*
 * When the user clicks the previous button, the current section is hidden and the previous section is
 * shown.
 * @param sectionContainer - the section that is currently being displayed
 */
const prevButtonNavigation = (sectionContainer) => {
  sectionContainer.classList.add("hidden");
  sectionContainer.previousElementSibling.classList.add("block");
  sectionContainer.previousElementSibling.classList.remove("hidden");
};

/*
 * When the next button is clicked, hide the current section and show the next section.
 * @param sectionContainer - the section that is currently being displayed
 */
const nextButtonNavigation = (sectionContainer) => {
  sectionContainer.classList.add("hidden");
  sectionContainer.nextElementSibling.classList.add("block");
  sectionContainer.nextElementSibling.classList.remove("hidden");
};

// Files array to check whether there is any file 
// selected or not
let documentFileObj = {
  fileName: []
};


// Input validation to check whether the fileName
// array in documentFileObj has any file or not and
// throw the error accordingly
const validationInputs = (container, dataObject) => {
  const errorMessage = container.querySelector("#input-empty-error");
  const emptyFields = [];
  for (const key in dataObject) {
    if (dataObject[key].length <= 0) {
      emptyFields.push(key.toUpperCase());
    }
  }
  errorMessage.textContent = `Please fill ${emptyFields.join()} fields!!`;
  errorMessage.classList.remove("hidden");
  setTimeout(() => {
    errorMessage.classList.add("hidden");
  }, 2000);
};



button.onclick = () => {
  input.click(); //if user click on the button then the input also gets clicked
};

input.addEventListener("change", function (e) {
  const target = e.target;
  dropArea.style.height = "5rem";
  setttingFileValue(target);
});

// Finding the document closest to the delete button and removing it from the list
documentImages.addEventListener("click", (e) => {
  const target = e.target;
  const deleteFileButton = target.closest(".delete-document");
  const documentsWrapper = target.closest("#document-images");
  const documentToDelete = target.closest(".document-file");
  const documentName = documentToDelete.firstElementChild.children[1].innerText;

  if (deleteFileButton === null) return;

  /* This is finding the index of the file name in the documentFileObj object. */
  const index = documentFileObj["fileName"].find((x) => x === documentName);
  /* This is removing the file name from the documentFileObj object. */
  documentFileObj["fileName"].splice(index, 1);
  documentsWrapper.removeChild(documentToDelete);
});

/**
 * If the file type is jpg, jpeg, or png, return the text-violet-600 fa-image class. Otherwise, return
 * the text-red-600 fa-file-pdf class.
 * @param fileType - The file type of the file.
 * @returns A function that takes a fileType as an argument and returns a string.
 */
const fileTypeLogo = (fileType) => {
  if (fileType === "jpg" || fileType === "jpeg" || fileType === "png") {
    return "text-violet-600 fa-image";
  } else {
    return "text-red-600 fa-file-pdf";
  }
};

// //If user Drag File Over DropArea
/* This is an event listener. It is listening for the dragover event. When the dragover event is
triggered, it will prevent the default behavior, add the active class to the dropArea element, and
change the text of the dragFile element. */
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragFile.textContent = "Release to Upload File";
});

// //If user leave dragged File from DropArea
/* This is an event listener. It is listening for the dragleave event. When the dragleave event is
triggered, it will remove the active class from the dropArea element and change the text of the
dragFile
element. */
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragFile.textContent = "Drag files here to upload";
});

//If user drop File on DropArea
/* This is an event listener. It is listening for the drop event. When the drop event is triggered, it
will prevent the default behavior, remove the active class from the dropArea element, change the
text of the dragFile element, and call the setttingFileValue function. */
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  const target = e.dataTransfer;
  dropArea.classList.remove("active");
  dragFile.textContent = "Drag files here to upload";
  dropArea.style.height = "5rem";
  setttingFileValue(target);
});

// Navigation part
/* This is an event listener. It is listening for the click event. When the click event is triggered,
it will check if the target is the nextButton or prevButton. If it is the nextButton, it will check
if the documentFileObj object has a fileName property. If it does, it will call the
nextButtonNavigation function. If it does not, it will show an alert. If the target is the
prevButton, it will call the prevButtonNavigation function. */
document.querySelector("body").addEventListener("click", (e) => {
  const target = e.target;
  const prevButton = target.closest(".document-prev-button");
  const nextButton = target.closest(".document-next-button");
  const sectionContainer = target.closest(".section-container");

  if (nextButton) {
    if (documentFileObj["fileName"].length !== 0) {
      nextButtonNavigation(sectionContainer);
    } else {
      validationInputs(sectionContainer, documentFileObj);
    }
  }
console.log(documentFileObj);
  if (prevButton) {
    prevButtonNavigation(sectionContainer);
  }
});


const setttingFileValue = (target) => {
  
  for(var i =0; i<target.files.length;i++){
    const fileName = target.files[i].name;
    const fileSize = target.files[i].size;
    const fileType = target.files[i].type.split("/").pop(); //fetching only the part after slash
    let filesizeErrorMessage = document.getElementById("filesize-error");
    //let filetypeErrorMessage = document.getElementById("filetype-error");

    /* This is checking the file size. If the file size is greater than 5mb, it will show an error
    message. */
    let sizeInMB = Number.parseFloat(fileSize / (1024 * 1024)).toFixed(2);
    if (sizeInMB > 5) {
      filesizeErrorMessage.classList.remove("hidden");
    } else {
      filesizeErrorMessage.classList.add("hidden");
      /* This is checking the file type. If the file type is not pdf or image, it will show an error message. */
      //const fileTypes = ["application/pdf","image/png","image/jpg","image/jpeg"]
      //if (fileTypes.includes(target.files[i].type)) {
        //filetypeErrorMessage.classList.add("hidden");

        /* This is creating a new element and setting the file name, file size, and file type. */
        let newDocument = document.createElement("li");

        /* Setting the class attribute of the newDocument element. */
        newDocument.setAttribute(
          "class",
          "py-3 flex justify-between items-center md:items-end text-xs md:text-sm text-slate-700 border-b-2 border-slate-100 gap-1 document-file"
        );

        /* Setting the html markup of the new element and setting the file name, file size, and file type. */
        newDocument.innerHTML = `
            <div class="record_container flex-shrink-0">
              <div class="rounded w-14 h-14 p-2.5 my-2.5 mx-auto flex content-center justify-center flex-wrap">
              <img :src="'/imgs/icons/file-extensions/'+${fileType}+'.png'" alt="c.metadata.format" width="25px" height="auto">
              </div>
              <p class="text-base font-medium">${fileName.slice(0,17)}</p>
              <p class="text-xs text-gray-dark">${fileType}</p>
              <p class="text-sm">${sizeInMB}</p>
              <button class="delete-document"><img :src="'/imgs/icons/main/bin.svg" alt="Remove" width="15px" height="auto"></button>
            </div>
              `;

              /*
              <p class="whitespace-nowrap overflow-hidden text-ellipsis w-40"><i class="fa-solid text-xl mr-5 ${fileTypeLogo(
                fileType
              )}"></i> 
              <span>${fileName}<span></p>
              <p>${fileType}</p>
              <p>${sizeInMB}mb</p>
              <p>Uploaded</p>
              <button class="delete-document"><i class="fa-solid fa-trash"></i></button>
              */ 
        /* Adding the newDocument element to the documentImages element. */
        documentImages.append(newDocument);
        /* This is adding the file name to the documentFileObj object. */
        documentFileObj["fileName"].push(fileName);
      //} else {
        //filetypeErrorMessage.classList.remove("hidden");
      //}
    }


  }

};
