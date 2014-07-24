(function(){
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/xcode");
	editor.getSession().setUseWorker(false);
    editor.getSession().setMode("ace/mode/javascript");
}());