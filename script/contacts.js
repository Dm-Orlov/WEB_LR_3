function SendMail ()
{
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var topic = document.getElementById("topic").value;
    var msg = document.getElementById("message").value;

    if (name.toString() === "" && mail.toString() === "" && msg.toString() === "")
        alert("Некоторые из этих данных не указаны: имя, почта, сообщение");
    else
        alert("Уважаемый " + name + "! Ваше сообщение успешно отправлено и наши специалисты свяжутся с Вами.");
}