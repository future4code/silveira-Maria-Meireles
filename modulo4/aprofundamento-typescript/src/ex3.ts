type Post = {
    autor: string,
    texto: string
}

let listaDePosts: Array<Post> = []

const autorUm: Post = {
    autor: "René Descartes",
    texto: "Penso, logo existo."
}

const autorDois: Post = {
    autor: "Heráclito de Éfeso",
    texto: "Tudo flui."
}

const autorTres: Post = {
    autor: "Parmênides de Eléia",
    texto: "Tudo é um."
}
listaDePosts.push(autorUm)
listaDePosts.push(autorDois)
listaDePosts.push(autorTres)

