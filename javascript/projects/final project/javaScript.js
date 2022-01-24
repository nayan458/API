
// <div class="heading"> GoogleClone <button class="AddNote">edit</button></div>
// <div class="cont">
//     <!-- <div class="note">
//         <div class="operation">
//             <button class="delete"><i class="fas fa-trash-alt"></i></button>
//             <button class="edit"><i class="far fa-edit"></i></button>
//         </div>

//         <div class="main"></div>
//         <textarea class="write" name="" id="" cols="30" rows="10"></textarea>
//     </div> -->
// </div>

const addBtn = document.querySelector('.AddNote');

const updateLSData=()=>{
    const textAreaData = document.querySelectorAll('textarea');
    const arr = [];

    // console.log(textAreaData);
    textAreaData.forEach((elem)=>{
        return arr.push(elem.value);
    })
    
    localStorage.setItem('newKey',JSON.stringify(arr));
}

// console.log(elem);


const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');;

    const htmlDta = `
    <div class="note">
            <div class="operation">
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
                <button class="edit"><i class="far fa-edit"></i></button>
            </div>
    
            <div class="main ${text ? "" : "hidden"} "></div>
            <textarea class="write ${text ? "hidden" : ""}" name="" id="" cols="30" rows="10"></textarea>
        </div>
    `;

    note.insertAdjacentHTML('afterbegin',htmlDta);

    const editBtn = note.querySelector('.edit');
    const delbtn = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    delbtn.addEventListener('click',()=>{
        note.remove();
    })

    editBtn.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    // textArea.value = text
    // mainDiv.innerHTML = text

    textArea.addEventListener('change',(event)=>{
        const userValue = event.target.value;
        console.log(userValue);
        mainDiv.innerHTML = userValue;

        updateLSData();

    })

    document.querySelector('.cont').appendChild(note);
}

// getting data back from localStorage

const notData = JSON.parse(localStorage.getItem('newKey'));
console.log(notData);
// if(notData){newKey.forEach((elem)=> addNewNote(elem))};


if(notData){
    notData.forEach((newKey) => {
        console.log(newKey);
        addNewNote(notData);
        updateLSData()
    })
}

addBtn.addEventListener('click',()=>addNewNote())



