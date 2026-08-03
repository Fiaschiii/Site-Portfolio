function enviarWhats(event) {

        event.preventDefault()

        
        const mensagem = document.getElementById('mensagem').value
        const telefone = '**********' // Número desejado.
        
        const texto = `${mensagem}`
        const msgFormatada = encodeURIComponent(texto)

        const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

        console.log(url)

        window.open(url, '_blank')
      }