const option = {
    first : 'Summary',
    second : 'Skills',
    third : 'Education',
    fourth : 'Experience',
};

const information = {
    infoOne : '1-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus qui sapiente sed possimus labore quas odit deserunt esse? Repellendus.',
    infoTwo : '2-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus qui sapiente sed possimus labore quas odit deserunt esse? Repellendus.',
    infoThree : '3-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus qui sapiente sed possimus labore quas odit deserunt esse? Repellendus.',
    infoFour : '4-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus qui sapiente sed possimus labore quas odit deserunt esse? Repellendus.',
};

const showInfo =(button)=> {
    if (button === 'first') {
        let navBox = document.querySelector('.firstBox');
        navBox.innerHTML = information.infoOne;
       
        let title = document.querySelector('.newTitle');
        title.innerHTML = 'Summary';
       
        let infoBox = document.createElement('img');
        infoBox.src = 'img/eagle.jpg';
        document.body.appendChild(infoBox).querySelector('.imgBox')
        console.log(infoBox)

        // let picRetain = document.querySelector('.imgBox');
        // console.log(picRetain);
        // picRetain.innerHTML = infoBox;
        // console.log(picRetain);

    }
    else if (button === 'second' ) {
        let navBox = document.querySelector('.secondBox');
        navBox.innerHTML = information.infoTwo;
       
        let title = document.querySelector('.newTitle');
        title.innerHTML = 'Skills';
       
        let infoBox = document.createElement('img');
        infoBox.src = 'img/cat.jpg';
        document.body.appendChild(infoBox)
        console.log(infoBox)

        // let picRetain = document.querySelector('.imgBox');
        // picRetain.innerHTML = infoBox;
        
    }
    else if (button === 'third'){
        let navBox = document.querySelector('.thirdBox');
        navBox.innerHTML = information.infoThree;
       
        let title = document.querySelector('.newTitle');
        title.innerHTML = 'Education';
       
        let infoBox = document.createElement('img');
        infoBox.src = 'img/dog.jpg';
        document.body.appendChild(infoBox)
        console.log(infoBox)

        // let picRetain = document.querySelector('.imgBox');
        // picRetain.innerHTML = infoBox;
    }    
    else if (button === 'fourth'){
        let navBox = document.querySelector('.fourthBox');
        navBox.innerHTML = information.infoFour;
        
        let title = document.querySelector('.newTitle');
        title.innerHTML = 'Experience';
        
        let infoBox = document.createElement('img');
        infoBox.src = 'img/lazy.jpg';
        document.body.appendChild(infoBox)
        console.log(infoBox)

        // let picRetain = document.querySelector('.imgBox');
        // picRetain.innerHTML = infoBox;
    }
}