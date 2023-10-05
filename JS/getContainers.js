function test() {
    checkall();

    var count = updateContainerCount();

    // Get a reference to the table body
    var table = document.querySelector('#container_table');
    
    var tbody = table.getElementsByTagName('tbody');

    while(tbody.length > 0){
        table.removeChild(tbody[0]);
    }

    var rows = ['Seal Invoice ', 'Seal Landed ', 'Mark ', 'No. of Bales Invoice ', 'No. of Bales Landed ', 'Gross Weight Invoice ', 'Gross Weight Landed ', 'Commence Date ', 'Commence Time ', 'Controller Name ', 'Remarks 06A1', 'Remarks 091'];

    for(var j = 1; j <= count; j++){
        var tablebody = document.createElement('tbody');
        var trow = document.createElement('tr');
        var cell = document.createElement('td');
        cell.innerHTML = "Container: " + j;
        cell.setAttribute('colspan', '2');
        cell.style.textAlign = 'center';
        trow.appendChild(cell);
        trow.appendChild(document.createElement('td'));

        tablebody.appendChild(trow);
        
        for(var i = 0; i < 12; i++){
            var tablerow = document.createElement('tr');
            
            tablebody.style.marginTop = '15px';
    
            var cell1 = document.createElement('td');
            var label = document.createElement('label');
            label.setAttribute('for', 'text');
            label.textContent = rows[i] + j;
            cell1.appendChild(label);
    
            var cell2 = document.createElement('td');
            var input = document.createElement('input');
            input.type = 'text';
            input.id = 'sealinvoice';
            input.setAttribute('onblur', 'checker(this)');
            input.required = true;
            cell2.appendChild(input);
    
            tablerow.appendChild(cell1);
            tablerow.appendChild(cell2);
    
            tablebody.appendChild(tablerow);    
            table.appendChild(tablebody);
        }

    }


}