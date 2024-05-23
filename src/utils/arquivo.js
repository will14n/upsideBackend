function escreverArquivo() {  

    var fso  = new ActiveXObject("Scripting.FileSystemObject");
    
    var fh = fso.CreateTextFile("./Teste.txt", true); 
    
    fh.WriteLine("Coloque todo o conteudo que voce deseja nesse trecho...");
    
    fh.Close(); 
    
}