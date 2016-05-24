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