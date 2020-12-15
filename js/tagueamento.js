// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

var chaveGA = 'UA-12345-6';

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    ga('create', chaveGA, 'auto');
    ga('send', 'pageview');


    //Envia os dados dos eventos do site
    function eventosGA(tipo, categoria, acao, rotulo){
        ga('send', tipo, categoria, acao, rotulo);
    }

    $('.menu-lista-contato').click(function(){eventosGA('event', 'menu', 'entre_em_contato', 'link_externo');})
    $('.menu-lista-download').click(function(){eventosGA('event', 'menu', 'download_pdf', 'download_pdf');})

    $('.cards-montadoras :first').click(function(){eventosGA('event', 'analise', 'ver_mais', 'Lorem');})
    $('.cards-montadoras :nth-child(2)').click(function(){eventosGA('event', 'analise', 'ver_mais', 'Ipsum');})
    $('.cards-montadoras :nth-child(3)').click(function(){eventosGA('event', 'analise', 'ver_mais', 'Dolor');})
    

    //Inputs
    $('#nome').change(function(){eventosGA('event', 'contato', 'nome', 'preencheu');})
    $('#email').change(function(){eventosGA('event', 'contato', 'email', 'preencheu');})
    $('#telefone').change(function(){eventosGA('event', 'contato', 'telefone', 'preencheu');})
    $('#aceito').change(function(){eventosGA('event', 'contato', 'aceito', 'preencheu');})

    $('.contato').submit(function(){eventosGA('event', 'contato', 'enviado', 'enviado');})


    /*
    //Observa os eventos do menu
    $('.menu-lista-index').click(function(){eventosGA('event', 'Botão início', 'Click', 'Menu lateral');});
    $('.menu-lista-analise').click(function(){eventosGA('event', 'Botão análise', 'Click', 'Menu lateral');})
    $('.menu-lista-sobre').click(function(){eventosGA('event', 'Botão sobre', 'Click', 'Menu lateral');})

    $('.sublista-analise:first-child').click(function(){eventosGA('event', 'Botão análise tristique', 'Click', 'Menu Dropdown');})
    $('.sublista-analise:nth-child(2)').click(function(){eventosGA('event', 'Botão análise conclusões', 'Click', 'Menu Dropdown');})

    $('.sublista-sobre:first-child').click(function(){eventosGA('event', 'Botão sobre contato', 'Click', 'Menu Dropdown');})
    $('.sublista-sobre:nth-child(2)').click(function(){eventosGA('event', 'Botão sobre história', 'Click', 'Menu Dropdown');})
    $('.sublista-sobre:nth-child(3)').click(function(){eventosGA('event', 'Botão sobre valores', 'Click', 'Menu Dropdown');})
    */

    