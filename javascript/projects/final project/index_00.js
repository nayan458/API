const addBtn = document.querySelector('.AddNote');

const addNewNote=(text = '')=>{
    const mynote = document.createElement('div');
    mynote.classList.add('note');

    const htmlDta = ` <div class="operation">
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
        <button class="edit"><i class="far fa-edit"></i></button>
    </div>

    <div class="main" class="${text ? "" : "hidden"}"></div>
    <textarea class="write" class="${text ? "hidden" : ""}" cols="30" rows="10"></textarea>`;

    mynote.insertAdjacentHTML('afterbegin',htmlDta);

    document.body.querySelector('.cont').appendChild(mynote);
    
    console.log(mynote);
    console.log(mynote.value);

    const delBtn = mynote.querySelector('.delet');
    const editBtn = mynote.querySelector('.edit');
    const main = mynote.querySelector('.main');
    const textArea = mynote.querySelector('textarea');

    // const update=()=>{
    //     const textAreaData = document.querySelector('textarea')
    //     // console.log(textAreaData);

    //     const notes = [];
    //     // console.log(textAreaData);
    //     textAreaData.forEach((mynote)=>{
    //         notes.push(mynote.value)
    //         console.log(mynote);
    //     });

    //     localStorage.setItem('kye',JSON.stringify(notes));

    // }

    // const addNote = () =>{
    //     main.classList.toggle = "hidden";
    //     textArea.classList.toggle = "hidden";
    //     // console.log("addNote function called()")
    // }
    editBtn.addEventListener('click',() =>{
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });
    
    textArea.addEventListener('change',(event)=>{
        const value = event.target.value
        textArea.value = value;
        main.innerHTML = value;
        // update();
        // console.log(value);
    })
}
addBtn.addEventListener('click',addNewNote);