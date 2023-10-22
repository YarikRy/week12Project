const URL = 'http://localhost:3000/debtList'


$.get(URL).then((data) => data.map((person) => {
    $('#debt-table').append(
        $(`
        <tr>
            <td>${person.id}<td>
            <td>${person.fullName}<td>
            <td>${person.debt}<td>
            <td>
            <button class="btn btn-danger" onclick="deleteDebt(${person.id})">Delete</button>
            <td>
        </tr>
        `)
    )
}))


$('#sub-btn').click(function (){
    $.post(URL, {
        fullName: $('#fullName').val(),
        debt: $('#debtAmount').val(),
    })
})

function deleteDebt(id){
    $.ajax(`${URL}/${id}`, {
        method: 'DELETE',
    })
}

function updateDebt() {
    id = $('#id-num').val()
  
    $.ajax(`${URL}/${id}`, {
      method: 'PUT',
      data: {
        fullName: $('#fullNameUpdate').val(),
        debt: $('#debtOwed').val(),
      },
    })
  }


 
$('#updateBtn').click(updateDebt)
