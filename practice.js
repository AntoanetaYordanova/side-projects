function doIt() {
    doIt.objname = {};
    var someObject = "objname";
    doIt[someObject].value = "value";    
    console.log(doIt.objname);
}

doIt()