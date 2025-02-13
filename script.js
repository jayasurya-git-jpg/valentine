document.getElementById("submitPassword").addEventListener("click", function() {
    let password = document.getElementById("passwordInput").value;
    let errorMessage = document.getElementById("errorMessage");

    if (password === "Ms0731") {
        document.getElementById("passwordPrompt").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        errorMessage.textContent = "❌ Incorrect password! Try again.";
    }
});

document.getElementById("tamilBtn").addEventListener("click", function() {
    document.getElementById("tamilContent").innerHTML = `
        என் உயிருக்கு, மிதுனா ❤,<br><br>

        நம்ம காதல் ஒரு கனவாகத் தொடங்கி, நிஜமாக மாறியது. 
        என் வாழ்க்கையின் ஒவ்வொரு நொடியும், உன் நினைவுகளால் அழகாகிறது.💞<br><br>

        🔹 <b>முதல் சந்திப்பு</b><br>
        அந்த NSS முகாமில் முதல் முறையாக உன்னை பார்த்த நாளில்,
        ஏதோ ஒரு விசித்திரமான உணர்வு என்னுள் பரவியது.😍<br><br>

        🔹 <b>முதல் நம்பர் கேட்கும் தருணம்</b><br>
        பேருந்தில் செல்லும் போது, உன் எண்ணை கேட்டேன். 
        ஆனா நீ playful ஆக என்னை சவாலாக மாற்றினாய்! 😂<br><br>

        🔹 <b>நம் காதல் பயணம்</b><br>
        உன்னுடன் கழித்த ஒவ்வொரு நாளும், என் வாழ்க்கையின் அழகான பகுதியாகவே உள்ளது.💖<br><br>

        என்றும் உன்,<br>
        <b>ஜெயசூர்யா M 💕</b>
    `;
    
    document.getElementById("tamilContent").style.display = "block";
    document.getElementById("englishContent").style.display = "none";
});

document.getElementById("englishBtn").addEventListener("click", function() {
    document.getElementById("englishContent").innerHTML = `
        Hey Mithuna, ❤<br><br>

        Our love started as a dream and turned into a beautiful reality.  
        Every moment with you is a treasure in my heart.💞<br><br>

        🔹 <b>First Meeting</b><br>
        That NSS camp was the first time I saw you, and from that moment,  
        I knew you were someone special.😍<br><br>

        🔹 <b>Asking for Your Number</b><br>
        On the bus ride, I asked for your number, and you made it playful  
        by turning it into a challenge! 😂<br><br>

        🔹 <b>Our Love Journey</b><br>
        Every single day with you has been the most beautiful chapter of my life.💖<br><br>

        Forever yours,<br>
        <b>Jayasurya M 💕</b>
    `;
    
    document.getElementById("tamilContent").style.display = "none";
    document.getElementById("englishContent").style.display = "block";
});
