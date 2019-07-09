let node=[];
let node1=[];
var filenames=[], foldernames=[];
localStorage.removeItem("first");
localStorage.removeItem("second");
localStorage.removeItem("current");
localStorage.removeItem("trace1");
localStorage.removeItem("trace2");
localStorage.removeItem("trace3");
localStorage.removeItem("trace4");

$.get("http://localhost:3000/sollkon",function(response){
    node1=response.sollkon
    window.example1 = new Taggle($('.example1.textarea')[0], {
        tags: node1
    });
});
$.get("http://localhost:3000/istkon",function(response){
    node=response.istkon
    window.example2 = new Taggle($('.example2.textarea')[0], {
        tags: node
    });
});
document.getElementById('files').addEventListener('change', function(e) {
  var list = document.getElementById('biege_soll');
  // list.innerHTML = '';
  for (var i = 0; i < this.files.length; i++) {
    list.value += this.files[i].name + '\n';
    node.push(this.files[i].name)
    if(i+1==this.files.length){
    window.example1 = new Taggle($('.example1.textarea')[0], {
        tags: node
    });
  }
  }
  if (list.value == '') list.style.display = 'none';
  else list.style.display = 'block';
});