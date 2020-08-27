window.addEventListener('DOMContentLoaded', function () {



    let btn = document.createElement('button');
    let btnText = document.createTextNode('Sing it!');
    let btndiv = document.createElement('div');

    btn.appendChild(btnText);
    btndiv.appendChild(btn);
    document.body.appendChild(btndiv);



    // let x = 99

    // let song = [x + ' ' + 'lines of code in the file,' + ' ' + x + ' ' + 'lines of code;' + ' ' + friends[0] + ' ' + 'strikes one out, clears it all out,' + ' ' + (x-1) + ' ' + 'lines of code in the file']

    // function singIt (anyfriend) {
    //     console.log(song);
    // }

    btn.addEventListener('click', function () {

        let friends = ['Steven', 'Bob', 'John', 'Merritt', 'Tori', 'Luke'];

        for (i = 0; i < friends.length; i++) {
            let div = document.createElement('div');
            div.className = 'friend';
            div.textContent = friends[i];
            document.body.appendChild(div);
            let friend = friends[i];
            for (let j = 99; j > 0; j--) {
                
                let p = document.createElement('p');
                document.body.appendChild(p);
                if (j == 1) {
                    p.textContent = (j + ' line of code in the file, ' + j + ' line of code; ' + friend + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file.');
                } else {
                    if (j == 2) {
                        p.textContent = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friend + ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file.');
                    } else {
                        p.textContent = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friend + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file.');
                    }
                }
            }
        }


        // friends.className = 'friend';
        // const friendDivs = document.getElementsByClassName('friend');
        // console.log(friendDivs); //array of selected nodes!

        // // for (let i = 0; i < friendDivs.length; i++) {
        // //     friendDivs[i].addEventListener('click', function () {
        // //         console.log('Clicked'!);
        // //     });
        // // }

        // for (let i = 0; i < friends.length; i++) {
        //     // singIt (anyfriend);
        //     const div = document.createElement('div');
        //     let friend = friends[i];
        //     div.className = 'friend';
        //     div.textContent = friend;

        //     document.body.appendChild(div);




    })

})
