var trainer = new EnglishTrainer();

_.each(trainer.TENSES, function(tense) {
    _.each(trainer.SENTENCES, function(sentence) {
        _.each(trainer.PRONOUNS, function(pronoun) {
            console.info(
                trainer.toHave(
                    'a book',
                    tense,
                    sentence,
                    pronoun
                )
            );
        });
    });
});

var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate = data.map(function(item, index) {
            return (
                <div key={index}>
                    <p className="news__author">{item.author}:</p>
                    <p className="news__text">{item.text}</p>
                </div>
            )
        })

        return (
            <div className="news">
                {newsTemplate}
            </div>
        );
    }
});


var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                Всем привет, я компонент App!
                <News data={my_news} />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
