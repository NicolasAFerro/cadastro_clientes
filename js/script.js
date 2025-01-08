var clients = [ 
    {
        id: 1,
        fullName: 'Maria Silva', 
        logradouro: 'Rua tancredo Neves,144', 
        cep: '18087-013', 
        bairro: 'Centro', 
        cidade: 'Sorocaba',
        estado:'SP'
    }, 
    {
        id: 1,
        fullName: 'Marcos Silva', 
        logradouro: 'Rua tancredo Neves,14', 
        cep: '18087-013', 
        bairro: 'Jardim imperador', 
        cidade: 'São Paulo',
        estado:'SP'
    },  
    {
        id: 1,
        fullName: 'João Silva', 
        logradouro: 'Rua tancredo Neves,145', 
        cep: '18087-015', 
        bairro: 'Copacabana', 
        cidade: 'Rio de Janeiro',
        estado:'RJ'
    },  
];  

loadClients(); 

function loadClients(){ 
    for(let client of clients){ 
        addClient(client);
    }
}

function addClient(client){ 
    var table = document.getElementById("clientTable"); 
    var newRow = table.insertRow();  

    var idNode = document.createTextNode(client.id);            
    var idCell= newRow.insertCell(); 
    idCell.className='text-center';
    idCell.appendChild(idNode); 
    //newRow.insertCell().appendChild(idNode); 

    var fullNameNode = document.createTextNode(client.fullName);            
    var fullNameCell= newRow.insertCell(); 
    fullNameCell.className='text-center';
    fullNameCell.appendChild(fullNameNode); 

    var logradouroNode = document.createTextNode(client.logradouro);            
    var logradouroNameCell= newRow.insertCell(); 
    logradouroNameCell.className='d-none d-sm-table-cell text-center';
    logradouroNameCell.appendChild(logradouroNode); 

    var cepNode = document.createTextNode(client.cep);            
    var cepNameCell= newRow.insertCell(); 
    cepNameCell.className='text-center';
    cepNameCell.appendChild(cepNode); 

    var bairroNode = document.createTextNode(client.bairro);            
    var bairroNameCell= newRow.insertCell(); 
    bairroNameCell.className='d-none d-md-table-cell text-center';
    bairroNameCell.appendChild(bairroNode); 

    var cidadeNode = document.createTextNode(client.cidade);            
    var cidadeCell= newRow.insertCell(); 
    cidadeCell.className='d-none d-md-table-cell text-center';
    cidadeCell.appendChild(cidadeNode);
  
    var estadoNode = document.createTextNode(client.estado);            
    var estadoCell= newRow.insertCell(); 
    estadoCell.className='d-none d-lg-table-cell text-center';
    estadoCell.appendChild(estadoNode);
    // id: 1,
    // fullName: 'João Silva', 
    // logradouro: 'Rua tancredo Neves,145', 
    // cep: '18087-015', 
    // bairro: 'Centro', 
    // cidade: 'Sorocaba',
    // estado:'SP'
}