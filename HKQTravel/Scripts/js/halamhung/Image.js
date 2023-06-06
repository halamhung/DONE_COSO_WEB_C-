//function previewImage() {
//    var preview = document.querySelector('#imgPreview');
//    var file = document.querySelector('#fileUpLoad').files[0];
//    var reader = new FileReader();

//    reader.onloadend = function () {
//        preview.src = reader.result;
//    }

//    if (file) {
//        reader.readAsDataURL(file);
//    } else {
//        preview.src = "";
//    }
//}

fileImage.onchange = evt => {

    const [file] = fileImage.files

    if (file) {

        preview.src = URL.createObjectURL(file);

        $("#preview").removeClass("hidden");

    }

}