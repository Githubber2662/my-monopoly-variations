const List1 = [[]];
for(x = 0; x < List1.length; x++) {
   document.body.innerHTML += '<p id=`Rule${x}`>'+(x+1).toString()+'. '+List1[x][0].toString()+', '+List1[x][1].toString()+'</p>';
}
