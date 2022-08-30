$(document).ready(function(){

    /*Reemplazar aqui los links de cada linea segun corresponda*/
    $('#lineaA').FeedEk({
        FeedUrl : 'https://www.clarin.com/rss/politica/',
        MaxCount: 1,
        ShowDesc: true,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

    $('#lineaB').FeedEk({
        FeedUrl : 'https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml',
        MaxCount: 1,
        ShowDesc: true,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

    $('#lineaC').FeedEk({
        FeedUrl : 'https://e00-elmundo.uecdn.es/elmundo/rss/internacional.xml',
        MaxCount: 1,
        ShowDesc: true,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

    $('#lineaD').FeedEk({
        FeedUrl : 'https://www.clarin.com/rss/lo-ultimo/',
        MaxCount: 1,
        ShowDesc: false,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

    $('#lineaE').FeedEk({
        FeedUrl : 'https://www.clarin.com/rss/lo-ultimo/',
        MaxCount: 1,
        ShowDesc: false,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

    $('#lineaH').FeedEk({
        FeedUrl : 'https://www.clarin.com/rss/lo-ultimo/',
        MaxCount: 1,
        ShowDesc: false,
        ShowPubDate: false,
        DescCharacterLimit: 50
    });

});