const name_form = document.getElementById("name-form");
const title_form = document.getElementById("title-form");
const email_form = document.getElementById("email-form");
const username_form = document.getElementById("username-form");
document.getElementById("submit-form").addEventListener("click",(e)=>{
    e.preventDefault();
    createCard();
})
function createCard(){
    const container = document.createElement("div");
    container.classList.add("card-container")
    container.innerHTML = `
    <div class="card" id="card">
        <header>
        <div class = "color-buttons-group">
            <div class="red" style="background-color: rgb(241, 9, 9);"></div>
            <div class="yellow" style="background-color: yellow;"></div>
            <div class="green" style="background-color: rgb(5, 151, 5);"></div>
        </div>
        <p>Business Card.json</p>
        </header>
        <div class="title-field">${name_form.value}'s profile-card.json</div>
        
        <!--Name field  -->
        <div class="entry entry1">
        <span class="number" style="margin-right: 2pc;">1</span>
        <p class="field" style="margin-right: 2pc;">"name"    :    </p>
        <span class="value">"${name_form.value}"</span>
        </div>
        
        <!--Title field  -->
        <div class="entry entry2">
        <span class="number" style="margin-right: 2pc;">2</span>
        <p class="field" style="margin-right: 2pc;">"title"    :    </p>
        <span class="value">"${title_form.value}"</span>
        </div>
        
        <!--Email field  -->
        <div class="entry entry3">
        <span class="number" style="margin-right: 2pc;">3</span>
        <p class="field" style="margin-right: 2pc;">"email"    :    </p>
        <span class="value">"${email_form.value}"</span>
        </div>
        
        <!--Username field  -->
        <div class="entry entry4">
        <span class="number" style="margin-right: 2pc;">4</span>
        <p class="field" style="margin-right: 2pc;">"X"    :    </p>
        <span class="value">${username_form.value}</span>
        </div>
    </div>

    <button id="download-card">Download</button>
    `
    document.body.appendChild(container)
    document.getElementById("download-card").addEventListener('click',downloadCard)
}





async function downloadCard() {
    const card = document.getElementById("card")
    const canvas = await html2canvas(card,{ backgroundColor: null }) ;

    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = `${name_form.value} profile-card.json`;
    a.click();
}
