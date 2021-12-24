export const notesList = [
  {
    id: 1,
    note: "esto es una prueba con dataFake",
    date: function () {
      let date = new Date()
      date = `${date.getDate()}/${date.getMonth() + 1}/ ${date.getFullYear()}`
      return date
    },
    noteType: 'green'
  },
  {
    id: 2,
    note: "This is a fake test",
    date: function () {
      let date = new Date()
      date = `${date.getDate()}/${date.getMonth() + 1}/ ${date.getFullYear()}`
      return date
    },
    noteType: 'red'
  },
  {
    id:3,
    note: "my first note in this page",
    date: function () {
      let date = new Date()
      date = `${date.getDate()}/${date.getMonth() + 1}/ ${date.getFullYear()}`
      return date
    },
    noteType: 'blue'
  }
]