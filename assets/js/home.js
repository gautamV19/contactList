console.log("Your script is loaded...");

const addContact = document.getElementById("addContact");

addContact.addEventListener("click", (e) => {
    e.preventDefault();
    const phone = $("#phone").val();
    const name = $("#name").val();

    console.log("adding contact...", phone, name);

    $.ajax({
        type: "post",
        url: "/create-contact",
        data: {
            name: name,
            phone: phone,
        },
        success: function (response) {
            console.log("success");
        }
    });
})