import "./cursor.css";


    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
    })
    document.addEventListener('click', ()=>{
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    })
    /*return(
        <div className="cursor"></div>
    )*/


/*export default Cursor*/