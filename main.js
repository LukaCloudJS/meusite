const materias = [
{
  name: "Matemática",
  color: "#2B66B9",
  tasks: [
  {
    name: "13 - Equação linear do 1º grau e a reta no plano cartesiano",
    response: ["1: D", "2: A", "3: B", "4: E", "5: C", "6: D"]
  },
  {
    name: "13 - Resolução de Itens",
    response: ["1: A", "2: C", "3: D", "4: E", "5: A", "6: C"]
  },
  {
    name: "14 - A inclinação da reta e sua equação linear",
    response: ["1: E", "2: A", "3: C", "4: C", "5: B", "6: A"]
  },
  {
    name: "14 - Resolução de Itens",
    response: ["1: A", "2: B", "3: B", "4: E", "5: B", "6: A"]
  },
  {
    name: "15 - Função afim e o gráfico no plano cartesiano",
    response: ["1: B", "2: C", "3: E", "4: C", "5: D", "6: A"]
  },
  {
    name: "15 - Resolução de Itens",
    response: ["1: B", "2: D", "3: A", "4: C", "5: A", "6: B"]
  }]
},
{
  name: "Português",
  color: "#F54927",
  tasks: [
  {
    name: "13 - A tese no gênero resenha crítica",
    response: ["1: C", "2: D", "3: B", "4: C", "5: B", "6: C"]
  },
  {
    name: "13 - Resolução de Itens",
    response: ["1: A", "2: C", "3: E", "4: B", "5: C", "6: C"]
  },
  {
    name: "14 - Argumentando sobre a tese na resenha crítica",
    response: ["1: A", "2: E", "3: C", "4: B", "5: D", "6: C"]
  },
  {
    name: "14 - Resolução de Itens",
    response: ["1: A", "2: C", "3: A", "4: D", "5: B", "6: E"]
  },
  {
    name: "15 - Entre fatos e opiniões nos diferentes textos",
    response: ["1: B", "2: C", "3: D", "4: E", "5: B", "6: E"]
  },
  {
    name: "15 - Resolução de Itens",
    response: ["1: D", "2: B", "3: D", "4: C", "5: C", "6: A"]
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
    taskF.setAttribute("style", `box-shadow: 6px 8px 0px 2px rgba(0, 0, 0, 0.5)`)
    const name = document.createElement("h3")
    name.textContent = task.name
    name.setAttribute("style", `background: ${materia.color}`)
    const response = document.createElement("p")
    response.innerHTML = task.response.join("<br>")
    taskF.appendChild(name)
    taskF.appendChild(response)
    section.appendChild(taskF)
  }
  
  subjectives.appendChild(section)
}
