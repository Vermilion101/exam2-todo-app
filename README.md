Länk till inspelning: https://funet-my.sharepoint.com/:v:/g/personal/3ggyhmu26_penekr_folkuniversitetet_nu/IQCviai_X5LXS4JzSI013dt5AeStQ72Y8rzJ1XF3NwsWmoo?e=Qsvquz&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D

Appen lagrar uppgifter i useStates som i det här fallet är objekt och kan uppdateras när "addTodo" functionen anropas. Alla nya "tasks" är inte genomförda till att börja med och genom att klicka på "done" kanppen vid en uppgift så anropas "toggleDone" functionen vilket göra att done blir true i objectet. Alla tasks visas för användaren med an map som updaterar gränsnittet dynamiskt oavsett hur många tasks man lägger till.

För att uppdatera gränsnittet med reacts usestate så måste man göra en ny array med den angivna uppdaterings funtionen, push lägger bara till värden till den existerande functionen vilket react inte reagerar på.

I koden nedan så försöker man att lägga till en todo genom push och man förväntar sig att sidan ska uppdatera sig automatiskt. Problemet är som sagt att react inte reagerar på deta och uppfattar inte att en ändrag har skett eftersom den förväntar sig att få en NY updaterad array. För att fixa det problemet så deklarerar vi en function direkt i usestate ("const [todo, setTodo] = ...", där "setTodo" är functionen) och gör en ny todos array som react uppdaterar med.

function addTodo(todos, text) {
  todos.push(text);
  return todos;
}

När jag fastnade använde jag gammla uppgifter som jag hade gjort som inpiration och när jag inte förstog varför vissa saker fuingerade som de gjorde så googlade jag.
