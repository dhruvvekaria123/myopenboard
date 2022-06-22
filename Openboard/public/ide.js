let IDEEditor;

editorIcon.addEventListener("click" , function(){
    IDEEditor = ace.edit("editor");
    IDEEditor.setTheme("ace/theme/monokai");
    IDEEditor.session.setMode("ace/mode/c_cpp");
});


let languagesContainer = document.querySelector("#languages");

languagesContainer.addEventListener("change" , function(e){

    let language = languagesContainer.value;

    if(language == "c" || language == "cpp"){
        IDEEditor.session.setMode("ace/mode/c_cpp");
    }else if(language == "Java"){
        IDEEditor.session.setMode("ace/mode/java");
    }else if(language == "Python"){
        IDEEditor.session.setMode("ace/mode/python");
    }

});