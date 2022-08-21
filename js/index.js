const ul = document.querySelector('ul')
function getApiGitHub() {
  fetch('https://api.github.com/users/Prof-Anderson-Sousa/repos')
    .then(async res => {
      if(!res.ok) {
        throw new Error(res.status)
      }
      var data = await res.json()
      data.map(item => {
        let li = document.createElement('li')
        li.innerHTML = `
        <strong>${item.name.toUpperCase()}</strong>
        <span>URL:<a href="${item.html_url}"> ${item.html_url}</a></span>
        <div>
            <span>Data Criação: 
            ${Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.created_at))}
            </span>
            <img src="./img/icons8-github.gif">
        </div>
      `
      ul.appendChild(li)
      })
    }).catch(e => console.log(e))
}
getApiGitHub()