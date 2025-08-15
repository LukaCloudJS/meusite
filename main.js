const materias = [
{
  name: "Matemática",
  color: "#2B66B9",
  tasks: [
  {
    name: "• Desafio Crescer 13 - Equação linear do 1º grau...",
    response: ["1: D", "2: A", "3: B", "4: E", "5: C", "6: D"]
  },
  {
    name: "• Desafio Crescer 13 - Resolução de Itens",
    response: ["1: A", "2: C", "3: D", "4: E", "5: A", "6: C"]
  },
  {
    name: "• Desafio Crescer 14 - A inclinação da reta...",
    response: ["1: E", "2: A", "3: C", "4: C", "5: B", "6: A"]
  },
  {
    name: "• Desafio Crescer 14 - Resolução de Itens",
    response: ["1: A", "2: B", "3: B", "4: E", "5: B", "6: A"]
  }]
},
{
  name: "Português",
  color: "#F54927",
  tasks: [
  {
    name: "• Desafio Crescer 13 - A tese no gênero...",
    response: ["1: C", "2: D", "3: B", "4: C", "5: B", "6: C"]
  },
  {
    name: "• Desafio Crescer 13 - Resolução de Itens",
    response: ["1: A", "2: C", "3: E", "4: B", "5: C", "6: C"]
  },
  {
    name: "• Desafio Crescer 14 - Argumentando sobre a tese...",
    response: ["1: A", "2: E", "3: C", "4: B", "5: D", "6: C"]
  },
  {
    name: "• Desafio Crescer 14 - Resolução de Itens",
    response: ["1: A", "2: C", "3: A", "4: D", "5: B", "6: E"]
  }]
}]

const subjectives = document.querySelector(".subjects")

for (const materia of materias) {
  const section = document.createElement("div")
  section.setAttribute("class", "section")
  const title = document.createElement("h2")
  title.setAttribute("style", `background: ${materia.color}`)
  title.textContent = materia.name
  section.appendChild(title)
  for (const task of materia.tasks) {
    const taskF = document.createElement("div")
    taskF.setAttribute("class", "tasks")
    taskF.setAttribute("style", `box-shadow: 2px 4px 0px 4px ${materia.color}`)
    const name = document.createElement("h3")
    name.textContent = task.name
    const response = document.createElement("p")
    response.innerHTML = task.response.join("<br>")
    taskF.appendChild(name)
    taskF.appendChild(response)
    section.appendChild(taskF)
  }
  
  subjectives.appendChild(section)
}