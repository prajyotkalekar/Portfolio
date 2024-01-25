// Download CV

function  downloadFile() 
{
    // name of the file
    var fileName = "RESUME.pdf";

    // path of the file
    var filePath = "C:\\projects\\Portfolio\\CV\\";

    var a = document.createElement('a');
    a.href = filePath + fileName;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


