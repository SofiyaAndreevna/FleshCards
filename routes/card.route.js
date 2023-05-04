const express = require('express');
const router = express.Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Card = require('../components/Card');

router.get('/', (req, res) => {
  const elem = React.createElement(Card, {
    title: 'QCard',
  });
  const html = ReactDOMServer.renderToStaticMarkup(elem);
  const data = `<!DOCTYPE html>${html}`;
  res.send(data);
});
// передаем 
//в диве обязательно в гет прописываем question.answer и делаем его невидимым, а тут возвращаем message:'true'
router.post('/:idCard', async(req,res) => {
    try {
        const {answer} = req.body;
    const qestion = await Question.findOne({where: {id: req.params.idCard}});
    const trueAnswer = question.answer;
    if(answer === trueAnswer){
        const ball = Question.update()
    }
    res.json({message:`question.answer`});
    } catch (error) {
        
    }
    
});
// в форме нужно как-то менять вопрос и ответ, name=answer КАК поменять h1 h2 p на то, что у нас в базе
router.put('/:idCard', (req,res) => {
    const { cardNumber } = req.body; //?????????????? 
    const card = await Question.findOne({where: {id: req.params.idCard}});
    
    res.json(message);

});

module.exports = router;
