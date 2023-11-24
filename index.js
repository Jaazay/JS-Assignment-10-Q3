var editRowIndex = -1;

    function addStudent() {
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var grade = document.getElementById('grade').value;

        var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = name;
        cell2.innerHTML = age;
        cell3.innerHTML = grade;
        cell4.innerHTML = '<button class="edit" onclick="editStudent(this)">Edit</button><button onclick="deleteStudent(this)">Delete</button>';
        
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('grade').value = '';
    }

    function deleteStudent(button) {
        var row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }

    function editStudent(button) {
        var row = button.parentNode.parentNode;
        var cells = row.getElementsByTagName('td');

        document.getElementById('editName').value = cells[0].innerHTML;
        document.getElementById('editAge').value = cells[1].innerHTML;
        document.getElementById('editGrade').value = cells[2].innerHTML;

        editRowIndex = row.rowIndex;
        document.getElementById('editForm').style.display = 'block';
    }

    function updateStudent() {
        var editName = document.getElementById('editName').value;
        var editAge = document.getElementById('editAge').value;
        var editGrade = document.getElementById('editGrade').value;

        if (editRowIndex !== -1) {
            var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
            var row = table.rows[editRowIndex - 1]; // Subtract 1 as row indices start from 0

            row.cells[0].innerHTML = editName;
            row.cells[1].innerHTML = editAge;
            row.cells[2].innerHTML = editGrade;

            document.getElementById('editForm').style.display = 'none';
            editRowIndex = -1; // Reset editRowIndex
        }
    }

    function cancelEdit() {
        document.getElementById('editForm').style.display = 'none';
        editRowIndex = -1; // Reset editRowIndex
    }