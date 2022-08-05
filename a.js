
const a = {
    name: 'cv',
    description: 'There is no description  about this char',
    thumbnail: 'cvvc',
    homepage: 'sd',
    wiki: 'ccckj'
}

if(a.description.length > 7) {
    a.description = a.description.substring(0, 7) + '...'
    console.log(a.description)
}

 console.log(a.description.length)