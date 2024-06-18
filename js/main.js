// Download CV

function  downloadFile() 
{
    // name of the file
    const fileName = "Prajyot_Kalekar_Resume.pdf";

    // path of the file
    const filePath = "../Portfolio/CV/"; //relative path
    //  const filePath = "C:\\projects\\Portfolio\\CV\\"; //absolute path
    
    const fileURL = filePath + fileName;

    const a = document.createElement('a');
    a.href = fileURL;
    a.target = "_blank"; //open in a new tab

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
