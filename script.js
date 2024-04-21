const products = [
  {
    id: 1,
    name: "BMW",
    shape: [
      {
        type: "sedan",
        data: [
          {
            year: 2021,
            img: "https://www.bmw-egypt.com/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1651158408008.jpg",
          },
          {
            year: 2022,
            img: "https://editorial.pxcrush.net/carsales/general/editorial/bmw-3-series-7.jpg?width=1024&height=682",
          },
          {
            year: 2023,
            img: "https://media.zigcdn.com/media/content/2022/May/1071461072-2023-bmw-3-series-sedan-16title.jpg?tr=w-930",
          },
        ],
      },
      {
        type: "hatchback",
        data: [
          {
            year: 2021,
            img: "https://s2-autoesporte.glbimg.com/Ao4-jsLb64JZHTFM0Ej-nZSkvDw=/0x0:620x413/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/t/J/bxCs9MTcir8A4k0rDOJw/2019-11-18-bmwserie1.jpg",
          },
          {
            year: 2022,
            img: "https://www.topgear.com/sites/default/files/2022/03/P90366835_highRes_the-bmw-118i-m-sport.jpg?w=892&h=502",
          },
          {
            year: 2023,
            img: "https://img.motonews.pl/ncars-new/2019-08-bmw-x6-1.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Mercedes",
    shape: [
      {
        type: "sedan",
        data: [
          {
            year: 2021,
            img: "https://www.cnet.com/a/img/resize/64e43be5e7c9af2cfc34857c3f0f7ae7a6d6e306/hub/2020/03/02/4508b503-4f67-4e64-a7c2-6f5d9caab80e/2021-e-class-promo.jpg?auto=webp&fit=crop&height=675&width=1200",
          },
          {
            year: 2022,
            img: "https://cdn.jdpower.com/JDPA_2022%20Mercedes%20Benz%20C%20300%20AMG%20Line%20Gray%20Rear%20View.jpg",
          },
          {
            year: 2023,
            img: "https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/0589/a0b0f0ecfb3d43f852cadd45d4d0af34x.jpg?impolicy=downsize&w=568",
          },
        ],
      },
      {
        type: "hatchback",
        data: [
          {
            year: 2021,
            img: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/2020-mercedes-amg-a-45-s-hatch-grey-dean-mccartney-1001x565-(1).jpg",
          },
          {
            year: 2022,
            img: "https://i.gaw.to/vehicles/photos/40/27/402730-2022-mercedes-benz-a-class.jpg?1024x640",
          },
          {
            year: 2023,
            img: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1679650597/autoexpress/2023/03/Mercedes%20A-Class%202023-8.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Peugeot",
    shape: [
      {
        type: "sedan",
        data: [
          {
            year: 2021,
            img: "https://i.ytimg.com/vi/5MROu73biYs/maxresdefault.jpg",
          },
          {
            year: 2022,
            img: "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/review/hero_image/peugeot-508-gt-fastback-grey-tw-1200x800-%281%29.jpg",
          },
          {
            year: 2023,
            img: "https://i.ytimg.com/vi/3TjvPKHTqTI/maxresdefault.jpg",
          },
        ],
      },
      {
        type: "hatchback",
        data: [
          {
            year: 2021,
            img: "https://www.carscoops.com/wp-content/uploads/2020/12/2022-peugeot-308-render-3.jpg",
          },
          {
            year: 2022,
            img: "https://img.remediosdigitales.com/ff45af/2560_3000/1366_2000.jpg",
          },
          {
            year: 2023,
            img: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2023-Peugeot-308-GT-Sport-Hatch-Plug-in-Hybrid-hatchback-white-press-image-1001x565p-%281%29.jpg",
          },
        ],
      },
    ],
  },
];

let uploadedImage = null;
function handleImageUpload() {
  const fileInput = document.getElementById("fileInput");
  const preview = document.getElementById("preview");

  const files = fileInput.files;
  if (files.length === 0) {
    preview.innerHTML = "<p>No image selected!</p>";
  } else {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageURL = e.target.result;
      uploadedImage = imageURL;
      console.log(uploadedImage);
      preview.innerHTML = `<img src="${imageURL}" alt="Uploaded Image" width="200">`;
    };

    reader.readAsDataURL(file);
  }
}

const nextButton = document.querySelector(".btn-next");
const previousButton = document.querySelector(".btn-prev");
const steps = document.querySelectorAll(".step");
const form_steps = document.querySelectorAll(".form-step");
const submit = document.querySelector(".btn-submit");
const edit = document.querySelector(".btn-edit");
const save = document.querySelector(".btn-save");
let active = 1;
let buyerType = null;
let manufacturingCompany = null;
let carShape = null;
let manufacturingYear = null;
let productImage = null;
let pieceNameVal = null;
let piecesNumberVal = null;
let seriesNumberVal = null;
let chassisNumberVal = null;
let pieceDescription = null;
let customerName = null;
let customerEmail = null;
let customerPhone = null;
let shippingTo = null;
let arabicName = null;
let englishName = null;
let countryName = null;
let cityName = null;
let streetName = null;
let zipCode = null;
let detailedAddress = null;
let deliveryPhone = null;
nextButton.disabled = true;

nextButton.addEventListener("click", function () {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
});

previousButton.addEventListener("click", function () {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
});

form_steps.forEach((form, index) => {
  form.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("change", () => {
      updateProgress();
    });
  });
});

const updateProgress = () => {
  steps.forEach((step, i) => {
    if (i === active - 1) {
      step.classList.add("active");
      form_steps[i].classList.add("active");
    } else {
      step.classList.remove("active");
      form_steps[i].classList.remove("active");
    }
  });

  let isFormValid;

  if (active === 1) {
    isFormValid = validateFormOne();
  } else if (active === 2) {
    isFormValid = validateFormTwo(buyerType);
  } else if (active === 3) {
    isFormValid = validateFormThree();
  } else if (active === 4) {
    isFormValid = validateFormFour();
  } else if (active === 5) {
    isFormValid = validateFormFive(buyerType);
  } else if (active === 6) {
    // No need to validate Form Six here
    isFormValid = true; // Assuming Form Six is always valid
  }
  nextButton.disabled = !isFormValid;

  previousButton.disabled = active === 1;
};

const updateProductImage = () => {
  if (manufacturingCompany && carShape && manufacturingYear && buyerType) {
    for (const product of products) {
      if (product.name.toLowerCase() === manufacturingCompany.toLowerCase()) {
        console.log(manufacturingCompany);
        for (const shape of product.shape) {
          if (shape.type === carShape.toLowerCase()) {
            for (const data of shape.data) {
              if (data.year === parseInt(manufacturingYear)) {
                const carImage = document.getElementById("carImage");
                carImage.src = data.img;
                productImage = data.img;
                console.log(carImage.src);
                return;
              }
            }
            break;
          }
        }
        break;
      }
    }
  } else {
    const carImage = document.getElementById("carImage");
    carImage.src = "";
  }
};

const validateFormOne = () => {
  const form = form_steps[0];
  const requiredInputs = form.querySelectorAll(
    "input[required], select[required]"
  );
  let isBuyerTypeChecked = false;

  for (const input of requiredInputs) {
    if (!input.value) {
      const carImage = document.getElementById("carImage");
      carImage.src = "";
      return false;
    }

    if (input.name === "buyerType" && input.checked) {
      isBuyerTypeChecked = true;
      buyerType = input.id;
    } else if (input.name === "ManufacturingCompany") {
      manufacturingCompany = input.value;
      console.log(manufacturingCompany);
    } else if (input.name === "carShape") {
      carShape = input.value;
      console.log(carShape);
    } else if (input.name === "ManufacturingYear") {
      manufacturingYear = input.value;
      console.log(manufacturingYear);
    }
  }

  if (!isBuyerTypeChecked) {
    return false;
  }

  updateProductImage();
  return true;
};

const validateFormTwo = (buyerType) => {
  const form = form_steps[1];
  const pieceNameInput = form.querySelector(".pieceName input");
  const piecesNumberInput = form.querySelector(".piecesNumber input");
  const seriesNumberInput = form.querySelector(".seriesNumber input");
  const chassisNumberInput = form.querySelector(".chassisNumber input");
  const seriesContainer = document.querySelector(".seriesNumber");
  const chassisContainer = document.querySelector(".chassisNumber");
  const pieceDescriptionInput = form.querySelector(
    ".pieceDescription textarea"
  );
  const imageUploadInput = form.querySelector(".imageUpload input");
  if (buyerType && buyerType.toLowerCase() === "company") {
    seriesContainer.style.display = "flex";
    chassisContainer.style.display = "none";
    if (!pieceNameInput.value.trim()) {
      return false;
    } else {
      pieceNameVal = pieceNameInput.value;
    }
    if (!piecesNumberInput.value.trim()) {
      return false;
    } else {
      piecesNumberVal = piecesNumberInput.value;
    }
    if (!seriesNumberInput.value.trim()) {
      return false;
    } else {
      seriesNumberVal = seriesNumberInput.value;
      console.log(seriesNumberVal);
    }
  } else if (buyerType && buyerType.toLowerCase() === "individual") {
    chassisContainer.style.display = "flex"; // Hide chassisNumber container
    seriesContainer.style.display = "none"; // Show seriesNumber container
    if (!pieceNameInput.value.trim()) {
      return false;
    } else {
      pieceNameVal = pieceNameInput.value;
    }

    if (!piecesNumberInput.value.trim()) {
      return false;
    } else {
      piecesNumberVal = piecesNumberInput.value;
    }
    if (!chassisNumberInput.value.trim()) {
      return false;
    } else {
      chassisNumberVal = chassisNumberInput.value;
    }
  }
  if (pieceDescriptionInput.value) {
    pieceDescription = pieceDescriptionInput.value;
    console.log(pieceDescription);
  }

  // Set uploadedImage if user uploaded anything
  //   if (imageUploadInput.files.length > 0) {
  //     uploadedImage = imageUploadInput.files[0];
  //   }

  return true;
};

const validateFormThree = () => {
  const form = form_steps[2]; // Assuming the third form is at index 2

  const customerNameInput = form.querySelector(".customerName input");
  const customerEmailInput = form.querySelector(".customerEmail input");
  const customerPhoneInput = document.getElementById("phone");
  const passwordInput = form.querySelector(".password input");
  const retypePasswordInput = form.querySelectorAll(".password input")[1]; // Selecting the second password input

  const mailError = form.querySelector(".mailError");
  const passwordErrors = form.querySelectorAll(".passwordError");
  const customerNameError = form.querySelector(".customerNameError");
  const customerPhoneError = form.querySelector(".customerPhoneError");

  // Function to validate customer name
  const validateCustomerName = () => {
    if (!customerNameInput.value.trim()) {
      customerNameError.textContent = "Please enter your name.";
      return false;
    } else {
      customerNameError.textContent = "";
      customerName = customerNameInput.value;
      return true;
    }
  };

  // Function to validate customer email
  const validateCustomerEmail = () => {
    if (!customerEmailInput.value.trim()) {
      mailError.textContent = "Please enter your email.";
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmailInput.value.trim())) {
      mailError.textContent = "Please enter a valid email address.";
      return false;
    } else {
      mailError.textContent = "";
      customerEmail = customerEmailInput.value;
      return true;
    }
  };

  // Function to validate customer phone number
  const validateCustomerPhone = () => {
    if (!customerPhoneInput.value.trim()) {
      customerPhoneError.textContent = "Please enter a valid phone number.";
      return false;
    } else {
      customerPhoneError.textContent = "";
      customerPhone = customerPhoneInput.value;
      return true;
    }
  };

  // Function to validate password
  const validatePassword = () => {
    if (!passwordInput.value.trim()) {
      passwordErrors[0].textContent = "Please enter a password.";
      return false;
    } else {
      passwordErrors[0].textContent = "";
    }

    if (!retypePasswordInput.value.trim()) {
      passwordErrors[1].textContent = "Please retype your password.";
      return false;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(passwordInput.value.trim())) {
      passwordErrors[0].textContent =
        "Password must be at least 8 characters and contain both numbers and letters.";
      return false;
    }

    if (passwordInput.value !== retypePasswordInput.value) {
      passwordErrors[1].textContent = "Passwords do not match.";
      return false;
    }

    passwordErrors[0].textContent = "";
    passwordErrors[1].textContent = "";
    return true;
  };

  // Event listeners for real-time validation
  customerNameInput.addEventListener("input", validateCustomerName);
  customerNameInput.addEventListener("change", validateCustomerName);
  customerEmailInput.addEventListener("input", validateCustomerEmail);
  customerEmailInput.addEventListener("change", validateCustomerEmail);
  customerPhoneInput.addEventListener("input", validateCustomerPhone);
  customerPhoneInput.addEventListener("change", validateCustomerPhone);
  passwordInput.addEventListener("input", validatePassword);
  passwordInput.addEventListener("change", validatePassword);
  retypePasswordInput.addEventListener("input", validatePassword);
  retypePasswordInput.addEventListener("change", validatePassword);

  // Return overall form validity
  return (
    validateCustomerName() &&
    validateCustomerEmail() &&
    validateCustomerPhone() &&
    validatePassword()
  );
};

const validateFormFour = () => {
  const form = form_steps[3]; // Assuming the fourth form is at index 3

  const arabicNameInput = form.querySelector(".arabicName input");
  const englishNameInput = form.querySelector(".englishName input");
  const countryNameInput = form.querySelector("#country_selector");
  const cityNameInput = form.querySelector(".cityName input");
  const streetNameInput = form.querySelector(".streetName input");
  const zipCodeInput = form.querySelector(".zipCode input");
  const detailedAddressTextarea = form.querySelector(
    ".detailedAddress textarea"
  );
  const deliveryPhoneInput = document.getElementById("phoneDelivery");

  const arabicNameError = form.querySelector(".arabicName .error-message");
  const englishNameError = form.querySelector(".englishName .error-message");
  const countryNameError = form.querySelector(".countryName .error-message");
  const cityNameError = form.querySelector(".cityName .error-message");
  const streetNameError = form.querySelector(".streetName .error-message");
  const zipCodeError = form.querySelector(".zipCode .error-message");
  const detailedAddressError = form.querySelector(
    ".detailedAddress .error-message"
  );
  const deliveryPhoneError = form.querySelector(
    ".deliveryPhone .error-message"
  );
  const shippingToError = form.querySelector(".shippingTo .error-message");

  // Reset error messages
  arabicNameError.textContent = "";
  englishNameError.textContent = "";
  countryNameError.textContent = "";
  cityNameError.textContent = "";
  streetNameError.textContent = "";
  zipCodeError.textContent = "";
  detailedAddressError.textContent = "";
  deliveryPhoneError.textContent = "";
  shippingToError.textContent = "";

  // Function to validate Arabic Name
  const validateArabicName = () => {
    const arabicNameVal = arabicNameInput.value.trim();
    const arabicRegex = /^[\u0621-\u064A\s]+$/; // Arabic Unicode range

    if (!arabicNameVal) {
      arabicNameError.textContent = "Please enter your name in Arabic.";
      return false;
    } else if (!arabicRegex.test(arabicNameVal)) {
      arabicNameError.textContent = "Please enter a valid Arabic name.";
      return false;
    } else {
      arabicNameError.textContent = "";
      arabicName = arabicNameInput.value; // Update input value (optional)
      return true;
    }
  };

  // Function to validate English Name
  const validateEnglishName = () => {
    if (!englishNameInput.value.trim()) {
      englishNameError.textContent = "Please enter your name in English.";
      return false;
    } else {
      englishNameError.textContent = "";
      englishName = englishNameInput.value;
      return true;
    }
  };

  // Function to validate Country Name
  const validateCountryName = () => {
    if (!countryNameInput.value.trim()) {
      countryNameError.textContent = "Please select your country.";
      return false;
    } else {
      countryNameError.textContent = "";
      countryName = countryNameInput.value;
      return true;
    }
  };

  // Function to validate City Name
  const validateCityName = () => {
    if (!cityNameInput.value.trim()) {
      cityNameError.textContent = "Please enter your city name.";
      return false;
    } else {
      cityNameError.textContent = "";
      cityName = cityNameInput.value;
      return true;
    }
  };

  // Function to validate Street Name
  const validateStreetName = () => {
    if (!streetNameInput.value.trim()) {
      streetNameError.textContent = "Please enter your street name.";
      return false;
    } else {
      streetNameError.textContent = "";
      streetName = streetNameInput.value;
      return true;
    }
  };

  // Function to validate Zip Code
  const validateZipCode = () => {
    if (!zipCodeInput.value.trim()) {
      zipCodeError.textContent = "Please enter your zip code.";
      return false;
    } else {
      zipCodeError.textContent = "";
      zipCode = zipCodeInput.value;
      return true;
    }
  };

  // Function to validate Detailed Address
  const validateDetailedAddress = () => {
    if (!detailedAddressTextarea.value.trim()) {
      detailedAddressError.textContent = "Please enter your detailed address.";
      return false;
    } else {
      detailedAddressError.textContent = "";
      detailedAddress = detailedAddressTextarea.value;
      return true;
    }
  };

  // Function to validate Delivery Phone
  const validateDeliveryPhone = () => {
    if (!deliveryPhoneInput.value.trim()) {
      deliveryPhoneError.textContent = "Please enter your phone number.";
      return false;
    } else {
      deliveryPhoneError.textContent = "";
      deliveryPhone = deliveryPhoneInput.value;
      return true;
    }
  };

  // Function to validate Shipping To
  const validateShippingTo = () => {
    const shippingToInput = form.querySelector("input[name='shipTo']:checked");
    if (!shippingToInput) {
      shippingToError.textContent = "Please select a shipping destination.";
      return false;
    } else {
      shippingToError.textContent = "";
      shippingTo = shippingToInput.id;
      return true;
    }
  };
  arabicNameInput.addEventListener("input", validateArabicName);
  englishNameInput.addEventListener("input", validateEnglishName);
  countryNameInput.addEventListener("input", validateCountryName);
  cityNameInput.addEventListener("input", validateCityName);
  streetNameInput.addEventListener("input", validateStreetName);
  zipCodeInput.addEventListener("input", validateZipCode);
  detailedAddressTextarea.addEventListener("input", validateDetailedAddress);
  deliveryPhoneInput.addEventListener("input", validateDeliveryPhone);

  // Run validations and return result
  return (
    validateArabicName() &&
    validateEnglishName() &&
    validateCountryName() &&
    validateCityName() &&
    validateStreetName() &&
    validateZipCode() &&
    validateDetailedAddress() &&
    validateDeliveryPhone() &&
    validateShippingTo()
  );
};

const validateFormFive = (buyerType) => {
  nextButton.style.display = "none";
  previousButton.style.display = "none";
  edit.style.display = "block";
  submit.style.display = "block";
  save.style.display = "block";
  submit.disabled = false;
  document.querySelector(".showBuyerType").innerHTML = buyerType;
  document.querySelector(".showManufacturer").innerHTML = manufacturingCompany;
  document.querySelector(".showCarShape").innerHTML = carShape;
  document.querySelector(".showProductionYear").innerHTML = manufacturingYear;
  document.querySelector(".showProductImage").src = productImage;
  document.querySelector(".showProductName").innerHTML = pieceNameVal;
  document.querySelector(".showPiecesNumber").innerHTML = piecesNumberVal;

  if (buyerType.toLowerCase() === "company") {
    document.querySelector(".seriesChassisHead").innerHTML = "Series Number :";
    document.querySelector(".showSeriesChassis").innerHTML = seriesNumberVal;
  } else if (buyerType.toLowerCase() === "individual") {
    document.querySelector(".seriesChassisHead").innerHTML = "Chassis Number :";
    document.querySelector(".showSeriesChassis").innerHTML = chassisNumberVal;
  }
  if (pieceDescription) {
    console.log(pieceDescription);
    document.querySelector(".product-description").style.display = "flex";
    document.querySelector(".showProductDescription").innerHTML =
      pieceDescription;
  } else {
    document.querySelector(".product-description").style.display = "none";
  }
  if (uploadedImage) {
    document.querySelector(".product-uploaded-image").style.display = "block";
    document.querySelector(".showProductUploadedImage").src = uploadedImage;
    console.log(uploadedImage);
  } else {
    console.log(uploadedImage);
    document.querySelector(".product-uploaded-image").style.display = "none";
  }
  document.querySelector(".showCustomerName").innerHTML = customerName;
  document.querySelector(".showCustomerEmail").innerHTML = customerEmail;
  document.querySelector(".showCustomerPhone").innerHTML = customerPhone;
  document.querySelector(".showShippingTo").innerHTML = shippingTo;
  document.querySelector(".showArabicName").innerHTML = arabicName;
  document.querySelector(".showEnglishName").innerHTML = englishName;
  document.querySelector(".showCustomerCountry").innerHTML = countryName;
  document.querySelector(".showCustomerCity").innerHTML = cityName;
  document.querySelector(".showCustomerStreet").innerHTML = streetName;
  document.querySelector(".showCustomerZipCode").innerHTML = zipCode;
  document.querySelector(".showDetailedAddress").innerHTML = detailedAddress;
  document.querySelector(".showCustomerDeliveryNumber").innerHTML =
    deliveryPhone;
};

const editForm = () => {
  nextButton.style.display = "block";
  previousButton.style.display = "block";
  edit.style.display = "none";
  submit.style.display = "none";
  save.style.display = "none";
  // Activate Form One
  steps.forEach((step) => step.classList.remove("active"));
  form_steps.forEach((form) => form.classList.remove("active"));
  steps[0].classList.add("active");
  form_steps[0].classList.add("active");
  active = 1; // Reset the active step to Form One
  updateProgress(); // Update the state of the Next button
};

// Call editForm to activate Form One when the user clicks on Edit
edit.addEventListener("click", editForm);

// Call editForm to activate Form One when the user clicks on Edit
edit.addEventListener("click", editForm);

const validateFormSix = () => {
  active = 6; // Update the active variable to 6
  nextButton.style.display = "none";
  previousButton.style.display = "none";
  edit.style.display = "none";
  submit.style.display = "none";
  save.style.display = "none";
  form_steps.forEach((form) => form.classList.remove("active")); // Remove active class from all form steps
  form_steps[5].classList.add("active"); // Add active class to Form Six
  steps.forEach((step, i) => {
    // Make sure the corresponding step number is also active
    if (i === active - 1) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
};

submit.addEventListener("click", validateFormSix);


save.addEventListener("click", () => {
  // Select the div element to be saved as an image
  const cardContainer = document.querySelector(".card-container");

  // Use html2canvas to capture the div as an image
  html2canvas(cardContainer).then((canvas) => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = canvas.toDataURL(); // Set the image data as the href
    link.download = "card_image.png"; // Set the file name for download

    // Programmatically trigger a click event on the link to start the download
    link.click();
  });
});