
const listaDeUsuarios: Array<{name: string, email: string, role: string}> = [
    {name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"} 
]

const separarAdministradores = (array: Array<{name: string, email: string, role: string}>): string[] => {
    const mapearAdmin = array.filter((array) => {
        return array.role === "admin"
    }).map((array) => {
        return array.email
    })

    return mapearAdmin
}

console.log(separarAdministradores(listaDeUsuarios))