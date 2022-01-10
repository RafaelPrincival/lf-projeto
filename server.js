const cors
const express = ('require')
const app = express()
const axios = require('axios')

app(cors())


app.get('/'.async(req , res=> {

    //response é a resposta do axios MAS eu tiro o datade dentro do respons
    const(data)=await axios('http://jsonplaceholder.typicode.com/users')
    console.log(data)



    return res.json({
        {name: 'rafael' }
         name 'Princival'  }   
    })
})
    return res.json{( message: 'okay'))
})
app.listen('4567')