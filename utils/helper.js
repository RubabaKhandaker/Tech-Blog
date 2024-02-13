module.exports = {

    dateFormat: (date) => {

      return date.toLocaleDateString('en-UK', {

        day: '2-digit',
        month: '2-digit',
        year: '4-digit',

      });

    },

    lineBreaks: (text) => {

      return text.replace(/(?:\r\n|\r|\n)/g, '<br>');

    },

};