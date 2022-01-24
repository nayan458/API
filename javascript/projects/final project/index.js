const Addbtn = document.querySelector('.AddNote');

//////////Addbtn/////////
addNewNotes=(text = '' ) => {
    
    const note = document.createElement('div');
    note.classList.add('note');
    
    const htmlDta = `
    <div class="operation">
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    <button class="edit"><i class="far fa-edit"></i></button>
    </div>
    
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}" name="" id="" cols="30" rows="10"></textarea>
    `;
    
    note.insertAdjacentHTML('afterbegin',htmlDta)
    // console.log(note)
    
    // document.body.appendChild(note)
    document.body.querySelector('.cont').appendChild(note);
    // it appends a node as the last child of a node 

    const writNote = note.querySelector('.edit');
    const delbtn = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    const updateDta=()=>{
        const textAreaData = document.querySelectorAll('textarea');
        const notes = [];
        // console.log(textAreaData);
        textAreaData.forEach((note) =>{
            return notes.push(note.value);
        })
        console.log(notes)

        localStorage.setItem('ky',JSON.stringify(notes));

    }

    delbtn.addEventListener('click',()=>{
        note.remove();
        updateDta();
    })

    writNote.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden')
    })

    // textArea.value = text;
    // mainDiv.innerHTML = text;

    textArea.addEventListener('change',(event) =>{
        const value = event.target.value;
        // console.log(value)
        textArea.value = value;
        mainDiv.innerHTML = value;

        
        updateDta();
    })



}//ending of function

// getting Data from  localStorage

const nts = JSON.parse(localStorage.getItem('ky'));

if(nts){
    nts.forEach((ky) => {
        console.log(ky);
        addNewNotes(ky);
    })
}

Addbtn.addEventListener('click',addNewNotes)


















// // {/* <div class="heading"> GoogleClone <button class="AddNote">edit</button></div>
// //     <div class="cont">
// //         <div class="note">
// //             <div class="operation">
// //                 <button class="delete"><i class="fas fa-trash-alt"></i></button>
// //                 <button class="edit"><i class="far fa-edit"></i></button>
// //             </div>

// //             <div class="main"></div>
// //             <textarea class="write" name="" id="" cols="30" rows="10"></textarea>
// //         </div>
// //     </div> */}

// const Addbtn = document.querySelector('.AddNote');

// //////////Addbtn/////////
// addNewNotes=(text = '' ) => {
    
//     const note = document.createElement('div');
//     note.classList.add('note');
    
//     const htmlDta = `
//     <div class="operation">
//     <button class="delete"><i class="fas fa-trash-alt"></i></button>
//     <button class="edit"><i class="far fa-edit"></i></button>
//     </div>
    
//     <div class="main" ${text ? "" : "hidden"}></div>
//     <textarea class="${text ? "hidden" : ""}" name="" id="" cols="30" rows="10"></textarea>
//     `;
//     updateDta=()=>{
//         const textAreaData = document.querySelectorAll('textarea');
//         const notes = [];
//         // console.log(textAreaData);
//         textAreaData.forEach((note) =>{
//             return notes.push(note.value);
//         })
//         console.log(notes)

//         localStorage.setItem('note',JSON.stringify(notes));

//     }
    
//     note.insertAdjacentHTML('afterbegin',htmlDta)
//     // console.log(note)
    
//     // document.body.appendChild(note)
//     document.body.querySelector('.cont').appendChild(note);
//     // it appends a node as the last child of a node 

//     const writNote = note.querySelector('.edit');
//     const delbtn = note.querySelector('.delete');
//     const mainDiv = note.querySelector('.main');
//     const textArea = note.querySelector('textarea');

//     delbtn.addEventListener('click',()=>{
//         note.remove();
//         updateDta();
//     })

//     writNote.addEventListener('click',()=>{
//         mainDiv.classList.toggle('hidden');
//         textArea.classList.toggle('hidden')
//     })

//     // textArea.value = text;
//     // mainDiv.innerHTML = text;

//     textArea.addEventListener('change',(event) =>{
//         const value = event.target.value;
//         // console.log(value)
//         textArea.value = value;
//         mainDiv.innerHTML = value;

        
//         updateDta();
//     })



// }//ending of function

// // getting Data from  localStorage

// const notes = JSON.parse(localStorage.getItem('notes'));

// if(notes){
//     notes.forEach((note) => addNewNotes(note))
// }

// Addbtn.addEventListener('click',addNewNotes)























































// // {/*/**we will not do in this way as it will not work */
// // ////////writNote//////////
// // // func1=()=>{console.log("func1 is called")}

// // // writNote.addEventListener('click',func1)

// // ////////delet////////
// // // del=()=>{console.log("del is called")}

// // // delbtn.addEventListener('click',del)
// // */}

// // geting the reference

// // const writNote = note.querySelector('.edit');
// // const delbtn = note.querySelector('.delete');
// // const mainDiv = note.querySelector('.main');
// // const textarea = note.querySelector('textarea');

// // delbtn.addEventListener('click',()=>{
// //     note.remove();
// // })






















