async function savedata() {
  const req = await fetch('http://92.118.206.166:30457/save')
  const data = await req.json()
  const test = document.getElementById('teste')
  test.innerHTML = data.join('<br>')
}

savedata()