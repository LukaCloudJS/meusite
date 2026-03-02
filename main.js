function savedata() {
  fetch('http://92.118.206.166:30457/save').then( e => {
    e.json().then(data => {
  const test = document.getElementById('teste')
  test.innerHTML = data.join('<br>')
    }
    )
  })
}

savedata()
