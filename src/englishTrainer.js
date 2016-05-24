(function (global) {
    global.EnglishTrainer = function () {
        var that = this;
        this.TENSES = {
            PAST: 'past',
            PRESENT: 'present',
            FUTURE: 'future'
        };

        this.SENTENCES = {
            AFFIRMATIVE: 'affirmative',
            INTERROGATIVE: 'interrogative',
            NEGATIVE: 'negative'
        };

        this.PRONOUNS = {
            I: 'i',
            HE: 'he',
            SHE: 'she',
            IT: 'it',
            YOU: 'you',
            WE: 'we',
            THEY: 'they'
        };

        this.isThirdPronouns = function(pronouns) {
            return pronouns === this.PRONOUNS.IT || pronouns === this.PRONOUNS.HE || pronouns === this.PRONOUNS.SHE;
        };

        this.isFirstPronouns = function(pronouns) {
            return pronouns === this.PRONOUNS.I;
        };

        this.toBe = function(subject, tense, sentence, pronoun) {
            var template = '';

            if (tense === that.TENSES.PAST) {
                if (sentence === that.SENTENCES.AFFIRMATIVE) {
                    if (that.isThirdPronouns(pronoun) || that.isFirstPronouns(pronoun)) {
                        template = '{pronoun} was {subject}';
                    } else {
                        template = '{pronoun} were {subject}';
                    }
                } else if (sentence === that.SENTENCES.NEGATIVE) {
                    if (that.isThirdPronouns(pronoun) || that.isFirstPronouns(pronoun)) {
                        template = '{pronoun} was not {subject}';
                    } else {
                        template = '{pronoun} were not {subject}';
                    }
                } else if (sentence === that.SENTENCES.INTERROGATIVE) {
                    if (that.isThirdPronouns(pronoun) || that.isFirstPronouns(pronoun)) {
                        template = 'Was {pronoun} {subject}?';
                    } else {
                        template = 'Were {pronoun} {subject}?';
                    }
                }
            } else if (tense === that.TENSES.PRESENT) {
                if (sentence === that.SENTENCES.AFFIRMATIVE) {
                    if (that.isFirstPronouns(pronoun)) {
                        template = '{pronoun} am {subject}';
                    } else if (that.isThirdPronouns(pronoun)) {
                        template = '{pronoun} is {subject}';
                    } else {
                        template = '{pronoun} are {subject}';
                    }
                } else if (sentence === that.SENTENCES.NEGATIVE) {
                    if (that.isFirstPronouns(pronoun)) {
                        template = '{pronoun} am not {subject}';
                    } else if (that.isThirdPronouns(pronoun)) {
                        template = '{pronoun} is not {subject}';
                    } else {
                        template = '{pronoun} are not {subject}';
                    }
                } else if (sentence === that.SENTENCES.INTERROGATIVE) {
                    if (that.isFirstPronouns(pronoun)) {
                        template = 'Am {pronoun} {subject}?';
                    } else if (that.isThirdPronouns(pronoun)) {
                        template = 'Is {pronoun} {subject}?';
                    } else {
                        template = 'Are {pronoun} {subject}?';
                    }
                }
            } else if (tense === that.TENSES.FUTURE) {
                if (sentence === that.SENTENCES.AFFIRMATIVE) {
                    template = '{pronoun} will be {subject}';
                } else if (sentence === that.SENTENCES.NEGATIVE) {
                    template = '{pronoun} will not be {subject}';
                } else if (sentence === that.SENTENCES.INTERROGATIVE) {
                    template = 'Will {pronoun} be {subject}?';
                }
            }

            template = template.replace('{pronoun}', pronoun);
            template = template.replace('{subject}', subject);

            return template;
        };

        this.toHave = function(subject, tense, sentence, pronoun) {
            var template = '';

            if (tense === that.TENSES.PAST) {
                if (sentence === that.SENTENCES.AFFIRMATIVE) {
                    if (that.isThirdPronouns(pronoun) || that.isFirstPronouns(pronoun)) {
                        template = '{pronoun} was {subject}';
                    } else {
                        template = '{pronoun} were {subject}';
                    }
                } else if (sentence === that.SENTENCES.NEGATIVE) {
                    if (that.isThirdPronouns(pronoun) || that.isFirstPronouns(pronoun)) {
                        template = '{pronoun} was not {subject}';
                    } else {
                        template = '{pronoun} were not {subject}';
                    }
                } else if (sentence === that.SENTENCES.INTERROGATIVE) {
                    if (that.isThirdPronouns(pronoun) || that.isFirstPronouns(pronoun)) {
                        template = 'Was {pronoun} {subject}?';
                    } else {
                        template = 'Were {pronoun} {subject}?';
                    }
                }
            } else if (tense === that.TENSES.PRESENT) {
                if (sentence === that.SENTENCES.AFFIRMATIVE) {
                    if (that.isThirdPronouns(pronoun)) {
                        template = '{pronoun} has {subject}';
                    } else {
                        template = '{pronoun} have {subject}';
                    }
                } else if (sentence === that.SENTENCES.NEGATIVE) {
                    if (that.isThirdPronouns(pronoun)) {
                        template = '{pronoun} has not {subject}';
                    } else {
                        template = '{pronoun} have not {subject}';
                    }
                } else if (sentence === that.SENTENCES.INTERROGATIVE) {
                    if (that.isThirdPronouns(pronoun)) {
                        template = 'Has {pronoun} {subject}';
                    } else {
                        template = 'Have {pronoun} {subject}';
                    }
                }
            } else if (tense === that.TENSES.FUTURE) {
                if (sentence === that.SENTENCES.AFFIRMATIVE) {
                    template = '{pronoun} have {subject}';
                } else if (sentence === that.SENTENCES.NEGATIVE) {
                    template = '{pronoun} will not have {subject}';
                } else if (sentence === that.SENTENCES.INTERROGATIVE) {
                    template = 'Will {pronoun} have {subject}?';
                }
            }

            template = template.replace('{pronoun}', pronoun);
            template = template.replace('{subject}', subject);

            return template;
        };

        this.conjugationVerbs = function(verb, tense, sentence, pronoun) {
            var template = '';

            if (tense === that.TENSES.PAST) {
                if (sentence === that.SENTENCES.AFFIRMATIVE) {
                    template = '{pronoun} {' + that.TENSES.PAST + '_verb}';
                } else if (sentence === that.SENTENCES.NEGATIVE) {
                    template = '{pronoun} didn\'t {verb}';
                } else if (sentence === that.SENTENCES.INTERROGATIVE) {
                    template = 'Did {pronoun} {verb}?';
                }
            } else if (tense === that.TENSES.PRESENT) {
                if (sentence === that.SENTENCES.AFFIRMATIVE) {
                    template = '{pronoun} {verb}';
                    if (that.isThirdPronouns(pronoun)) {
                        template += 's';
                    }
                } else if (sentence === that.SENTENCES.NEGATIVE) {
                    if (that.isThirdPronouns(pronoun)) {
                        template = '{pronoun} doesn\'t {verb}';
                    } else {
                        template = '{pronoun} don\'t {verb}';
                    }
                } else if (sentence === that.SENTENCES.INTERROGATIVE) {
                    if (that.isThirdPronouns(pronoun)) {
                        template = 'Does {pronoun} {verb}?';
                    } else {
                        template = 'Do {pronoun} {verb}?';
                    }
                }
            } else if (tense === that.TENSES.FUTURE) {
                if (sentence === that.SENTENCES.AFFIRMATIVE) {
                    template = '{pronoun} will {verb}';
                } else if (sentence === that.SENTENCES.NEGATIVE) {
                    template = '{pronoun} will not {verb}';
                } else if (sentence === that.SENTENCES.INTERROGATIVE) {
                    template = 'Will {pronoun} {verb}?';
                }
            }

            template = template.replace('{pronoun}', pronoun);
            template = template.replace('{verb}', verb.PRESENT);
            template = template.replace('{' + that.TENSES.PAST + '_verb}', verb.PAST);

            return template;
        };
    };
}(window));