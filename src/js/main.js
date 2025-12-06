const materias = [
   {
      "name": "Matemática",
      "questions": [
         {
            "name": "Fase 10 - Análise Combinatória - Técnicas de Contagem",
            "answer": [
               "E",
               "B",
               "D",
               "C",
               "A",
               "D"
            ]
         },
         {
            "name": "Fase 11 - Probabilidade",
            "answer": [
               "C",
               "A",
               "B",
               "D",
               "D",
               "B"
            ]
         },
         {
            "name": "Fase 12 - Probabilidade - Retomada em propriedades",
            "answer": [
               "A",
               "B",
               "D",
               "C",
               "B",
               "E"
            ]
         },
         {
            "name": "Fase 13 - Equação linear do 1º grau e a reta no plano cartesiano",
            "answer": [
               "C",
               "D",
               "B",
               "D",
               "C",
               "B"
            ]
         },
         {
            "name": "Fase 14 - A inclinação da reta e sua equação linear",
            "answer": [
               "E",
               "A",
               "C",
               "D",
               "D",
               "D"
            ]
         },
         {
            "name": "Fase 15 - Função afim e o gráfico no plano cartesiano",
            "answer": [
               "B",
               "A",
               "D",
               "C",
               "E",
               "C"
            ]
         },
         {
            "name": "Fase 16 - O gráfico da função afim e sua lei de formação",
            "answer": [
               "C",
               "E",
               "E",
               "A",
               "D",
               "A"
            ]
         },
         {
            "name": "Fase 17 - Interseção de retas e sistemas lineares",
            "answer": [
               "C",
               "A",
               "B",
               "D",
               "C",
               "B"
            ]
         },
         {
            "name": "Fase 18 - A equação da circunferência",
            "answer": [
               "C",
               "D",
               "A",
               "B",
               "D",
               "E"
            ]
         },
         {
            "name": "Fase 19 - Expressões algébricas de funções a partir de tabelas",
            "answer": [
               "B",
               "A",
               "B",
               "C",
               "B",
               "D"
            ]
         },
         {
            "name": "Fase 20 - Resolvendo problemas com a função afim",
            "answer": [
               "D",
               "E",
               "E",
               "C",
               "C",
               "A"
            ]
         },
         {
            "name": "Fase 20 - Semelhança de triângulos",
            "answer": [
               "B",
               "A",
               "C",
               "A",
               "D",
               "D"
            ]
         },
         {
            "name": "Fase 21 - Variação proporcional: direta e inversa",
            "answer": [
               "C",
               "C",
               "A",
               "B",
               "E",
               "D"
            ]
         },
         {
            “name”: "Fase 21 - Interpretação geométrica dos coeficientes da equação da reta",
            “answer”: [
               “C”,
               “B”,
               “E”,
               “A”,
               "A”,
               “B”
            ]
         },
         {
“name”: “Fase 22 - Progressões: aritmética e geométrica”,
“answer”: [“A”,”B”,”C”,”C”,”D”,”E”]
},
{
“name”: “Fase 22 - Polinômios associados a modelos geométricos e situações diversas”,
“answer”: [“B”,”E”,”D”,”A”,”C”,”C”]
},
{
“name”: “Fase 23 - Máximos ou mínimos de função quadrática”,
“answer”: [“A”,”C”,”B”,”C”,”D”,”E”]
},
{
“name”: “Fase 23 - O gráfico da função afim e sua lei de formação”,
“answer”: [“B”,”C”,”A”,”E”,”C”,”ADE”]
},
{
“name”: “Fase 24 - Representação algébrica ou gráfica da função exponencial”,
“answer”: [“D”,”D”,”B”,”E”,”C”,”A”]
},
{
“name”: “Fase 25 - Representação algébrica ou gráfica da função logarítmica”,
“answer”: [“C”,”E”,”D”,”B”,”E”,”A”]
},
{
“name”: “Fase 26 - Função exponencial”,
“answer”: [“B”,”E”,”C”,”C”,”B”,”E”]
},
{
“name”: “Fase 27 - Gráficos de funções trigonométricas”,
“answer”: [“A”,”D”,”D”,”C”,”B”,”C”]
}
      ]
   }
]

const subjectives = document.querySelector(".subjects")

for (const materia of materias) {
   const section = document.createElement("div")
   section.setAttribute("class", "section")
   const title = document.createElement("h2")
   const randomColor = `#138BD6`;
   title.setAttribute("style", `background: ${randomColor}; outline: 4px solid black`)
   title.textContent = materia.name
   section.appendChild(title)
   for (const task of materia.questions) {
      const taskF = document.createElement("div")
      taskF.setAttribute("class", "tasks")
      taskF.setAttribute("style", `box-shadow: 6px 8px 0px 2px rgba(0, 0, 0, 0.5)`)
      const name = document.createElement("h3")
      name.textContent = task.name
      name.setAttribute("style", `background: ${randomColor}`)
      taskF.appendChild(name)
      const response = document.createElement("div")
      response.setAttribute('class', 'answer')
      for (const tk of task.answer) {
         const p = document.createElement('p')
         p.innerHTML = tk
         response.appendChild(p)
      }
      taskF.appendChild(response)
      section.appendChild(taskF)
   }

   subjectives.appendChild(section)
}

function anna() {
   window.open("https://www.instagram.com/naclara_cakes_confeitaria")
}




