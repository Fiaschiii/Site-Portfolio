function enviarWhats(event) {

        event.preventDefault()

        
        const mensagem = document.getElementById('mensagem').value
        const telefone = '5511955502900'
        
        const texto = `${mensagem}`
        const msgFormatada = encodeURIComponent(texto)

        const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

        console.log(url)

        window.open(url, '_blank')
      }