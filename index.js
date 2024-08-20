
function change(x){
    let c=document.getElementsByTagName("div")[0];
    let r=Math.round(Math.random()*255);
    let g=Math.round(Math.random()*255);
    let b=Math.round(Math.random()*255);
    let s=`(${r},${b},${g})`;
    c.style.color="white"
     switch(x){
        case 'one':
c.style.backgroundColor="green";
break;
     case 'two':
        c.style.backgroundColor="red";
        break;
        case 'three':
            c.style.backgroundColor="blue";
            break;
            case 'four':
                c.style.backgroundColor=`rgb${s}`;
                break;
                case 'five':
                    c.style.backgroundColor="white";
                    c.style.color="black";
                    break;
     }
}
